import{_ as n,D as s,c as i,j as e,I as r,a as t,a4 as o,o as d}from"./chunks/framework.CRCV4hx_.js";const D=JSON.parse('{"title":"PreCheckoutQuery","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/classes/PreCheckoutQuery.md","filePath":"documentation/classes/PreCheckoutQuery.md"}'),l={name:"documentation/classes/PreCheckoutQuery.md"},c=o('<p>export Class</p><h1 id="precheckoutquery" tabindex="-1">PreCheckoutQuery <a class="header-anchor" href="#precheckoutquery" aria-label="Permalink to &quot;PreCheckoutQuery&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><code>BaseClass</code>&lt;<a href="./PreCheckoutQuery.html"><code>PreCheckoutQuery</code></a>, <a href="./../interfaces/PreCheckoutQueryPacket.html"><code>PreCheckoutQueryPacket</code></a>&gt;</p><h4 id="implements" tabindex="-1">implements <a class="header-anchor" href="#implements" aria-label="Permalink to &quot;implements&quot;">​</a></h4><p><a href="./../interfaces/PreCheckoutQueryPacket.html"><code>PreCheckoutQueryPacket</code></a></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PreCheckoutQuery</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( client, packet )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>client</code></td><td style="text-align:left;"><a href="./Client.html"><code>Client</code></a></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>packet</code></td><td style="text-align:left;"><a href="./PreCheckoutQuery.html"><code>PreCheckoutQuery</code></a></td><td style="text-align:left;"></td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2>',10),h={id:"get-user-user",tabindex:"-1"},u=e("a",{href:"./User.html"},[e("code",null,"User")],-1),_=e("a",{class:"header-anchor",href:"#get-user-user","aria-label":'Permalink to "$get user : [`User`](./User.md)"'},"​",-1),p={id:"readonly-client-client",tabindex:"-1"},m=e("a",{href:"./Client.html"},[e("code",null,"Client")],-1),y=e("a",{class:"header-anchor",href:"#readonly-client-client","aria-label":'Permalink to "$readonly client : [`Client`](./Client.md)"'},"​",-1),f=o('<h4 id="currency-string" tabindex="-1">currency : <code>string</code> <a class="header-anchor" href="#currency-string" aria-label="Permalink to &quot;currency : `string`&quot;">​</a></h4><h4 id="id-string" tabindex="-1">id : <code>string</code> <a class="header-anchor" href="#id-string" aria-label="Permalink to &quot;id : `string`&quot;">​</a></h4><h4 id="invoice-payload-string" tabindex="-1">invoice_payload : <code>string</code> <a class="header-anchor" href="#invoice-payload-string" aria-label="Permalink to &quot;invoice_payload : `string`&quot;">​</a></h4><h4 id="order-info-orderinfo" tabindex="-1">order_info? : <a href="./../interfaces/OrderInfo.html"><code>OrderInfo</code></a> <a class="header-anchor" href="#order-info-orderinfo" aria-label="Permalink to &quot;order_info? : [`OrderInfo`](../interfaces/OrderInfo.md)&quot;">​</a></h4><h4 id="shipping-option-id-string" tabindex="-1">shipping_option_id? : <code>string</code> <a class="header-anchor" href="#shipping-option-id-string" aria-label="Permalink to &quot;shipping_option_id? : `string`&quot;">​</a></h4><h4 id="total-amount-number" tabindex="-1">total_amount : <code>number</code> <a class="header-anchor" href="#total-amount-number" aria-label="Permalink to &quot;total_amount : `number`&quot;">​</a></h4><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2>',7),k={id:"asyncnotok-error-message",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#asyncnotok-error-message","aria-label":'Permalink to "$asyncnotOk( error_message )"'},"​",-1),b=o('<table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>error_message</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p>',2),P={id:"asyncok",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#asyncok","aria-label":'Permalink to "$asyncok( )"'},"​",-1),C=e("p",null,[t("Returns: "),e("code",null,"Promise"),t("<"),e("code",null,"boolean"),t(">")],-1);function q(T,Q,v,I,S,A){const a=s("Badge");return d(),i("div",null,[c,e("h4",h,[r(a,{type:"danger",text:"get"}),t(" user : "),u,t(),_]),e("h4",p,[r(a,{type:"danger",text:"readonly"}),t(" client : "),m,t(),y]),f,e("h4",k,[r(a,{type:"tip",text:"async"}),t("notOk( error_message ) "),g]),b,e("h4",P,[r(a,{type:"tip",text:"async"}),t("ok( ) "),x]),C])}const E=n(l,[["render",q]]);export{D as __pageData,E as default};