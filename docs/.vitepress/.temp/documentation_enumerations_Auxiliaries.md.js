import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Auxiliaries","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/enumerations/Auxiliaries.md","filePath":"documentation/enumerations/Auxiliaries.md"}');
const _sfc_main = { name: "documentation/enumerations/Auxiliaries.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Enum</p><h1 id="auxiliaries" tabindex="-1">Auxiliaries <a class="header-anchor" href="#auxiliaries" aria-label="Permalink to &quot;Auxiliaries&quot;">​</a></h1><p>Available registries for auxiliaries. The parameters are enclosed inside the codeblocks.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Member</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Value</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">Invoices</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>&quot;invoices&quot;</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Preload and store invoices for generation: <code>(client.invoices)</code> .</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/enumerations/Auxiliaries.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Auxiliaries = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Auxiliaries as default
};
