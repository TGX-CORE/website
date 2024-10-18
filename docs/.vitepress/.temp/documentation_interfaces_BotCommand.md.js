import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BotCommand","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/BotCommand.md","filePath":"documentation/interfaces/BotCommand.md"}');
const _sfc_main = { name: "documentation/interfaces/BotCommand.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="botcommand" tabindex="-1">BotCommand <a class="header-anchor" href="#botcommand" aria-label="Permalink to &quot;BotCommand&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="command-string" tabindex="-1">command : <code>string</code> <a class="header-anchor" href="#command-string" aria-label="Permalink to &quot;command : \`string\`&quot;">​</a></h4><h4 id="description-string" tabindex="-1">description : <code>string</code> <a class="header-anchor" href="#description-string" aria-label="Permalink to &quot;description : \`string\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/BotCommand.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BotCommand = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  BotCommand as default
};
