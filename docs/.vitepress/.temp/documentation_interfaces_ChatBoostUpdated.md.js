import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ChatBoostUpdated","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/ChatBoostUpdated.md","filePath":"documentation/interfaces/ChatBoostUpdated.md"}');
const _sfc_main = { name: "documentation/interfaces/ChatBoostUpdated.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="chatboostupdated" tabindex="-1">ChatBoostUpdated <a class="header-anchor" href="#chatboostupdated" aria-label="Permalink to &quot;ChatBoostUpdated&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="boost-chatboostpacket" tabindex="-1">boost : <a href="./ChatBoostPacket.html"><code>ChatBoostPacket</code></a> <a class="header-anchor" href="#boost-chatboostpacket" aria-label="Permalink to &quot;boost : [\`ChatBoostPacket\`](./ChatBoostPacket.md)&quot;">​</a></h4><h4 id="chat-chatpacket" tabindex="-1">chat? : <a href="./ChatPacket.html"><code>ChatPacket</code></a> <a class="header-anchor" href="#chat-chatpacket" aria-label="Permalink to &quot;chat? : [\`ChatPacket\`](./ChatPacket.md)&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/ChatBoostUpdated.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChatBoostUpdated = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ChatBoostUpdated as default
};
