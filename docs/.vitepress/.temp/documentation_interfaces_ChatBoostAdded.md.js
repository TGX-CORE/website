import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ChatBoostAdded","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/ChatBoostAdded.md","filePath":"documentation/interfaces/ChatBoostAdded.md"}');
const _sfc_main = { name: "documentation/interfaces/ChatBoostAdded.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="chatboostadded" tabindex="-1">ChatBoostAdded <a class="header-anchor" href="#chatboostadded" aria-label="Permalink to &quot;ChatBoostAdded&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="boost-count-number" tabindex="-1">boost_count : <code>number</code> <a class="header-anchor" href="#boost-count-number" aria-label="Permalink to &quot;boost_count : \`number\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/ChatBoostAdded.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChatBoostAdded = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ChatBoostAdded as default
};
