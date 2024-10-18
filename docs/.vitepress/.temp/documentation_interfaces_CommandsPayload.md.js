import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CommandsPayload","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/CommandsPayload.md","filePath":"documentation/interfaces/CommandsPayload.md"}');
const _sfc_main = { name: "documentation/interfaces/CommandsPayload.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="commandspayload" tabindex="-1">CommandsPayload <a class="header-anchor" href="#commandspayload" aria-label="Permalink to &quot;CommandsPayload&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="commands-string" tabindex="-1">commands : <code>string</code> <a class="header-anchor" href="#commands-string" aria-label="Permalink to &quot;commands : \`string\`&quot;">​</a></h4><h4 id="language-code-string" tabindex="-1">language_code? : <code>string</code> <a class="header-anchor" href="#language-code-string" aria-label="Permalink to &quot;language_code? : \`string\`&quot;">​</a></h4><h4 id="scope-string" tabindex="-1">scope? : <code>string</code> <a class="header-anchor" href="#scope-string" aria-label="Permalink to &quot;scope? : \`string\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/CommandsPayload.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CommandsPayload = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  CommandsPayload as default
};
