import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"InputMediaVideoPayload","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/InputMediaVideoPayload.md","filePath":"documentation/interfaces/InputMediaVideoPayload.md"}');
const _sfc_main = { name: "documentation/interfaces/InputMediaVideoPayload.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="inputmediavideopayload" tabindex="-1">InputMediaVideoPayload <a class="header-anchor" href="#inputmediavideopayload" aria-label="Permalink to &quot;InputMediaVideoPayload&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="caption-string" tabindex="-1">caption? : <code>string</code> <a class="header-anchor" href="#caption-string" aria-label="Permalink to &quot;caption? : \`string\`&quot;">​</a></h4><h4 id="caption-entities-messageentities-messageentitypayload" tabindex="-1">caption_entities? : <a href="./../classes/MessageEntities.html"><code>MessageEntities</code></a> | <a href="./MessageEntityPayload.html"><code>MessageEntityPayload</code></a>[] <a class="header-anchor" href="#caption-entities-messageentities-messageentitypayload" aria-label="Permalink to &quot;caption_entities? : [\`MessageEntities\`](../classes/MessageEntities.md) \\| [\`MessageEntityPayload\`](./MessageEntityPayload.md)[]&quot;">​</a></h4><h4 id="duration-number" tabindex="-1">duration? : <code>number</code> <a class="header-anchor" href="#duration-number" aria-label="Permalink to &quot;duration? : \`number\`&quot;">​</a></h4><h4 id="has-spoiler-boolean" tabindex="-1">has_spoiler? : <code>boolean</code> <a class="header-anchor" href="#has-spoiler-boolean" aria-label="Permalink to &quot;has_spoiler? : \`boolean\`&quot;">​</a></h4><h4 id="height-number" tabindex="-1">height? : <code>number</code> <a class="header-anchor" href="#height-number" aria-label="Permalink to &quot;height? : \`number\`&quot;">​</a></h4><h4 id="media-string" tabindex="-1">media : <code>string</code> <a class="header-anchor" href="#media-string" aria-label="Permalink to &quot;media : \`string\`&quot;">​</a></h4><h4 id="parse-mode-string" tabindex="-1">parse_mode? : <code>string</code> <a class="header-anchor" href="#parse-mode-string" aria-label="Permalink to &quot;parse_mode? : \`string\`&quot;">​</a></h4><h4 id="show-caption-above-media-boolean" tabindex="-1">show_caption_above_media? : <code>boolean</code> <a class="header-anchor" href="#show-caption-above-media-boolean" aria-label="Permalink to &quot;show_caption_above_media? : \`boolean\`&quot;">​</a></h4><h4 id="supports-streaming-boolean" tabindex="-1">supports_streaming? : <code>boolean</code> <a class="header-anchor" href="#supports-streaming-boolean" aria-label="Permalink to &quot;supports_streaming? : \`boolean\`&quot;">​</a></h4><h4 id="thumbnail-string" tabindex="-1">thumbnail? : <code>string</code> <a class="header-anchor" href="#thumbnail-string" aria-label="Permalink to &quot;thumbnail? : \`string\`&quot;">​</a></h4><h4 id="type-video" tabindex="-1">type? : <code>&quot;video&quot;</code> <a class="header-anchor" href="#type-video" aria-label="Permalink to &quot;type? : \`&quot;video&quot;\`&quot;">​</a></h4><h4 id="width-number" tabindex="-1">width? : <code>number</code> <a class="header-anchor" href="#width-number" aria-label="Permalink to &quot;width? : \`number\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/InputMediaVideoPayload.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InputMediaVideoPayload = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  InputMediaVideoPayload as default
};