import{_ as r,c as i,a2 as n,j as t,G as o,a,B as d,o as s}from"./chunks/framework.DPuwY6B9.js";const q=JSON.parse('{"title":"PollManager","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/classes/PollManager.md","filePath":"documentation/classes/PollManager.md"}'),p={name:"documentation/classes/PollManager.md"},h={id:"readonly-client-client",tabindex:"-1"},u={id:"readonly-default-pollmanageroptions",tabindex:"-1"},c={id:"readonly-options-pollmanageroptions",tabindex:"-1"},f={id:"asyncinitialize",tabindex:"-1"};function b(m,e,g,x,y,P){const l=d("Badge");return s(),i("div",null,[e[14]||(e[14]=n('<p>export Class</p><h1 id="pollmanager" tabindex="-1">PollManager <a class="header-anchor" href="#pollmanager" aria-label="Permalink to &quot;PollManager&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><code>BaseManager</code>&lt;<a href="./../interfaces/PollManagerOptions.html"><code>PollManagerOptions</code></a>&gt;</p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PollManager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( client )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>client</code></td><td style="text-align:left;"><a href="./Client.html"><code>Client</code></a></td><td style="text-align:left;"></td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="active-boolean" tabindex="-1">active : <code>boolean</code> <a class="header-anchor" href="#active-boolean" aria-label="Permalink to &quot;active : `boolean`&quot;">​</a></h4><blockquote><p>default: false</p></blockquote>',10)),t("h4",h,[o(l,{type:"danger",text:"readonly"}),e[0]||(e[0]=a(" client : ")),e[1]||(e[1]=t("a",{href:"./Client.html"},[t("code",null,"Client")],-1)),e[2]||(e[2]=a()),e[3]||(e[3]=t("a",{class:"header-anchor",href:"#readonly-client-client","aria-label":'Permalink to "$readonly client : [`Client`](./Client.md)"'},"​",-1))]),t("h4",u,[o(l,{type:"danger",text:"readonly"}),e[4]||(e[4]=a(" default? : ")),e[5]||(e[5]=t("a",{href:"./../interfaces/PollManagerOptions.html"},[t("code",null,"PollManagerOptions")],-1)),e[6]||(e[6]=a()),e[7]||(e[7]=t("a",{class:"header-anchor",href:"#readonly-default-pollmanageroptions","aria-label":'Permalink to "$readonly default? : [`PollManagerOptions`](../interfaces/PollManagerOptions.md)"'},"​",-1))]),e[15]||(e[15]=t("h4",{id:"interluder-global-nodejs-timeout",tabindex:"-1"},[a("interluder? : "),t("code",null,"__global.NodeJS.Timeout"),a(),t("a",{class:"header-anchor",href:"#interluder-global-nodejs-timeout","aria-label":'Permalink to "interluder? : `__global.NodeJS.Timeout`"'},"​")],-1)),e[16]||(e[16]=t("h4",{id:"offset-number",tabindex:"-1"},[a("offset? : "),t("code",null,"number"),a(),t("a",{class:"header-anchor",href:"#offset-number","aria-label":'Permalink to "offset? : `number`"'},"​")],-1)),t("h4",c,[o(l,{type:"danger",text:"readonly"}),e[8]||(e[8]=a(" options : ")),e[9]||(e[9]=t("a",{href:"./../interfaces/PollManagerOptions.html"},[t("code",null,"PollManagerOptions")],-1)),e[10]||(e[10]=a()),e[11]||(e[11]=t("a",{class:"header-anchor",href:"#readonly-options-pollmanageroptions","aria-label":'Permalink to "$readonly options : [`PollManagerOptions`](../interfaces/PollManagerOptions.md)"'},"​",-1))]),e[17]||(e[17]=n('<h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h4 id="handle-update" tabindex="-1">handle( update ) <a class="header-anchor" href="#handle-update" aria-label="Permalink to &quot;handle( update )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>update</code></td><td style="text-align:left;"><a href="./../interfaces/UpdatePacket.html"><code>UpdatePacket</code></a> | <a href="./../interfaces/UpdatePacket.html"><code>UpdatePacket[]</code></a></td><td style="text-align:left;">The packet response from Telegram.</td></tr></tbody></table><blockquote><p>Handles an incoming update packet from Telegram.</p><p>Returns: <code>void</code></p></blockquote>',4)),t("h4",f,[o(l,{type:"tip",text:"async"}),e[12]||(e[12]=a("initialize( ) ")),e[13]||(e[13]=t("a",{class:"header-anchor",href:"#asyncinitialize","aria-label":'Permalink to "$asyncinitialize( )"'},"​",-1))]),e[18]||(e[18]=n('<blockquote><p>Returns: <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><h4 id="switch" tabindex="-1">switch( ) <a class="header-anchor" href="#switch" aria-label="Permalink to &quot;switch( )&quot;">​</a></h4><blockquote><p>Enable or disable the poll manager.</p><p>Returns: <code>void</code></p></blockquote>',3))])}const M=r(p,[["render",b]]);export{q as __pageData,M as default};
