import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"TopicsManager","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/classes/TopicsManager.md","filePath":"documentation/classes/TopicsManager.md"}');
const _sfc_main = { name: "documentation/classes/TopicsManager.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Badge = resolveComponent("Badge");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Class</p><h1 id="topicsmanager" tabindex="-1">TopicsManager <a class="header-anchor" href="#topicsmanager" aria-label="Permalink to &quot;TopicsManager&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><code>CachedManager</code>&lt;<code>number</code>, <a href="./ForumTopic.html"><code>ForumTopic</code></a>&gt;</p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> TopicsManager</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">( chat )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>chat</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./SuperGroupChat.html"><code>SuperGroupChat</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="get-cache-collection-cachedmanager-k-cachedmanager-v" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` cache : <code>Collection</code>&lt;<code>CachedManager.K</code>, <code>CachedManager.V</code>&gt; <a class="header-anchor" href="#get-cache-collection-cachedmanager-k-cachedmanager-v" aria-label="Permalink to &quot;$get cache : \`Collection\`\\&lt;\`CachedManager.K\`, \`CachedManager.V\`\\&gt;&quot;">​</a></h4><h4 id="readonly-chat-supergroupchat" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "readonly"
  }, null, _parent));
  _push(` chat : <a href="./SuperGroupChat.html"><code>SuperGroupChat</code></a> <a class="header-anchor" href="#readonly-chat-supergroupchat" aria-label="Permalink to &quot;$readonly chat : [\`SuperGroupChat\`](./SuperGroupChat.md)&quot;">​</a></h4><h4 id="readonly-client-client" tabindex="-1">`);
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
  _push(` options : <code>any</code> <a class="header-anchor" href="#readonly-options-any" aria-label="Permalink to &quot;$readonly options : \`any\`&quot;">​</a></h4><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h4 id="add-data-cache-param2" tabindex="-1">_add( data, cache, param2 ) <a class="header-anchor" href="#add-data-cache-param2" aria-label="Permalink to &quot;_add( data, cache, param2 )&quot;">​</a></h4><p>Add data with cache check to the current manager.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>data</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>any</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The data to add to the cache manager.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>cache</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>boolean</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Pass <em>True</em> to cache the data.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>param2</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>any</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Additional data to pass.</td></tr></tbody></table><p>Returns: <code>any</code></p><h4 id="asyncclose-message-thread-id" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`close( message_thread_id ) <a class="header-anchor" href="#asyncclose-message-thread-id" aria-label="Permalink to &quot;$asyncclose( message_thread_id )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>message_thread_id</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>number</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncclosegeneral" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`closeGeneral( ) <a class="header-anchor" href="#asyncclosegeneral" aria-label="Permalink to &quot;$asynccloseGeneral( )&quot;">​</a></h4><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asynccreate-name-icon-color-icon-custom-emoji-id" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`create( name, icon_color, icon_custom_emoji_id ) <a class="header-anchor" href="#asynccreate-name-icon-color-icon-custom-emoji-id" aria-label="Permalink to &quot;$asynccreate( name, icon_color, icon_custom_emoji_id )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>name</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>icon_color?</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>number</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>icon_custom_emoji_id?</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code> | <a href="./ForumTopic.html"><code>ForumTopic</code></a>&gt;</p><h4 id="asyncdelete-message-thread-id" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`delete( message_thread_id ) <a class="header-anchor" href="#asyncdelete-message-thread-id" aria-label="Permalink to &quot;$asyncdelete( message_thread_id )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>message_thread_id</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>number</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncedit-message-thread-id-name-icon-custom-emoji-id" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`edit( message_thread_id, name, icon_custom_emoji_id ) <a class="header-anchor" href="#asyncedit-message-thread-id-name-icon-custom-emoji-id" aria-label="Permalink to &quot;$asyncedit( message_thread_id, name, icon_custom_emoji_id )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>message_thread_id</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>number</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>name?</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>icon_custom_emoji_id?</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asynceditgeneral-name" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`editGeneral( name ) <a class="header-anchor" href="#asynceditgeneral-name" aria-label="Permalink to &quot;$asynceditGeneral( name )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>name</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asynchidegeneral" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`hideGeneral( ) <a class="header-anchor" href="#asynchidegeneral" aria-label="Permalink to &quot;$asynchideGeneral( )&quot;">​</a></h4><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncreopen-message-thread-id" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`reopen( message_thread_id ) <a class="header-anchor" href="#asyncreopen-message-thread-id" aria-label="Permalink to &quot;$asyncreopen( message_thread_id )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>message_thread_id</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>number</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncreopengeneral" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`reopenGeneral( ) <a class="header-anchor" href="#asyncreopengeneral" aria-label="Permalink to &quot;$asyncreopenGeneral( )&quot;">​</a></h4><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncunhidegeneral" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`unhideGeneral( ) <a class="header-anchor" href="#asyncunhidegeneral" aria-label="Permalink to &quot;$asyncunhideGeneral( )&quot;">​</a></h4><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncunpinall-message-thread-id" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`unpinAll( message_thread_id ) <a class="header-anchor" href="#asyncunpinall-message-thread-id" aria-label="Permalink to &quot;$asyncunpinAll( message_thread_id )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>message_thread_id</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>number</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncunpinallgeneral" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`unpinAllGeneral( ) <a class="header-anchor" href="#asyncunpinallgeneral" aria-label="Permalink to &quot;$asyncunpinAllGeneral( )&quot;">​</a></h4><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/classes/TopicsManager.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TopicsManager = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  TopicsManager as default
};
