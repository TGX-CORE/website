import{_ as n,c as r,a2 as o,j as e,G as l,a,B as s,o as d}from"./chunks/framework.DPuwY6B9.js";const F=JSON.parse('{"title":"File","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/classes/File.md","filePath":"documentation/classes/File.md"}'),h={name:"documentation/classes/File.md"},p={id:"get-form-string-readstream-string-appendoptions",tabindex:"-1"},c={id:"get-id-string",tabindex:"-1"},f={id:"readonly-client-client",tabindex:"-1"},g={id:"asyncdownload-path",tabindex:"-1"},m={id:"asyncfetch",tabindex:"-1"};function b(u,t,y,x,k,q){const i=s("Badge");return d(),r("div",null,[t[16]||(t[16]=o('<p>export Class</p><h1 id="file" tabindex="-1">File <a class="header-anchor" href="#file" aria-label="Permalink to &quot;File&quot;">​</a></h1><h4 id="implements" tabindex="-1">implements <a class="header-anchor" href="#implements" aria-label="Permalink to &quot;implements&quot;">​</a></h4><p><a href="./../interfaces/FilePacket.html"><code>FilePacket</code></a></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> File</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( packet, options )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>packet?</code></td><td style="text-align:left;"><code>string</code> | <a href="./../interfaces/FilePacket.html"><code>FilePacket</code></a></td><td style="text-align:left;">The packet, the filel_id, or absolute path to the file to read.</td></tr><tr><td style="text-align:left;"><code>options?</code></td><td style="text-align:left;"><code>FormData.AppendOptions</code></td><td style="text-align:left;">Append options for uploading file, can be empty.</td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2>',8)),e("h4",p,[l(i,{type:"danger",text:"get"}),t[0]||(t[0]=a(" form : ")),t[1]||(t[1]=e("code",null,"[string, ReadStream, string | AppendOptions]",-1)),t[2]||(t[2]=a()),t[3]||(t[3]=e("a",{class:"header-anchor",href:"#get-form-string-readstream-string-appendoptions","aria-label":'Permalink to "$get form : `[string, ReadStream, string | AppendOptions]`"'},"​",-1))]),e("h4",c,[l(i,{type:"danger",text:"get"}),t[4]||(t[4]=a(" id : ")),t[5]||(t[5]=e("code",null,"string",-1)),t[6]||(t[6]=a()),t[7]||(t[7]=e("a",{class:"header-anchor",href:"#get-id-string","aria-label":'Permalink to "$get id : `string`"'},"​",-1))]),e("h4",f,[l(i,{type:"danger",text:"readonly"}),t[8]||(t[8]=a(" client? : ")),t[9]||(t[9]=e("a",{href:"./Client.html"},[e("code",null,"Client")],-1)),t[10]||(t[10]=a()),t[11]||(t[11]=e("a",{class:"header-anchor",href:"#readonly-client-client","aria-label":'Permalink to "$readonly client? : [`Client`](./Client.md)"'},"​",-1))]),t[17]||(t[17]=o('<blockquote><p>The client will only be availble if the class is passed by tgx-core itself.</p></blockquote><h4 id="file-id-string" tabindex="-1">file_id? : <code>string</code> <a class="header-anchor" href="#file-id-string" aria-label="Permalink to &quot;file_id? : `string`&quot;">​</a></h4><h4 id="file-path-string" tabindex="-1">file_path? : <code>string</code> <a class="header-anchor" href="#file-path-string" aria-label="Permalink to &quot;file_path? : `string`&quot;">​</a></h4><h4 id="file-size-number" tabindex="-1">file_size? : <code>number</code> <a class="header-anchor" href="#file-size-number" aria-label="Permalink to &quot;file_size? : `number`&quot;">​</a></h4><h4 id="file-unique-id-string" tabindex="-1">file_unique_id? : <code>string</code> <a class="header-anchor" href="#file-unique-id-string" aria-label="Permalink to &quot;file_unique_id? : `string`&quot;">​</a></h4><h4 id="options-formdata-appendoptions" tabindex="-1">options? : <code>FormData.AppendOptions</code> <a class="header-anchor" href="#options-formdata-appendoptions" aria-label="Permalink to &quot;options? : `FormData.AppendOptions`&quot;">​</a></h4><h4 id="path-string" tabindex="-1">path? : <code>string</code> <a class="header-anchor" href="#path-string" aria-label="Permalink to &quot;path? : `string`&quot;">​</a></h4><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2>',8)),e("h4",g,[l(i,{type:"tip",text:"async"}),t[12]||(t[12]=a("download( path ) ")),t[13]||(t[13]=e("a",{class:"header-anchor",href:"#asyncdownload-path","aria-label":'Permalink to "$asyncdownload( path )"'},"​",-1))]),t[18]||(t[18]=o('<table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>path</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">Leave empty if you want a stream, or an absolute path to the file where you want to write the Stream.</td></tr></tbody></table><blockquote><p>Fetches the file and downloads it.</p><p>Returns: <code>Promise</code>&lt;<code>boolean</code> | <code>internal.Stream</code>&gt;</p></blockquote>',2)),e("h4",m,[l(i,{type:"tip",text:"async"}),t[14]||(t[14]=a("fetch( ) ")),t[15]||(t[15]=e("a",{class:"header-anchor",href:"#asyncfetch","aria-label":'Permalink to "$asyncfetch( )"'},"​",-1))]),t[19]||(t[19]=o('<blockquote><p>Fetch the file from Telegram, this is required for downloading the file.</p><p>Returns: <code>Promise</code>&lt;<code>boolean</code> | <a href="./File.html"><code>File</code></a>&gt;</p></blockquote><h4 id="setclient-client" tabindex="-1">setClient( client ) <a class="header-anchor" href="#setclient-client" aria-label="Permalink to &quot;setClient( client )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>client</code></td><td style="text-align:left;"><a href="./Client.html"><code>Client</code></a></td><td style="text-align:left;">The client to attach.</td></tr></tbody></table><blockquote><p>Returns: <a href="./File.html"><code>File</code></a></p></blockquote>',4))])}const C=n(h,[["render",b]]);export{F as __pageData,C as default};
