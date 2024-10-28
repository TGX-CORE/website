import{_ as n,c as s,a2 as l,j as e,G as o,a,B as r,o as i}from"./chunks/framework.DPuwY6B9.js";const v=JSON.parse('{"title":"CommandsManager","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/classes/CommandsManager.md","filePath":"documentation/classes/CommandsManager.md"}'),c={name:"documentation/classes/CommandsManager.md"},g={id:"readonly-client-client",tabindex:"-1"},y={id:"readonly-default-any",tabindex:"-1"},m={id:"readonly-options-any",tabindex:"-1"},p={id:"asyncdelete-scope-language-code",tabindex:"-1"},h={id:"asyncget-scope-language-code",tabindex:"-1"},f={id:"asyncregister-commands-language-code-scope-chat-id-user-id",tabindex:"-1"},u={id:"asyncset-payload",tabindex:"-1"},x={id:"asyncupdate",tabindex:"-1"};function b(k,t,C,P,q,T){const d=r("Badge");return i(),s("div",null,[t[22]||(t[22]=l('<p>export Class</p><h1 id="commandsmanager" tabindex="-1">CommandsManager <a class="header-anchor" href="#commandsmanager" aria-label="Permalink to &quot;CommandsManager&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><code>BaseManager</code></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CommandsManager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( client, pointer, defaults )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>client</code></td><td style="text-align:left;"><a href="./Client.html"><code>Client</code></a></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>pointer?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>defaults?</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;"></td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2>',8)),e("h4",g,[o(d,{type:"danger",text:"readonly"}),t[0]||(t[0]=a(" client : ")),t[1]||(t[1]=e("a",{href:"./Client.html"},[e("code",null,"Client")],-1)),t[2]||(t[2]=a()),t[3]||(t[3]=e("a",{class:"header-anchor",href:"#readonly-client-client","aria-label":'Permalink to "$readonly client : [`Client`](./Client.md)"'},"​",-1))]),e("h4",y,[o(d,{type:"danger",text:"readonly"}),t[4]||(t[4]=a(" default? : ")),t[5]||(t[5]=e("code",null,"any",-1)),t[6]||(t[6]=a()),t[7]||(t[7]=e("a",{class:"header-anchor",href:"#readonly-default-any","aria-label":'Permalink to "$readonly default? : `any`"'},"​",-1))]),e("h4",m,[o(d,{type:"danger",text:"readonly"}),t[8]||(t[8]=a(" options : ")),t[9]||(t[9]=e("code",null,"any",-1)),t[10]||(t[10]=a()),t[11]||(t[11]=e("a",{class:"header-anchor",href:"#readonly-options-any","aria-label":'Permalink to "$readonly options : `any`"'},"​",-1))]),t[23]||(t[23]=e("h2",{id:"methods",tabindex:"-1"},[a("Methods "),e("a",{class:"header-anchor",href:"#methods","aria-label":'Permalink to "Methods"'},"​")],-1)),e("h4",p,[o(d,{type:"tip",text:"async"}),t[12]||(t[12]=a("delete( scope, language_code ) ")),t[13]||(t[13]=e("a",{class:"header-anchor",href:"#asyncdelete-scope-language-code","aria-label":'Permalink to "$asyncdelete( scope, language_code )"'},"​",-1))]),t[24]||(t[24]=l('<table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>scope?</code></td><td style="text-align:left;"><a href="./../interfaces/CommandScope.html"><code>CommandScope</code></a></td><td style="text-align:left;">The scope of the command.</td></tr><tr><td style="text-align:left;"><code>language_code?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The language code of the command.</td></tr></tbody></table><blockquote><p>Delete the commands that are relevant w/o scope and language code.</p><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p></blockquote>',2)),e("h4",h,[o(d,{type:"tip",text:"async"}),t[14]||(t[14]=a("get( scope, language_code ) ")),t[15]||(t[15]=e("a",{class:"header-anchor",href:"#asyncget-scope-language-code","aria-label":'Permalink to "$asyncget( scope, language_code )"'},"​",-1))]),t[25]||(t[25]=l('<table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>scope?</code></td><td style="text-align:left;"><a href="./../interfaces/CommandScope.html"><code>CommandScope</code></a></td><td style="text-align:left;">The scope of the command.</td></tr><tr><td style="text-align:left;"><code>language_code?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The language code of the command.</td></tr></tbody></table><blockquote><p>Get the commands that are relevant w/o scope and language code.</p><p>Returns: <code>Promise</code>&lt;<code>boolean</code> | <a href="./../interfaces/BotCommand.html"><code>BotCommand[]</code></a>&gt;</p></blockquote>',2)),e("h4",f,[o(d,{type:"tip",text:"async"}),t[16]||(t[16]=a("register( commands, language_code, scope, chat_id, user_id ) ")),t[17]||(t[17]=e("a",{class:"header-anchor",href:"#asyncregister-commands-language-code-scope-chat-id-user-id","aria-label":'Permalink to "$asyncregister( commands, language_code, scope, chat_id, user_id )"'},"​",-1))]),t[26]||(t[26]=l('<table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>commands</code></td><td style="text-align:left;"><code>string[]</code></td><td style="text-align:left;">An array of the commands command as an id, they must be registered to the registry.</td></tr><tr><td style="text-align:left;"><code>language_code</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The language code scope of the current commands.</td></tr><tr><td style="text-align:left;"><code>scope</code></td><td style="text-align:left;"><a href="./../enumerations/CommandScopeType.html"><code>CommandScopeType</code></a></td><td style="text-align:left;">The scope of the current commands.</td></tr><tr><td style="text-align:left;"><code>chat_id?</code></td><td style="text-align:left;"><code>string</code> | <code>number</code></td><td style="text-align:left;">The attached chat_id of the scope.</td></tr><tr><td style="text-align:left;"><code>user_id?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The attached user_id of the scope.</td></tr></tbody></table><blockquote><p>Register the commands.</p><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p></blockquote>',2)),e("h4",u,[o(d,{type:"tip",text:"async"}),t[18]||(t[18]=a("set( payload ) ")),t[19]||(t[19]=e("a",{class:"header-anchor",href:"#asyncset-payload","aria-label":'Permalink to "$asyncset( payload )"'},"​",-1))]),t[27]||(t[27]=l('<table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>payload</code></td><td style="text-align:left;"><a href="./../interfaces/CommandsPayload.html"><code>CommandsPayload</code></a></td><td style="text-align:left;">The payload to update the commands.</td></tr></tbody></table><blockquote><p>Set the commands.</p><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p></blockquote>',2)),e("h4",x,[o(d,{type:"tip",text:"async"}),t[20]||(t[20]=a("update( ) ")),t[21]||(t[21]=e("a",{class:"header-anchor",href:"#asyncupdate","aria-label":'Permalink to "$asyncupdate( )"'},"​",-1))]),t[28]||(t[28]=e("blockquote",null,[e("p",null,"Updates all of the commands but filters ignored from the commands registry."),e("p",null,[a("Returns: "),e("code",null,"Promise"),a("<"),e("code",null,"boolean"),a(">")])],-1))])}const M=n(c,[["render",b]]);export{v as __pageData,M as default};