import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"InputPaidMediaPhotoPayload","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/InputPaidMediaPhotoPayload.md","filePath":"documentation/interfaces/InputPaidMediaPhotoPayload.md"}');
const _sfc_main = { name: "documentation/interfaces/InputPaidMediaPhotoPayload.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="inputpaidmediaphotopayload" tabindex="-1">InputPaidMediaPhotoPayload <a class="header-anchor" href="#inputpaidmediaphotopayload" aria-label="Permalink to &quot;InputPaidMediaPhotoPayload&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="media-string" tabindex="-1">media : <code>string</code> <a class="header-anchor" href="#media-string" aria-label="Permalink to &quot;media : \`string\`&quot;">​</a></h4><h4 id="type-photo" tabindex="-1">type? : <code>&quot;photo&quot;</code> <a class="header-anchor" href="#type-photo" aria-label="Permalink to &quot;type? : \`&quot;photo&quot;\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/InputPaidMediaPhotoPayload.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InputPaidMediaPhotoPayload = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  InputPaidMediaPhotoPayload as default
};
