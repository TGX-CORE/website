import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Parseables","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/enumerations/Parseables.md","filePath":"documentation/enumerations/Parseables.md"}');
const _sfc_main = { name: "documentation/enumerations/Parseables.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Enum</p><h1 id="parseables" tabindex="-1">Parseables <a class="header-anchor" href="#parseables" aria-label="Permalink to &quot;Parseables&quot;">​</a></h1><p>The client will parse the corresponding object for you.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Member</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Value</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">MessageService</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>1</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Parse message services that was sent by telegram e.g: NewChatMembers, ForumTopicCreated, SuccessfulPayment, etc.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">UnhandledService</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>0</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The client will emit &#39;unhandled&#39; for all events that has been ignored instead of a warning.</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/enumerations/Parseables.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Parseables = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Parseables as default
};
