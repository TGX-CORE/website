import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Message","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/classes/Message.md","filePath":"documentation/classes/Message.md"}');
const _sfc_main = { name: "documentation/classes/Message.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Badge = resolveComponent("Badge");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Class</p><h1 id="message" tabindex="-1">Message <a class="header-anchor" href="#message" aria-label="Permalink to &quot;Message&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><code>BaseClass</code>&lt;<a href="./Message.html"><code>Message</code></a>, <a href="./../interfaces/MessagePacket.html"><code>MessagePacket</code></a>&gt;</p><h4 id="implements" tabindex="-1">implements <a class="header-anchor" href="#implements" aria-label="Permalink to &quot;implements&quot;">​</a></h4><p><code>Omit</code>&lt;<a href="./../interfaces/MessagePacket.html"><code>MessagePacket</code></a>, <code>&quot;chat&quot;</code> | <code>&quot;sender_chat&quot;</code>&gt;</p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> Message</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">( client, packet )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>client</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./Client.html"><code>Client</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>packet</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/MessagePacket.html"><code>MessagePacket</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="get-chat-chat" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` chat : <a href="./../type-aliases/Chat.html"><code>Chat</code></a> <a class="header-anchor" href="#get-chat-chat" aria-label="Permalink to &quot;$get chat : [\`Chat\`](../type-aliases/Chat.md)&quot;">​</a></h4><h4 id="get-command-boolean" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` command : <code>boolean</code> <a class="header-anchor" href="#get-command-boolean" aria-label="Permalink to &quot;$get command : \`boolean\`&quot;">​</a></h4><h4 id="get-entities-messageentitiesstore" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` entities : <a href="./MessageEntitiesStore.html"><code>MessageEntitiesStore</code></a> <a class="header-anchor" href="#get-entities-messageentitiesstore" aria-label="Permalink to &quot;$get entities : [\`MessageEntitiesStore\`](./MessageEntitiesStore.md)&quot;">​</a></h4><h4 id="get-id-number" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` id : <code>number</code> <a class="header-anchor" href="#get-id-number" aria-label="Permalink to &quot;$get id : \`number\`&quot;">​</a></h4><h4 id="get-manager-messagesmanager" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` manager : <a href="./MessagesManager.html"><code>MessagesManager</code></a> <a class="header-anchor" href="#get-manager-messagesmanager" aria-label="Permalink to &quot;$get manager : [\`MessagesManager\`](./MessagesManager.md)&quot;">​</a></h4><h4 id="get-member-undefined-message" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` member : <code>undefined</code> | <a href="./Message.html"><code>Message</code></a> <a class="header-anchor" href="#get-member-undefined-message" aria-label="Permalink to &quot;$get member : \`undefined\` \\| [\`Message\`](./Message.md)&quot;">​</a></h4><h4 id="get-sender-chat-undefined-chat" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` sender_chat : <code>undefined</code> | <a href="./../type-aliases/Chat.html"><code>Chat</code></a> <a class="header-anchor" href="#get-sender-chat-undefined-chat" aria-label="Permalink to &quot;$get sender_chat : \`undefined\` \\| [\`Chat\`](../type-aliases/Chat.md)&quot;">​</a></h4><h4 id="get-topic-undefined-forumtopic" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` topic : <code>undefined</code> | <a href="./ForumTopic.html"><code>ForumTopic</code></a> <a class="header-anchor" href="#get-topic-undefined-forumtopic" aria-label="Permalink to &quot;$get topic : \`undefined\` \\| [\`ForumTopic\`](./ForumTopic.md)&quot;">​</a></h4><h4 id="get-user-undefined-user" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` user : <code>undefined</code> | <a href="./User.html"><code>User</code></a> <a class="header-anchor" href="#get-user-undefined-user" aria-label="Permalink to &quot;$get user : \`undefined\` \\| [\`User\`](./User.md)&quot;">​</a></h4><h4 id="readonly-client-client" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "readonly"
  }, null, _parent));
  _push(` client : <a href="./Client.html"><code>Client</code></a> <a class="header-anchor" href="#readonly-client-client" aria-label="Permalink to &quot;$readonly client : [\`Client\`](./Client.md)&quot;">​</a></h4><h4 id="date-number" tabindex="-1">date : <code>number</code> <a class="header-anchor" href="#date-number" aria-label="Permalink to &quot;date : \`number\`&quot;">​</a></h4><h4 id="message-id-number" tabindex="-1">message_id : <code>number</code> <a class="header-anchor" href="#message-id-number" aria-label="Permalink to &quot;message_id : \`number\`&quot;">​</a></h4><h4 id="message-thread-id-number" tabindex="-1">message_thread_id? : <code>number</code> <a class="header-anchor" href="#message-thread-id-number" aria-label="Permalink to &quot;message_thread_id? : \`number\`&quot;">​</a></h4><h4 id="reactions-messagereactions" tabindex="-1">reactions : <code>MessageReactions</code> <a class="header-anchor" href="#reactions-messagereactions" aria-label="Permalink to &quot;reactions : \`MessageReactions\`&quot;">​</a></h4><h4 id="text-string" tabindex="-1">text? : <code>string</code> <a class="header-anchor" href="#text-string" aria-label="Permalink to &quot;text? : \`string\`&quot;">​</a></h4><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h4 id="asynccopy-chat-id-payload" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`copy( chat_id, payload ) <a class="header-anchor" href="#asynccopy-chat-id-payload" aria-label="Permalink to &quot;$asynccopy( chat_id, payload )&quot;">​</a></h4><p>Copies the message to a chat.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>chat_id</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code> | <code>number</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The chat to copy the message to.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>payload</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/CopyMessagePayload.html"><code>CopyMessagePayload</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Additional data for copying.</td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="createcallbackcollector-options" tabindex="-1">createCallbackCollector( options ) <a class="header-anchor" href="#createcallbackcollector-options" aria-label="Permalink to &quot;createCallbackCollector( options )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>options</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/CallbackCollectorOptions.html"><code>CallbackCollectorOptions</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <a href="./CallbackCollector.html"><code>CallbackCollector</code></a></p><h4 id="asyncdelete" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`delete( ) <a class="header-anchor" href="#asyncdelete" aria-label="Permalink to &quot;$asyncdelete( )&quot;">​</a></h4><p>Deletes the message.</p><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncedit-payload" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`edit( payload ) <a class="header-anchor" href="#asyncedit-payload" aria-label="Permalink to &quot;$asyncedit( payload )&quot;">​</a></h4><p>Edits the message.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>payload</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/MessageEditPayload.html"><code>MessageEditPayload</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The content of what the message will contain.</td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code> | <a href="./Message.html"><code>Message</code></a>&gt;</p><h4 id="asynceditcaption-payload" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`editCaption( payload ) <a class="header-anchor" href="#asynceditcaption-payload" aria-label="Permalink to &quot;$asynceditCaption( payload )&quot;">​</a></h4><p>Edits the caption of the message.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>payload</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/MessagecaptionEditPayload.html"><code>MessagecaptionEditPayload</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The content of what the caption will contain.</td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code> | <a href="./Message.html"><code>Message</code></a>&gt;</p><h4 id="asynceditmedia-payload" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`editMedia( payload ) <a class="header-anchor" href="#asynceditmedia-payload" aria-label="Permalink to &quot;$asynceditMedia( payload )&quot;">​</a></h4><p>Edits the media of the message.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>payload</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/MessageMediaEditPayload.html"><code>MessageMediaEditPayload</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The content of what the media will contain.</td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code> | <a href="./Message.html"><code>Message</code></a>&gt;</p><h4 id="asynceditreplymarkup-payload" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`editReplyMarkup( payload ) <a class="header-anchor" href="#asynceditreplymarkup-payload" aria-label="Permalink to &quot;$asynceditReplyMarkup( payload )&quot;">​</a></h4><p>Edits only the reply markup of the message.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>payload</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/MessageReplyMarkupEditPayload.html"><code>MessageReplyMarkupEditPayload</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The content of what the reply markup will contain.</td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code> | <a href="./Message.html"><code>Message</code></a>&gt;</p><h4 id="asyncforward-chat-id-payload" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`forward( chat_id, payload ) <a class="header-anchor" href="#asyncforward-chat-id-payload" aria-label="Permalink to &quot;$asyncforward( chat_id, payload )&quot;">​</a></h4><p>Forwards the message to a chat.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>chat_id</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code> | <code>number</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The chat to forward the message to.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>payload</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/ForwardPayload.html"><code>ForwardPayload</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Additional data for forwarding.</td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncpin-disable-notification-business-connection-id" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`pin( disable_notification, business_connection_id ) <a class="header-anchor" href="#asyncpin-disable-notification-business-connection-id" aria-label="Permalink to &quot;$asyncpin( disable_notification, business_connection_id )&quot;">​</a></h4><p>Pins the message.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>disable_notification?</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>boolean</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>business_connection_id?</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncreply-pointer-payload-form-data" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`reply( pointer, payload, form_data ) <a class="header-anchor" href="#asyncreply-pointer-payload-form-data" aria-label="Permalink to &quot;$asyncreply( pointer, payload, form_data )&quot;">​</a></h4><p>Replies a message to the current message.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>pointer</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../enumerations/MessagePayloadMethod.html"><code>MessagePayloadMethod</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The type or method of the message.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>payload</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>Partial</code>&lt;<a href="./../type-aliases/MessagePayload.html"><code>MessagePayload</code></a>&gt;</td><td style="${ssrRenderStyle({ "text-align": "left" })}">What the message will contain.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>form_data?</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./FormDataBuilder.html"><code>FormDataBuilder</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">FormData for uploading a media with the message.</td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code> | <a href="./Message.html"><code>Message</code></a>&gt;</p><h4 id="asyncreplytext-text" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`replyText( text ) <a class="header-anchor" href="#asyncreplytext-text" aria-label="Permalink to &quot;$asyncreplyText( text )&quot;">​</a></h4><p>Replies a text message to the current message.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>text</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">What the text will contain.</td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code> | <a href="./Message.html"><code>Message</code></a>&gt;</p><h4 id="asyncsetreaction-reaction-is-big" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`setReaction( reaction, is_big ) <a class="header-anchor" href="#asyncsetreaction-reaction-is-big" aria-label="Permalink to &quot;$asyncsetReaction( reaction, is_big )&quot;">​</a></h4><p>Sets the reaction of the message.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>reaction</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./Reactions.html"><code>Reactions</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The reactions.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>is_big?</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>boolean</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Pass <em>True</em> to set the reaction with a big animation</td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncunpin-business-connection-id" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`unpin( business_connection_id ) <a class="header-anchor" href="#asyncunpin-business-connection-id" aria-label="Permalink to &quot;$asyncunpin( business_connection_id )&quot;">​</a></h4><p>Unpins the message.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>business_connection_id</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/classes/Message.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Message = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Message as default
};
