import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Birthdate","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/Birthdate.md","filePath":"documentation/interfaces/Birthdate.md"}');
const _sfc_main = { name: "documentation/interfaces/Birthdate.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="birthdate" tabindex="-1">Birthdate <a class="header-anchor" href="#birthdate" aria-label="Permalink to &quot;Birthdate&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="day-number" tabindex="-1">day : <code>number</code> <a class="header-anchor" href="#day-number" aria-label="Permalink to &quot;day : \`number\`&quot;">​</a></h4><h4 id="month-number" tabindex="-1">month : <code>number</code> <a class="header-anchor" href="#month-number" aria-label="Permalink to &quot;month : \`number\`&quot;">​</a></h4><h4 id="year-number" tabindex="-1">year : <code>number</code> <a class="header-anchor" href="#year-number" aria-label="Permalink to &quot;year : \`number\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/Birthdate.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Birthdate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Birthdate as default
};
