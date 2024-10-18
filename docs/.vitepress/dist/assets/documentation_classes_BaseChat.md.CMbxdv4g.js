import{_ as l,D as d,c as n,j as e,I as s,a as t,a4 as o,o as r}from"./chunks/framework.CRCV4hx_.js";const W=JSON.parse('{"title":"BaseChat","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/classes/BaseChat.md","filePath":"documentation/classes/BaseChat.md"}'),i={name:"documentation/classes/BaseChat.md"},c=o('<p>export abstract Class</p><h1 id="basechat" tabindex="-1">BaseChat <a class="header-anchor" href="#basechat" aria-label="Permalink to &quot;BaseChat&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><a href="./ChatBase.html"><code>ChatBase</code></a>&lt;<a href="./BaseChat.html"><code>BaseChat</code></a>, <a href="./../interfaces/ChatPacket.html"><code>ChatPacket</code></a>&gt;</p><h4 id="implements" tabindex="-1">implements <a class="header-anchor" href="#implements" aria-label="Permalink to &quot;implements&quot;">​</a></h4><p><a href="./../interfaces/ChatPacket.html"><code>ChatPacket</code></a></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BaseChat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( client, packet )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>client</code></td><td style="text-align:left;"><a href="./Client.html"><code>Client</code></a></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>packet</code></td><td style="text-align:left;"><a href="./../interfaces/ChatPacket.html"><code>ChatPacket</code></a></td><td style="text-align:left;"></td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2>',10),h={id:"get-partial-boolean",tabindex:"-1"},_=e("code",null,"boolean",-1),p=e("a",{class:"header-anchor",href:"#get-partial-boolean","aria-label":'Permalink to "$get partial : `boolean`"'},"​",-1),m={id:"readonly-client-client",tabindex:"-1"},g=e("a",{href:"./Client.html"},[e("code",null,"Client")],-1),y=e("a",{class:"header-anchor",href:"#readonly-client-client","aria-label":'Permalink to "$readonly client : [`Client`](./Client.md)"'},"​",-1),f=o('<h4 id="id-number" tabindex="-1">id : <code>number</code> <a class="header-anchor" href="#id-number" aria-label="Permalink to &quot;id : `number`&quot;">​</a></h4><h4 id="last-message-id-number" tabindex="-1">last_message_id? : <code>number</code> <a class="header-anchor" href="#last-message-id-number" aria-label="Permalink to &quot;last_message_id? : `number`&quot;">​</a></h4><h4 id="message-thread-id-undefined-number" tabindex="-1">message_thread_id : <code>undefined</code> | <code>number</code> <a class="header-anchor" href="#message-thread-id-undefined-number" aria-label="Permalink to &quot;message_thread_id : `undefined` \\| `number`&quot;">​</a></h4><h4 id="messages-messagesmanager" tabindex="-1">messages : <a href="./MessagesManager.html"><code>MessagesManager</code></a> <a class="header-anchor" href="#messages-messagesmanager" aria-label="Permalink to &quot;messages : [`MessagesManager`](./MessagesManager.md)&quot;">​</a></h4><h4 id="photo-chatphoto" tabindex="-1">photo? : <a href="./../interfaces/ChatPhoto.html"><code>ChatPhoto</code></a> <a class="header-anchor" href="#photo-chatphoto" aria-label="Permalink to &quot;photo? : [`ChatPhoto`](../interfaces/ChatPhoto.md)&quot;">​</a></h4><h4 id="type-private-group-supergroup-channel" tabindex="-1">type : <code>&quot;private&quot;</code> | <code>&quot;group&quot;</code> | <code>&quot;supergroup&quot;</code> | <code>&quot;channel&quot;</code> <a class="header-anchor" href="#type-private-group-supergroup-channel" aria-label="Permalink to &quot;type : `&quot;private&quot;` \\| `&quot;group&quot;` \\| `&quot;supergroup&quot;` \\| `&quot;channel&quot;`&quot;">​</a></h4><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h4 id="createmessagecollector-options" tabindex="-1">createMessageCollector( options ) <a class="header-anchor" href="#createmessagecollector-options" aria-label="Permalink to &quot;createMessageCollector( options )&quot;">​</a></h4><p>Creates a message collector to the current chat.</p><table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><a href="./../interfaces/MessageCollectorOptions.html"><code>MessageCollectorOptions</code></a></td><td style="text-align:left;">The options for the collector.</td></tr></tbody></table><p>Returns: <a href="./MessageCollector.html"><code>MessageCollector</code></a></p>',11),u={id:"asyncdeletestickerset",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#asyncdeletestickerset","aria-label":'Permalink to "$asyncdeleteStickerSet( )"'},"​",-1),b=e("p",null,[t("Returns: "),e("code",null,"Promise"),t("<"),e("code",null,"boolean"),t(">")],-1),P={id:"asyncfetch",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#asyncfetch","aria-label":'Permalink to "$asyncfetch( )"'},"​",-1),T=e("p",null,[t("Returns: "),e("code",null,"Promise"),t("<"),e("code",null,"boolean"),t(" | "),e("a",{href:"./BaseChat.html"},[e("code",null,"BaseChat")]),t(">")],-1),C={id:"asyncleave",tabindex:"-1"},q=e("a",{class:"header-anchor",href:"#asyncleave","aria-label":'Permalink to "$asyncleave( )"'},"​",-1),S=e("p",null,[t("Returns: "),e("code",null,"Promise"),t("<"),e("code",null,"boolean"),t(">")],-1),M={id:"asyncsend-method-packet-form-data",tabindex:"-1"},A=e("a",{class:"header-anchor",href:"#asyncsend-method-packet-form-data","aria-label":'Permalink to "$asyncsend( method, packet, form_data )"'},"​",-1),B=o('<p>Sends a message to the current channel.</p><table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>method</code></td><td style="text-align:left;"><a href="./../enumerations/MessagePayloadMethod.html"><code>MessagePayloadMethod</code></a></td><td style="text-align:left;">The method of the message.</td></tr><tr><td style="text-align:left;"><code>packet</code></td><td style="text-align:left;"><a href="./../type-aliases/MessagePayload.html"><code>MessagePayload</code></a></td><td style="text-align:left;">The packet of what the message will contain.</td></tr><tr><td style="text-align:left;"><code>form_data?</code></td><td style="text-align:left;"><a href="./FormDataBuilder.html"><code>FormDataBuilder</code></a></td><td style="text-align:left;">The form data for uploading media, see also File</td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<a href="./Message.html"><code>Message</code></a>&gt;</p>',3),D={id:"asyncsendtext-text",tabindex:"-1"},V=e("a",{class:"header-anchor",href:"#asyncsendtext-text","aria-label":'Permalink to "$asyncsendText( text )"'},"​",-1),v=o('<p>Sends a text message to the current channel.</p><table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The text content of the message.</td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<a href="./Message.html"><code>Message</code></a>&gt;</p>',3),R={id:"asyncsetdescription-description",tabindex:"-1"},I=e("a",{class:"header-anchor",href:"#asyncsetdescription-description","aria-label":'Permalink to "$asyncsetDescription( description )"'},"​",-1),$=o('<table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>description</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p>',2),E={id:"asyncsetstrickerset-sticker-set-name",tabindex:"-1"},N=e("a",{class:"header-anchor",href:"#asyncsetstrickerset-sticker-set-name","aria-label":'Permalink to "$asyncsetStrickerSet( sticker_set_name )"'},"​",-1),F=o('<table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>sticker_set_name</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p>',2),w={id:"asyncsettitle-title",tabindex:"-1"},O=e("a",{class:"header-anchor",href:"#asyncsettitle-title","aria-label":'Permalink to "$asyncsetTitle( title )"'},"​",-1),j=o('<table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>title</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p>',2);function J(z,G,H,K,L,Q){const a=d("Badge");return r(),n("div",null,[c,e("h4",h,[s(a,{type:"danger",text:"get"}),t(" partial : "),_,t(),p]),e("h4",m,[s(a,{type:"danger",text:"readonly"}),t(" client : "),g,t(),y]),f,e("h4",u,[s(a,{type:"tip",text:"async"}),t("deleteStickerSet( ) "),x]),b,e("h4",P,[s(a,{type:"tip",text:"async"}),t("fetch( ) "),k]),T,e("h4",C,[s(a,{type:"tip",text:"async"}),t("leave( ) "),q]),S,e("h4",M,[s(a,{type:"tip",text:"async"}),t("send( method, packet, form_data ) "),A]),B,e("h4",D,[s(a,{type:"tip",text:"async"}),t("sendText( text ) "),V]),v,e("h4",R,[s(a,{type:"tip",text:"async"}),t("setDescription( description ) "),I]),$,e("h4",E,[s(a,{type:"tip",text:"async"}),t("setStrickerSet( sticker_set_name ) "),N]),F,e("h4",w,[s(a,{type:"tip",text:"async"}),t("setTitle( title ) "),O]),j])}const X=l(i,[["render",J]]);export{W as __pageData,X as default};
