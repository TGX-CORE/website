import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ChatActionPayload","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/ChatActionPayload.md","filePath":"documentation/interfaces/ChatActionPayload.md"}');
const _sfc_main = { name: "documentation/interfaces/ChatActionPayload.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="chatactionpayload" tabindex="-1">ChatActionPayload <a class="header-anchor" href="#chatactionpayload" aria-label="Permalink to &quot;ChatActionPayload&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="action-chataction" tabindex="-1">action : <a href="./../enumerations/ChatAction.html"><code>ChatAction</code></a> <a class="header-anchor" href="#action-chataction" aria-label="Permalink to &quot;action : [\`ChatAction\`](../enumerations/ChatAction.md)&quot;">​</a></h4><h4 id="chat-id-string-number" tabindex="-1">chat_id? : <code>string</code> | <code>number</code> <a class="header-anchor" href="#chat-id-string-number" aria-label="Permalink to &quot;chat_id? : \`string\` \\| \`number\`&quot;">​</a></h4><h4 id="message-thread-id-number" tabindex="-1">message_thread_id? : <code>number</code> <a class="header-anchor" href="#message-thread-id-number" aria-label="Permalink to &quot;message_thread_id? : \`number\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/ChatActionPayload.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChatActionPayload = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ChatActionPayload as default
};