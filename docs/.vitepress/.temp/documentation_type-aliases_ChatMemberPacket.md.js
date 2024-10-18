import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ChatMemberPacket","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/type-aliases/ChatMemberPacket.md","filePath":"documentation/type-aliases/ChatMemberPacket.md"}');
const _sfc_main = { name: "documentation/type-aliases/ChatMemberPacket.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export TypeAlias</p><h1 id="chatmemberpacket" tabindex="-1">ChatMemberPacket <a class="header-anchor" href="#chatmemberpacket" aria-label="Permalink to &quot;ChatMemberPacket&quot;">​</a></h1><p><a href="./../interfaces/ChatMemberOwner.html"><code>ChatMemberOwner</code></a> | <a href="./../interfaces/ChatMemberAdministrator.html"><code>ChatMemberAdministrator</code></a> | <a href="./../interfaces/ChatMemberMember.html"><code>ChatMemberMember</code></a> | <a href="./../interfaces/ChatMemberRestricted.html"><code>ChatMemberRestricted</code></a> | <a href="./../interfaces/ChatMemberLeft.html"><code>ChatMemberLeft</code></a> | <a href="./../interfaces/ChatMemberBanned.html"><code>ChatMemberBanned</code></a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/type-aliases/ChatMemberPacket.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChatMemberPacket = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ChatMemberPacket as default
};
