import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Collector","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/classes/Collector.md","filePath":"documentation/classes/Collector.md"}');
const _sfc_main = { name: "documentation/classes/Collector.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Badge = resolveComponent("Badge");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export abstract Class</p><h1 id="collector" tabindex="-1">Collector <a class="header-anchor" href="#collector" aria-label="Permalink to &quot;Collector&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><code>EventEmitter</code></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> Collector</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">( client, options )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>client</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./Client.html"><code>Client</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>options</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>Collector.O</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="get-endreason-undefined-string" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` endReason : <code>undefined</code> | <code>string</code> <a class="header-anchor" href="#get-endreason-undefined-string" aria-label="Permalink to &quot;$get endReason : \`undefined\` \\| \`string\`&quot;">​</a></h4><h4 id="get-next-promise-message" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` next : <code>Promise</code>&lt;<a href="./Message.html"><code>Message</code></a>&gt; <a class="header-anchor" href="#get-next-promise-message" aria-label="Permalink to &quot;$get next : \`Promise\`\\&lt;[\`Message\`](./Message.md)\\&gt;&quot;">​</a></h4><h4 id="readonly-client-client" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "readonly"
  }, null, _parent));
  _push(` client : <a href="./Client.html"><code>Client</code></a> <a class="header-anchor" href="#readonly-client-client" aria-label="Permalink to &quot;$readonly client : [\`Client\`](./Client.md)&quot;">​</a></h4><h4 id="collection-collection-collector-i-any" tabindex="-1">collection : <code>Collection</code>&lt;<code>Collector.I</code>, <code>any</code>&gt; <a class="header-anchor" href="#collection-collection-collector-i-any" aria-label="Permalink to &quot;collection : \`Collection\`\\&lt;\`Collector.I\`, \`any\`\\&gt;&quot;">​</a></h4><h4 id="ended-boolean" tabindex="-1">ended : <code>boolean</code> <a class="header-anchor" href="#ended-boolean" aria-label="Permalink to &quot;ended : \`boolean\`&quot;">​</a></h4><h4 id="filter-collectorfilter" tabindex="-1">filter : <a href="./../type-aliases/CollectorFilter.html"><code>CollectorFilter</code></a> <a class="header-anchor" href="#filter-collectorfilter" aria-label="Permalink to &quot;filter : [\`CollectorFilter\`](../type-aliases/CollectorFilter.md)&quot;">​</a></h4><h4 id="options-collector-o" tabindex="-1">options : <code>Collector.O</code> <a class="header-anchor" href="#options-collector-o" aria-label="Permalink to &quot;options : \`Collector.O\`&quot;">​</a></h4><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h4 id="asynciterator" tabindex="-1"><a href="./.html">asyncIterator</a> <a class="header-anchor" href="#asynciterator" aria-label="Permalink to &quot;[asyncIterator]( )&quot;">​</a></h4><p>Returns: <code>AsyncGenerator</code>&lt;<code>unknown</code>, <code>void</code>, <code>unknown</code>&gt;</p><h4 id="checkend" tabindex="-1">checkEnd( ) <a class="header-anchor" href="#checkend" aria-label="Permalink to &quot;checkEnd( )&quot;">​</a></h4><p>Returns: <code>boolean</code></p><h4 id="collect-collect" tabindex="-1">collect( collect ) <a class="header-anchor" href="#collect-collect" aria-label="Permalink to &quot;collect( collect )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>collect</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>Collector.C</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>null</code> | <code>Collector.I</code></p><h4 id="dispose-dispose" tabindex="-1">dispose( dispose ) <a class="header-anchor" href="#dispose-dispose" aria-label="Permalink to &quot;dispose( dispose )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>dispose</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>Collector.C</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>null</code> | <code>Collector.I</code></p><h4 id="asynchandlecollect-collect" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`handleCollect( collect ) <a class="header-anchor" href="#asynchandlecollect-collect" aria-label="Permalink to &quot;$asynchandleCollect( collect )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>collect</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>Collector.C</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="asynchandledispose-dispose" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`handleDispose( dispose ) <a class="header-anchor" href="#asynchandledispose-dispose" aria-label="Permalink to &quot;$asynchandleDispose( dispose )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>dispose</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>Collector.C</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="stop-reason" tabindex="-1">stop( reason ) <a class="header-anchor" href="#stop-reason" aria-label="Permalink to &quot;stop( reason )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>reason</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>void</code></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/classes/Collector.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Collector = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Collector as default
};