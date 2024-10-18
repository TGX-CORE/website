import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BackgroundFillSolid","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/BackgroundFillSolid.md","filePath":"documentation/interfaces/BackgroundFillSolid.md"}');
const _sfc_main = { name: "documentation/interfaces/BackgroundFillSolid.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="backgroundfillsolid" tabindex="-1">BackgroundFillSolid <a class="header-anchor" href="#backgroundfillsolid" aria-label="Permalink to &quot;BackgroundFillSolid&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="color-number" tabindex="-1">color : <code>number</code> <a class="header-anchor" href="#color-number" aria-label="Permalink to &quot;color : \`number\`&quot;">​</a></h4><h4 id="type-solid" tabindex="-1">type : <code>&quot;solid&quot;</code> <a class="header-anchor" href="#type-solid" aria-label="Permalink to &quot;type : \`&quot;solid&quot;\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/BackgroundFillSolid.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BackgroundFillSolid = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  BackgroundFillSolid as default
};
