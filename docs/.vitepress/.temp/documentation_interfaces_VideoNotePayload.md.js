import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"VideoNotePayload","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/VideoNotePayload.md","filePath":"documentation/interfaces/VideoNotePayload.md"}');
const _sfc_main = { name: "documentation/interfaces/VideoNotePayload.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="videonotepayload" tabindex="-1">VideoNotePayload <a class="header-anchor" href="#videonotepayload" aria-label="Permalink to &quot;VideoNotePayload&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><a href="./BaseMessagePayload.html"><code>BaseMessagePayload</code></a></p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="business-connection-id-string" tabindex="-1">business_connection_id? : <code>string</code> <a class="header-anchor" href="#business-connection-id-string" aria-label="Permalink to &quot;business_connection_id? : \`string\`&quot;">​</a></h4><h4 id="caption-entities-messageentities-messageentitypayload" tabindex="-1">caption_entities? : <a href="./../classes/MessageEntities.html"><code>MessageEntities</code></a> | <a href="./MessageEntityPayload.html"><code>MessageEntityPayload</code></a>[] <a class="header-anchor" href="#caption-entities-messageentities-messageentitypayload" aria-label="Permalink to &quot;caption_entities? : [\`MessageEntities\`](../classes/MessageEntities.md) \\| [\`MessageEntityPayload\`](./MessageEntityPayload.md)[]&quot;">​</a></h4><h4 id="chat-id-string-number" tabindex="-1">chat_id? : <code>string</code> | <code>number</code> <a class="header-anchor" href="#chat-id-string-number" aria-label="Permalink to &quot;chat_id? : \`string\` \\| \`number\`&quot;">​</a></h4><h4 id="disable-notification-boolean" tabindex="-1">disable_notification? : <code>boolean</code> <a class="header-anchor" href="#disable-notification-boolean" aria-label="Permalink to &quot;disable_notification? : \`boolean\`&quot;">​</a></h4><h4 id="duration-number" tabindex="-1">duration? : <code>number</code> <a class="header-anchor" href="#duration-number" aria-label="Permalink to &quot;duration? : \`number\`&quot;">​</a></h4><h4 id="length-number" tabindex="-1">length? : <code>number</code> <a class="header-anchor" href="#length-number" aria-label="Permalink to &quot;length? : \`number\`&quot;">​</a></h4><h4 id="message-effect-id-string" tabindex="-1">message_effect_id? : <code>string</code> <a class="header-anchor" href="#message-effect-id-string" aria-label="Permalink to &quot;message_effect_id? : \`string\`&quot;">​</a></h4><h4 id="message-thread-id-number" tabindex="-1">message_thread_id? : <code>number</code> <a class="header-anchor" href="#message-thread-id-number" aria-label="Permalink to &quot;message_thread_id? : \`number\`&quot;">​</a></h4><h4 id="parse-mode-string" tabindex="-1">parse_mode? : <code>string</code> <a class="header-anchor" href="#parse-mode-string" aria-label="Permalink to &quot;parse_mode? : \`string\`&quot;">​</a></h4><h4 id="protect-content-boolean" tabindex="-1">protect_content? : <code>boolean</code> <a class="header-anchor" href="#protect-content-boolean" aria-label="Permalink to &quot;protect_content? : \`boolean\`&quot;">​</a></h4><h4 id="reply-markup-inlinekeyboardmarkup-replykeyboardmarkup-forcereply-replykeyboardremove" tabindex="-1">reply_markup? : <a href="./../classes/InlineKeyboardMarkup.html"><code>InlineKeyboardMarkup</code></a> | <a href="./../classes/ReplyKeyboardMarkup.html"><code>ReplyKeyboardMarkup</code></a> | <a href="./../classes/ForceReply.html"><code>ForceReply</code></a> | <a href="./../classes/ReplyKeyboardRemove.html"><code>ReplyKeyboardRemove</code></a> <a class="header-anchor" href="#reply-markup-inlinekeyboardmarkup-replykeyboardmarkup-forcereply-replykeyboardremove" aria-label="Permalink to &quot;reply_markup? : [\`InlineKeyboardMarkup\`](../classes/InlineKeyboardMarkup.md) \\| [\`ReplyKeyboardMarkup\`](../classes/ReplyKeyboardMarkup.md) \\| [\`ForceReply\`](../classes/ForceReply.md) \\| [\`ReplyKeyboardRemove\`](../classes/ReplyKeyboardRemove.md)&quot;">​</a></h4><h4 id="reply-parameters-replyparameters" tabindex="-1">reply_parameters? : <a href="./ReplyParameters.html"><code>ReplyParameters</code></a> <a class="header-anchor" href="#reply-parameters-replyparameters" aria-label="Permalink to &quot;reply_parameters? : [\`ReplyParameters\`](./ReplyParameters.md)&quot;">​</a></h4><h4 id="thumbnail-inputfile" tabindex="-1">thumbnail? : <a href="./../type-aliases/InputFile.html"><code>InputFile</code></a> <a class="header-anchor" href="#thumbnail-inputfile" aria-label="Permalink to &quot;thumbnail? : [\`InputFile\`](../type-aliases/InputFile.md)&quot;">​</a></h4><h4 id="video-note-inputfile" tabindex="-1">video_note : <a href="./../type-aliases/InputFile.html"><code>InputFile</code></a> <a class="header-anchor" href="#video-note-inputfile" aria-label="Permalink to &quot;video_note : [\`InputFile\`](../type-aliases/InputFile.md)&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/VideoNotePayload.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const VideoNotePayload = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  VideoNotePayload as default
};
