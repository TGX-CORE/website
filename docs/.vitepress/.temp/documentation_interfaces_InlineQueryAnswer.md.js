import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"InlineQueryAnswer","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/InlineQueryAnswer.md","filePath":"documentation/interfaces/InlineQueryAnswer.md"}');
const _sfc_main = { name: "documentation/interfaces/InlineQueryAnswer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="inlinequeryanswer" tabindex="-1">InlineQueryAnswer <a class="header-anchor" href="#inlinequeryanswer" aria-label="Permalink to &quot;InlineQueryAnswer&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="button-inlinequeryresultbuttontype" tabindex="-1">button? : <a href="./../type-aliases/InlineQueryResultButtonType.html"><code>InlineQueryResultButtonType</code></a> <a class="header-anchor" href="#button-inlinequeryresultbuttontype" aria-label="Permalink to &quot;button? : [\`InlineQueryResultButtonType\`](../type-aliases/InlineQueryResultButtonType.md)&quot;">​</a></h4><h4 id="cache-time-number" tabindex="-1">cache_time? : <code>number</code> <a class="header-anchor" href="#cache-time-number" aria-label="Permalink to &quot;cache_time? : \`number\`&quot;">​</a></h4><h4 id="is-personal-boolean" tabindex="-1">is_personal? : <code>boolean</code> <a class="header-anchor" href="#is-personal-boolean" aria-label="Permalink to &quot;is_personal? : \`boolean\`&quot;">​</a></h4><h4 id="next-offset-string" tabindex="-1">next_offset? : <code>string</code> <a class="header-anchor" href="#next-offset-string" aria-label="Permalink to &quot;next_offset? : \`string\`&quot;">​</a></h4><h4 id="results-inlinequeryresults" tabindex="-1">results : <a href="./../classes/InlineQueryResults.html"><code>InlineQueryResults</code></a> <a class="header-anchor" href="#results-inlinequeryresults" aria-label="Permalink to &quot;results : [\`InlineQueryResults\`](../classes/InlineQueryResults.md)&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/InlineQueryAnswer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InlineQueryAnswer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  InlineQueryAnswer as default
};
