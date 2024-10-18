import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BackgroundFill","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/type-aliases/BackgroundFill.md","filePath":"documentation/type-aliases/BackgroundFill.md"}');
const _sfc_main = { name: "documentation/type-aliases/BackgroundFill.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export TypeAlias</p><h1 id="backgroundfill" tabindex="-1">BackgroundFill <a class="header-anchor" href="#backgroundfill" aria-label="Permalink to &quot;BackgroundFill&quot;">​</a></h1><p><a href="./../interfaces/BackgroundFillSolid.html"><code>BackgroundFillSolid</code></a> | <a href="./../interfaces/BackgroundFillGradient.html"><code>BackgroundFillGradient</code></a> | <a href="./../interfaces/BackgroundFillFreeformGradient.html"><code>BackgroundFillFreeformGradient</code></a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/type-aliases/BackgroundFill.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BackgroundFill = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  BackgroundFill as default
};
