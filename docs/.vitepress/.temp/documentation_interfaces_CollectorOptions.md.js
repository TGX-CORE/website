import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CollectorOptions","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/CollectorOptions.md","filePath":"documentation/interfaces/CollectorOptions.md"}');
const _sfc_main = { name: "documentation/interfaces/CollectorOptions.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="collectoroptions" tabindex="-1">CollectorOptions <a class="header-anchor" href="#collectoroptions" aria-label="Permalink to &quot;CollectorOptions&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="dispose-boolean" tabindex="-1">dispose? : <code>boolean</code> <a class="header-anchor" href="#dispose-boolean" aria-label="Permalink to &quot;dispose? : \`boolean\`&quot;">​</a></h4><p>Wether to emit &#39;dispose&#39; event when a collected data is disposed or removed.</p><h4 id="filter-collectorfilter" tabindex="-1">filter? : <a href="./../type-aliases/CollectorFilter.html"><code>CollectorFilter</code></a> <a class="header-anchor" href="#filter-collectorfilter" aria-label="Permalink to &quot;filter? : [\`CollectorFilter\`](../type-aliases/CollectorFilter.md)&quot;">​</a></h4><p>The filter of the collector.</p><h4 id="idle-number" tabindex="-1">idle? : <code>number</code> <a class="header-anchor" href="#idle-number" aria-label="Permalink to &quot;idle? : \`number\`&quot;">​</a></h4><p>The maximum time for the collector to wait after a collection in milliseconds.</p><h4 id="time-number" tabindex="-1">time? : <code>number</code> <a class="header-anchor" href="#time-number" aria-label="Permalink to &quot;time? : \`number\`&quot;">​</a></h4><p>The maximum time for the collector to wait in milliseconds.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/CollectorOptions.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CollectorOptions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  CollectorOptions as default
};