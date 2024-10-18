import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BackgroundFillFreeformGradient","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/BackgroundFillFreeformGradient.md","filePath":"documentation/interfaces/BackgroundFillFreeformGradient.md"}');
const _sfc_main = { name: "documentation/interfaces/BackgroundFillFreeformGradient.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="backgroundfillfreeformgradient" tabindex="-1">BackgroundFillFreeformGradient <a class="header-anchor" href="#backgroundfillfreeformgradient" aria-label="Permalink to &quot;BackgroundFillFreeformGradient&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="colors-number" tabindex="-1">colors : <code>number</code>[] <a class="header-anchor" href="#colors-number" aria-label="Permalink to &quot;colors : \`number\`[]&quot;">​</a></h4><h4 id="type-freeform-gradient" tabindex="-1">type : <code>&quot;freeform_gradient&quot;</code> <a class="header-anchor" href="#type-freeform-gradient" aria-label="Permalink to &quot;type : \`&quot;freeform_gradient&quot;\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/BackgroundFillFreeformGradient.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BackgroundFillFreeformGradient = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  BackgroundFillFreeformGradient as default
};
