import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"MessageReplyMarkupEditPayload","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/MessageReplyMarkupEditPayload.md","filePath":"documentation/interfaces/MessageReplyMarkupEditPayload.md"}');
const _sfc_main = { name: "documentation/interfaces/MessageReplyMarkupEditPayload.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="messagereplymarkupeditpayload" tabindex="-1">MessageReplyMarkupEditPayload <a class="header-anchor" href="#messagereplymarkupeditpayload" aria-label="Permalink to &quot;MessageReplyMarkupEditPayload&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="business-connection-id-string" tabindex="-1">business_connection_id? : <code>string</code> <a class="header-anchor" href="#business-connection-id-string" aria-label="Permalink to &quot;business_connection_id? : \`string\`&quot;">​</a></h4><h4 id="chat-id-string-number" tabindex="-1">chat_id? : <code>string</code> | <code>number</code> <a class="header-anchor" href="#chat-id-string-number" aria-label="Permalink to &quot;chat_id? : \`string\` \\| \`number\`&quot;">​</a></h4><h4 id="inline-message-id-number" tabindex="-1">inline_message_id? : <code>number</code> <a class="header-anchor" href="#inline-message-id-number" aria-label="Permalink to &quot;inline_message_id? : \`number\`&quot;">​</a></h4><h4 id="message-id-number" tabindex="-1">message_id? : <code>number</code> <a class="header-anchor" href="#message-id-number" aria-label="Permalink to &quot;message_id? : \`number\`&quot;">​</a></h4><h4 id="reply-markup-inlinekeyboardmarkup" tabindex="-1">reply_markup? : <a href="./../classes/InlineKeyboardMarkup.html"><code>InlineKeyboardMarkup</code></a> <a class="header-anchor" href="#reply-markup-inlinekeyboardmarkup" aria-label="Permalink to &quot;reply_markup? : [\`InlineKeyboardMarkup\`](../classes/InlineKeyboardMarkup.md)&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/MessageReplyMarkupEditPayload.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MessageReplyMarkupEditPayload = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  MessageReplyMarkupEditPayload as default
};
