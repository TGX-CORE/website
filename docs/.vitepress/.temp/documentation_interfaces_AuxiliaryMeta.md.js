import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"AuxiliaryMeta","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/AuxiliaryMeta.md","filePath":"documentation/interfaces/AuxiliaryMeta.md"}');
const _sfc_main = { name: "documentation/interfaces/AuxiliaryMeta.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="auxiliarymeta" tabindex="-1">AuxiliaryMeta <a class="header-anchor" href="#auxiliarymeta" aria-label="Permalink to &quot;AuxiliaryMeta&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="name-auxiliaries-invoices" tabindex="-1">name : <a href="./../enumerations/Auxiliaries.html#invoices"><code>Auxiliaries.Invoices</code></a> <a class="header-anchor" href="#name-auxiliaries-invoices" aria-label="Permalink to &quot;name : [\`Auxiliaries.Invoices\`](../enumerations/Auxiliaries.md#invoices)&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/AuxiliaryMeta.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AuxiliaryMeta = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  AuxiliaryMeta as default
};
