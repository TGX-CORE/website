import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Auxiliary","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/classes/Auxiliary.md","filePath":"documentation/classes/Auxiliary.md"}');
const _sfc_main = { name: "documentation/classes/Auxiliary.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Badge = resolveComponent("Badge");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export abstract Class</p><h1 id="auxiliary" tabindex="-1">Auxiliary <a class="header-anchor" href="#auxiliary" aria-label="Permalink to &quot;Auxiliary&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><code>Piece</code>&lt;<a href="./../interfaces/AuxiliaryMeta.html"><code>AuxiliaryMeta</code></a>&gt;</p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> Auxiliary</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">( context_piece, context_metadata )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>context_piece</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>PieceContext</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>context_metadata</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/AuxiliaryMeta.html"><code>AuxiliaryMeta</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="readonly-client-client" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "readonly"
  }, null, _parent));
  _push(` client : <a href="./Client.html"><code>Client</code></a> <a class="header-anchor" href="#readonly-client-client" aria-label="Permalink to &quot;$readonly client : [\`Client\`](./Client.md)&quot;">​</a></h4><h4 id="enabled-boolean" tabindex="-1">enabled : <code>boolean</code> <a class="header-anchor" href="#enabled-boolean" aria-label="Permalink to &quot;enabled : \`boolean\`&quot;">​</a></h4><h4 id="name-string" tabindex="-1">name : <code>string</code> <a class="header-anchor" href="#name-string" aria-label="Permalink to &quot;name : \`string\`&quot;">​</a></h4><h4 id="registry-auxiliariesregistry" tabindex="-1">registry : <code>AuxiliariesRegistry</code> <a class="header-anchor" href="#registry-auxiliariesregistry" aria-label="Permalink to &quot;registry : \`AuxiliariesRegistry\`&quot;">​</a></h4><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h4 id="load-args" tabindex="-1">load( ...args ) <a class="header-anchor" href="#load-args" aria-label="Permalink to &quot;load( ...args )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>...args</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>unknown</code>[]</td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Returns: <code>void</code></p><h4 id="onload" tabindex="-1">onLoad( ) <a class="header-anchor" href="#onload" aria-label="Permalink to &quot;onLoad( )&quot;">​</a></h4><p>Returns: <code>undefined</code></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/classes/Auxiliary.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Auxiliary = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Auxiliary as default
};
