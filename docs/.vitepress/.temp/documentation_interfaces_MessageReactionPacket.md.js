import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"MessageReactionPacket","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/MessageReactionPacket.md","filePath":"documentation/interfaces/MessageReactionPacket.md"}');
const _sfc_main = { name: "documentation/interfaces/MessageReactionPacket.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="messagereactionpacket" tabindex="-1">MessageReactionPacket <a class="header-anchor" href="#messagereactionpacket" aria-label="Permalink to &quot;MessageReactionPacket&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="actor-chat-id-number" tabindex="-1">actor_chat_id? : <code>number</code> <a class="header-anchor" href="#actor-chat-id-number" aria-label="Permalink to &quot;actor_chat_id? : \`number\`&quot;">​</a></h4><h4 id="chat-id-number" tabindex="-1">chat_id : <code>number</code> <a class="header-anchor" href="#chat-id-number" aria-label="Permalink to &quot;chat_id : \`number\`&quot;">​</a></h4><h4 id="custom-emoji-id-string" tabindex="-1">custom_emoji_id? : <code>string</code> <a class="header-anchor" href="#custom-emoji-id-string" aria-label="Permalink to &quot;custom_emoji_id? : \`string\`&quot;">​</a></h4><h4 id="date-number" tabindex="-1">date : <code>number</code> <a class="header-anchor" href="#date-number" aria-label="Permalink to &quot;date : \`number\`&quot;">​</a></h4><h4 id="emoji-acceptedemoji" tabindex="-1">emoji? : <a href="./../type-aliases/AcceptedEmoji.html"><code>AcceptedEmoji</code></a> <a class="header-anchor" href="#emoji-acceptedemoji" aria-label="Permalink to &quot;emoji? : [\`AcceptedEmoji\`](../type-aliases/AcceptedEmoji.md)&quot;">​</a></h4><h4 id="from-userpacket" tabindex="-1">from? : <a href="./UserPacket.html"><code>UserPacket</code></a> <a class="header-anchor" href="#from-userpacket" aria-label="Permalink to &quot;from? : [\`UserPacket\`](./UserPacket.md)&quot;">​</a></h4><h4 id="message-id-number" tabindex="-1">message_id : <code>number</code> <a class="header-anchor" href="#message-id-number" aria-label="Permalink to &quot;message_id : \`number\`&quot;">​</a></h4><h4 id="type-custom-emoji-paid-emoji" tabindex="-1">type : <code>&quot;custom_emoji&quot;</code> | <code>&quot;paid&quot;</code> | <code>&quot;emoji&quot;</code> <a class="header-anchor" href="#type-custom-emoji-paid-emoji" aria-label="Permalink to &quot;type : \`&quot;custom_emoji&quot;\` \\| \`&quot;paid&quot;\` \\| \`&quot;emoji&quot;\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/MessageReactionPacket.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MessageReactionPacket = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  MessageReactionPacket as default
};
