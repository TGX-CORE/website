import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ChatBackground","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/ChatBackground.md","filePath":"documentation/interfaces/ChatBackground.md"}');
const _sfc_main = { name: "documentation/interfaces/ChatBackground.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="chatbackground" tabindex="-1">ChatBackground <a class="header-anchor" href="#chatbackground" aria-label="Permalink to &quot;ChatBackground&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="type-backgroundtype" tabindex="-1">type : <a href="./../type-aliases/BackgroundType.html"><code>BackgroundType</code></a> <a class="header-anchor" href="#type-backgroundtype" aria-label="Permalink to &quot;type : [\`BackgroundType\`](../type-aliases/BackgroundType.md)&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/ChatBackground.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChatBackground = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ChatBackground as default
};
