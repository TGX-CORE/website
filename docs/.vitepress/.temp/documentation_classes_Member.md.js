import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Member","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/classes/Member.md","filePath":"documentation/classes/Member.md"}');
const _sfc_main = { name: "documentation/classes/Member.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Badge = resolveComponent("Badge");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Class</p><h1 id="member" tabindex="-1">Member <a class="header-anchor" href="#member" aria-label="Permalink to &quot;Member&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><code>BaseClass</code>&lt;<a href="./Member.html"><code>Member</code></a>, <a href="./../type-aliases/ChatMember.html"><code>ChatMember</code></a>&gt;</p><h4 id="implements" tabindex="-1">implements <a class="header-anchor" href="#implements" aria-label="Permalink to &quot;implements&quot;">​</a></h4><p><code>Partial</code>&lt;<a href="./../interfaces/ChatMemberOwner.html"><code>ChatMemberOwner</code></a>&gt;,<code>Partial</code>&lt;<a href="./../interfaces/ChatMemberMember.html"><code>ChatMemberMember</code></a>&gt;,<code>Partial</code>&lt;<a href="./../interfaces/ChatMemberAdministrator.html"><code>ChatMemberAdministrator</code></a>&gt;,<code>Partial</code>&lt;<a href="./../interfaces/ChatMemberBanned.html"><code>ChatMemberBanned</code></a>&gt;,<code>Partial</code>&lt;<a href="./../interfaces/ChatMemberLeft.html"><code>ChatMemberLeft</code></a>&gt;,<code>Partial</code>&lt;<a href="./../interfaces/ChatMemberRestricted.html"><code>ChatMemberRestricted</code></a>&gt;</p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> Member</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">( client, packet )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>client</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./Client.html"><code>Client</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>packet</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../type-aliases/ChatMember.html"><code>ChatMember</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="get-chat-chat" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` chat : <a href="./../type-aliases/Chat.html"><code>Chat</code></a> <a class="header-anchor" href="#get-chat-chat" aria-label="Permalink to &quot;$get chat : [\`Chat\`](../type-aliases/Chat.md)&quot;">​</a></h4><h4 id="get-id-number" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` id : <code>number</code> <a class="header-anchor" href="#get-id-number" aria-label="Permalink to &quot;$get id : \`number\`&quot;">​</a></h4><h4 id="get-manager-membersmanager" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` manager : <a href="./MembersManager.html"><code>MembersManager</code></a> <a class="header-anchor" href="#get-manager-membersmanager" aria-label="Permalink to &quot;$get manager : [\`MembersManager\`](./MembersManager.md)&quot;">​</a></h4><h4 id="get-partial-boolean" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` partial : <code>boolean</code> <a class="header-anchor" href="#get-partial-boolean" aria-label="Permalink to &quot;$get partial : \`boolean\`&quot;">​</a></h4><h4 id="get-user-user" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` user : <a href="./User.html"><code>User</code></a> <a class="header-anchor" href="#get-user-user" aria-label="Permalink to &quot;$get user : [\`User\`](./User.md)&quot;">​</a></h4><h4 id="readonly-client-client" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "readonly"
  }, null, _parent));
  _push(` client : <a href="./Client.html"><code>Client</code></a> <a class="header-anchor" href="#readonly-client-client" aria-label="Permalink to &quot;$readonly client : [\`Client\`](./Client.md)&quot;">​</a></h4><h4 id="status-any" tabindex="-1">status : <code>any</code> <a class="header-anchor" href="#status-any" aria-label="Permalink to &quot;status : \`any\`&quot;">​</a></h4><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h4 id="asyncban-revoke-messages-until-date" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`ban( revoke_messages, until_date ) <a class="header-anchor" href="#asyncban-revoke-messages-until-date" aria-label="Permalink to &quot;$asyncban( revoke_messages, until_date )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>revoke_messages?</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>boolean</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>until_date?</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>number</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncboosts" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`boosts( ) <a class="header-anchor" href="#asyncboosts" aria-label="Permalink to &quot;$asyncboosts( )&quot;">​</a></h4><p>Returns: <code>Promise</code>&lt;<code>boolean</code> | <a href="./ChatBoost.html"><code>ChatBoost</code></a>[]&gt;</p><h4 id="asyncfetch" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`fetch( ) <a class="header-anchor" href="#asyncfetch" aria-label="Permalink to &quot;$asyncfetch( )&quot;">​</a></h4><p>Returns: <code>Promise</code>&lt;<a href="./Member.html"><code>Member</code></a>&gt;</p><h4 id="asyncpromote-is-anonymous-permissions" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`promote( is_anonymous, permissions ) <a class="header-anchor" href="#asyncpromote-is-anonymous-permissions" aria-label="Permalink to &quot;$asyncpromote( is_anonymous, permissions )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>is_anonymous</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>boolean</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>permissions</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/AdminPermissions.html"><code>AdminPermissions</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncrestrict-permissions-use-independent-chat-permissions-until-date" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`restrict( permissions, use_independent_chat_permissions, until_date ) <a class="header-anchor" href="#asyncrestrict-permissions-use-independent-chat-permissions-until-date" aria-label="Permalink to &quot;$asyncrestrict( permissions, use_independent_chat_permissions, until_date )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>permissions</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./ChatPermissions.html"><code>ChatPermissions</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>use_independent_chat_permissions?</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>boolean</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>until_date?</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>number</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncunban-only-if-banned" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`unban( only_if_banned ) <a class="header-anchor" href="#asyncunban-only-if-banned" aria-label="Permalink to &quot;$asyncunban( only_if_banned )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>only_if_banned</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>boolean</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/classes/Member.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Member = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Member as default
};
