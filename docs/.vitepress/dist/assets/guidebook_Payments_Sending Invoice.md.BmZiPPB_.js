import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.CRCV4hx_.js";const g=JSON.parse('{"title":"Accepting Payments","description":"","frontmatter":{},"headers":[],"relativePath":"guidebook/Payments/Sending Invoice.md","filePath":"guidebook/Payments/Sending Invoice.md"}'),n={name:"guidebook/Payments/Sending Invoice.md"},t=e(`<h1 id="accepting-payments" tabindex="-1">Accepting Payments <a class="header-anchor" href="#accepting-payments" aria-label="Permalink to &quot;Accepting Payments&quot;">​</a></h1><h2 id="sending-invoice" tabindex="-1">Sending Invoice <a class="header-anchor" href="#sending-invoice" aria-label="Permalink to &quot;Sending Invoice&quot;">​</a></h2><p>TGX-Core offers a variety of methods to send an invoice.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> message.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">send</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(MessagePayloadMethod.Invoice, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> message.client.invoices.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">send</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> inlineQuery.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">answer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">InlinequeryResultArticle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;invoice&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Purchase a product.&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                input_message_content: Input.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Invoice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}))</span></span></code></pre></div>`,6),h=[t];function p(l,k,d,c,o,r){return a(),i("div",null,h)}const y=s(n,[["render",p]]);export{g as __pageData,y as default};