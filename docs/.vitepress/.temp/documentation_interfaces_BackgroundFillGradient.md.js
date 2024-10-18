import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BackgroundFillGradient","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/BackgroundFillGradient.md","filePath":"documentation/interfaces/BackgroundFillGradient.md"}');
const _sfc_main = { name: "documentation/interfaces/BackgroundFillGradient.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="backgroundfillgradient" tabindex="-1">BackgroundFillGradient <a class="header-anchor" href="#backgroundfillgradient" aria-label="Permalink to &quot;BackgroundFillGradient&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="bottom-color-number" tabindex="-1">bottom_color : <code>number</code> <a class="header-anchor" href="#bottom-color-number" aria-label="Permalink to &quot;bottom_color : \`number\`&quot;">​</a></h4><h4 id="rotation-angle-number" tabindex="-1">rotation_angle : <code>number</code> <a class="header-anchor" href="#rotation-angle-number" aria-label="Permalink to &quot;rotation_angle : \`number\`&quot;">​</a></h4><h4 id="top-color-number" tabindex="-1">top_color : <code>number</code> <a class="header-anchor" href="#top-color-number" aria-label="Permalink to &quot;top_color : \`number\`&quot;">​</a></h4><h4 id="type-gradient" tabindex="-1">type : <code>&quot;gradient&quot;</code> <a class="header-anchor" href="#type-gradient" aria-label="Permalink to &quot;type : \`&quot;gradient&quot;\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/BackgroundFillGradient.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BackgroundFillGradient = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  BackgroundFillGradient as default
};
