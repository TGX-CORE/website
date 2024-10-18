import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"WebhookManager","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/classes/WebhookManager.md","filePath":"documentation/classes/WebhookManager.md"}');
const _sfc_main = { name: "documentation/classes/WebhookManager.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Badge = resolveComponent("Badge");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Class</p><h1 id="webhookmanager" tabindex="-1">WebhookManager <a class="header-anchor" href="#webhookmanager" aria-label="Permalink to &quot;WebhookManager&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><code>BaseManager</code>&lt;<a href="./../interfaces/WebhookManagerOptions.html"><code>WebhookManagerOptions</code></a>&gt;</p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> WebhookManager</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">( client )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>client</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./Client.html"><code>Client</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="get-endpoint-string" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` endpoint : <code>string</code> <a class="header-anchor" href="#get-endpoint-string" aria-label="Permalink to &quot;$get endpoint : \`string\`&quot;">​</a></h4><h4 id="readonly-client-client" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "readonly"
  }, null, _parent));
  _push(` client : <a href="./Client.html"><code>Client</code></a> <a class="header-anchor" href="#readonly-client-client" aria-label="Permalink to &quot;$readonly client : [\`Client\`](./Client.md)&quot;">​</a></h4><h4 id="readonly-default-webhookmanageroptions" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "readonly"
  }, null, _parent));
  _push(` default? : <a href="./../interfaces/WebhookManagerOptions.html"><code>WebhookManagerOptions</code></a> <a class="header-anchor" href="#readonly-default-webhookmanageroptions" aria-label="Permalink to &quot;$readonly default? : [\`WebhookManagerOptions\`](../interfaces/WebhookManagerOptions.md)&quot;">​</a></h4><h4 id="express-any" tabindex="-1">express : <code>any</code> <a class="header-anchor" href="#express-any" aria-label="Permalink to &quot;express : \`any\`&quot;">​</a></h4><h4 id="static-max-number" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "static"
  }, null, _parent));
  _push(` max : <code>number</code> <a class="header-anchor" href="#static-max-number" aria-label="Permalink to &quot;$static max : \`number\`&quot;">​</a></h4><h4 id="static-min-number" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "static"
  }, null, _parent));
  _push(` min : <code>number</code> <a class="header-anchor" href="#static-min-number" aria-label="Permalink to &quot;$static min : \`number\`&quot;">​</a></h4><h4 id="readonly-options-webhookmanageroptions" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "readonly"
  }, null, _parent));
  _push(` options : <a href="./../interfaces/WebhookManagerOptions.html"><code>WebhookManagerOptions</code></a> <a class="header-anchor" href="#readonly-options-webhookmanageroptions" aria-label="Permalink to &quot;$readonly options : [\`WebhookManagerOptions\`](../interfaces/WebhookManagerOptions.md)&quot;">​</a></h4><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h4 id="asyncdelete-drop-pending-updates" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`delete( drop_pending_updates ) <a class="header-anchor" href="#asyncdelete-drop-pending-updates" aria-label="Permalink to &quot;$asyncdelete( drop_pending_updates )&quot;">​</a></h4><p>Deletes the webhook from Telegram.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>drop_pending_updates?</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>boolean</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Pass True to drop all pending updates</td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="asyncget" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`get( ) <a class="header-anchor" href="#asyncget" aria-label="Permalink to &quot;$asyncget( )&quot;">​</a></h4><p>Gets the webhook information from Telegram.</p><p>Returns: <code>Promise</code>&lt;<code>boolean</code> | <a href="./../interfaces/WebhookInfo.html"><code>WebhookInfo</code></a>&gt;</p><h4 id="asyncintialize" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`intialize( ) <a class="header-anchor" href="#asyncintialize" aria-label="Permalink to &quot;$asyncintialize( )&quot;">​</a></h4><p>Returns: <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="asyncset" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`set( ) <a class="header-anchor" href="#asyncset" aria-label="Permalink to &quot;$asyncset( )&quot;">​</a></h4><p>Updates the webhook on the Telegram api, pass the params on the ClientOptions#webhook.</p><p>Returns: <code>Promise</code>&lt;<code>boolean</code>&gt;</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/classes/WebhookManager.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WebhookManager = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  WebhookManager as default
};
