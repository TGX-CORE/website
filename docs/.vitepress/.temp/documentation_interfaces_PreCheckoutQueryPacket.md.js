import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"PreCheckoutQueryPacket","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/PreCheckoutQueryPacket.md","filePath":"documentation/interfaces/PreCheckoutQueryPacket.md"}');
const _sfc_main = { name: "documentation/interfaces/PreCheckoutQueryPacket.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="precheckoutquerypacket" tabindex="-1">PreCheckoutQueryPacket <a class="header-anchor" href="#precheckoutquerypacket" aria-label="Permalink to &quot;PreCheckoutQueryPacket&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="currency-string" tabindex="-1">currency : <code>string</code> <a class="header-anchor" href="#currency-string" aria-label="Permalink to &quot;currency : \`string\`&quot;">​</a></h4><h4 id="from-userpacket" tabindex="-1">from? : <a href="./UserPacket.html"><code>UserPacket</code></a> <a class="header-anchor" href="#from-userpacket" aria-label="Permalink to &quot;from? : [\`UserPacket\`](./UserPacket.md)&quot;">​</a></h4><h4 id="id-string" tabindex="-1">id : <code>string</code> <a class="header-anchor" href="#id-string" aria-label="Permalink to &quot;id : \`string\`&quot;">​</a></h4><h4 id="invoice-payload-string" tabindex="-1">invoice_payload : <code>string</code> <a class="header-anchor" href="#invoice-payload-string" aria-label="Permalink to &quot;invoice_payload : \`string\`&quot;">​</a></h4><h4 id="order-info-orderinfo" tabindex="-1">order_info? : <a href="./OrderInfo.html"><code>OrderInfo</code></a> <a class="header-anchor" href="#order-info-orderinfo" aria-label="Permalink to &quot;order_info? : [\`OrderInfo\`](./OrderInfo.md)&quot;">​</a></h4><h4 id="shipping-option-id-string" tabindex="-1">shipping_option_id? : <code>string</code> <a class="header-anchor" href="#shipping-option-id-string" aria-label="Permalink to &quot;shipping_option_id? : \`string\`&quot;">​</a></h4><h4 id="total-amount-number" tabindex="-1">total_amount : <code>number</code> <a class="header-anchor" href="#total-amount-number" aria-label="Permalink to &quot;total_amount : \`number\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/PreCheckoutQueryPacket.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PreCheckoutQueryPacket = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  PreCheckoutQueryPacket as default
};
