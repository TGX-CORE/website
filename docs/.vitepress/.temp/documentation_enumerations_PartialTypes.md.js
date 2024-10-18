import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"PartialTypes","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/enumerations/PartialTypes.md","filePath":"documentation/enumerations/PartialTypes.md"}');
const _sfc_main = { name: "documentation/enumerations/PartialTypes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Enum</p><h1 id="partialtypes" tabindex="-1">PartialTypes <a class="header-anchor" href="#partialtypes" aria-label="Permalink to &quot;PartialTypes&quot;">​</a></h1><p>Wether to cache partial datas even if it&#39;s not complete and to be fetched.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Member</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Value</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">Chat</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>0</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Cache partial chats.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">Member</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>1</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Cache partial members.</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/enumerations/PartialTypes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PartialTypes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  PartialTypes as default
};
