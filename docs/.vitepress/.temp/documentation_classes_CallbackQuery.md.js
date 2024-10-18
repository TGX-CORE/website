import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CallbackQuery","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/classes/CallbackQuery.md","filePath":"documentation/classes/CallbackQuery.md"}');
const _sfc_main = { name: "documentation/classes/CallbackQuery.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Badge = resolveComponent("Badge");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Class</p><h1 id="callbackquery" tabindex="-1">CallbackQuery <a class="header-anchor" href="#callbackquery" aria-label="Permalink to &quot;CallbackQuery&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><code>BaseClass</code>&lt;<a href="./CallbackQuery.html"><code>CallbackQuery</code></a>, <a href="./../interfaces/CallbackQueryPacket.html"><code>CallbackQueryPacket</code></a>&gt;</p><h4 id="implements" tabindex="-1">implements <a class="header-anchor" href="#implements" aria-label="Permalink to &quot;implements&quot;">​</a></h4><p><code>Partial</code>&lt;<a href="./../interfaces/CallbackQueryPacket.html"><code>CallbackQueryPacket</code></a>&gt;</p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> CallbackQuery</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">( client, packet )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>client</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./Client.html"><code>Client</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>packet</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/CallbackQueryPacket.html"><code>CallbackQueryPacket</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="get-chat-supergroupchat-groupchat-channelchat-privatechat" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` chat : <a href="./SuperGroupChat.html"><code>SuperGroupChat</code></a> | <a href="./GroupChat.html"><code>GroupChat</code></a> | <a href="./ChannelChat.html"><code>ChannelChat</code></a> | <a href="./PrivateChat.html"><code>PrivateChat</code></a> <a class="header-anchor" href="#get-chat-supergroupchat-groupchat-channelchat-privatechat" aria-label="Permalink to &quot;$get chat : [\`SuperGroupChat\`](./SuperGroupChat.md) \\| [\`GroupChat\`](./GroupChat.md) \\| [\`ChannelChat\`](./ChannelChat.md) \\| [\`PrivateChat\`](./PrivateChat.md)&quot;">​</a></h4><h4 id="get-message-undefined-message" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` message : <code>undefined</code> | <a href="./Message.html"><code>Message</code></a> <a class="header-anchor" href="#get-message-undefined-message" aria-label="Permalink to &quot;$get message : \`undefined\` \\| [\`Message\`](./Message.md)&quot;">​</a></h4><h4 id="get-user-user" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` user : <a href="./User.html"><code>User</code></a> <a class="header-anchor" href="#get-user-user" aria-label="Permalink to &quot;$get user : [\`User\`](./User.md)&quot;">​</a></h4><h4 id="message-number" tabindex="-1">_message : <code>number</code> <a class="header-anchor" href="#message-number" aria-label="Permalink to &quot;_message : \`number\`&quot;">​</a></h4><h4 id="message-chat-number" tabindex="-1">_message_chat : <code>number</code> <a class="header-anchor" href="#message-chat-number" aria-label="Permalink to &quot;_message_chat : \`number\`&quot;">​</a></h4><h4 id="readonly-client-client" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "readonly"
  }, null, _parent));
  _push(` client : <a href="./Client.html"><code>Client</code></a> <a class="header-anchor" href="#readonly-client-client" aria-label="Permalink to &quot;$readonly client : [\`Client\`](./Client.md)&quot;">​</a></h4><h4 id="from-user" tabindex="-1">from : <a href="./User.html"><code>User</code></a> <a class="header-anchor" href="#from-user" aria-label="Permalink to &quot;from : [\`User\`](./User.md)&quot;">​</a></h4><h4 id="id-string" tabindex="-1">id : <code>string</code> <a class="header-anchor" href="#id-string" aria-label="Permalink to &quot;id : \`string\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/classes/CallbackQuery.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CallbackQuery = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  CallbackQuery as default
};
