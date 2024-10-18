import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Chat","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/type-aliases/Chat.md","filePath":"documentation/type-aliases/Chat.md"}');
const _sfc_main = { name: "documentation/type-aliases/Chat.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export TypeAlias</p><h1 id="chat" tabindex="-1">Chat <a class="header-anchor" href="#chat" aria-label="Permalink to &quot;Chat&quot;">​</a></h1><p><a href="./../classes/SuperGroupChat.html"><code>SuperGroupChat</code></a> | <a href="./../classes/GroupChat.html"><code>GroupChat</code></a> | <a href="./../classes/ChannelChat.html"><code>ChannelChat</code></a> | <a href="./../classes/PrivateChat.html"><code>PrivateChat</code></a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/type-aliases/Chat.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Chat = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Chat as default
};
