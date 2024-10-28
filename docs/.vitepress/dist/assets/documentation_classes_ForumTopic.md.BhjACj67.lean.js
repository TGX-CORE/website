import{_ as n,c as s,a2 as d,j as t,G as l,a,B as i,o as r}from"./chunks/framework.DPuwY6B9.js";const $=JSON.parse('{"title":"ForumTopic","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/classes/ForumTopic.md","filePath":"documentation/classes/ForumTopic.md"}'),c={name:"documentation/classes/ForumTopic.md"},h={id:"get-chat-supergroupchat",tabindex:"-1"},m={id:"get-id-number",tabindex:"-1"},p={id:"readonly-client-client",tabindex:"-1"},u={id:"asyncclose",tabindex:"-1"},y={id:"asyncdelete",tabindex:"-1"},g={id:"asyncedit-name-icon-custom-emoji-id",tabindex:"-1"},f={id:"asyncreopen",tabindex:"-1"},b={id:"asyncsend-method-packet-form-data",tabindex:"-1"},x={id:"asyncsendinvoice-id",tabindex:"-1"},k={id:"asyncsendtext-text",tabindex:"-1"},P={id:"asyncunpinall",tabindex:"-1"};function q(T,e,C,F,M,v){const o=i("Badge");return r(),s("div",null,[e[28]||(e[28]=d('<p>export Class</p><h1 id="forumtopic" tabindex="-1">ForumTopic <a class="header-anchor" href="#forumtopic" aria-label="Permalink to &quot;ForumTopic&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><a href="./ChatBase.html"><code>ChatBase</code></a>&lt;<a href="./ForumTopic.html"><code>ForumTopic</code></a>, <a href="./../interfaces/SerializedForumTopicPacket.html"><code>SerializedForumTopicPacket</code></a>&gt;</p><h4 id="implements" tabindex="-1">implements <a class="header-anchor" href="#implements" aria-label="Permalink to &quot;implements&quot;">​</a></h4><p><a href="./../interfaces/SerializedForumTopicPacket.html"><code>SerializedForumTopicPacket</code></a></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ForumTopic</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( client, packet )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>client</code></td><td style="text-align:left;"><a href="./Client.html"><code>Client</code></a></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>packet</code></td><td style="text-align:left;"><a href="./../interfaces/SerializedForumTopicPacket.html"><code>SerializedForumTopicPacket</code></a></td><td style="text-align:left;"></td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2>',10)),t("h4",h,[l(o,{type:"danger",text:"get"}),e[0]||(e[0]=a(" chat : ")),e[1]||(e[1]=t("a",{href:"./SuperGroupChat.html"},[t("code",null,"SuperGroupChat")],-1)),e[2]||(e[2]=a()),e[3]||(e[3]=t("a",{class:"header-anchor",href:"#get-chat-supergroupchat","aria-label":'Permalink to "$get chat : [`SuperGroupChat`](./SuperGroupChat.md)"'},"​",-1))]),t("h4",m,[l(o,{type:"danger",text:"get"}),e[4]||(e[4]=a(" id : ")),e[5]||(e[5]=t("code",null,"number",-1)),e[6]||(e[6]=a()),e[7]||(e[7]=t("a",{class:"header-anchor",href:"#get-id-number","aria-label":'Permalink to "$get id : `number`"'},"​",-1))]),t("h4",p,[l(o,{type:"danger",text:"readonly"}),e[8]||(e[8]=a(" client : ")),e[9]||(e[9]=t("a",{href:"./Client.html"},[t("code",null,"Client")],-1)),e[10]||(e[10]=a()),e[11]||(e[11]=t("a",{class:"header-anchor",href:"#readonly-client-client","aria-label":'Permalink to "$readonly client : [`Client`](./Client.md)"'},"​",-1))]),e[29]||(e[29]=d('<h4 id="icon-color-number" tabindex="-1">icon_color : <code>number</code> <a class="header-anchor" href="#icon-color-number" aria-label="Permalink to &quot;icon_color : `number`&quot;">​</a></h4><h4 id="icon-custom-emoji-id-string" tabindex="-1">icon_custom_emoji_id : <code>string</code> <a class="header-anchor" href="#icon-custom-emoji-id-string" aria-label="Permalink to &quot;icon_custom_emoji_id : `string`&quot;">​</a></h4><h4 id="message-thread-id-number" tabindex="-1">message_thread_id : <code>number</code> <a class="header-anchor" href="#message-thread-id-number" aria-label="Permalink to &quot;message_thread_id : `number`&quot;">​</a></h4><h4 id="name-string" tabindex="-1">name : <code>string</code> <a class="header-anchor" href="#name-string" aria-label="Permalink to &quot;name : `string`&quot;">​</a></h4><h4 id="type-forumtype" tabindex="-1">type : <code>ForumType</code> <a class="header-anchor" href="#type-forumtype" aria-label="Permalink to &quot;type : `ForumType`&quot;">​</a></h4><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2>',6)),t("h4",u,[l(o,{type:"tip",text:"async"}),e[12]||(e[12]=a("close( ) ")),e[13]||(e[13]=t("a",{class:"header-anchor",href:"#asyncclose","aria-label":'Permalink to "$asyncclose( )"'},"​",-1))]),e[30]||(e[30]=d('<blockquote><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p></blockquote><h4 id="createmessagecollector-options" tabindex="-1">createMessageCollector( options ) <a class="header-anchor" href="#createmessagecollector-options" aria-label="Permalink to &quot;createMessageCollector( options )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><a href="./../interfaces/MessageCollectorOptions.html"><code>MessageCollectorOptions</code></a></td><td style="text-align:left;">The options for the collector.</td></tr></tbody></table><blockquote><p>Creates a message collector to the current chat.</p><p>Returns: <a href="./MessageCollector.html"><code>MessageCollector</code></a></p></blockquote>',4)),t("h4",y,[l(o,{type:"tip",text:"async"}),e[14]||(e[14]=a("delete( ) ")),e[15]||(e[15]=t("a",{class:"header-anchor",href:"#asyncdelete","aria-label":'Permalink to "$asyncdelete( )"'},"​",-1))]),e[31]||(e[31]=t("blockquote",null,[t("p",null,[a("Returns: "),t("code",null,"Promise"),a("<"),t("code",null,"boolean"),a(">")])],-1)),t("h4",g,[l(o,{type:"tip",text:"async"}),e[16]||(e[16]=a("edit( name, icon_custom_emoji_id ) ")),e[17]||(e[17]=t("a",{class:"header-anchor",href:"#asyncedit-name-icon-custom-emoji-id","aria-label":'Permalink to "$asyncedit( name, icon_custom_emoji_id )"'},"​",-1))]),e[32]||(e[32]=d('<table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>name?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>icon_custom_emoji_id?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"></td></tr></tbody></table><blockquote><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p></blockquote>',2)),t("h4",f,[l(o,{type:"tip",text:"async"}),e[18]||(e[18]=a("reopen( ) ")),e[19]||(e[19]=t("a",{class:"header-anchor",href:"#asyncreopen","aria-label":'Permalink to "$asyncreopen( )"'},"​",-1))]),e[33]||(e[33]=t("blockquote",null,[t("p",null,[a("Returns: "),t("code",null,"Promise"),a("<"),t("code",null,"boolean"),a(">")])],-1)),t("h4",b,[l(o,{type:"tip",text:"async"}),e[20]||(e[20]=a("send( method, packet, form_data ) ")),e[21]||(e[21]=t("a",{class:"header-anchor",href:"#asyncsend-method-packet-form-data","aria-label":'Permalink to "$asyncsend( method, packet, form_data )"'},"​",-1))]),e[34]||(e[34]=d('<table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>method</code></td><td style="text-align:left;"><a href="./../enumerations/MessagePayloadMethod.html"><code>MessagePayloadMethod</code></a></td><td style="text-align:left;">The method of the message.</td></tr><tr><td style="text-align:left;"><code>packet</code></td><td style="text-align:left;"><a href="./../type-aliases/MessagePayload.html"><code>MessagePayload</code></a></td><td style="text-align:left;">The packet of what the message will contain.</td></tr><tr><td style="text-align:left;"><code>form_data?</code></td><td style="text-align:left;"><a href="./FormDataBuilder.html"><code>FormDataBuilder</code></a></td><td style="text-align:left;">The form data for uploading media, see also File</td></tr></tbody></table><blockquote><p>Sends a message to the current channel.</p><p>Returns: <code>Promise</code>&lt;<a href="./Message.html"><code>Message</code></a>&gt;</p></blockquote>',2)),t("h4",x,[l(o,{type:"tip",text:"async"}),e[22]||(e[22]=a("sendInvoice( id ) ")),e[23]||(e[23]=t("a",{class:"header-anchor",href:"#asyncsendinvoice-id","aria-label":'Permalink to "$asyncsendInvoice( id )"'},"​",-1))]),e[35]||(e[35]=d('<table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>id</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The id of the invoice.</td></tr></tbody></table><blockquote><p>Sends the stored invoice with the id to the current chat.</p><p>Returns: <code>Promise</code>&lt;<code>void</code> | <a href="./Message.html"><code>Message</code></a>&gt;</p></blockquote>',2)),t("h4",k,[l(o,{type:"tip",text:"async"}),e[24]||(e[24]=a("sendText( text ) ")),e[25]||(e[25]=t("a",{class:"header-anchor",href:"#asyncsendtext-text","aria-label":'Permalink to "$asyncsendText( text )"'},"​",-1))]),e[36]||(e[36]=d('<table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The text content of the message.</td></tr></tbody></table><blockquote><p>Sends a text message to the current chat.</p><p>Returns: <code>Promise</code>&lt;<a href="./Message.html"><code>Message</code></a>&gt;</p></blockquote>',2)),t("h4",P,[l(o,{type:"tip",text:"async"}),e[26]||(e[26]=a("unpinAll( ) ")),e[27]||(e[27]=t("a",{class:"header-anchor",href:"#asyncunpinall","aria-label":'Permalink to "$asyncunpinAll( )"'},"​",-1))]),e[37]||(e[37]=t("blockquote",null,[t("p",null,[a("Returns: "),t("code",null,"Promise"),a("<"),t("code",null,"boolean"),a(">")])],-1))])}const B=n(c,[["render",q]]);export{$ as __pageData,B as default};