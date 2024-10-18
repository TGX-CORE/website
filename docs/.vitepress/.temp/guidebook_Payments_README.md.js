import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Payments","description":"","frontmatter":{},"headers":[],"relativePath":"guidebook/Payments/README.md","filePath":"guidebook/Payments/README.md"}');
const _sfc_main = { name: "guidebook/Payments/README.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="payments" tabindex="-1">Payments <a class="header-anchor" href="#payments" aria-label="Permalink to &quot;Payments&quot;">​</a></h1><p>Telegram has now supported payments for your mini-apps.</p><p>To accept payments;</p><ul><li>You send an invoice to the chat or user.</li></ul><blockquote><p>Refer to <a href="./Sending Invoice.html"><code>Sending Invoice</code></a></p></blockquote><ul><li>For flexible invoices that accept shipping options,</li></ul><blockquote><p>Refer to <a href="./Shipping.html"><code>ShippingQuery</code></a></p></blockquote><ul><li>For finalization, you send a ok or notOk to precheckout event wether to accept or reject the invoice.</li></ul><blockquote><p>Refer to <a href="./PreCheckout.html"><code>PreCheckout</code></a></p></blockquote><ul><li>For succesful payments, handle the event.</li></ul><blockquote><p>Refer to <a href="./Succesful Payment.html"><code>SuccessfulPayment</code></a></p></blockquote><h2 id="payment-provider" tabindex="-1">Payment Provider <a class="header-anchor" href="#payment-provider" aria-label="Permalink to &quot;Payment Provider&quot;">​</a></h2><p>To start accepting payments, you&#39;ll need a payment provider.</p><div class="info custom-block"><p class="custom-block-title">Getting a Token</p><ul><li>Use the /mybots command in the chat with BotFather and choose the @merchantbot that will be offering goods or services.</li><li>Go to Bot Settings &gt; Payments.</li><li>Choose a provider, and you will be redirected to the relevant bot.</li><li>Enter the required details so that the payments provider is connected successfully, go back to the chat with Botfather.</li><li>The message will now show available providers. Each will have a name, a token, and the date the provider was connected.</li><li>You will use the token when working with the Bot API.</li></ul></div><p>Set the token for the client;</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">Client.invoices.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">setToken</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;&lt;provider_token&gt;&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">)</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">// OR</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">Client.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">intialize</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;&lt;token&gt;&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">, </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;&lt;provider_token&gt;&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">)</span></span></code></pre></div><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h2><p>The information was provided by the Telegram&#39;s bot API documentation; <a href="https://core.telegram.org/bots/payments#connecting-payments" target="_blank" rel="noreferrer"><code>TelegramAPI#connecting-payments</code></a>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guidebook/Payments/README.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const README = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  README as default
};