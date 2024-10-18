import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"OrderInfo","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/OrderInfo.md","filePath":"documentation/interfaces/OrderInfo.md"}');
const _sfc_main = { name: "documentation/interfaces/OrderInfo.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="orderinfo" tabindex="-1">OrderInfo <a class="header-anchor" href="#orderinfo" aria-label="Permalink to &quot;OrderInfo&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="email-string" tabindex="-1">email? : <code>string</code> <a class="header-anchor" href="#email-string" aria-label="Permalink to &quot;email? : \`string\`&quot;">​</a></h4><h4 id="name-string" tabindex="-1">name? : <code>string</code> <a class="header-anchor" href="#name-string" aria-label="Permalink to &quot;name? : \`string\`&quot;">​</a></h4><h4 id="phone-number-string" tabindex="-1">phone_number? : <code>string</code> <a class="header-anchor" href="#phone-number-string" aria-label="Permalink to &quot;phone_number? : \`string\`&quot;">​</a></h4><h4 id="shipping-address-shippingaddress" tabindex="-1">shipping_address? : <a href="./ShippingAddress.html"><code>ShippingAddress</code></a> <a class="header-anchor" href="#shipping-address-shippingaddress" aria-label="Permalink to &quot;shipping_address? : [\`ShippingAddress\`](./ShippingAddress.md)&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/OrderInfo.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const OrderInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  OrderInfo as default
};
