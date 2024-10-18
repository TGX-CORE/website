import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"MessageOriginChannel","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/MessageOriginChannel.md","filePath":"documentation/interfaces/MessageOriginChannel.md"}');
const _sfc_main = { name: "documentation/interfaces/MessageOriginChannel.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="messageoriginchannel" tabindex="-1">MessageOriginChannel <a class="header-anchor" href="#messageoriginchannel" aria-label="Permalink to &quot;MessageOriginChannel&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="author-signature-string" tabindex="-1">author_signature? : <code>string</code> <a class="header-anchor" href="#author-signature-string" aria-label="Permalink to &quot;author_signature? : \`string\`&quot;">​</a></h4><h4 id="chat-chatpacket" tabindex="-1">chat : <a href="./ChatPacket.html"><code>ChatPacket</code></a> <a class="header-anchor" href="#chat-chatpacket" aria-label="Permalink to &quot;chat : [\`ChatPacket\`](./ChatPacket.md)&quot;">​</a></h4><h4 id="date-number" tabindex="-1">date : <code>number</code> <a class="header-anchor" href="#date-number" aria-label="Permalink to &quot;date : \`number\`&quot;">​</a></h4><h4 id="message-id-number" tabindex="-1">message_id : <code>number</code> <a class="header-anchor" href="#message-id-number" aria-label="Permalink to &quot;message_id : \`number\`&quot;">​</a></h4><h4 id="type-channel" tabindex="-1">type : <code>&quot;channel&quot;</code> <a class="header-anchor" href="#type-channel" aria-label="Permalink to &quot;type : \`&quot;channel&quot;\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/MessageOriginChannel.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MessageOriginChannel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  MessageOriginChannel as default
};
