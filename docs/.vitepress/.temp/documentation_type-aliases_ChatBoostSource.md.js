import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ChatBoostSource","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/type-aliases/ChatBoostSource.md","filePath":"documentation/type-aliases/ChatBoostSource.md"}');
const _sfc_main = { name: "documentation/type-aliases/ChatBoostSource.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export TypeAlias</p><h1 id="chatboostsource" tabindex="-1">ChatBoostSource <a class="header-anchor" href="#chatboostsource" aria-label="Permalink to &quot;ChatBoostSource&quot;">​</a></h1><p><a href="./../interfaces/ChatBoostSourceGiftCode.html"><code>ChatBoostSourceGiftCode</code></a> | <a href="./../interfaces/ChatBoostSourceGiveaway.html"><code>ChatBoostSourceGiveaway</code></a> | <a href="./../interfaces/ChatBoostSourcePremium.html"><code>ChatBoostSourcePremium</code></a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/type-aliases/ChatBoostSource.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChatBoostSource = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ChatBoostSource as default
};
