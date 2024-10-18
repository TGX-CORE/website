import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ChatMenuButton","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/type-aliases/ChatMenuButton.md","filePath":"documentation/type-aliases/ChatMenuButton.md"}');
const _sfc_main = { name: "documentation/type-aliases/ChatMenuButton.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export TypeAlias</p><h1 id="chatmenubutton" tabindex="-1">ChatMenuButton <a class="header-anchor" href="#chatmenubutton" aria-label="Permalink to &quot;ChatMenuButton&quot;">​</a></h1><p><a href="./../namespaces/MenuButton/functions/Default.html"><code>MenuButton.Default</code></a> | <a href="./../namespaces/MenuButton/functions/Commands.html"><code>MenuButton.Commands</code></a> | <a href="./../namespaces/MenuButton/functions/WebApp.html"><code>MenuButton.WebApp</code></a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/type-aliases/ChatMenuButton.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChatMenuButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ChatMenuButton as default
};
