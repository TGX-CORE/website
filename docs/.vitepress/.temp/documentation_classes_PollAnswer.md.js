import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"PollAnswer","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/classes/PollAnswer.md","filePath":"documentation/classes/PollAnswer.md"}');
const _sfc_main = { name: "documentation/classes/PollAnswer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Badge = resolveComponent("Badge");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Class</p><h1 id="pollanswer" tabindex="-1">PollAnswer <a class="header-anchor" href="#pollanswer" aria-label="Permalink to &quot;PollAnswer&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><code>BaseClass</code>&lt;<a href="./PollAnswer.html"><code>PollAnswer</code></a>, <a href="./../interfaces/PollAnswerPacket.html"><code>PollAnswerPacket</code></a>&gt;</p><h4 id="implements" tabindex="-1">implements <a class="header-anchor" href="#implements" aria-label="Permalink to &quot;implements&quot;">​</a></h4><p><a href="./../interfaces/PollAnswerPacket.html"><code>PollAnswerPacket</code></a></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> PollAnswer</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">( client, packet )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>client</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./Client.html"><code>Client</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>packet</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/PollAnswerPacket.html"><code>PollAnswerPacket</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="get-id-number" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` id : <code>number</code> <a class="header-anchor" href="#get-id-number" aria-label="Permalink to &quot;$get id : \`number\`&quot;">​</a></h4><h4 id="get-poll-poll" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` poll : <a href="./Poll.html"><code>Poll</code></a> <a class="header-anchor" href="#get-poll-poll" aria-label="Permalink to &quot;$get poll : [\`Poll\`](./Poll.md)&quot;">​</a></h4><h4 id="get-user-undefined-user" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` user : <code>undefined</code> | <a href="./User.html"><code>User</code></a> <a class="header-anchor" href="#get-user-undefined-user" aria-label="Permalink to &quot;$get user : \`undefined\` \\| [\`User\`](./User.md)&quot;">​</a></h4><h4 id="get-voter-chat-undefined-supergroupchat-groupchat-channelchat-privatechat" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` voter_chat : <code>undefined</code> | <a href="./SuperGroupChat.html"><code>SuperGroupChat</code></a> | <a href="./GroupChat.html"><code>GroupChat</code></a> | <a href="./ChannelChat.html"><code>ChannelChat</code></a> | <a href="./PrivateChat.html"><code>PrivateChat</code></a> <a class="header-anchor" href="#get-voter-chat-undefined-supergroupchat-groupchat-channelchat-privatechat" aria-label="Permalink to &quot;$get voter_chat : \`undefined\` \\| [\`SuperGroupChat\`](./SuperGroupChat.md) \\| [\`GroupChat\`](./GroupChat.md) \\| [\`ChannelChat\`](./ChannelChat.md) \\| [\`PrivateChat\`](./PrivateChat.md)&quot;">​</a></h4><h4 id="readonly-client-client" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "readonly"
  }, null, _parent));
  _push(` client : <a href="./Client.html"><code>Client</code></a> <a class="header-anchor" href="#readonly-client-client" aria-label="Permalink to &quot;$readonly client : [\`Client\`](./Client.md)&quot;">​</a></h4><h4 id="option-ids-number" tabindex="-1">option_ids : <code>number</code>[] <a class="header-anchor" href="#option-ids-number" aria-label="Permalink to &quot;option_ids : \`number\`[]&quot;">​</a></h4><h4 id="poll-id-string" tabindex="-1">poll_id : <code>string</code> <a class="header-anchor" href="#poll-id-string" aria-label="Permalink to &quot;poll_id : \`string\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/classes/PollAnswer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PollAnswer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  PollAnswer as default
};
