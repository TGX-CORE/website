import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ShippingAddress","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/ShippingAddress.md","filePath":"documentation/interfaces/ShippingAddress.md"}');
const _sfc_main = { name: "documentation/interfaces/ShippingAddress.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="shippingaddress" tabindex="-1">ShippingAddress <a class="header-anchor" href="#shippingaddress" aria-label="Permalink to &quot;ShippingAddress&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="city-string" tabindex="-1">city : <code>string</code> <a class="header-anchor" href="#city-string" aria-label="Permalink to &quot;city : \`string\`&quot;">​</a></h4><h4 id="country-code-string" tabindex="-1">country_code : <code>string</code> <a class="header-anchor" href="#country-code-string" aria-label="Permalink to &quot;country_code : \`string\`&quot;">​</a></h4><h4 id="post-code-string" tabindex="-1">post_code : <code>string</code> <a class="header-anchor" href="#post-code-string" aria-label="Permalink to &quot;post_code : \`string\`&quot;">​</a></h4><h4 id="state-string" tabindex="-1">state? : <code>string</code> <a class="header-anchor" href="#state-string" aria-label="Permalink to &quot;state? : \`string\`&quot;">​</a></h4><h4 id="street-line1-string" tabindex="-1">street_line1 : <code>string</code> <a class="header-anchor" href="#street-line1-string" aria-label="Permalink to &quot;street_line1 : \`string\`&quot;">​</a></h4><h4 id="street-line2-string" tabindex="-1">street_line2? : <code>string</code> <a class="header-anchor" href="#street-line2-string" aria-label="Permalink to &quot;street_line2? : \`string\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/ShippingAddress.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ShippingAddress = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ShippingAddress as default
};
