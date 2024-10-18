import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"PreCheckoutQuery","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/classes/PreCheckoutQuery.md","filePath":"documentation/classes/PreCheckoutQuery.md"}');
const _sfc_main = { name: "documentation/classes/PreCheckoutQuery.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Badge = resolveComponent("Badge");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Class</p><h1 id="precheckoutquery" tabindex="-1">PreCheckoutQuery <a class="header-anchor" href="#precheckoutquery" aria-label="Permalink to &quot;PreCheckoutQuery&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><code>BaseClass</code>&lt;<a href="./PreCheckoutQuery.html"><code>PreCheckoutQuery</code></a>, <a href="./../interfaces/PreCheckoutQueryPacket.html"><code>PreCheckoutQueryPacket</code></a>&gt;</p><h4 id="implements" tabindex="-1">implements <a class="header-anchor" href="#implements" aria-label="Permalink to &quot;implements&quot;">​</a></h4><p><a href="./../interfaces/PreCheckoutQueryPacket.html"><code>PreCheckoutQueryPacket</code></a></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> PreCheckoutQuery</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">( client, packet )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>client</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./Client.html"><code>Client</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>packet</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./PreCheckoutQuery.html"><code>PreCheckoutQuery</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="get-user-user" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` user : <a href="./User.html"><code>User</code></a> <a class="header-anchor" href="#get-user-user" aria-label="Permalink to &quot;$get user : [\`User\`](./User.md)&quot;">​</a></h4><h4 id="readonly-client-client" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "readonly"
  }, null, _parent));
  _push(` client : <a href="./Client.html"><code>Client</code></a> <a class="header-anchor" href="#readonly-client-client" aria-label="Permalink to &quot;$readonly client : [\`Client\`](./Client.md)&quot;">​</a></h4><h4 id="currency-string" tabindex="-1">currency : <code>string</code> <a class="header-anchor" href="#currency-string" aria-label="Permalink to &quot;currency : \`string\`&quot;">​</a></h4><h4 id="id-string" tabindex="-1">id : <code>string</code> <a class="header-anchor" href="#id-string" aria-label="Permalink to &quot;id : \`string\`&quot;">​</a></h4><h4 id="invoice-payload-string" tabindex="-1">invoice_payload : <code>string</code> <a class="header-anchor" href="#invoice-payload-string" aria-label="Permalink to &quot;invoice_payload : \`string\`&quot;">​</a></h4><h4 id="order-info-orderinfo" tabindex="-1">order_info? : <a href="./../interfaces/OrderInfo.html"><code>OrderInfo</code></a> <a class="header-anchor" href="#order-info-orderinfo" aria-label="Permalink to &quot;order_info? : [\`OrderInfo\`](../interfaces/OrderInfo.md)&quot;">​</a></h4><h4 id="shipping-option-id-string" tabindex="-1">shipping_option_id? : <code>string</code> <a class="header-anchor" href="#shipping-option-id-string" aria-label="Permalink to &quot;shipping_option_id? : \`string\`&quot;">​</a></h4><h4 id="total-amount-number" tabindex="-1">total_amount : <code>number</code> <a class="header-anchor" href="#total-amount-number" aria-label="Permalink to &quot;total_amount : \`number\`&quot;">​</a></h4><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h4 id="asyncnotok-error-message" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`notOk( error_message ) <a class="header-anchor" href="#asyncnotok-error-message" aria-label="Permalink to &quot;$asyncnotOk( error_message )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>error_message</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncok" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`ok( ) <a class="header-anchor" href="#asyncok" aria-label="Permalink to &quot;$asyncok( )&quot;">​</a></h4><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/classes/PreCheckoutQuery.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PreCheckoutQuery = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  PreCheckoutQuery as default
};
