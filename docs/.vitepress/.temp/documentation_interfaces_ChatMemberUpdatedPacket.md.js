import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ChatMemberUpdatedPacket","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/ChatMemberUpdatedPacket.md","filePath":"documentation/interfaces/ChatMemberUpdatedPacket.md"}');
const _sfc_main = { name: "documentation/interfaces/ChatMemberUpdatedPacket.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="chatmemberupdatedpacket" tabindex="-1">ChatMemberUpdatedPacket <a class="header-anchor" href="#chatmemberupdatedpacket" aria-label="Permalink to &quot;ChatMemberUpdatedPacket&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="date-number" tabindex="-1">date : <code>number</code> <a class="header-anchor" href="#date-number" aria-label="Permalink to &quot;date : \`number\`&quot;">​</a></h4><h4 id="invite-link-chatinvitelink" tabindex="-1">invite_link? : <code>ChatInviteLink</code> <a class="header-anchor" href="#invite-link-chatinvitelink" aria-label="Permalink to &quot;invite_link? : \`ChatInviteLink\`&quot;">​</a></h4><h4 id="new-chat-member-chatmember" tabindex="-1">new_chat_member : <a href="./../type-aliases/ChatMember.html"><code>ChatMember</code></a> <a class="header-anchor" href="#new-chat-member-chatmember" aria-label="Permalink to &quot;new_chat_member : [\`ChatMember\`](../type-aliases/ChatMember.md)&quot;">​</a></h4><h4 id="old-chat-member-chatmember" tabindex="-1">old_chat_member : <a href="./../type-aliases/ChatMember.html"><code>ChatMember</code></a> <a class="header-anchor" href="#old-chat-member-chatmember" aria-label="Permalink to &quot;old_chat_member : [\`ChatMember\`](../type-aliases/ChatMember.md)&quot;">​</a></h4><h4 id="via-chat-folder-invite-link-boolean" tabindex="-1">via_chat_folder_invite_link? : <code>boolean</code> <a class="header-anchor" href="#via-chat-folder-invite-link-boolean" aria-label="Permalink to &quot;via_chat_folder_invite_link? : \`boolean\`&quot;">​</a></h4><h4 id="via-join-request-boolean" tabindex="-1">via_join_request? : <code>boolean</code> <a class="header-anchor" href="#via-join-request-boolean" aria-label="Permalink to &quot;via_join_request? : \`boolean\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/ChatMemberUpdatedPacket.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChatMemberUpdatedPacket = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ChatMemberUpdatedPacket as default
};
