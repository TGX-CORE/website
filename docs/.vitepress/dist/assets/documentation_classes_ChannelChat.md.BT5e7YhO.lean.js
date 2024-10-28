import{_ as n,c as d,a2 as s,j as e,G as l,a,B as r,o as i}from"./chunks/framework.DPuwY6B9.js";const F=JSON.parse('{"title":"ChannelChat","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/classes/ChannelChat.md","filePath":"documentation/classes/ChannelChat.md"}'),h={name:"documentation/classes/ChannelChat.md"},c={id:"get-partial-boolean",tabindex:"-1"},p={id:"readonly-client-client",tabindex:"-1"},m={id:"asyncadministrators",tabindex:"-1"},y={id:"asyncdeletephoto",tabindex:"-1"},g={id:"asyncdeletestickerset",tabindex:"-1"},b={id:"asyncfetch",tabindex:"-1"},u={id:"asyncleave",tabindex:"-1"},f={id:"asyncsend-method-packet-form-data",tabindex:"-1"},x={id:"asyncsendinvoice-id",tabindex:"-1"},k={id:"asyncsendtext-text",tabindex:"-1"},q={id:"asyncsetdescription-description",tabindex:"-1"},P={id:"asyncsetphoto-photo-form",tabindex:"-1"},C={id:"asyncsetstrickerset-sticker-set-name",tabindex:"-1"},M={id:"asyncsettitle-title",tabindex:"-1"};function v(T,t,$,R,D,S){const o=r("Badge");return i(),d("div",null,[t[32]||(t[32]=s('<p>export Class</p><h1 id="channelchat" tabindex="-1">ChannelChat <a class="header-anchor" href="#channelchat" aria-label="Permalink to &quot;ChannelChat&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><a href="./BaseGroupChat.html"><code>BaseGroupChat</code></a></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ChannelChat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( client, packet )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>client</code></td><td style="text-align:left;"><a href="./Client.html"><code>Client</code></a></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>packet</code></td><td style="text-align:left;"><a href="./../interfaces/ChatPacket.html"><code>ChatPacket</code></a></td><td style="text-align:left;"></td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2>',8)),e("h4",c,[l(o,{type:"danger",text:"get"}),t[0]||(t[0]=a(" partial : ")),t[1]||(t[1]=e("code",null,"boolean",-1)),t[2]||(t[2]=a()),t[3]||(t[3]=e("a",{class:"header-anchor",href:"#get-partial-boolean","aria-label":'Permalink to "$get partial : `boolean`"'},"​",-1))]),e("h4",p,[l(o,{type:"danger",text:"readonly"}),t[4]||(t[4]=a(" client : ")),t[5]||(t[5]=e("a",{href:"./Client.html"},[e("code",null,"Client")],-1)),t[6]||(t[6]=a()),t[7]||(t[7]=e("a",{class:"header-anchor",href:"#readonly-client-client","aria-label":'Permalink to "$readonly client : [`Client`](./Client.md)"'},"​",-1))]),t[33]||(t[33]=s('<h4 id="id-number" tabindex="-1">id : <code>number</code> <a class="header-anchor" href="#id-number" aria-label="Permalink to &quot;id : `number`&quot;">​</a></h4><h4 id="invites-chatinvitelinksmanager" tabindex="-1">invites : <a href="./ChatInviteLinksManager.html"><code>ChatInviteLinksManager</code></a> <a class="header-anchor" href="#invites-chatinvitelinksmanager" aria-label="Permalink to &quot;invites : [`ChatInviteLinksManager`](./ChatInviteLinksManager.md)&quot;">​</a></h4><h4 id="last-message-id-number" tabindex="-1">last_message_id? : <code>number</code> <a class="header-anchor" href="#last-message-id-number" aria-label="Permalink to &quot;last_message_id? : `number`&quot;">​</a></h4><blockquote><p>default: 0</p></blockquote><h4 id="members-membersmanager" tabindex="-1">members : <a href="./MembersManager.html"><code>MembersManager</code></a> <a class="header-anchor" href="#members-membersmanager" aria-label="Permalink to &quot;members : [`MembersManager`](./MembersManager.md)&quot;">​</a></h4><h4 id="message-thread-id-number" tabindex="-1">message_thread_id? : <code>number</code> <a class="header-anchor" href="#message-thread-id-number" aria-label="Permalink to &quot;message_thread_id? : `number`&quot;">​</a></h4><h4 id="messages-messagesmanager" tabindex="-1">messages : <a href="./MessagesManager.html"><code>MessagesManager</code></a> <a class="header-anchor" href="#messages-messagesmanager" aria-label="Permalink to &quot;messages : [`MessagesManager`](./MessagesManager.md)&quot;">​</a></h4><h4 id="photo-chatphoto" tabindex="-1">photo? : <a href="./../interfaces/ChatPhoto.html"><code>ChatPhoto</code></a> <a class="header-anchor" href="#photo-chatphoto" aria-label="Permalink to &quot;photo? : [`ChatPhoto`](../interfaces/ChatPhoto.md)&quot;">​</a></h4><h4 id="requests-chatrequestsmanager" tabindex="-1">requests : <a href="./ChatRequestsManager.html"><code>ChatRequestsManager</code></a> <a class="header-anchor" href="#requests-chatrequestsmanager" aria-label="Permalink to &quot;requests : [`ChatRequestsManager`](./ChatRequestsManager.md)&quot;">​</a></h4><h4 id="type-channel-group-supergroup" tabindex="-1">type : <code>&quot;channel&quot;</code> | <code>&quot;group&quot;</code> | <code>&quot;supergroup&quot;</code> <a class="header-anchor" href="#type-channel-group-supergroup" aria-label="Permalink to &quot;type : `&quot;channel&quot;` \\| `&quot;group&quot;` \\| `&quot;supergroup&quot;`&quot;">​</a></h4><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2>',11)),e("h4",m,[l(o,{type:"tip",text:"async"}),t[8]||(t[8]=a("administrators( ) ")),t[9]||(t[9]=e("a",{class:"header-anchor",href:"#asyncadministrators","aria-label":'Permalink to "$asyncadministrators( )"'},"​",-1))]),t[34]||(t[34]=s('<blockquote><p>Returns: <code>Promise</code>&lt;<a href="./Member.html"><code>Member[]</code></a>&gt;</p></blockquote><h4 id="createmessagecollector-options" tabindex="-1">createMessageCollector( options ) <a class="header-anchor" href="#createmessagecollector-options" aria-label="Permalink to &quot;createMessageCollector( options )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><a href="./../interfaces/MessageCollectorOptions.html"><code>MessageCollectorOptions</code></a></td><td style="text-align:left;">The options for the collector.</td></tr></tbody></table><blockquote><p>Creates a message collector to the current chat.</p><p>Returns: <a href="./MessageCollector.html"><code>MessageCollector</code></a></p></blockquote>',4)),e("h4",y,[l(o,{type:"tip",text:"async"}),t[10]||(t[10]=a("deletePhoto( ) ")),t[11]||(t[11]=e("a",{class:"header-anchor",href:"#asyncdeletephoto","aria-label":'Permalink to "$asyncdeletePhoto( )"'},"​",-1))]),t[35]||(t[35]=e("blockquote",null,[e("p",null,[a("Returns: "),e("code",null,"Promise"),a("<"),e("code",null,"boolean"),a(">")])],-1)),e("h4",g,[l(o,{type:"tip",text:"async"}),t[12]||(t[12]=a("deleteStickerSet( ) ")),t[13]||(t[13]=e("a",{class:"header-anchor",href:"#asyncdeletestickerset","aria-label":'Permalink to "$asyncdeleteStickerSet( )"'},"​",-1))]),t[36]||(t[36]=e("blockquote",null,[e("p",null,[a("Returns: "),e("code",null,"Promise"),a("<"),e("code",null,"boolean"),a(">")])],-1)),e("h4",b,[l(o,{type:"tip",text:"async"}),t[14]||(t[14]=a("fetch( ) ")),t[15]||(t[15]=e("a",{class:"header-anchor",href:"#asyncfetch","aria-label":'Permalink to "$asyncfetch( )"'},"​",-1))]),t[37]||(t[37]=e("blockquote",null,[e("p",null,[a("Returns: "),e("code",null,"Promise"),a("<"),e("code",null,"boolean"),a(" | "),e("a",{href:"./../type-aliases/Chat.html"},[e("code",null,"Chat")]),a(">")])],-1)),e("h4",u,[l(o,{type:"tip",text:"async"}),t[16]||(t[16]=a("leave( ) ")),t[17]||(t[17]=e("a",{class:"header-anchor",href:"#asyncleave","aria-label":'Permalink to "$asyncleave( )"'},"​",-1))]),t[38]||(t[38]=e("blockquote",null,[e("p",null,[a("Returns: "),e("code",null,"Promise"),a("<"),e("code",null,"boolean"),a(">")])],-1)),e("h4",f,[l(o,{type:"tip",text:"async"}),t[18]||(t[18]=a("send( method, packet, form_data ) ")),t[19]||(t[19]=e("a",{class:"header-anchor",href:"#asyncsend-method-packet-form-data","aria-label":'Permalink to "$asyncsend( method, packet, form_data )"'},"​",-1))]),t[39]||(t[39]=s('<table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>method</code></td><td style="text-align:left;"><a href="./../enumerations/MessagePayloadMethod.html"><code>MessagePayloadMethod</code></a></td><td style="text-align:left;">The method of the message.</td></tr><tr><td style="text-align:left;"><code>packet</code></td><td style="text-align:left;"><a href="./../type-aliases/MessagePayload.html"><code>MessagePayload</code></a></td><td style="text-align:left;">The packet of what the message will contain.</td></tr><tr><td style="text-align:left;"><code>form_data?</code></td><td style="text-align:left;"><a href="./FormDataBuilder.html"><code>FormDataBuilder</code></a></td><td style="text-align:left;">The form data for uploading media, see also File</td></tr></tbody></table><blockquote><p>Sends a message to the current channel.</p><p>Returns: <code>Promise</code>&lt;<a href="./Message.html"><code>Message</code></a>&gt;</p></blockquote>',2)),e("h4",x,[l(o,{type:"tip",text:"async"}),t[20]||(t[20]=a("sendInvoice( id ) ")),t[21]||(t[21]=e("a",{class:"header-anchor",href:"#asyncsendinvoice-id","aria-label":'Permalink to "$asyncsendInvoice( id )"'},"​",-1))]),t[40]||(t[40]=s('<table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>id</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The id of the invoice.</td></tr></tbody></table><blockquote><p>Sends the stored invoice with the id to the current chat.</p><p>Returns: <code>Promise</code>&lt;<code>void</code> | <a href="./Message.html"><code>Message</code></a>&gt;</p></blockquote>',2)),e("h4",k,[l(o,{type:"tip",text:"async"}),t[22]||(t[22]=a("sendText( text ) ")),t[23]||(t[23]=e("a",{class:"header-anchor",href:"#asyncsendtext-text","aria-label":'Permalink to "$asyncsendText( text )"'},"​",-1))]),t[41]||(t[41]=s('<table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The text content of the message.</td></tr></tbody></table><blockquote><p>Sends a text message to the current chat.</p><p>Returns: <code>Promise</code>&lt;<a href="./Message.html"><code>Message</code></a>&gt;</p></blockquote>',2)),e("h4",q,[l(o,{type:"tip",text:"async"}),t[24]||(t[24]=a("setDescription( description ) ")),t[25]||(t[25]=e("a",{class:"header-anchor",href:"#asyncsetdescription-description","aria-label":'Permalink to "$asyncsetDescription( description )"'},"​",-1))]),t[42]||(t[42]=s('<table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>description</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"></td></tr></tbody></table><blockquote><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p></blockquote>',2)),e("h4",P,[l(o,{type:"tip",text:"async"}),t[26]||(t[26]=a("setPhoto( photo, form ) ")),t[27]||(t[27]=e("a",{class:"header-anchor",href:"#asyncsetphoto-photo-form","aria-label":'Permalink to "$asyncsetPhoto( photo, form )"'},"​",-1))]),t[43]||(t[43]=s('<table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>photo</code></td><td style="text-align:left;"><a href="./../type-aliases/InputFile.html"><code>InputFile</code></a></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>form?</code></td><td style="text-align:left;"><code>FormData</code></td><td style="text-align:left;"></td></tr></tbody></table><blockquote><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p></blockquote>',2)),e("h4",C,[l(o,{type:"tip",text:"async"}),t[28]||(t[28]=a("setStrickerSet( sticker_set_name ) ")),t[29]||(t[29]=e("a",{class:"header-anchor",href:"#asyncsetstrickerset-sticker-set-name","aria-label":'Permalink to "$asyncsetStrickerSet( sticker_set_name )"'},"​",-1))]),t[44]||(t[44]=s('<table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>sticker_set_name</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"></td></tr></tbody></table><blockquote><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p></blockquote>',2)),e("h4",M,[l(o,{type:"tip",text:"async"}),t[30]||(t[30]=a("setTitle( title ) ")),t[31]||(t[31]=e("a",{class:"header-anchor",href:"#asyncsettitle-title","aria-label":'Permalink to "$asyncsetTitle( title )"'},"​",-1))]),t[45]||(t[45]=s('<table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>title</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"></td></tr></tbody></table><blockquote><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p></blockquote>',2))])}const I=n(h,[["render",v]]);export{F as __pageData,I as default};
