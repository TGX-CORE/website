import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ChatBoost","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/classes/ChatBoost.md","filePath":"documentation/classes/ChatBoost.md"}');
const _sfc_main = { name: "documentation/classes/ChatBoost.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Badge = resolveComponent("Badge");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Class</p><h1 id="chatboost" tabindex="-1">ChatBoost <a class="header-anchor" href="#chatboost" aria-label="Permalink to &quot;ChatBoost&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><code>BaseClass</code>&lt;<a href="./ChatBoost.html"><code>ChatBoost</code></a>, <a href="./../interfaces/ChatBoostUpdated.html"><code>ChatBoostUpdated</code></a> | <a href="./../interfaces/ChatBoostRemoved.html"><code>ChatBoostRemoved</code></a>&gt;</p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> ChatBoost</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">( client, packet )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>client</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./Client.html"><code>Client</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>packet</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/ChatBoostUpdated.html"><code>ChatBoostUpdated</code></a> | <a href="./../interfaces/ChatBoostRemoved.html"><code>ChatBoostRemoved</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="get-chat-chat" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` chat : <a href="./../type-aliases/Chat.html"><code>Chat</code></a> <a class="header-anchor" href="#get-chat-chat" aria-label="Permalink to &quot;$get chat : [\`Chat\`](../type-aliases/Chat.md)&quot;">​</a></h4><h4 id="get-removed-boolean" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` removed : <code>boolean</code> <a class="header-anchor" href="#get-removed-boolean" aria-label="Permalink to &quot;$get removed : \`boolean\`&quot;">​</a></h4><h4 id="get-user-user" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` user : <a href="./User.html"><code>User</code></a> <a class="header-anchor" href="#get-user-user" aria-label="Permalink to &quot;$get user : [\`User\`](./User.md)&quot;">​</a></h4><h4 id="boost-chatboostpacket" tabindex="-1">boost? : <a href="./../interfaces/ChatBoostPacket.html"><code>ChatBoostPacket</code></a> <a class="header-anchor" href="#boost-chatboostpacket" aria-label="Permalink to &quot;boost? : [\`ChatBoostPacket\`](../interfaces/ChatBoostPacket.md)&quot;">​</a></h4><h4 id="readonly-client-client" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "readonly"
  }, null, _parent));
  _push(` client : <a href="./Client.html"><code>Client</code></a> <a class="header-anchor" href="#readonly-client-client" aria-label="Permalink to &quot;$readonly client : [\`Client\`](./Client.md)&quot;">​</a></h4><h4 id="remove-date-number" tabindex="-1">remove_date? : <code>number</code> <a class="header-anchor" href="#remove-date-number" aria-label="Permalink to &quot;remove_date? : \`number\`&quot;">​</a></h4><h4 id="source-chatboostsource" tabindex="-1">source? : <a href="./../type-aliases/ChatBoostSource.html"><code>ChatBoostSource</code></a> <a class="header-anchor" href="#source-chatboostsource" aria-label="Permalink to &quot;source? : [\`ChatBoostSource\`](../type-aliases/ChatBoostSource.md)&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/classes/ChatBoost.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChatBoost = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ChatBoost as default
};
