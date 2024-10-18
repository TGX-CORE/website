import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ChatInviteLinksManager","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/classes/ChatInviteLinksManager.md","filePath":"documentation/classes/ChatInviteLinksManager.md"}');
const _sfc_main = { name: "documentation/classes/ChatInviteLinksManager.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Badge = resolveComponent("Badge");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Class</p><h1 id="chatinvitelinksmanager" tabindex="-1">ChatInviteLinksManager <a class="header-anchor" href="#chatinvitelinksmanager" aria-label="Permalink to &quot;ChatInviteLinksManager&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><code>CachedManager</code>&lt;<code>string</code>, <code>ChatInviteLink</code>&gt;</p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> ChatInviteLinksManager</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">( chat )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>chat</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./SuperGroupChat.html"><code>SuperGroupChat</code></a> | <a href="./GroupChat.html"><code>GroupChat</code></a> | <a href="./ChannelChat.html"><code>ChannelChat</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="get-cache-collection-cachedmanager-k-cachedmanager-v" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` cache : <code>Collection</code>&lt;<code>CachedManager.K</code>, <code>CachedManager.V</code>&gt; <a class="header-anchor" href="#get-cache-collection-cachedmanager-k-cachedmanager-v" aria-label="Permalink to &quot;$get cache : \`Collection\`\\&lt;\`CachedManager.K\`, \`CachedManager.V\`\\&gt;&quot;">​</a></h4><h4 id="chat-supergroupchat-groupchat-channelchat" tabindex="-1">chat : <a href="./SuperGroupChat.html"><code>SuperGroupChat</code></a> | <a href="./GroupChat.html"><code>GroupChat</code></a> | <a href="./ChannelChat.html"><code>ChannelChat</code></a> <a class="header-anchor" href="#chat-supergroupchat-groupchat-channelchat" aria-label="Permalink to &quot;chat : [\`SuperGroupChat\`](./SuperGroupChat.md) \\| [\`GroupChat\`](./GroupChat.md) \\| [\`ChannelChat\`](./ChannelChat.md)&quot;">​</a></h4><h4 id="readonly-client-client" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "readonly"
  }, null, _parent));
  _push(` client : <a href="./Client.html"><code>Client</code></a> <a class="header-anchor" href="#readonly-client-client" aria-label="Permalink to &quot;$readonly client : [\`Client\`](./Client.md)&quot;">​</a></h4><h4 id="readonly-default-any" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "readonly"
  }, null, _parent));
  _push(` default? : <code>any</code> <a class="header-anchor" href="#readonly-default-any" aria-label="Permalink to &quot;$readonly default? : \`any\`&quot;">​</a></h4><h4 id="readonly-options-any" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "readonly"
  }, null, _parent));
  _push(` options : <code>any</code> <a class="header-anchor" href="#readonly-options-any" aria-label="Permalink to &quot;$readonly options : \`any\`&quot;">​</a></h4><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h4 id="add-data-cache-param2" tabindex="-1">_add( data, cache, param2 ) <a class="header-anchor" href="#add-data-cache-param2" aria-label="Permalink to &quot;_add( data, cache, param2 )&quot;">​</a></h4><p>Add data with cache check to the current manager.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>data</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>any</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The data to add to the cache manager.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>cache</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>boolean</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Pass <em>True</em> to cache the data.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>param2</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>any</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Additional data to pass.</td></tr></tbody></table><p>Returns: <code>any</code></p><h4 id="asynccreate-payload" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`create( payload ) <a class="header-anchor" href="#asynccreate-payload" aria-label="Permalink to &quot;$asynccreate( payload )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>payload</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/ChatInviteLinkCreatePayload.html"><code>ChatInviteLinkCreatePayload</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code> | <code>ChatInviteLink</code>&gt;</p><h4 id="asynccreatesubscription-payload" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`createSubscription( payload ) <a class="header-anchor" href="#asynccreatesubscription-payload" aria-label="Permalink to &quot;$asynccreateSubscription( payload )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>payload</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/ChatInviteLinkSubscriptionPayload.html"><code>ChatInviteLinkSubscriptionPayload</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code> | <code>ChatInviteLink</code>&gt;</p><h4 id="asyncedit-payload" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`edit( payload ) <a class="header-anchor" href="#asyncedit-payload" aria-label="Permalink to &quot;$asyncedit( payload )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>payload</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>ChatInviteLinkEditPayload</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code> | <code>ChatInviteLink</code>&gt;</p><h4 id="asynceditsubscription-payload" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`editSubscription( payload ) <a class="header-anchor" href="#asynceditsubscription-payload" aria-label="Permalink to &quot;$asynceditSubscription( payload )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>payload</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/ChatInviteLinkSubscriptionEditPayload.html"><code>ChatInviteLinkSubscriptionEditPayload</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code> | <code>ChatInviteLink</code>&gt;</p><h4 id="asyncexport" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`export( ) <a class="header-anchor" href="#asyncexport" aria-label="Permalink to &quot;$asyncexport( )&quot;">​</a></h4><p>Returns: <code>Promise</code>&lt;<code>boolean</code> | <code>ChatInviteLink</code>&gt;</p><h4 id="asyncrevoke-invite-link" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`revoke( invite_link ) <a class="header-anchor" href="#asyncrevoke-invite-link" aria-label="Permalink to &quot;$asyncrevoke( invite_link )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>invite_link</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code> | <code>ChatInviteLink</code>&gt;</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/classes/ChatInviteLinksManager.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChatInviteLinksManager = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ChatInviteLinksManager as default
};
