import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"TGX-CORE","text":"The most powerful framework to interact with the Telegram API.","actions":[{"theme":"brand","text":"Get Started","link":"/guidebook/README"},{"theme":"alt","text":"Documentation","link":"/documentation/README"}]},"features":[{"title":"Object Oriented"},{"title":"Flexible"},{"title":"Modular"},{"title":"99% API Coverage"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="warning custom-block"><p class="custom-block-title">Incomplete Documentation</p><p>Some parts of the documentation are still missing or incomplete as it is currently under development. However, if you notice a part of the documentation has been missing or incomplete for quite some time; Please do contact the developer ont the dedicated support platforms.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
