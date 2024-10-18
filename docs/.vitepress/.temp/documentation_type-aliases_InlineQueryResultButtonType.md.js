import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"InlineQueryResultButtonType","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/type-aliases/InlineQueryResultButtonType.md","filePath":"documentation/type-aliases/InlineQueryResultButtonType.md"}');
const _sfc_main = { name: "documentation/type-aliases/InlineQueryResultButtonType.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export TypeAlias</p><h1 id="inlinequeryresultbuttontype" tabindex="-1">InlineQueryResultButtonType <a class="header-anchor" href="#inlinequeryresultbuttontype" aria-label="Permalink to &quot;InlineQueryResultButtonType&quot;">​</a></h1><p>The result button can be any of the inline query result buttons below.</p><p><a href="./../namespaces/InlineQueryResultButton/classes/WebApp.html"><code>InlineQueryResultButton.WebApp</code></a> | <a href="./../namespaces/InlineQueryResultButton/classes/Start.html"><code>InlineQueryResultButton.Start</code></a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/type-aliases/InlineQueryResultButtonType.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InlineQueryResultButtonType = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  InlineQueryResultButtonType as default
};
