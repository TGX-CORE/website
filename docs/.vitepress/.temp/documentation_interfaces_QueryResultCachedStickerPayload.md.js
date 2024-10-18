import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"QueryResultCachedStickerPayload","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/QueryResultCachedStickerPayload.md","filePath":"documentation/interfaces/QueryResultCachedStickerPayload.md"}');
const _sfc_main = { name: "documentation/interfaces/QueryResultCachedStickerPayload.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="queryresultcachedstickerpayload" tabindex="-1">QueryResultCachedStickerPayload <a class="header-anchor" href="#queryresultcachedstickerpayload" aria-label="Permalink to &quot;QueryResultCachedStickerPayload&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="id-string" tabindex="-1">id : <code>string</code> <a class="header-anchor" href="#id-string" aria-label="Permalink to &quot;id : \`string\`&quot;">​</a></h4><h4 id="input-message-content-inputmessagecontent" tabindex="-1">input_message_content? : <a href="./../type-aliases/InputMessageContent.html"><code>InputMessageContent</code></a> <a class="header-anchor" href="#input-message-content-inputmessagecontent" aria-label="Permalink to &quot;input_message_content? : [\`InputMessageContent\`](../type-aliases/InputMessageContent.md)&quot;">​</a></h4><h4 id="reply-markup-inlinekeyboardmarkup" tabindex="-1">reply_markup? : <a href="./../classes/InlineKeyboardMarkup.html"><code>InlineKeyboardMarkup</code></a> <a class="header-anchor" href="#reply-markup-inlinekeyboardmarkup" aria-label="Permalink to &quot;reply_markup? : [\`InlineKeyboardMarkup\`](../classes/InlineKeyboardMarkup.md)&quot;">​</a></h4><h4 id="sticker-file-id-string" tabindex="-1">sticker_file_id : <code>string</code> <a class="header-anchor" href="#sticker-file-id-string" aria-label="Permalink to &quot;sticker_file_id : \`string\`&quot;">​</a></h4><h4 id="type-sticker" tabindex="-1">type? : <code>&quot;sticker&quot;</code> <a class="header-anchor" href="#type-sticker" aria-label="Permalink to &quot;type? : \`&quot;sticker&quot;\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/QueryResultCachedStickerPayload.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const QueryResultCachedStickerPayload = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  QueryResultCachedStickerPayload as default
};
