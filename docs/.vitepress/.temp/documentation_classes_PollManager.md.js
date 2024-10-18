import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"PollManager","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/classes/PollManager.md","filePath":"documentation/classes/PollManager.md"}');
const _sfc_main = { name: "documentation/classes/PollManager.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Badge = resolveComponent("Badge");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Class</p><h1 id="pollmanager" tabindex="-1">PollManager <a class="header-anchor" href="#pollmanager" aria-label="Permalink to &quot;PollManager&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><code>BaseManager</code>&lt;<a href="./../interfaces/PollManagerOptions.html"><code>PollManagerOptions</code></a>&gt;</p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> PollManager</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">( client )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>client</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./Client.html"><code>Client</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="active-boolean" tabindex="-1">active : <code>boolean</code> <a class="header-anchor" href="#active-boolean" aria-label="Permalink to &quot;active : \`boolean\`&quot;">​</a></h4><h4 id="readonly-client-client" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "readonly"
  }, null, _parent));
  _push(` client : <a href="./Client.html"><code>Client</code></a> <a class="header-anchor" href="#readonly-client-client" aria-label="Permalink to &quot;$readonly client : [\`Client\`](./Client.md)&quot;">​</a></h4><h4 id="readonly-default-pollmanageroptions" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "readonly"
  }, null, _parent));
  _push(` default? : <a href="./../interfaces/PollManagerOptions.html"><code>PollManagerOptions</code></a> <a class="header-anchor" href="#readonly-default-pollmanageroptions" aria-label="Permalink to &quot;$readonly default? : [\`PollManagerOptions\`](../interfaces/PollManagerOptions.md)&quot;">​</a></h4><h4 id="interluder-global-nodejs-timeout" tabindex="-1">interluder? : <code>__global.NodeJS.Timeout</code> <a class="header-anchor" href="#interluder-global-nodejs-timeout" aria-label="Permalink to &quot;interluder? : \`__global.NodeJS.Timeout\`&quot;">​</a></h4><h4 id="offset-number" tabindex="-1">offset? : <code>number</code> <a class="header-anchor" href="#offset-number" aria-label="Permalink to &quot;offset? : \`number\`&quot;">​</a></h4><h4 id="readonly-options-pollmanageroptions" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "readonly"
  }, null, _parent));
  _push(` options : <a href="./../interfaces/PollManagerOptions.html"><code>PollManagerOptions</code></a> <a class="header-anchor" href="#readonly-options-pollmanageroptions" aria-label="Permalink to &quot;$readonly options : [\`PollManagerOptions\`](../interfaces/PollManagerOptions.md)&quot;">​</a></h4><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h4 id="handle-update" tabindex="-1">handle( update ) <a class="header-anchor" href="#handle-update" aria-label="Permalink to &quot;handle( update )&quot;">​</a></h4><p>Handles an incoming update packet from Telegram.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>update</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/UpdatePacket.html"><code>UpdatePacket</code></a> | <a href="./../interfaces/UpdatePacket.html"><code>UpdatePacket</code></a>[]</td><td style="${ssrRenderStyle({ "text-align": "left" })}">The packet response from Telegram.</td></tr></tbody></table><p>Returns: <code>void</code></p><h4 id="asyncinitialize" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`initialize( ) <a class="header-anchor" href="#asyncinitialize" aria-label="Permalink to &quot;$asyncinitialize( )&quot;">​</a></h4><p>Returns: <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="switch" tabindex="-1">switch( ) <a class="header-anchor" href="#switch" aria-label="Permalink to &quot;switch( )&quot;">​</a></h4><p>Enable or disable the poll manager.</p><p>Returns: <code>void</code></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/classes/PollManager.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PollManager = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  PollManager as default
};
