import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CopyMessagePayload","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/CopyMessagePayload.md","filePath":"documentation/interfaces/CopyMessagePayload.md"}');
const _sfc_main = { name: "documentation/interfaces/CopyMessagePayload.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="copymessagepayload" tabindex="-1">CopyMessagePayload <a class="header-anchor" href="#copymessagepayload" aria-label="Permalink to &quot;CopyMessagePayload&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="chat-id-string-number" tabindex="-1">chat_id? : <code>string</code> | <code>number</code> <a class="header-anchor" href="#chat-id-string-number" aria-label="Permalink to &quot;chat_id? : \`string\` \\| \`number\`&quot;">​</a></h4><h4 id="disable-notification-boolean" tabindex="-1">disable_notification? : <code>boolean</code> <a class="header-anchor" href="#disable-notification-boolean" aria-label="Permalink to &quot;disable_notification? : \`boolean\`&quot;">​</a></h4><h4 id="from-chat-id-number" tabindex="-1">from_chat_id : <code>number</code> <a class="header-anchor" href="#from-chat-id-number" aria-label="Permalink to &quot;from_chat_id : \`number\`&quot;">​</a></h4><h4 id="message-ids-number" tabindex="-1">message_ids : <code>number</code>[] <a class="header-anchor" href="#message-ids-number" aria-label="Permalink to &quot;message_ids : \`number\`[]&quot;">​</a></h4><h4 id="message-thread-id-number" tabindex="-1">message_thread_id? : <code>number</code> <a class="header-anchor" href="#message-thread-id-number" aria-label="Permalink to &quot;message_thread_id? : \`number\`&quot;">​</a></h4><h4 id="protect-content-boolean" tabindex="-1">protect_content? : <code>boolean</code> <a class="header-anchor" href="#protect-content-boolean" aria-label="Permalink to &quot;protect_content? : \`boolean\`&quot;">​</a></h4><h4 id="remove-caption-boolean" tabindex="-1">remove_caption? : <code>boolean</code> <a class="header-anchor" href="#remove-caption-boolean" aria-label="Permalink to &quot;remove_caption? : \`boolean\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/CopyMessagePayload.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CopyMessagePayload = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  CopyMessagePayload as default
};
