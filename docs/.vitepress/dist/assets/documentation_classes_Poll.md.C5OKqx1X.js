import{_ as s,D as n,c as i,j as e,I as o,a as t,a4 as a,o as d}from"./chunks/framework.CRCV4hx_.js";const I=JSON.parse('{"title":"Poll","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/classes/Poll.md","filePath":"documentation/classes/Poll.md"}'),r={name:"documentation/classes/Poll.md"},c=a('<p>export Class</p><h1 id="poll" tabindex="-1">Poll <a class="header-anchor" href="#poll" aria-label="Permalink to &quot;Poll&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><code>BaseClass</code>&lt;<a href="./Poll.html"><code>Poll</code></a>, <a href="./../interfaces/PollPacket.html"><code>PollPacket</code></a>&gt;</p><h4 id="implements" tabindex="-1">implements <a class="header-anchor" href="#implements" aria-label="Permalink to &quot;implements&quot;">​</a></h4><p><code>Partial</code>&lt;<a href="./../interfaces/PollPacket.html"><code>PollPacket</code></a>&gt;</p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Poll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( client, packet )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>client</code></td><td style="text-align:left;"><a href="./Client.html"><code>Client</code></a></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>packet</code></td><td style="text-align:left;"><a href="./../interfaces/PollPacket.html"><code>PollPacket</code></a></td><td style="text-align:left;"></td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2>',10),h={id:"get-chat-undefined-basechat",tabindex:"-1"},_=e("code",null,"undefined",-1),p=e("a",{href:"./BaseChat.html"},[e("code",null,"BaseChat")],-1),m=e("a",{class:"header-anchor",href:"#get-chat-undefined-basechat","aria-label":'Permalink to "$get chat : `undefined` \\| [`BaseChat`](./BaseChat.md)"'},"​",-1),u=a('<h4 id="answers-pollanswers" tabindex="-1">answers? : <a href="./PollAnswers.html"><code>PollAnswers</code></a> <a class="header-anchor" href="#answers-pollanswers" aria-label="Permalink to &quot;answers? : [`PollAnswers`](./PollAnswers.md)&quot;">​</a></h4><h4 id="business-connection-id-string" tabindex="-1">business_connection_id? : <code>string</code> <a class="header-anchor" href="#business-connection-id-string" aria-label="Permalink to &quot;business_connection_id? : `string`&quot;">​</a></h4>',2),P={id:"readonly-client-client",tabindex:"-1"},b=e("a",{href:"./Client.html"},[e("code",null,"Client")],-1),f=e("a",{class:"header-anchor",href:"#readonly-client-client","aria-label":'Permalink to "$readonly client : [`Client`](./Client.md)"'},"​",-1),y=a('<h4 id="id-string" tabindex="-1">id : <code>string</code> <a class="header-anchor" href="#id-string" aria-label="Permalink to &quot;id : `string`&quot;">​</a></h4><h4 id="is-anonymous-boolean" tabindex="-1">is_anonymous : <code>boolean</code> <a class="header-anchor" href="#is-anonymous-boolean" aria-label="Permalink to &quot;is_anonymous : `boolean`&quot;">​</a></h4><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2>',3),g={id:"asyncstop-reply-markup",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#asyncstop-reply-markup","aria-label":'Permalink to "$asyncstop( reply_markup )"'},"​",-1),k=a('<table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>reply_markup?</code></td><td style="text-align:left;"><a href="./InlineKeyboardMarkup.html"><code>InlineKeyboardMarkup</code></a></td><td style="text-align:left;"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p>',2);function T(C,q,A,S,V,w){const l=n("Badge");return d(),i("div",null,[c,e("h4",h,[o(l,{type:"danger",text:"get"}),t(" chat : "),_,t(" | "),p,t(),m]),u,e("h4",P,[o(l,{type:"danger",text:"readonly"}),t(" client : "),b,t(),f]),y,e("h4",g,[o(l,{type:"tip",text:"async"}),t("stop( reply_markup ) "),x]),k])}const v=s(r,[["render",T]]);export{I as __pageData,v as default};