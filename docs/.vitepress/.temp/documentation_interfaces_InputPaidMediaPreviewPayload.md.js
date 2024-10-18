import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"InputPaidMediaPreviewPayload","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/InputPaidMediaPreviewPayload.md","filePath":"documentation/interfaces/InputPaidMediaPreviewPayload.md"}');
const _sfc_main = { name: "documentation/interfaces/InputPaidMediaPreviewPayload.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="inputpaidmediapreviewpayload" tabindex="-1">InputPaidMediaPreviewPayload <a class="header-anchor" href="#inputpaidmediapreviewpayload" aria-label="Permalink to &quot;InputPaidMediaPreviewPayload&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="duration-number" tabindex="-1">duration : <code>number</code> <a class="header-anchor" href="#duration-number" aria-label="Permalink to &quot;duration : \`number\`&quot;">​</a></h4><h4 id="height-number" tabindex="-1">height : <code>number</code> <a class="header-anchor" href="#height-number" aria-label="Permalink to &quot;height : \`number\`&quot;">​</a></h4><h4 id="type-preview" tabindex="-1">type? : <code>&quot;preview&quot;</code> <a class="header-anchor" href="#type-preview" aria-label="Permalink to &quot;type? : \`&quot;preview&quot;\`&quot;">​</a></h4><h4 id="width-number" tabindex="-1">width : <code>number</code> <a class="header-anchor" href="#width-number" aria-label="Permalink to &quot;width : \`number\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/InputPaidMediaPreviewPayload.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InputPaidMediaPreviewPayload = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  InputPaidMediaPreviewPayload as default
};
