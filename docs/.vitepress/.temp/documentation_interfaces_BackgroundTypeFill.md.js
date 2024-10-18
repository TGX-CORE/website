import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BackgroundTypeFill","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/BackgroundTypeFill.md","filePath":"documentation/interfaces/BackgroundTypeFill.md"}');
const _sfc_main = { name: "documentation/interfaces/BackgroundTypeFill.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="backgroundtypefill" tabindex="-1">BackgroundTypeFill <a class="header-anchor" href="#backgroundtypefill" aria-label="Permalink to &quot;BackgroundTypeFill&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="dark-theme-dimming-number" tabindex="-1">dark_theme_dimming : <code>number</code> <a class="header-anchor" href="#dark-theme-dimming-number" aria-label="Permalink to &quot;dark_theme_dimming : \`number\`&quot;">​</a></h4><h4 id="fill-backgroundfill" tabindex="-1">fill : <a href="./../type-aliases/BackgroundFill.html"><code>BackgroundFill</code></a> <a class="header-anchor" href="#fill-backgroundfill" aria-label="Permalink to &quot;fill : [\`BackgroundFill\`](../type-aliases/BackgroundFill.md)&quot;">​</a></h4><h4 id="type-fill" tabindex="-1">type : <code>&quot;fill&quot;</code> <a class="header-anchor" href="#type-fill" aria-label="Permalink to &quot;type : \`&quot;fill&quot;\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/BackgroundTypeFill.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BackgroundTypeFill = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  BackgroundTypeFill as default
};
