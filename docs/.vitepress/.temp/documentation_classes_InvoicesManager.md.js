import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"InvoicesManager","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/classes/InvoicesManager.md","filePath":"documentation/classes/InvoicesManager.md"}');
const _sfc_main = { name: "documentation/classes/InvoicesManager.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Badge = resolveComponent("Badge");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Class</p><h1 id="invoicesmanager" tabindex="-1">InvoicesManager <a class="header-anchor" href="#invoicesmanager" aria-label="Permalink to &quot;InvoicesManager&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><code>CachedManager</code>&lt;<code>string</code>, <code>Invoice</code>&gt;</p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> InvoicesManager</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">( client )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>client</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./Client.html"><code>Client</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="get-cache-collection-cachedmanager-k-cachedmanager-v" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` cache : <code>Collection</code>&lt;<code>CachedManager.K</code>, <code>CachedManager.V</code>&gt; <a class="header-anchor" href="#get-cache-collection-cachedmanager-k-cachedmanager-v" aria-label="Permalink to &quot;$get cache : \`Collection\`\\&lt;\`CachedManager.K\`, \`CachedManager.V\`\\&gt;&quot;">​</a></h4><h4 id="readonly-client-client" tabindex="-1">`);
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
  _push(` options : <code>any</code> <a class="header-anchor" href="#readonly-options-any" aria-label="Permalink to &quot;$readonly options : \`any\`&quot;">​</a></h4><h4 id="provider-token-string" tabindex="-1">provider_token? : <code>string</code> <a class="header-anchor" href="#provider-token-string" aria-label="Permalink to &quot;provider_token? : \`string\`&quot;">​</a></h4><p>The token provided by your payment provider for payments.</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h4 id="add-data-cache-param2" tabindex="-1">_add( data, cache, param2 ) <a class="header-anchor" href="#add-data-cache-param2" aria-label="Permalink to &quot;_add( data, cache, param2 )&quot;">​</a></h4><p>Add data with cache check to the current manager.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>data</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>any</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The data to add to the cache manager.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>cache</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>boolean</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Pass <em>True</em> to cache the data.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>param2</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>any</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Additional data to pass.</td></tr></tbody></table><p>Returns: <code>any</code></p><h4 id="create-id-invoice" tabindex="-1">create( id, invoice ) <a class="header-anchor" href="#create-id-invoice" aria-label="Permalink to &quot;create( id, invoice )&quot;">​</a></h4><p>Creates an invoice and store it in the manger.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>id</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The id of the invoices to store as.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>invoice</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/StoredInvoice.html"><code>StoredInvoice</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The payload of the invoice.</td></tr></tbody></table><p>Returns: <code>any</code></p><h4 id="asynccreatelink-id-payload" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`createLink( id, payload ) <a class="header-anchor" href="#asynccreatelink-id-payload" aria-label="Permalink to &quot;$asynccreateLink( id, payload )&quot;">​</a></h4><p>Creates an invoice link and store it in the manager.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>id</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The id of the invoices to store as.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>payload</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/CreateInvoiceLinkPayload.html"><code>CreateInvoiceLinkPayload</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The payload of the invoice link.</td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>string</code> | <code>boolean</code>&gt;</p><h4 id="generate-id" tabindex="-1">generate( id ) <a class="header-anchor" href="#generate-id" aria-label="Permalink to &quot;generate( id )&quot;">​</a></h4><p>Returns an invoice link or an invoice with complete details such as payment_provider, but excluding chat ids.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>id</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The id of the invoice.</td></tr></tbody></table><p>Returns: <code>String</code> | <code>Boolean</code> | <code>Partial</code>&lt;<a href="./../interfaces/SendInvoicePayload.html"><code>SendInvoicePayload</code></a>&gt;</p><h4 id="asyncsend-id-chat-id" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`send( id, chat_id ) <a class="header-anchor" href="#asyncsend-id-chat-id" aria-label="Permalink to &quot;$asyncsend( id, chat_id )&quot;">​</a></h4><p>This will only work with invoices and not link invoices!</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>id</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The id of the invoice.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>chat_id</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>number</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The target chat to send the invoice to.</td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>void</code> | <a href="./Message.html"><code>Message</code></a>&gt;</p><h4 id="settoken-token" tabindex="-1">setToken( token ) <a class="header-anchor" href="#settoken-token" aria-label="Permalink to &quot;setToken( token )&quot;">​</a></h4><p>Sets the token for the invoices generated.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>token</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The token provided by your payment provider for payments.</td></tr></tbody></table><p>Returns: <code>void</code></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/classes/InvoicesManager.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InvoicesManager = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  InvoicesManager as default
};