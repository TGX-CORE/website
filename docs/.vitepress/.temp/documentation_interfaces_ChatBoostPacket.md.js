import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ChatBoostPacket","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/ChatBoostPacket.md","filePath":"documentation/interfaces/ChatBoostPacket.md"}');
const _sfc_main = { name: "documentation/interfaces/ChatBoostPacket.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="chatboostpacket" tabindex="-1">ChatBoostPacket <a class="header-anchor" href="#chatboostpacket" aria-label="Permalink to &quot;ChatBoostPacket&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="add-date-number" tabindex="-1">add_date : <code>number</code> <a class="header-anchor" href="#add-date-number" aria-label="Permalink to &quot;add_date : \`number\`&quot;">​</a></h4><h4 id="boost-id-number" tabindex="-1">boost_id : <code>number</code> <a class="header-anchor" href="#boost-id-number" aria-label="Permalink to &quot;boost_id : \`number\`&quot;">​</a></h4><h4 id="expiration-date-number" tabindex="-1">expiration_date : <code>number</code> <a class="header-anchor" href="#expiration-date-number" aria-label="Permalink to &quot;expiration_date : \`number\`&quot;">​</a></h4><h4 id="source-chatboostsource" tabindex="-1">source : <a href="./../type-aliases/ChatBoostSource.html"><code>ChatBoostSource</code></a> <a class="header-anchor" href="#source-chatboostsource" aria-label="Permalink to &quot;source : [\`ChatBoostSource\`](../type-aliases/ChatBoostSource.md)&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/ChatBoostPacket.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChatBoostPacket = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ChatBoostPacket as default
};
