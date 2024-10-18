import { MarkdownTheme , MarkdownThemeContext } from 'typedoc-plugin-markdown'
import { ReflectionKind } from 'typedoc'
import { join, relative, parse } from 'path'

export class CustomMarkdownTheme extends MarkdownTheme {
    getRenderContext(page) {
        return new CustomMarkdownThemeContext(this, page, this.application.options);
    }
}

class Table {
    constructor(...headers){
        this.value = [ ]
        this.value.push(`| ${headers.join(' | ')} |`)
        this.value.push(`| ${headers.map(() => ` :--- ` ).join(' | ')} |`)
    }

    add(...values){
        this.value.push(`| ${values.join(' | ')} |`)
    }

    transform(){
        return this.value.join('\n')
    }
}

class CustomMarkdownThemeContext extends MarkdownThemeContext {

    templates = {
        ...this.templates,

        project: (page) => {
            const { project: { groups } } = page
            let output = [ ]

            push(output, `# ${this.page.project.name}`)

            for(let group of groups){
                push(output, `::: details ${group.title} \`${group.children.length}\``)
                let children = [ ]
                for(let child of group.children){
                    children.push(`[\`${child.name}\`](./${child.url.replaceAll('\\', '/')})`)
                }
                push(output, children.join('|'))
                push(output, `:::`)
            }

            return output.join('\n\n')
        },

        reflection: (page) => {
            const { model, model: {  kind, children = [ ], signatures = [ ] }} = page

            let constructor, properties, methods
            let output = [
                '---',
                'outline: [1,4]',
                'next: false',
                'prev: false',
                '---'
            ]

            switch(kind){
                case ReflectionKind.Function:
                    push(output, this.partials.header(model))

                    if(constructor = signatures.find(( signature ) => signature.kind === ReflectionKind.CallSignature)){
                        push(output, this.partials.comment('', constructor))
                        push(output, this.partials.constructor(model, constructor))
                        push(output, `Return: ${this.partials.type(model, constructor.type)}`)
                    }

                    push(output, this.partials.reference(model))
                    break

                case ReflectionKind.Class:
                    push(output, this.partials.header(model))
                    push(output, this.partials.comment('', model))

                    if(constructor = children.find(( child ) => child.kind === ReflectionKind.Constructor)){
                        push(output, this.partials.constructor(model, constructor))
                    }

                    push(output, this.partials.display(model, '@information'))

                    function load(implement){
                        implement = page.project.getChildByName(implement?.name ?? '')
                        for(let child of implement?.children?.filter((child) => child.kind === ReflectionKind.Property) ?? [ ]){
                            if(!children.some((_child) => _child.name === child.name))  model.addChild(child)
                        }
                    }

                    for(let implemented of model.implementedTypes ?? [ ]){
                        load(implemented)
                        nest(implemented, { top: true }, (key, value) => {
                            if(Array.isArray(value)){
                                for(let val of value){
                                    if(implemented = this.page.project.getChildByName(val?.name ?? '')){
                                        load(implemented)
                                    }
                                }
                                return value
                            }
                        })
                    }
 
                    if((properties = children.filter(( child ) => [ReflectionKind.Property, ReflectionKind.Accessor].includes(child.kind))) && properties.length){
                        push(output, `## Properties`)
                        for(let property of properties.sort()){
                            push(output, this.partials.property(model, property))
                        }   
                    }

                    if((methods = children.filter(( child ) => [ReflectionKind.Method].includes(child.kind))) && methods.length){
                        push(output, `## Methods`)
                        for(let method of methods.sort()){
                            push(output, this.partials.method(model, method))
                        }
                    }

                    push(output, this.partials.reference(model.comment))
                    break

                case ReflectionKind.Interface:
                    push(output, this.partials.header(model))
                    push(output, this.partials.comment('', model))

                    if(properties = model.groups?.find(( group ) => group.title === 'Properties')){
                        push(output, `## Properties`)
                        for(let property of properties.children){
                            push(output, this.partials.property(model, property))
                        }
                    }

                    push(output, this.partials.reference(model.comment))
                    break

                case ReflectionKind.Enum:
                    push(output, this.partials.header(model))
                    push(output, this.partials.comment('', model))

                    push(output, `## Properties`)

                    if(children){
                        if(model.name === 'ClientEvent'){
                            for(let child of children){
                                push(output, this.partials.property(model, child))
                            }
                        } else {
                            let table = new Table('Member','Value', 'Description')
                            for(let child of children){
                                table.add(child.name, this.partials.type(model, child.type, true), this.partials.comment('', child, true))
                            }

                            push(output, table.transform())
                        }
                    }

                    push(output, this.partials.reference(model.comment))
                    break
                
                case ReflectionKind.Namespace:
                    push(output, this.partials.header(model))
                    push(output, this.partials.comment('', model))

                    for(let group of model.groups){
                        push(output, `## ${group.title}`)
                        let table = new Table('Member','Value','Description')
                        let from = parse(join(this.options._values.out, model.url))
                        for(let child of group.children){
                            let to = parse(join(this.options._values.out, child.url))
                            let final = relative(from.dir, to.dir) 

                            table.add(child.name, `[\`${child.name}\`](${final}\\${to.base})`, this.partials.comment('', child, true))
                        }

                        push(output, table.transform())
                    }

                    push(output, this.partials.reference(model.comment))
                    break

                case ReflectionKind.TypeAlias:
                    push(output, this.partials.header(model))
                    push(output, this.partials.comment('', model))

                    model._project = page.project
                    push(output, this.partials.display(model, '@reference'))

                    push(output, this.partials.type(model, model.type, true))  
                    break

                case ReflectionKind.Variable:
                    push(output, this.partials.header(model))
                    push(output, this.partials.comment('', model))
                    
                    push(output, this.partials.type(model, model.type, true))
                    break
            }

            return output.join('\n\n')
        }
    }

    partials = {
        ...this.partials,

        header: ( model ) => {
            let processed = [ ]
            push(processed, `export ${ model.flags.isAbstract ? 'abstract ' : ' ' }${ ReflectionKind[model.kind] }`, false)
            push(processed, `# ${ model.name }`, false)
            push(processed, `${ model.extendedTypes ? `#### extends
                ${ model.extendedTypes.map(( extended ) => this.partials.type(model, extended, true))}` : `` }`, false)
            push(processed, `${ model.implementedTypes ? `#### implements
                ${ model.implementedTypes.map(( implement ) => this.partials.type(model, implement, true))}` : `` }`, false)
            return processed.join('\n')
        },

        constructor: ( model, constructor ) => {
            constructor = constructor.signatures?.[0] ?? constructor

            return `## Constructor
            \`\`\`ts
            ${ constructor.kind == ReflectionKind.ConstructorSignature ? 'new ' : '' }${ constructor.getFriendlyFullName().replace('.constructor', '') }( ${this.partials.parametersLine(model, constructor.parameters)} )
            \`\`\`
            
            ${ this.partials.parameters(model, constructor.parameters)}`
        },
        
        property: (model, property) => {
            const property_type = property.type ?? property.getSignature?.type
            return `#### ${property.flags.isStatic ? '$static' : '' }${ property.flags.isReadonly ? '$readonly' : '' }${ property.kind === ReflectionKind.Accessor ? '$get' : '' } ${property.name}${property.flags.isOptional ? '?' : ''}${ property_type ? ` : ${this.partials.type(model, property_type, true)}` : ''}
            ${this.partials.comment('', property)}`
        },

        method: (model, method) => {
            let processed = [ ]
            for(let signature of method.signatures){
                processed.push(`#### ${signature.type.name === 'Promise' ? '$async' : ''}${ signature.name }( ${this.partials.parametersLine(model, signature.parameters)} )`)
                processed.push(this.partials.comment('', signature))
                processed.push(this.partials.parameters(model, signature.parameters))
                processed.push('\n')
                processed.push(`Returns: ${this.partials.type(model, signature.type, true)}`)
            }
            return processed.join('\n')
        },

        comment: ( defaulted, model, inline ) => {
            let processed = [ ]
            let comment = model.comment
            if(comment?.summary){
                if(inline){
                    processed.push(comment.summary.map((content) => content.text ?? content.tsLinkText).join(' ').split('\n')[0].trim())
                } else {
                    for(let com of comment.summary){
                        switch(com.kind){
                            case 'code':
                                push(processed, com.text, false)
                                break
                            case 'text':
                                push(processed, com.text, false)
                                break
                            case 'inline-tag':
                                push(processed, this.partials.type(model, { type: 'reference', ...com }))
                                break
                        }
                    }
                }
                return processed.join('\n')
            } 
            return defaulted
        },

        display: (model, tag) => {
            let comment = model.comment,
                processed = [ ],
                block

            if(block = comment?.blockTags?.find((current) => current.tag === tag)){
                let content = this.partials.comment('', { ...model, comment: { summary: block.content }}).split('|')
                
                processed.push(`### ${content[1] ? content[0] : 'Reference' }`)
                processed.push(`${content[1]}`)
            }
            return processed.join('\n')
        },

        parametersLine: (model, parameters ) => {
            return parameters.map(( parameter ) => `${ parameter.flags.isRest ? '...' : '' }${parameter.name}` ).join(', ')
        },

        parameters: (model, parameters) => {
            let table

            if(parameters.length){
                table = new Table('Parameter','Type','Description')
                for(let parameter of parameters){
                    table.add(
                        `\`${ parameter.flags.isRest ? '...' : '' }${parameter.name}${ parameter.flags.isOptional ? '?' : '' }\`${parameter.defaultValue ? ` = \`${parameter.defaultValue}\`` : ''}`,
                        this.partials.type(model, parameter.type, true),
                        this.partials.comment('', parameter, true)
                    )
                }
            }            
            return table?.transform() ?? ''
        },

        reference: (comment) => {
            let processed = [ ], tag
            if(comment?.blockTags?.length && (tag = comment?.blockTags.find((block) => block.tag === '@reference'))){
                processed.push(`## Reference`)
                processed.push(`The information was provided from the [\`Telegram API\`](${tag.content[0].text}).`)
            }
            return processed.join('\n')
        },

        type: ( model, type, wrap ) => {
            let processed = [ ]
            switch(type.type){
                case 'union':
                    for(let unionType of type.types){
                        processed.push(this.partials.type(model, unionType, wrap))
                    }
                    return processed.join(' \\| ')
                case 'array':
                    let array = this.partials.type(model, type.elementType, wrap)
                    if(array.includes(']')){
                        return array.replace(wrap?`\`]`:']', `\[\]${wrap?'`':''}]`)
                    } else {
                        return `\`${array.replaceAll('`', '')}[]\``
                    }
                case 'reference':
                    let reference = type.target ?? this.page.project.reflections[type._target]
                    let name = type.qualifiedName ?? type.name ?? type.target?.name ?? 'Unknown'
                    let structure = [ ]

                    if(reference && reference.url){
                        let from = parse(join(this.options._values.out, model.url))
                        let to = parse(join(this.options._values.out, reference.url))
                        let final = relative(from.dir, to.dir)

                        structure.push(reference.url ? `[${ wrap ? `\`${name}\`` : name }](${(final == '' ? './' : `${final}/`).replaceAll(/\\/g, '/')}${to.base})` : name )
                    } else {
                        structure.push(wrap ? `\`${name}\`` : name)
                    }

                    if(type.typeArguments?.length){
                        for(let argType of type.typeArguments){
                            processed.push(this.partials.type(model, argType, wrap))
                        }
                        structure.push(`<${processed.join(', ')}>`)
                    }
                    
                    return structure.join('')
                case 'query':
                    return this.partials.type(model, type.queryType, wrap)
            }

            if( wrap ) return `\`${type.toString()}\``
            return `${type.toString()}`
        }

    }

}

const nest = (object, additional, fn) => {
    for(let [key, value] of Object.entries(object)){
      if(typeof value === 'object' && !Array.isArray(value) && (typeof value === "object" && (/^(object|array)$/i.test(value.constructor.name) === false))){
        if(additional.top){
          fn(key, value)
          continue
        }
        object[key] = nest(value, additional, fn)
      } else {
        object[key] = fn(key, value) ?? value
      }
    }
    return object
}

const hasLink = ( str ) => {
    return /\[([^\]]+)\]\((\.\.\/|\.\/|\/|https?:\/\/|[a-zA-Z0-9-_])[^)\s]*\)/.test(str)
}

const push = (output, str, string = true ) => {
    output.push( string ? stringify(str) : str)
}

const stringify = (str) => {
    const replacements = {
        '<': '\\<',
        '>': '\\>',
        '(': '\\(',
        ')': '\\)',
    }

    return str
        .trim()                    
        .replace(/ {2,}/g, ' ')
        .replace(/`([^`]+)`|\[([^`]+)]\(([^`]+)\)|([^`]+)/g, (match, block, link, linkPath, text) => {
            if (block) return match
            if (link) return match
            if (text) return text.replace(/[<>]/g, (char) => replacements[char] || char)
            return ''
        })
}
