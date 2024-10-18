import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ChatBoostSourcePremium","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/ChatBoostSourcePremium.md","filePath":"documentation/interfaces/ChatBoostSourcePremium.md"}');
const _sfc_main = { name: "documentation/interfaces/ChatBoostSourcePremium.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="chatboostsourcepremium" tabindex="-1">ChatBoostSourcePremium <a class="header-anchor" href="#chatboostsourcepremium" aria-label="Permalink to &quot;ChatBoostSourcePremium&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="source-premium" tabindex="-1">source : <code>&quot;premium&quot;</code> <a class="header-anchor" href="#source-premium" aria-label="Permalink to &quot;source : \`&quot;premium&quot;\`&quot;">​</a></h4><h4 id="user-userpacket" tabindex="-1">user : <a href="./UserPacket.html"><code>UserPacket</code></a> <a class="header-anchor" href="#user-userpacket" aria-label="Permalink to &quot;user : [\`UserPacket\`](./UserPacket.md)&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/ChatBoostSourcePremium.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChatBoostSourcePremium = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ChatBoostSourcePremium as default
};
