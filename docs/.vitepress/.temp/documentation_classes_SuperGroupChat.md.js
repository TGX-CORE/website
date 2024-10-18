import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"SuperGroupChat","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/classes/SuperGroupChat.md","filePath":"documentation/classes/SuperGroupChat.md"}');
const _sfc_main = { name: "documentation/classes/SuperGroupChat.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Badge = resolveComponent("Badge");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Class</p><h1 id="supergroupchat" tabindex="-1">SuperGroupChat <a class="header-anchor" href="#supergroupchat" aria-label="Permalink to &quot;SuperGroupChat&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><a href="./BaseGroupChat.html"><code>BaseGroupChat</code></a></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> SuperGroupChat</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">( client, packet )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>client</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./Client.html"><code>Client</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>packet</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/ChatPacket.html"><code>ChatPacket</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="get-partial-boolean" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` partial : <code>boolean</code> <a class="header-anchor" href="#get-partial-boolean" aria-label="Permalink to &quot;$get partial : \`boolean\`&quot;">​</a></h4><h4 id="readonly-client-client" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "readonly"
  }, null, _parent));
  _push(` client : <a href="./Client.html"><code>Client</code></a> <a class="header-anchor" href="#readonly-client-client" aria-label="Permalink to &quot;$readonly client : [\`Client\`](./Client.md)&quot;">​</a></h4><h4 id="id-number" tabindex="-1">id : <code>number</code> <a class="header-anchor" href="#id-number" aria-label="Permalink to &quot;id : \`number\`&quot;">​</a></h4><h4 id="invites-chatinvitelinksmanager" tabindex="-1">invites : <a href="./ChatInviteLinksManager.html"><code>ChatInviteLinksManager</code></a> <a class="header-anchor" href="#invites-chatinvitelinksmanager" aria-label="Permalink to &quot;invites : [\`ChatInviteLinksManager\`](./ChatInviteLinksManager.md)&quot;">​</a></h4><h4 id="last-message-id-number" tabindex="-1">last_message_id? : <code>number</code> <a class="header-anchor" href="#last-message-id-number" aria-label="Permalink to &quot;last_message_id? : \`number\`&quot;">​</a></h4><h4 id="members-membersmanager" tabindex="-1">members : <a href="./MembersManager.html"><code>MembersManager</code></a> <a class="header-anchor" href="#members-membersmanager" aria-label="Permalink to &quot;members : [\`MembersManager\`](./MembersManager.md)&quot;">​</a></h4><h4 id="message-thread-id-undefined-number" tabindex="-1">message_thread_id : <code>undefined</code> | <code>number</code> <a class="header-anchor" href="#message-thread-id-undefined-number" aria-label="Permalink to &quot;message_thread_id : \`undefined\` \\| \`number\`&quot;">​</a></h4><h4 id="messages-messagesmanager" tabindex="-1">messages : <a href="./MessagesManager.html"><code>MessagesManager</code></a> <a class="header-anchor" href="#messages-messagesmanager" aria-label="Permalink to &quot;messages : [\`MessagesManager\`](./MessagesManager.md)&quot;">​</a></h4><h4 id="photo-chatphoto" tabindex="-1">photo? : <a href="./../interfaces/ChatPhoto.html"><code>ChatPhoto</code></a> <a class="header-anchor" href="#photo-chatphoto" aria-label="Permalink to &quot;photo? : [\`ChatPhoto\`](../interfaces/ChatPhoto.md)&quot;">​</a></h4><h4 id="requests-chatrequestsmanager" tabindex="-1">requests : <a href="./ChatRequestsManager.html"><code>ChatRequestsManager</code></a> <a class="header-anchor" href="#requests-chatrequestsmanager" aria-label="Permalink to &quot;requests : [\`ChatRequestsManager\`](./ChatRequestsManager.md)&quot;">​</a></h4><h4 id="topics-topicsmanager" tabindex="-1">topics : <a href="./TopicsManager.html"><code>TopicsManager</code></a> <a class="header-anchor" href="#topics-topicsmanager" aria-label="Permalink to &quot;topics : [\`TopicsManager\`](./TopicsManager.md)&quot;">​</a></h4><h4 id="type-group-supergroup-channel" tabindex="-1">type : <code>&quot;group&quot;</code> | <code>&quot;supergroup&quot;</code> | <code>&quot;channel&quot;</code> <a class="header-anchor" href="#type-group-supergroup-channel" aria-label="Permalink to &quot;type : \`&quot;group&quot;\` \\| \`&quot;supergroup&quot;\` \\| \`&quot;channel&quot;\`&quot;">​</a></h4><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h4 id="asyncadministrators" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`administrators( ) <a class="header-anchor" href="#asyncadministrators" aria-label="Permalink to &quot;$asyncadministrators( )&quot;">​</a></h4><p>Returns: <code>Promise</code>&lt;<a href="./Member.html"><code>Member</code></a>[]&gt;</p><h4 id="createmessagecollector-options" tabindex="-1">createMessageCollector( options ) <a class="header-anchor" href="#createmessagecollector-options" aria-label="Permalink to &quot;createMessageCollector( options )&quot;">​</a></h4><p>Creates a message collector to the current chat.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>options</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/MessageCollectorOptions.html"><code>MessageCollectorOptions</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The options for the collector.</td></tr></tbody></table><p>Returns: <a href="./MessageCollector.html"><code>MessageCollector</code></a></p><h4 id="asyncdeletephoto" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`deletePhoto( ) <a class="header-anchor" href="#asyncdeletephoto" aria-label="Permalink to &quot;$asyncdeletePhoto( )&quot;">​</a></h4><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncdeletestickerset" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`deleteStickerSet( ) <a class="header-anchor" href="#asyncdeletestickerset" aria-label="Permalink to &quot;$asyncdeleteStickerSet( )&quot;">​</a></h4><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncfetch" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`fetch( ) <a class="header-anchor" href="#asyncfetch" aria-label="Permalink to &quot;$asyncfetch( )&quot;">​</a></h4><p>Returns: <code>Promise</code>&lt;<code>boolean</code> | <a href="./BaseChat.html"><code>BaseChat</code></a>&gt;</p><h4 id="asyncleave" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`leave( ) <a class="header-anchor" href="#asyncleave" aria-label="Permalink to &quot;$asyncleave( )&quot;">​</a></h4><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncsend-method-packet-form-data" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`send( method, packet, form_data ) <a class="header-anchor" href="#asyncsend-method-packet-form-data" aria-label="Permalink to &quot;$asyncsend( method, packet, form_data )&quot;">​</a></h4><p>Sends a message to the current channel.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>method</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../enumerations/MessagePayloadMethod.html"><code>MessagePayloadMethod</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The method of the message.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>packet</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../type-aliases/MessagePayload.html"><code>MessagePayload</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The packet of what the message will contain.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>form_data?</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./FormDataBuilder.html"><code>FormDataBuilder</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The form data for uploading media, see also File</td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<a href="./Message.html"><code>Message</code></a>&gt;</p><h4 id="asyncsendtext-text" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`sendText( text ) <a class="header-anchor" href="#asyncsendtext-text" aria-label="Permalink to &quot;$asyncsendText( text )&quot;">​</a></h4><p>Sends a text message to the current channel.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>text</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The text content of the message.</td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<a href="./Message.html"><code>Message</code></a>&gt;</p><h4 id="asyncsetadministratorcustomtitle-user-id-custom-title" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`setAdministratorCustomTitle( user_id, custom_title ) <a class="header-anchor" href="#asyncsetadministratorcustomtitle-user-id-custom-title" aria-label="Permalink to &quot;$asyncsetAdministratorCustomTitle( user_id, custom_title )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>user_id</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>number</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>custom_title</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncsetdescription-description" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`setDescription( description ) <a class="header-anchor" href="#asyncsetdescription-description" aria-label="Permalink to &quot;$asyncsetDescription( description )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>description</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncsetphoto-photo-form" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`setPhoto( photo, form ) <a class="header-anchor" href="#asyncsetphoto-photo-form" aria-label="Permalink to &quot;$asyncsetPhoto( photo, form )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>photo</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../type-aliases/InputFile.html"><code>InputFile</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>form?</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>FormData</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncsetstrickerset-sticker-set-name" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`setStrickerSet( sticker_set_name ) <a class="header-anchor" href="#asyncsetstrickerset-sticker-set-name" aria-label="Permalink to &quot;$asyncsetStrickerSet( sticker_set_name )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>sticker_set_name</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncsettitle-title" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`setTitle( title ) <a class="header-anchor" href="#asyncsettitle-title" aria-label="Permalink to &quot;$asyncsetTitle( title )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>title</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/classes/SuperGroupChat.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SuperGroupChat = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  SuperGroupChat as default
};
