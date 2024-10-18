import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"MessageOrigin","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/type-aliases/MessageOrigin.md","filePath":"documentation/type-aliases/MessageOrigin.md"}');
const _sfc_main = { name: "documentation/type-aliases/MessageOrigin.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export TypeAlias</p><h1 id="messageorigin" tabindex="-1">MessageOrigin <a class="header-anchor" href="#messageorigin" aria-label="Permalink to &quot;MessageOrigin&quot;">​</a></h1><p><a href="./../interfaces/MessageOriginChannel.html"><code>MessageOriginChannel</code></a> | <a href="./../interfaces/MessageOriginChat.html"><code>MessageOriginChat</code></a> | <a href="./../interfaces/MessageOriginHiddenUser.html"><code>MessageOriginHiddenUser</code></a> | <a href="./../interfaces/MessageOriginUser.html"><code>MessageOriginUser</code></a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/type-aliases/MessageOrigin.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MessageOrigin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  MessageOrigin as default
};
