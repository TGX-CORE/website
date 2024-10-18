import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BusinessLocation","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/BusinessLocation.md","filePath":"documentation/interfaces/BusinessLocation.md"}');
const _sfc_main = { name: "documentation/interfaces/BusinessLocation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="businesslocation" tabindex="-1">BusinessLocation <a class="header-anchor" href="#businesslocation" aria-label="Permalink to &quot;BusinessLocation&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="address-string" tabindex="-1">address : <code>string</code> <a class="header-anchor" href="#address-string" aria-label="Permalink to &quot;address : \`string\`&quot;">​</a></h4><h4 id="location-locationpayload" tabindex="-1">location : <a href="./LocationPayload.html"><code>LocationPayload</code></a> <a class="header-anchor" href="#location-locationpayload" aria-label="Permalink to &quot;location : [\`LocationPayload\`](./LocationPayload.md)&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/BusinessLocation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BusinessLocation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  BusinessLocation as default
};
