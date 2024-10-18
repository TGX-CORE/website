import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BusinessOpeningHours","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/BusinessOpeningHours.md","filePath":"documentation/interfaces/BusinessOpeningHours.md"}');
const _sfc_main = { name: "documentation/interfaces/BusinessOpeningHours.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="businessopeninghours" tabindex="-1">BusinessOpeningHours <a class="header-anchor" href="#businessopeninghours" aria-label="Permalink to &quot;BusinessOpeningHours&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="opening-hours-businessopeninghoursinterval" tabindex="-1">opening_hours : <a href="./BusinessOpeningHoursInterval.html"><code>BusinessOpeningHoursInterval</code></a>[] <a class="header-anchor" href="#opening-hours-businessopeninghoursinterval" aria-label="Permalink to &quot;opening_hours : [\`BusinessOpeningHoursInterval\`](./BusinessOpeningHoursInterval.md)[]&quot;">​</a></h4><h4 id="time-zone-name-string" tabindex="-1">time_zone_name : <code>string</code> <a class="header-anchor" href="#time-zone-name-string" aria-label="Permalink to &quot;time_zone_name : \`string\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/BusinessOpeningHours.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BusinessOpeningHours = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  BusinessOpeningHours as default
};
