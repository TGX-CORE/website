import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"InputPaidMediaVideoPayload","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/InputPaidMediaVideoPayload.md","filePath":"documentation/interfaces/InputPaidMediaVideoPayload.md"}');
const _sfc_main = { name: "documentation/interfaces/InputPaidMediaVideoPayload.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="inputpaidmediavideopayload" tabindex="-1">InputPaidMediaVideoPayload <a class="header-anchor" href="#inputpaidmediavideopayload" aria-label="Permalink to &quot;InputPaidMediaVideoPayload&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="duration-number" tabindex="-1">duration? : <code>number</code> <a class="header-anchor" href="#duration-number" aria-label="Permalink to &quot;duration? : \`number\`&quot;">​</a></h4><h4 id="height-number" tabindex="-1">height? : <code>number</code> <a class="header-anchor" href="#height-number" aria-label="Permalink to &quot;height? : \`number\`&quot;">​</a></h4><h4 id="media-string" tabindex="-1">media : <code>string</code> <a class="header-anchor" href="#media-string" aria-label="Permalink to &quot;media : \`string\`&quot;">​</a></h4><h4 id="supports-streaming-boolean" tabindex="-1">supports_streaming? : <code>boolean</code> <a class="header-anchor" href="#supports-streaming-boolean" aria-label="Permalink to &quot;supports_streaming? : \`boolean\`&quot;">​</a></h4><h4 id="thumbnail-string" tabindex="-1">thumbnail? : <code>string</code> <a class="header-anchor" href="#thumbnail-string" aria-label="Permalink to &quot;thumbnail? : \`string\`&quot;">​</a></h4><h4 id="type-video" tabindex="-1">type? : <code>&quot;video&quot;</code> <a class="header-anchor" href="#type-video" aria-label="Permalink to &quot;type? : \`&quot;video&quot;\`&quot;">​</a></h4><h4 id="width-number" tabindex="-1">width? : <code>number</code> <a class="header-anchor" href="#width-number" aria-label="Permalink to &quot;width? : \`number\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/InputPaidMediaVideoPayload.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InputPaidMediaVideoPayload = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  InputPaidMediaVideoPayload as default
};
