import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ChatBoostRemoved","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/ChatBoostRemoved.md","filePath":"documentation/interfaces/ChatBoostRemoved.md"}');
const _sfc_main = { name: "documentation/interfaces/ChatBoostRemoved.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="chatboostremoved" tabindex="-1">ChatBoostRemoved <a class="header-anchor" href="#chatboostremoved" aria-label="Permalink to &quot;ChatBoostRemoved&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="boost-id-string" tabindex="-1">boost_id : <code>string</code> <a class="header-anchor" href="#boost-id-string" aria-label="Permalink to &quot;boost_id : \`string\`&quot;">​</a></h4><h4 id="chat-chatpacket" tabindex="-1">chat : <a href="./ChatPacket.html"><code>ChatPacket</code></a> <a class="header-anchor" href="#chat-chatpacket" aria-label="Permalink to &quot;chat : [\`ChatPacket\`](./ChatPacket.md)&quot;">​</a></h4><h4 id="remove-date-number" tabindex="-1">remove_date : <code>number</code> <a class="header-anchor" href="#remove-date-number" aria-label="Permalink to &quot;remove_date : \`number\`&quot;">​</a></h4><h4 id="source-chatboostsource" tabindex="-1">source : <a href="./../type-aliases/ChatBoostSource.html"><code>ChatBoostSource</code></a> <a class="header-anchor" href="#source-chatboostsource" aria-label="Permalink to &quot;source : [\`ChatBoostSource\`](../type-aliases/ChatBoostSource.md)&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/ChatBoostRemoved.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChatBoostRemoved = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ChatBoostRemoved as default
};
