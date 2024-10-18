import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"MessagesManager","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/classes/MessagesManager.md","filePath":"documentation/classes/MessagesManager.md"}');
const _sfc_main = { name: "documentation/classes/MessagesManager.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Badge = resolveComponent("Badge");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Class</p><h1 id="messagesmanager" tabindex="-1">MessagesManager <a class="header-anchor" href="#messagesmanager" aria-label="Permalink to &quot;MessagesManager&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><code>CachedManager</code>&lt;<code>number</code>, <a href="./Message.html"><code>Message</code></a>&gt;</p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> MessagesManager</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">( chat )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>chat</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./BaseChat.html"><code>BaseChat</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="get-cache-collection-cachedmanager-k-cachedmanager-v" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` cache : <code>Collection</code>&lt;<code>CachedManager.K</code>, <code>CachedManager.V</code>&gt; <a class="header-anchor" href="#get-cache-collection-cachedmanager-k-cachedmanager-v" aria-label="Permalink to &quot;$get cache : \`Collection\`\\&lt;\`CachedManager.K\`, \`CachedManager.V\`\\&gt;&quot;">​</a></h4><h4 id="chat-basechat" tabindex="-1">chat : <a href="./BaseChat.html"><code>BaseChat</code></a> <a class="header-anchor" href="#chat-basechat" aria-label="Permalink to &quot;chat : [\`BaseChat\`](./BaseChat.md)&quot;">​</a></h4><h4 id="readonly-client-client" tabindex="-1">`);
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
  _push(` options : <code>any</code> <a class="header-anchor" href="#readonly-options-any" aria-label="Permalink to &quot;$readonly options : \`any\`&quot;">​</a></h4><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h4 id="add-data-cache-param2" tabindex="-1">_add( data, cache, param2 ) <a class="header-anchor" href="#add-data-cache-param2" aria-label="Permalink to &quot;_add( data, cache, param2 )&quot;">​</a></h4><p>Add data with cache check to the current manager.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>data</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>any</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The data to add to the cache manager.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>cache</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>boolean</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Pass <em>True</em> to cache the data.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>param2</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>any</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Additional data to pass.</td></tr></tbody></table><p>Returns: <code>any</code></p><h4 id="asynccopy-payload-message-ids" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`copy( payload, ...message_ids ) <a class="header-anchor" href="#asynccopy-payload-message-ids" aria-label="Permalink to &quot;$asynccopy( payload, ...message_ids )&quot;">​</a></h4><p>Copy messages of that belongs to this manager.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>payload</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/CopyMessagePayload.html"><code>CopyMessagePayload</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The payload data of the copy.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>...message_ids</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>number</code>[]</td><td style="${ssrRenderStyle({ "text-align": "left" })}">The ids of the messages to forward.</td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncdelete-message-ids" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`delete( ...message_ids ) <a class="header-anchor" href="#asyncdelete-message-ids" aria-label="Permalink to &quot;$asyncdelete( ...message_ids )&quot;">​</a></h4><p>Delete or bulk delete messages.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>...message_ids</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>number</code>[]</td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncedit-payload" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`edit( payload ) <a class="header-anchor" href="#asyncedit-payload" aria-label="Permalink to &quot;$asyncedit( payload )&quot;">​</a></h4><p>Edits a message that belongs to this manager.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>payload</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/MessageEditPayload.html"><code>MessageEditPayload</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The payload data of the edit.</td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code> | <a href="./Message.html"><code>Message</code></a>&gt;</p><h4 id="asynceditcaption-payload" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`editCaption( payload ) <a class="header-anchor" href="#asynceditcaption-payload" aria-label="Permalink to &quot;$asynceditCaption( payload )&quot;">​</a></h4><p>Edits the caoption of a message that belongs to this manager.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>payload</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/MessagecaptionEditPayload.html"><code>MessagecaptionEditPayload</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">the payload data of the caption.</td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code> | <a href="./Message.html"><code>Message</code></a>&gt;</p><h4 id="asynceditmedia-payload" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`editMedia( payload ) <a class="header-anchor" href="#asynceditmedia-payload" aria-label="Permalink to &quot;$asynceditMedia( payload )&quot;">​</a></h4><p>Edits the media of a message that belongs to this manager.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>payload</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/MessageMediaEditPayload.html"><code>MessageMediaEditPayload</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The payload data of the media.</td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code> | <a href="./Message.html"><code>Message</code></a>&gt;</p><h4 id="asynceditreplymarkup-payload" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`editReplyMarkup( payload ) <a class="header-anchor" href="#asynceditreplymarkup-payload" aria-label="Permalink to &quot;$asynceditReplyMarkup( payload )&quot;">​</a></h4><p>Edits the reply markup of a message that belongs to this manager.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>payload</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/MessageReplyMarkupEditPayload.html"><code>MessageReplyMarkupEditPayload</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The payload data of the reply markup.</td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code> | <a href="./Message.html"><code>Message</code></a>&gt;</p><h4 id="asyncforward-payload-message-ids" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`forward( payload, ...message_ids ) <a class="header-anchor" href="#asyncforward-payload-message-ids" aria-label="Permalink to &quot;$asyncforward( payload, ...message_ids )&quot;">​</a></h4><p>Forward messages that belongs to this manager.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>payload</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/ForwardPayload.html"><code>ForwardPayload</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The payload data of the forward.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>...message_ids</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code> | <code>number</code>[]</td><td style="${ssrRenderStyle({ "text-align": "left" })}">The ids of the messages to forward.</td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code> | <code>number</code>[]&gt;</p><h4 id="asyncpin-message-id-disable-notification-business-connection-id" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`pin( message_id, disable_notification, business_connection_id ) <a class="header-anchor" href="#asyncpin-message-id-disable-notification-business-connection-id" aria-label="Permalink to &quot;$asyncpin( message_id, disable_notification, business_connection_id )&quot;">​</a></h4><p>Pins a message.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>message_id</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>number</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>disable_notification?</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>boolean</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>business_connection_id?</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncsetreaction-payload" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`setReaction( payload ) <a class="header-anchor" href="#asyncsetreaction-payload" aria-label="Permalink to &quot;$asyncsetReaction( payload )&quot;">​</a></h4><p>Sets the reaction of a message that belongs to this manager.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>payload</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/MessageReactionPayload.html"><code>MessageReactionPayload</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The payload data of the reaction.</td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncunpin-message-id-business-connection-id" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`unpin( message_id, business_connection_id ) <a class="header-anchor" href="#asyncunpin-message-id-business-connection-id" aria-label="Permalink to &quot;$asyncunpin( message_id, business_connection_id )&quot;">​</a></h4><p>Unpins a message.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>message_id</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>number</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>business_connection_id</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncunpinall" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`unpinAll( ) <a class="header-anchor" href="#asyncunpinall" aria-label="Permalink to &quot;$asyncunpinAll( )&quot;">​</a></h4><p>Unpin all pinned messages.</p><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/classes/MessagesManager.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MessagesManager = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  MessagesManager as default
};
