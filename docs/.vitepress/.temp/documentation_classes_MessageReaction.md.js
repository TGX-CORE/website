import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"MessageReaction","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/classes/MessageReaction.md","filePath":"documentation/classes/MessageReaction.md"}');
const _sfc_main = { name: "documentation/classes/MessageReaction.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Badge = resolveComponent("Badge");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Class</p><h1 id="messagereaction" tabindex="-1">MessageReaction <a class="header-anchor" href="#messagereaction" aria-label="Permalink to &quot;MessageReaction&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><code>BaseClass</code>&lt;<a href="./MessageReaction.html"><code>MessageReaction</code></a>, <a href="./../interfaces/MessageReactionPacket.html"><code>MessageReactionPacket</code></a>&gt;</p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> MessageReaction</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">( client, packet )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>client</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./Client.html"><code>Client</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>packet</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/MessageReactionPacket.html"><code>MessageReactionPacket</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="get-actor-chat-undefined-chat" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` actor_chat : <code>undefined</code> | <a href="./../type-aliases/Chat.html"><code>Chat</code></a> <a class="header-anchor" href="#get-actor-chat-undefined-chat" aria-label="Permalink to &quot;$get actor_chat : \`undefined\` \\| [\`Chat\`](../type-aliases/Chat.md)&quot;">​</a></h4><h4 id="get-chat-undefined-chat" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` chat : <code>undefined</code> | <a href="./../type-aliases/Chat.html"><code>Chat</code></a> <a class="header-anchor" href="#get-chat-undefined-chat" aria-label="Permalink to &quot;$get chat : \`undefined\` \\| [\`Chat\`](../type-aliases/Chat.md)&quot;">​</a></h4><h4 id="get-id-number" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` id : <code>number</code> <a class="header-anchor" href="#get-id-number" aria-label="Permalink to &quot;$get id : \`number\`&quot;">​</a></h4><h4 id="get-user-undefined-user" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` user : <code>undefined</code> | <a href="./User.html"><code>User</code></a> <a class="header-anchor" href="#get-user-undefined-user" aria-label="Permalink to &quot;$get user : \`undefined\` \\| [\`User\`](./User.md)&quot;">​</a></h4><h4 id="get-value-string" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` value : <code>string</code> <a class="header-anchor" href="#get-value-string" aria-label="Permalink to &quot;$get value : \`string\`&quot;">​</a></h4><h4 id="actor-chat-id-number" tabindex="-1">actor_chat_id? : <code>number</code> <a class="header-anchor" href="#actor-chat-id-number" aria-label="Permalink to &quot;actor_chat_id? : \`number\`&quot;">​</a></h4><h4 id="readonly-client-client" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "readonly"
  }, null, _parent));
  _push(` client : <a href="./Client.html"><code>Client</code></a> <a class="header-anchor" href="#readonly-client-client" aria-label="Permalink to &quot;$readonly client : [\`Client\`](./Client.md)&quot;">​</a></h4><h4 id="custom-emoji-id-string" tabindex="-1">custom_emoji_id? : <code>string</code> <a class="header-anchor" href="#custom-emoji-id-string" aria-label="Permalink to &quot;custom_emoji_id? : \`string\`&quot;">​</a></h4><h4 id="emoji-string" tabindex="-1">emoji? : <code>string</code> <a class="header-anchor" href="#emoji-string" aria-label="Permalink to &quot;emoji? : \`string\`&quot;">​</a></h4><h4 id="type-string" tabindex="-1">type : <code>string</code> <a class="header-anchor" href="#type-string" aria-label="Permalink to &quot;type : \`string\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/classes/MessageReaction.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MessageReaction = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  MessageReaction as default
};
