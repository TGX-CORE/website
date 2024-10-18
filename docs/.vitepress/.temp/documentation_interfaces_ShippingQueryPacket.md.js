import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ShippingQueryPacket","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/ShippingQueryPacket.md","filePath":"documentation/interfaces/ShippingQueryPacket.md"}');
const _sfc_main = { name: "documentation/interfaces/ShippingQueryPacket.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="shippingquerypacket" tabindex="-1">ShippingQueryPacket <a class="header-anchor" href="#shippingquerypacket" aria-label="Permalink to &quot;ShippingQueryPacket&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="from-userpacket" tabindex="-1">from? : <a href="./UserPacket.html"><code>UserPacket</code></a> <a class="header-anchor" href="#from-userpacket" aria-label="Permalink to &quot;from? : [\`UserPacket\`](./UserPacket.md)&quot;">​</a></h4><h4 id="id-string" tabindex="-1">id : <code>string</code> <a class="header-anchor" href="#id-string" aria-label="Permalink to &quot;id : \`string\`&quot;">​</a></h4><h4 id="invoice-payload-string" tabindex="-1">invoice_payload : <code>string</code> <a class="header-anchor" href="#invoice-payload-string" aria-label="Permalink to &quot;invoice_payload : \`string\`&quot;">​</a></h4><h4 id="shipping-address-shippingaddress" tabindex="-1">shipping_address : <a href="./ShippingAddress.html"><code>ShippingAddress</code></a> <a class="header-anchor" href="#shipping-address-shippingaddress" aria-label="Permalink to &quot;shipping_address : [\`ShippingAddress\`](./ShippingAddress.md)&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/ShippingQueryPacket.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ShippingQueryPacket = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ShippingQueryPacket as default
};
