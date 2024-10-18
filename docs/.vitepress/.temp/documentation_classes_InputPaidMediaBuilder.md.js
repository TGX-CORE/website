import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"InputPaidMediaBuilder","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/classes/InputPaidMediaBuilder.md","filePath":"documentation/classes/InputPaidMediaBuilder.md"}');
const _sfc_main = { name: "documentation/classes/InputPaidMediaBuilder.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Class</p><h1 id="inputpaidmediabuilder" tabindex="-1">InputPaidMediaBuilder <a class="header-anchor" href="#inputpaidmediabuilder" aria-label="Permalink to &quot;InputPaidMediaBuilder&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><code>Builder</code></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> InputPaidMediaBuilder</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">( </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">...</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">medias )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>...medias</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../type-aliases/InputPaidMedia.html"><code>InputPaidMedia</code></a>[]</td><td style="${ssrRenderStyle({ "text-align": "left" })}">The medias to be attached to this builder.</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h4 id="add-medias" tabindex="-1">add( ...medias ) <a class="header-anchor" href="#add-medias" aria-label="Permalink to &quot;add( ...medias )&quot;">​</a></h4><p>Adds medias to the current builder.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>...medias</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../type-aliases/InputPaidMedia.html"><code>InputPaidMedia</code></a>[]</td><td style="${ssrRenderStyle({ "text-align": "left" })}">The medias to add.</td></tr></tbody></table><p>Returns: <a href="./InputPaidMediaBuilder.html"><code>InputPaidMediaBuilder</code></a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/classes/InputPaidMediaBuilder.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InputPaidMediaBuilder = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  InputPaidMediaBuilder as default
};