export function nest(object, additional, fn){
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
export function hasLink(str){
    return /\[([^\]]+)\]\((\.\.\/|\.\/|\/|https?:\/\/|[a-zA-Z0-9-_])[^)\s]*\)/.test(str)
}

export function push(output, str, string = true){
    output.push( string ? stringify(str) : str)
}

export function stringify(str){
    const replacements = {
        // '<': '\\<',
        // '>': '\\>',
        // '(': '\\(',
        // ')': '\\)',
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
