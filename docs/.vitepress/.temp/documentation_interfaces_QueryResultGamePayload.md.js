import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"QueryResultGamePayload","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/QueryResultGamePayload.md","filePath":"documentation/interfaces/QueryResultGamePayload.md"}');
const _sfc_main = { name: "documentation/interfaces/QueryResultGamePayload.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="queryresultgamepayload" tabindex="-1">QueryResultGamePayload <a class="header-anchor" href="#queryresultgamepayload" aria-label="Permalink to &quot;QueryResultGamePayload&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="game-short-name-string" tabindex="-1">game_short_name : <code>string</code> <a class="header-anchor" href="#game-short-name-string" aria-label="Permalink to &quot;game_short_name : \`string\`&quot;">​</a></h4><h4 id="id-string" tabindex="-1">id : <code>string</code> <a class="header-anchor" href="#id-string" aria-label="Permalink to &quot;id : \`string\`&quot;">​</a></h4><h4 id="reply-markup-inlinekeyboardmarkup" tabindex="-1">reply_markup? : <a href="./../classes/InlineKeyboardMarkup.html"><code>InlineKeyboardMarkup</code></a> <a class="header-anchor" href="#reply-markup-inlinekeyboardmarkup" aria-label="Permalink to &quot;reply_markup? : [\`InlineKeyboardMarkup\`](../classes/InlineKeyboardMarkup.md)&quot;">​</a></h4><h4 id="type-game" tabindex="-1">type? : <code>&quot;game&quot;</code> <a class="header-anchor" href="#type-game" aria-label="Permalink to &quot;type? : \`&quot;game&quot;\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/QueryResultGamePayload.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const QueryResultGamePayload = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  QueryResultGamePayload as default
};
