import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Endpoint","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/enumerations/Endpoint.md","filePath":"documentation/enumerations/Endpoint.md"}');
const _sfc_main = { name: "documentation/enumerations/Endpoint.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Enum</p><h1 id="endpoint" tabindex="-1">Endpoint <a class="header-anchor" href="#endpoint" aria-label="Permalink to &quot;Endpoint&quot;">​</a></h1><p>Available methods for parsing and receiving updates from Telegram.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Member</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Value</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">Poll</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>0</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Default long polling method.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">UpdatePacket</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>2</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">If you have your own method of receiving updates, you can manually send updates to the client instead.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">Webhook</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>1</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Instead of long polling, opens a webhook endpoint to receive updates.</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/enumerations/Endpoint.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Endpoint = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Endpoint as default
};
