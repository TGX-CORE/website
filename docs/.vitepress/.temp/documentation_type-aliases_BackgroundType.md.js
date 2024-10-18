import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BackgroundType","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/type-aliases/BackgroundType.md","filePath":"documentation/type-aliases/BackgroundType.md"}');
const _sfc_main = { name: "documentation/type-aliases/BackgroundType.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export TypeAlias</p><h1 id="backgroundtype" tabindex="-1">BackgroundType <a class="header-anchor" href="#backgroundtype" aria-label="Permalink to &quot;BackgroundType&quot;">​</a></h1><p><a href="./../interfaces/BackgroundTypeFill.html"><code>BackgroundTypeFill</code></a> | <a href="./../interfaces/BackgroundTypeWallpaper.html"><code>BackgroundTypeWallpaper</code></a> | <a href="./../interfaces/BackgroundTypePattern.html"><code>BackgroundTypePattern</code></a> | <a href="./../interfaces/BackgroundTypeChatTheme.html"><code>BackgroundTypeChatTheme</code></a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/type-aliases/BackgroundType.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BackgroundType = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  BackgroundType as default
};
