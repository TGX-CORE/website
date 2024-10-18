import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BusinessOpeningHoursInterval","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/BusinessOpeningHoursInterval.md","filePath":"documentation/interfaces/BusinessOpeningHoursInterval.md"}');
const _sfc_main = { name: "documentation/interfaces/BusinessOpeningHoursInterval.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="businessopeninghoursinterval" tabindex="-1">BusinessOpeningHoursInterval <a class="header-anchor" href="#businessopeninghoursinterval" aria-label="Permalink to &quot;BusinessOpeningHoursInterval&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="closing-minute-number" tabindex="-1">closing_minute : <code>number</code> <a class="header-anchor" href="#closing-minute-number" aria-label="Permalink to &quot;closing_minute : \`number\`&quot;">​</a></h4><h4 id="opening-minute-number" tabindex="-1">opening_minute : <code>number</code> <a class="header-anchor" href="#opening-minute-number" aria-label="Permalink to &quot;opening_minute : \`number\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/BusinessOpeningHoursInterval.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BusinessOpeningHoursInterval = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  BusinessOpeningHoursInterval as default
};
