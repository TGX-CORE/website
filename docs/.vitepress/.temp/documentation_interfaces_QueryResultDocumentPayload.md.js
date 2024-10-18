import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"QueryResultDocumentPayload","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/QueryResultDocumentPayload.md","filePath":"documentation/interfaces/QueryResultDocumentPayload.md"}');
const _sfc_main = { name: "documentation/interfaces/QueryResultDocumentPayload.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="queryresultdocumentpayload" tabindex="-1">QueryResultDocumentPayload <a class="header-anchor" href="#queryresultdocumentpayload" aria-label="Permalink to &quot;QueryResultDocumentPayload&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="caption-string" tabindex="-1">caption? : <code>string</code> <a class="header-anchor" href="#caption-string" aria-label="Permalink to &quot;caption? : \`string\`&quot;">​</a></h4><h4 id="caption-entities-messageentities-messageentitypayload" tabindex="-1">caption_entities? : <a href="./../classes/MessageEntities.html"><code>MessageEntities</code></a> | <a href="./MessageEntityPayload.html"><code>MessageEntityPayload</code></a>[] <a class="header-anchor" href="#caption-entities-messageentities-messageentitypayload" aria-label="Permalink to &quot;caption_entities? : [\`MessageEntities\`](../classes/MessageEntities.md) \\| [\`MessageEntityPayload\`](./MessageEntityPayload.md)[]&quot;">​</a></h4><h4 id="description-string" tabindex="-1">description? : <code>string</code> <a class="header-anchor" href="#description-string" aria-label="Permalink to &quot;description? : \`string\`&quot;">​</a></h4><h4 id="document-url-string" tabindex="-1">document_url : <code>string</code> <a class="header-anchor" href="#document-url-string" aria-label="Permalink to &quot;document_url : \`string\`&quot;">​</a></h4><h4 id="id-string" tabindex="-1">id : <code>string</code> <a class="header-anchor" href="#id-string" aria-label="Permalink to &quot;id : \`string\`&quot;">​</a></h4><h4 id="input-message-content-inputmessagecontent" tabindex="-1">input_message_content? : <a href="./../type-aliases/InputMessageContent.html"><code>InputMessageContent</code></a> <a class="header-anchor" href="#input-message-content-inputmessagecontent" aria-label="Permalink to &quot;input_message_content? : [\`InputMessageContent\`](../type-aliases/InputMessageContent.md)&quot;">​</a></h4><h4 id="mime-type-application-pdf-application-zip" tabindex="-1">mime_type : <code>&quot;application/pdf&quot;</code> | <code>&quot;application/zip&quot;</code> <a class="header-anchor" href="#mime-type-application-pdf-application-zip" aria-label="Permalink to &quot;mime_type : \`&quot;application/pdf&quot;\` \\| \`&quot;application/zip&quot;\`&quot;">​</a></h4><h4 id="parse-mode-string" tabindex="-1">parse_mode? : <code>string</code> <a class="header-anchor" href="#parse-mode-string" aria-label="Permalink to &quot;parse_mode? : \`string\`&quot;">​</a></h4><h4 id="reply-markup-inlinekeyboardmarkup" tabindex="-1">reply_markup? : <a href="./../classes/InlineKeyboardMarkup.html"><code>InlineKeyboardMarkup</code></a> <a class="header-anchor" href="#reply-markup-inlinekeyboardmarkup" aria-label="Permalink to &quot;reply_markup? : [\`InlineKeyboardMarkup\`](../classes/InlineKeyboardMarkup.md)&quot;">​</a></h4><h4 id="thumbnail-height-number" tabindex="-1">thumbnail_height? : <code>number</code> <a class="header-anchor" href="#thumbnail-height-number" aria-label="Permalink to &quot;thumbnail_height? : \`number\`&quot;">​</a></h4><h4 id="thumbnail-url-string" tabindex="-1">thumbnail_url? : <code>string</code> <a class="header-anchor" href="#thumbnail-url-string" aria-label="Permalink to &quot;thumbnail_url? : \`string\`&quot;">​</a></h4><h4 id="thumbnail-width-number" tabindex="-1">thumbnail_width? : <code>number</code> <a class="header-anchor" href="#thumbnail-width-number" aria-label="Permalink to &quot;thumbnail_width? : \`number\`&quot;">​</a></h4><h4 id="title-string" tabindex="-1">title : <code>string</code> <a class="header-anchor" href="#title-string" aria-label="Permalink to &quot;title : \`string\`&quot;">​</a></h4><h4 id="type-document" tabindex="-1">type? : <code>&quot;document&quot;</code> <a class="header-anchor" href="#type-document" aria-label="Permalink to &quot;type? : \`&quot;document&quot;\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/QueryResultDocumentPayload.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const QueryResultDocumentPayload = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  QueryResultDocumentPayload as default
};
