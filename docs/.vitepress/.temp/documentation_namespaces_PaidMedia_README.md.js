import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"PaidMedia","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/namespaces/PaidMedia/README.md","filePath":"documentation/namespaces/PaidMedia/README.md"}');
const _sfc_main = { name: "documentation/namespaces/PaidMedia/README.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Namespace</p><h1 id="paidmedia" tabindex="-1">PaidMedia <a class="header-anchor" href="#paidmedia" aria-label="Permalink to &quot;PaidMedia&quot;">​</a></h1><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Member</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Value</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">Photo</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./functions\\Photo.html"><code>Photo</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">Video</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./functions\\Video.html"><code>Video</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/namespaces/PaidMedia/README.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const README = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  README as default
};
