import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"PaidMediaPurchasedPacket","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/PaidMediaPurchasedPacket.md","filePath":"documentation/interfaces/PaidMediaPurchasedPacket.md"}');
const _sfc_main = { name: "documentation/interfaces/PaidMediaPurchasedPacket.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="paidmediapurchasedpacket" tabindex="-1">PaidMediaPurchasedPacket <a class="header-anchor" href="#paidmediapurchasedpacket" aria-label="Permalink to &quot;PaidMediaPurchasedPacket&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="from-userpacket" tabindex="-1">from : <a href="./UserPacket.html"><code>UserPacket</code></a> <a class="header-anchor" href="#from-userpacket" aria-label="Permalink to &quot;from : [\`UserPacket\`](./UserPacket.md)&quot;">​</a></h4><h4 id="paid-media-payload-string" tabindex="-1">paid_media_payload : <code>string</code> <a class="header-anchor" href="#paid-media-payload-string" aria-label="Permalink to &quot;paid_media_payload : \`string\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/PaidMediaPurchasedPacket.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PaidMediaPurchasedPacket = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  PaidMediaPurchasedPacket as default
};
