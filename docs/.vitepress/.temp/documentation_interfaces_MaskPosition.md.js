import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"MaskPosition","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/MaskPosition.md","filePath":"documentation/interfaces/MaskPosition.md"}');
const _sfc_main = { name: "documentation/interfaces/MaskPosition.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="maskposition" tabindex="-1">MaskPosition <a class="header-anchor" href="#maskposition" aria-label="Permalink to &quot;MaskPosition&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="point-string" tabindex="-1">point : <code>string</code> <a class="header-anchor" href="#point-string" aria-label="Permalink to &quot;point : \`string\`&quot;">​</a></h4><h4 id="scale-number" tabindex="-1">scale : <code>number</code> <a class="header-anchor" href="#scale-number" aria-label="Permalink to &quot;scale : \`number\`&quot;">​</a></h4><h4 id="x-shift-number" tabindex="-1">x_shift : <code>number</code> <a class="header-anchor" href="#x-shift-number" aria-label="Permalink to &quot;x_shift : \`number\`&quot;">​</a></h4><h4 id="y-shift-number" tabindex="-1">y_shift : <code>number</code> <a class="header-anchor" href="#y-shift-number" aria-label="Permalink to &quot;y_shift : \`number\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/MaskPosition.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MaskPosition = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  MaskPosition as default
};
