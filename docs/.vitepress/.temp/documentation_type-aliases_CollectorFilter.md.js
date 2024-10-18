import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CollectorFilter","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/type-aliases/CollectorFilter.md","filePath":"documentation/type-aliases/CollectorFilter.md"}');
const _sfc_main = { name: "documentation/type-aliases/CollectorFilter.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export TypeAlias</p><h1 id="collectorfilter" tabindex="-1">CollectorFilter <a class="header-anchor" href="#collectorfilter" aria-label="Permalink to &quot;CollectorFilter&quot;">​</a></h1><p>The filter of a collector, this will decide wether to collect the data or not.</p><p><code>Function</code></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/type-aliases/CollectorFilter.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CollectorFilter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  CollectorFilter as default
};
