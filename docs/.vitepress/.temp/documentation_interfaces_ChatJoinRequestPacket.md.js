import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ChatJoinRequestPacket","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/ChatJoinRequestPacket.md","filePath":"documentation/interfaces/ChatJoinRequestPacket.md"}');
const _sfc_main = { name: "documentation/interfaces/ChatJoinRequestPacket.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="chatjoinrequestpacket" tabindex="-1">ChatJoinRequestPacket <a class="header-anchor" href="#chatjoinrequestpacket" aria-label="Permalink to &quot;ChatJoinRequestPacket&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="bio-string" tabindex="-1">bio : <code>string</code> <a class="header-anchor" href="#bio-string" aria-label="Permalink to &quot;bio : \`string\`&quot;">​</a></h4><h4 id="chat-basechat" tabindex="-1">chat? : <a href="./../classes/BaseChat.html"><code>BaseChat</code></a> <a class="header-anchor" href="#chat-basechat" aria-label="Permalink to &quot;chat? : [\`BaseChat\`](../classes/BaseChat.md)&quot;">​</a></h4><h4 id="date-number" tabindex="-1">date : <code>number</code> <a class="header-anchor" href="#date-number" aria-label="Permalink to &quot;date : \`number\`&quot;">​</a></h4><h4 id="from-user" tabindex="-1">from : <a href="./../classes/User.html"><code>User</code></a> <a class="header-anchor" href="#from-user" aria-label="Permalink to &quot;from : [\`User\`](../classes/User.md)&quot;">​</a></h4><h4 id="invite-link-chatinvitelink" tabindex="-1">invite_link : <a href="./ChatInviteLink.html"><code>ChatInviteLink</code></a> <a class="header-anchor" href="#invite-link-chatinvitelink" aria-label="Permalink to &quot;invite_link : [\`ChatInviteLink\`](./ChatInviteLink.md)&quot;">​</a></h4><h4 id="user-chat-id-number" tabindex="-1">user_chat_id : <code>number</code> <a class="header-anchor" href="#user-chat-id-number" aria-label="Permalink to &quot;user_chat_id : \`number\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/ChatJoinRequestPacket.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChatJoinRequestPacket = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ChatJoinRequestPacket as default
};
