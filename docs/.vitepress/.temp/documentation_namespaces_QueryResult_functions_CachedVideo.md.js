import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CachedVideo","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/namespaces/QueryResult/functions/CachedVideo.md","filePath":"documentation/namespaces/QueryResult/functions/CachedVideo.md"}');
const _sfc_main = { name: "documentation/namespaces/QueryResult/functions/CachedVideo.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Function</p><h1 id="cachedvideo" tabindex="-1">CachedVideo <a class="header-anchor" href="#cachedvideo" aria-label="Permalink to &quot;CachedVideo&quot;">​</a></h1><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">QueryResult.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">CachedVideo</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">( payload )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>payload</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../../../interfaces/QueryResultCachedVideoPayload.html"><code>QueryResultCachedVideoPayload</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The payload for the cached video query result.</td></tr></tbody></table><p>Return: <a href="./../../../interfaces/QueryResultCachedVideoPayload.html">QueryResultCachedVideoPayload</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/namespaces/QueryResult/functions/CachedVideo.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CachedVideo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  CachedVideo as default
};