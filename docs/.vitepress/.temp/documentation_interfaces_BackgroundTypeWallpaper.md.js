import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BackgroundTypeWallpaper","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/BackgroundTypeWallpaper.md","filePath":"documentation/interfaces/BackgroundTypeWallpaper.md"}');
const _sfc_main = { name: "documentation/interfaces/BackgroundTypeWallpaper.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="backgroundtypewallpaper" tabindex="-1">BackgroundTypeWallpaper <a class="header-anchor" href="#backgroundtypewallpaper" aria-label="Permalink to &quot;BackgroundTypeWallpaper&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="dark-theme-dimming-number" tabindex="-1">dark_theme_dimming : <code>number</code> <a class="header-anchor" href="#dark-theme-dimming-number" aria-label="Permalink to &quot;dark_theme_dimming : \`number\`&quot;">​</a></h4><h4 id="document-document" tabindex="-1">document : <code>Document</code> <a class="header-anchor" href="#document-document" aria-label="Permalink to &quot;document : \`Document\`&quot;">​</a></h4><h4 id="is-blurred-true" tabindex="-1">is_blurred? : <code>true</code> <a class="header-anchor" href="#is-blurred-true" aria-label="Permalink to &quot;is_blurred? : \`true\`&quot;">​</a></h4><h4 id="is-moving-true" tabindex="-1">is_moving? : <code>true</code> <a class="header-anchor" href="#is-moving-true" aria-label="Permalink to &quot;is_moving? : \`true\`&quot;">​</a></h4><h4 id="type-wallpaper" tabindex="-1">type : <code>&quot;wallpaper&quot;</code> <a class="header-anchor" href="#type-wallpaper" aria-label="Permalink to &quot;type : \`&quot;wallpaper&quot;\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/BackgroundTypeWallpaper.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BackgroundTypeWallpaper = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  BackgroundTypeWallpaper as default
};
