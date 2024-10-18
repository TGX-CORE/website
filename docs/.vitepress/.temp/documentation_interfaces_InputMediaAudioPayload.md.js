import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"InputMediaAudioPayload","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/InputMediaAudioPayload.md","filePath":"documentation/interfaces/InputMediaAudioPayload.md"}');
const _sfc_main = { name: "documentation/interfaces/InputMediaAudioPayload.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="inputmediaaudiopayload" tabindex="-1">InputMediaAudioPayload <a class="header-anchor" href="#inputmediaaudiopayload" aria-label="Permalink to &quot;InputMediaAudioPayload&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="caption-string" tabindex="-1">caption? : <code>string</code> <a class="header-anchor" href="#caption-string" aria-label="Permalink to &quot;caption? : \`string\`&quot;">​</a></h4><h4 id="caption-entities-messageentities-messageentitypayload" tabindex="-1">caption_entities? : <a href="./../classes/MessageEntities.html"><code>MessageEntities</code></a> | <a href="./MessageEntityPayload.html"><code>MessageEntityPayload</code></a>[] <a class="header-anchor" href="#caption-entities-messageentities-messageentitypayload" aria-label="Permalink to &quot;caption_entities? : [\`MessageEntities\`](../classes/MessageEntities.md) \\| [\`MessageEntityPayload\`](./MessageEntityPayload.md)[]&quot;">​</a></h4><h4 id="duration-number" tabindex="-1">duration? : <code>number</code> <a class="header-anchor" href="#duration-number" aria-label="Permalink to &quot;duration? : \`number\`&quot;">​</a></h4><h4 id="media-string" tabindex="-1">media : <code>string</code> <a class="header-anchor" href="#media-string" aria-label="Permalink to &quot;media : \`string\`&quot;">​</a></h4><h4 id="parse-mode-string" tabindex="-1">parse_mode? : <code>string</code> <a class="header-anchor" href="#parse-mode-string" aria-label="Permalink to &quot;parse_mode? : \`string\`&quot;">​</a></h4><h4 id="performer-string" tabindex="-1">performer? : <code>string</code> <a class="header-anchor" href="#performer-string" aria-label="Permalink to &quot;performer? : \`string\`&quot;">​</a></h4><h4 id="thumbnail-inputfile" tabindex="-1">thumbnail? : <a href="./../type-aliases/InputFile.html"><code>InputFile</code></a> <a class="header-anchor" href="#thumbnail-inputfile" aria-label="Permalink to &quot;thumbnail? : [\`InputFile\`](../type-aliases/InputFile.md)&quot;">​</a></h4><h4 id="title-string" tabindex="-1">title? : <code>string</code> <a class="header-anchor" href="#title-string" aria-label="Permalink to &quot;title? : \`string\`&quot;">​</a></h4><h4 id="type-audio" tabindex="-1">type? : <code>&quot;audio&quot;</code> <a class="header-anchor" href="#type-audio" aria-label="Permalink to &quot;type? : \`&quot;audio&quot;\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/InputMediaAudioPayload.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InputMediaAudioPayload = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  InputMediaAudioPayload as default
};
