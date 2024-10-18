import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Registries","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/enumerations/Registries.md","filePath":"documentation/enumerations/Registries.md"}');
const _sfc_main = { name: "documentation/enumerations/Registries.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Enum</p><h1 id="registries" tabindex="-1">Registries <a class="header-anchor" href="#registries" aria-label="Permalink to &quot;Registries&quot;">​</a></h1><p>Available registries for loading.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Member</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Value</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">All</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>0</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Register all the available registries.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">Auxiliaries</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>1</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Register the auxiliries registry.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">Commands</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>2</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Register the commands registry.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">Events</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>3</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Register the events registry.</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/enumerations/Registries.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Registries = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Registries as default
};
