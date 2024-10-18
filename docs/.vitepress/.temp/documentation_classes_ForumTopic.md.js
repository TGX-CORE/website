import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ForumTopic","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/classes/ForumTopic.md","filePath":"documentation/classes/ForumTopic.md"}');
const _sfc_main = { name: "documentation/classes/ForumTopic.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Badge = resolveComponent("Badge");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Class</p><h1 id="forumtopic" tabindex="-1">ForumTopic <a class="header-anchor" href="#forumtopic" aria-label="Permalink to &quot;ForumTopic&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><a href="./ChatBase.html"><code>ChatBase</code></a>&lt;<a href="./ForumTopic.html"><code>ForumTopic</code></a>, <code>SerializedForumTopicPacket</code>&gt;</p><h4 id="implements" tabindex="-1">implements <a class="header-anchor" href="#implements" aria-label="Permalink to &quot;implements&quot;">​</a></h4><p><code>SerializedForumTopicPacket</code></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> ForumTopic</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">( client, packet )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>client</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./Client.html"><code>Client</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>packet</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>SerializedForumTopicPacket</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="get-chat-supergroupchat" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` chat : <a href="./SuperGroupChat.html"><code>SuperGroupChat</code></a> <a class="header-anchor" href="#get-chat-supergroupchat" aria-label="Permalink to &quot;$get chat : [\`SuperGroupChat\`](./SuperGroupChat.md)&quot;">​</a></h4><h4 id="get-id-number" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` id : <code>number</code> <a class="header-anchor" href="#get-id-number" aria-label="Permalink to &quot;$get id : \`number\`&quot;">​</a></h4><h4 id="readonly-client-client" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "readonly"
  }, null, _parent));
  _push(` client : <a href="./Client.html"><code>Client</code></a> <a class="header-anchor" href="#readonly-client-client" aria-label="Permalink to &quot;$readonly client : [\`Client\`](./Client.md)&quot;">​</a></h4><h4 id="icon-color-number" tabindex="-1">icon_color : <code>number</code> <a class="header-anchor" href="#icon-color-number" aria-label="Permalink to &quot;icon_color : \`number\`&quot;">​</a></h4><h4 id="icon-custom-emoji-id-string" tabindex="-1">icon_custom_emoji_id : <code>string</code> <a class="header-anchor" href="#icon-custom-emoji-id-string" aria-label="Permalink to &quot;icon_custom_emoji_id : \`string\`&quot;">​</a></h4><h4 id="message-thread-id-number" tabindex="-1">message_thread_id : <code>number</code> <a class="header-anchor" href="#message-thread-id-number" aria-label="Permalink to &quot;message_thread_id : \`number\`&quot;">​</a></h4><h4 id="name-string" tabindex="-1">name : <code>string</code> <a class="header-anchor" href="#name-string" aria-label="Permalink to &quot;name : \`string\`&quot;">​</a></h4><h4 id="type-forumtype" tabindex="-1">type : <code>ForumType</code> <a class="header-anchor" href="#type-forumtype" aria-label="Permalink to &quot;type : \`ForumType\`&quot;">​</a></h4><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h4 id="asyncclose" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`close( ) <a class="header-anchor" href="#asyncclose" aria-label="Permalink to &quot;$asyncclose( )&quot;">​</a></h4><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="createmessagecollector-options" tabindex="-1">createMessageCollector( options ) <a class="header-anchor" href="#createmessagecollector-options" aria-label="Permalink to &quot;createMessageCollector( options )&quot;">​</a></h4><p>Creates a message collector to the current chat.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>options</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/MessageCollectorOptions.html"><code>MessageCollectorOptions</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The options for the collector.</td></tr></tbody></table><p>Returns: <a href="./MessageCollector.html"><code>MessageCollector</code></a></p><h4 id="asyncdelete" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`delete( ) <a class="header-anchor" href="#asyncdelete" aria-label="Permalink to &quot;$asyncdelete( )&quot;">​</a></h4><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncedit-name-icon-custom-emoji-id" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`edit( name, icon_custom_emoji_id ) <a class="header-anchor" href="#asyncedit-name-icon-custom-emoji-id" aria-label="Permalink to &quot;$asyncedit( name, icon_custom_emoji_id )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>name?</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>icon_custom_emoji_id?</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncreopen" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`reopen( ) <a class="header-anchor" href="#asyncreopen" aria-label="Permalink to &quot;$asyncreopen( )&quot;">​</a></h4><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncsend-method-packet-form-data" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`send( method, packet, form_data ) <a class="header-anchor" href="#asyncsend-method-packet-form-data" aria-label="Permalink to &quot;$asyncsend( method, packet, form_data )&quot;">​</a></h4><p>Sends a message to the current channel.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>method</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../enumerations/MessagePayloadMethod.html"><code>MessagePayloadMethod</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The method of the message.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>packet</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../type-aliases/MessagePayload.html"><code>MessagePayload</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The packet of what the message will contain.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>form_data?</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./FormDataBuilder.html"><code>FormDataBuilder</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The form data for uploading media, see also File</td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<a href="./Message.html"><code>Message</code></a>&gt;</p><h4 id="asyncsendtext-text" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`sendText( text ) <a class="header-anchor" href="#asyncsendtext-text" aria-label="Permalink to &quot;$asyncsendText( text )&quot;">​</a></h4><p>Sends a text message to the current channel.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>text</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The text content of the message.</td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<a href="./Message.html"><code>Message</code></a>&gt;</p><h4 id="asyncunpinall" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`unpinAll( ) <a class="header-anchor" href="#asyncunpinall" aria-label="Permalink to &quot;$asyncunpinAll( )&quot;">​</a></h4><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/classes/ForumTopic.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ForumTopic = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ForumTopic as default
};
