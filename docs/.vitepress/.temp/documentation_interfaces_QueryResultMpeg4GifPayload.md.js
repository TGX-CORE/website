import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"QueryResultMpeg4GifPayload","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/QueryResultMpeg4GifPayload.md","filePath":"documentation/interfaces/QueryResultMpeg4GifPayload.md"}');
const _sfc_main = { name: "documentation/interfaces/QueryResultMpeg4GifPayload.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="queryresultmpeg4gifpayload" tabindex="-1">QueryResultMpeg4GifPayload <a class="header-anchor" href="#queryresultmpeg4gifpayload" aria-label="Permalink to &quot;QueryResultMpeg4GifPayload&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="caption-string" tabindex="-1">caption? : <code>string</code> <a class="header-anchor" href="#caption-string" aria-label="Permalink to &quot;caption? : \`string\`&quot;">​</a></h4><h4 id="caption-entities-messageentities-messageentitypayload" tabindex="-1">caption_entities? : <a href="./../classes/MessageEntities.html"><code>MessageEntities</code></a> | <a href="./MessageEntityPayload.html"><code>MessageEntityPayload</code></a>[] <a class="header-anchor" href="#caption-entities-messageentities-messageentitypayload" aria-label="Permalink to &quot;caption_entities? : [\`MessageEntities\`](../classes/MessageEntities.md) \\| [\`MessageEntityPayload\`](./MessageEntityPayload.md)[]&quot;">​</a></h4><h4 id="id-string" tabindex="-1">id : <code>string</code> <a class="header-anchor" href="#id-string" aria-label="Permalink to &quot;id : \`string\`&quot;">​</a></h4><h4 id="input-message-content-inputmessagecontent" tabindex="-1">input_message_content? : <a href="./../type-aliases/InputMessageContent.html"><code>InputMessageContent</code></a> <a class="header-anchor" href="#input-message-content-inputmessagecontent" aria-label="Permalink to &quot;input_message_content? : [\`InputMessageContent\`](../type-aliases/InputMessageContent.md)&quot;">​</a></h4><h4 id="mpeg4-duration-number" tabindex="-1">mpeg4_duration? : <code>number</code> <a class="header-anchor" href="#mpeg4-duration-number" aria-label="Permalink to &quot;mpeg4_duration? : \`number\`&quot;">​</a></h4><h4 id="mpeg4-height-number" tabindex="-1">mpeg4_height? : <code>number</code> <a class="header-anchor" href="#mpeg4-height-number" aria-label="Permalink to &quot;mpeg4_height? : \`number\`&quot;">​</a></h4><h4 id="mpeg4-url-string" tabindex="-1">mpeg4_url : <code>string</code> <a class="header-anchor" href="#mpeg4-url-string" aria-label="Permalink to &quot;mpeg4_url : \`string\`&quot;">​</a></h4><h4 id="mpeg4-width-number" tabindex="-1">mpeg4_width? : <code>number</code> <a class="header-anchor" href="#mpeg4-width-number" aria-label="Permalink to &quot;mpeg4_width? : \`number\`&quot;">​</a></h4><h4 id="parse-mode-string" tabindex="-1">parse_mode? : <code>string</code> <a class="header-anchor" href="#parse-mode-string" aria-label="Permalink to &quot;parse_mode? : \`string\`&quot;">​</a></h4><h4 id="reply-markup-inlinekeyboardmarkup" tabindex="-1">reply_markup? : <a href="./../classes/InlineKeyboardMarkup.html"><code>InlineKeyboardMarkup</code></a> <a class="header-anchor" href="#reply-markup-inlinekeyboardmarkup" aria-label="Permalink to &quot;reply_markup? : [\`InlineKeyboardMarkup\`](../classes/InlineKeyboardMarkup.md)&quot;">​</a></h4><h4 id="show-caption-above-media-boolean" tabindex="-1">show_caption_above_media? : <code>boolean</code> <a class="header-anchor" href="#show-caption-above-media-boolean" aria-label="Permalink to &quot;show_caption_above_media? : \`boolean\`&quot;">​</a></h4><h4 id="thumbnail-mime-type-string" tabindex="-1">thumbnail_mime_type? : <code>string</code> <a class="header-anchor" href="#thumbnail-mime-type-string" aria-label="Permalink to &quot;thumbnail_mime_type? : \`string\`&quot;">​</a></h4><h4 id="thumbnail-url-string" tabindex="-1">thumbnail_url : <code>string</code> <a class="header-anchor" href="#thumbnail-url-string" aria-label="Permalink to &quot;thumbnail_url : \`string\`&quot;">​</a></h4><h4 id="title-string" tabindex="-1">title? : <code>string</code> <a class="header-anchor" href="#title-string" aria-label="Permalink to &quot;title? : \`string\`&quot;">​</a></h4><h4 id="type-mpeg4-gif" tabindex="-1">type? : <code>&quot;mpeg4_gif&quot;</code> <a class="header-anchor" href="#type-mpeg4-gif" aria-label="Permalink to &quot;type? : \`&quot;mpeg4_gif&quot;\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/QueryResultMpeg4GifPayload.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const QueryResultMpeg4GifPayload = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  QueryResultMpeg4GifPayload as default
};
