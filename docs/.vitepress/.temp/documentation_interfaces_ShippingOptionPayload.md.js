import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ShippingOptionPayload","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/ShippingOptionPayload.md","filePath":"documentation/interfaces/ShippingOptionPayload.md"}');
const _sfc_main = { name: "documentation/interfaces/ShippingOptionPayload.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="shippingoptionpayload" tabindex="-1">ShippingOptionPayload <a class="header-anchor" href="#shippingoptionpayload" aria-label="Permalink to &quot;ShippingOptionPayload&quot;">​</a></h1><p>This object represents one shipping option.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="id-string" tabindex="-1">id : <code>string</code> <a class="header-anchor" href="#id-string" aria-label="Permalink to &quot;id : \`string\`&quot;">​</a></h4><p>Shipping option unique identifier.</p><h4 id="prices-labeledprices-labeledprice" tabindex="-1">prices : <a href="./../classes/LabeledPrices.html"><code>LabeledPrices</code></a> | <a href="./LabeledPrice.html"><code>LabeledPrice</code></a>[] <a class="header-anchor" href="#prices-labeledprices-labeledprice" aria-label="Permalink to &quot;prices : [\`LabeledPrices\`](../classes/LabeledPrices.md) \\| [\`LabeledPrice\`](./LabeledPrice.md)[]&quot;">​</a></h4><p>List of price portions or breakdown.</p><h4 id="title-string" tabindex="-1">title : <code>string</code> <a class="header-anchor" href="#title-string" aria-label="Permalink to &quot;title : \`string\`&quot;">​</a></h4><p>Shipping option name or title.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/ShippingOptionPayload.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ShippingOptionPayload = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ShippingOptionPayload as default
};
