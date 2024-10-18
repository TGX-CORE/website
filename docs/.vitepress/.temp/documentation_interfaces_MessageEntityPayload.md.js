import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"MessageEntityPayload","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/MessageEntityPayload.md","filePath":"documentation/interfaces/MessageEntityPayload.md"}');
const _sfc_main = { name: "documentation/interfaces/MessageEntityPayload.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="messageentitypayload" tabindex="-1">MessageEntityPayload <a class="header-anchor" href="#messageentitypayload" aria-label="Permalink to &quot;MessageEntityPayload&quot;">​</a></h1><p>Represents a special entity in a text message. For example, hashtags, usernames, URLs, etc.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="custom-emoji-id-string" tabindex="-1">custom_emoji_id? : <code>string</code> <a class="header-anchor" href="#custom-emoji-id-string" aria-label="Permalink to &quot;custom_emoji_id? : \`string\`&quot;">​</a></h4><p>For “custom_emoji” only, unique identifier of the custom emoji. Use getCustomEmojiStickers to get full information about the sticker</p><h4 id="language-string" tabindex="-1">language? : <code>string</code> <a class="header-anchor" href="#language-string" aria-label="Permalink to &quot;language? : \`string\`&quot;">​</a></h4><p>For “pre” only, the programming language of the entity text</p><h4 id="length-number" tabindex="-1">length : <code>number</code> <a class="header-anchor" href="#length-number" aria-label="Permalink to &quot;length : \`number\`&quot;">​</a></h4><p>Length of the entity in UTF-16 code units</p><h4 id="offset-number" tabindex="-1">offset : <code>number</code> <a class="header-anchor" href="#offset-number" aria-label="Permalink to &quot;offset : \`number\`&quot;">​</a></h4><h4 id="type-string" tabindex="-1">type : <code>string</code> <a class="header-anchor" href="#type-string" aria-label="Permalink to &quot;type : \`string\`&quot;">​</a></h4><p>The type of the entity.</p><h4 id="url-string" tabindex="-1">url? : <code>string</code> <a class="header-anchor" href="#url-string" aria-label="Permalink to &quot;url? : \`string\`&quot;">​</a></h4><p>For “text_link” only, URL that will be opened after user taps on the text</p><h4 id="user-userpacket" tabindex="-1">user? : <a href="./UserPacket.html"><code>UserPacket</code></a> <a class="header-anchor" href="#user-userpacket" aria-label="Permalink to &quot;user? : [\`UserPacket\`](./UserPacket.md)&quot;">​</a></h4><p>For “text_mention” only, the mentioned user</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/MessageEntityPayload.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MessageEntityPayload = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  MessageEntityPayload as default
};
