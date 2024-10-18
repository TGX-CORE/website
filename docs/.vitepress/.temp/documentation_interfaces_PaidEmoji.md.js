import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"PaidEmoji","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/PaidEmoji.md","filePath":"documentation/interfaces/PaidEmoji.md"}');
const _sfc_main = { name: "documentation/interfaces/PaidEmoji.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="paidemoji" tabindex="-1">PaidEmoji <a class="header-anchor" href="#paidemoji" aria-label="Permalink to &quot;PaidEmoji&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="type-paid" tabindex="-1">type : <code>&quot;paid&quot;</code> <a class="header-anchor" href="#type-paid" aria-label="Permalink to &quot;type : \`&quot;paid&quot;\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/PaidEmoji.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PaidEmoji = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  PaidEmoji as default
};
