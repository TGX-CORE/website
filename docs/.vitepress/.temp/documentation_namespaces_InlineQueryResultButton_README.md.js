import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"InlineQueryResultButton","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/namespaces/InlineQueryResultButton/README.md","filePath":"documentation/namespaces/InlineQueryResultButton/README.md"}');
const _sfc_main = { name: "documentation/namespaces/InlineQueryResultButton/README.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Namespace</p><h1 id="inlinequeryresultbutton" tabindex="-1">InlineQueryResultButton <a class="header-anchor" href="#inlinequeryresultbutton" aria-label="Permalink to &quot;InlineQueryResultButton&quot;">​</a></h1><p>Represents a button to be shown above inline query results.</p><h2 id="classes" tabindex="-1">Classes <a class="header-anchor" href="#classes" aria-label="Permalink to &quot;Classes&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Member</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Value</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">Start</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./classes\\Start.html"><code>Start</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="https://core.telegram.org/bots/features#deep-linking" target="_blank" rel="noreferrer">Deep-linking</a> parameter for the /start message sent to the bot when a user presses the button. 1-64 characters, only A-Z, a-z, 0-9, _ and - are allowed.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">WebApp</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./classes\\WebApp.html"><code>WebApp</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/namespaces/InlineQueryResultButton/README.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const README = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  README as default
};
