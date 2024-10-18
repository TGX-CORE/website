import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BusinessMessagesDeletedPacket","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/BusinessMessagesDeletedPacket.md","filePath":"documentation/interfaces/BusinessMessagesDeletedPacket.md"}');
const _sfc_main = { name: "documentation/interfaces/BusinessMessagesDeletedPacket.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="businessmessagesdeletedpacket" tabindex="-1">BusinessMessagesDeletedPacket <a class="header-anchor" href="#businessmessagesdeletedpacket" aria-label="Permalink to &quot;BusinessMessagesDeletedPacket&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="business-connection-id-string" tabindex="-1">business_connection_id : <code>string</code> <a class="header-anchor" href="#business-connection-id-string" aria-label="Permalink to &quot;business_connection_id : \`string\`&quot;">​</a></h4><h4 id="chat-chatpacket" tabindex="-1">chat : <a href="./ChatPacket.html"><code>ChatPacket</code></a> <a class="header-anchor" href="#chat-chatpacket" aria-label="Permalink to &quot;chat : [\`ChatPacket\`](./ChatPacket.md)&quot;">​</a></h4><h4 id="message-ids-number" tabindex="-1">message_ids : <code>number</code>[] <a class="header-anchor" href="#message-ids-number" aria-label="Permalink to &quot;message_ids : \`number\`[]&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/BusinessMessagesDeletedPacket.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BusinessMessagesDeletedPacket = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  BusinessMessagesDeletedPacket as default
};
