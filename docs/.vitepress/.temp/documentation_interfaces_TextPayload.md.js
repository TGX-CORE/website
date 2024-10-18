import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"TextPayload","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/TextPayload.md","filePath":"documentation/interfaces/TextPayload.md"}');
const _sfc_main = { name: "documentation/interfaces/TextPayload.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="textpayload" tabindex="-1">TextPayload <a class="header-anchor" href="#textpayload" aria-label="Permalink to &quot;TextPayload&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><a href="./BaseMessagePayload.html"><code>BaseMessagePayload</code></a></p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="business-connection-id-string" tabindex="-1">business_connection_id? : <code>string</code> <a class="header-anchor" href="#business-connection-id-string" aria-label="Permalink to &quot;business_connection_id? : \`string\`&quot;">​</a></h4><h4 id="caption-entities-messageentities-messageentitypayload" tabindex="-1">caption_entities? : <a href="./../classes/MessageEntities.html"><code>MessageEntities</code></a> | <a href="./MessageEntityPayload.html"><code>MessageEntityPayload</code></a>[] <a class="header-anchor" href="#caption-entities-messageentities-messageentitypayload" aria-label="Permalink to &quot;caption_entities? : [\`MessageEntities\`](../classes/MessageEntities.md) \\| [\`MessageEntityPayload\`](./MessageEntityPayload.md)[]&quot;">​</a></h4><h4 id="chat-id-string-number" tabindex="-1">chat_id? : <code>string</code> | <code>number</code> <a class="header-anchor" href="#chat-id-string-number" aria-label="Permalink to &quot;chat_id? : \`string\` \\| \`number\`&quot;">​</a></h4><h4 id="disable-notification-boolean" tabindex="-1">disable_notification? : <code>boolean</code> <a class="header-anchor" href="#disable-notification-boolean" aria-label="Permalink to &quot;disable_notification? : \`boolean\`&quot;">​</a></h4><h4 id="link-preview-options-linkpreviewoptions" tabindex="-1">link_preview_options? : <a href="./LinkPreviewOptions.html"><code>LinkPreviewOptions</code></a> <a class="header-anchor" href="#link-preview-options-linkpreviewoptions" aria-label="Permalink to &quot;link_preview_options? : [\`LinkPreviewOptions\`](./LinkPreviewOptions.md)&quot;">​</a></h4><h4 id="message-effect-id-string" tabindex="-1">message_effect_id? : <code>string</code> <a class="header-anchor" href="#message-effect-id-string" aria-label="Permalink to &quot;message_effect_id? : \`string\`&quot;">​</a></h4><h4 id="message-thread-id-number" tabindex="-1">message_thread_id? : <code>number</code> <a class="header-anchor" href="#message-thread-id-number" aria-label="Permalink to &quot;message_thread_id? : \`number\`&quot;">​</a></h4><h4 id="parse-mode-string" tabindex="-1">parse_mode? : <code>string</code> <a class="header-anchor" href="#parse-mode-string" aria-label="Permalink to &quot;parse_mode? : \`string\`&quot;">​</a></h4><h4 id="protect-content-boolean" tabindex="-1">protect_content? : <code>boolean</code> <a class="header-anchor" href="#protect-content-boolean" aria-label="Permalink to &quot;protect_content? : \`boolean\`&quot;">​</a></h4><h4 id="reply-markup-inlinekeyboardmarkup-replykeyboardmarkup-forcereply-replykeyboardremove" tabindex="-1">reply_markup? : <a href="./../classes/InlineKeyboardMarkup.html"><code>InlineKeyboardMarkup</code></a> | <a href="./../classes/ReplyKeyboardMarkup.html"><code>ReplyKeyboardMarkup</code></a> | <a href="./../classes/ForceReply.html"><code>ForceReply</code></a> | <a href="./../classes/ReplyKeyboardRemove.html"><code>ReplyKeyboardRemove</code></a> <a class="header-anchor" href="#reply-markup-inlinekeyboardmarkup-replykeyboardmarkup-forcereply-replykeyboardremove" aria-label="Permalink to &quot;reply_markup? : [\`InlineKeyboardMarkup\`](../classes/InlineKeyboardMarkup.md) \\| [\`ReplyKeyboardMarkup\`](../classes/ReplyKeyboardMarkup.md) \\| [\`ForceReply\`](../classes/ForceReply.md) \\| [\`ReplyKeyboardRemove\`](../classes/ReplyKeyboardRemove.md)&quot;">​</a></h4><h4 id="reply-parameters-replyparameters" tabindex="-1">reply_parameters? : <a href="./ReplyParameters.html"><code>ReplyParameters</code></a> <a class="header-anchor" href="#reply-parameters-replyparameters" aria-label="Permalink to &quot;reply_parameters? : [\`ReplyParameters\`](./ReplyParameters.md)&quot;">​</a></h4><h4 id="text-string" tabindex="-1">text : <code>string</code> <a class="header-anchor" href="#text-string" aria-label="Permalink to &quot;text : \`string\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/TextPayload.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TextPayload = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  TextPayload as default
};
