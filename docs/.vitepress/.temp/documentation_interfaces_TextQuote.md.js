import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"TextQuote","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/TextQuote.md","filePath":"documentation/interfaces/TextQuote.md"}');
const _sfc_main = { name: "documentation/interfaces/TextQuote.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="textquote" tabindex="-1">TextQuote <a class="header-anchor" href="#textquote" aria-label="Permalink to &quot;TextQuote&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="entities-messageentities-messageentitypayload" tabindex="-1">entities? : <a href="./../classes/MessageEntities.html"><code>MessageEntities</code></a> | <a href="./MessageEntityPayload.html"><code>MessageEntityPayload</code></a>[] <a class="header-anchor" href="#entities-messageentities-messageentitypayload" aria-label="Permalink to &quot;entities? : [\`MessageEntities\`](../classes/MessageEntities.md) \\| [\`MessageEntityPayload\`](./MessageEntityPayload.md)[]&quot;">​</a></h4><h4 id="is-manual-true" tabindex="-1">is_manual? : <code>true</code> <a class="header-anchor" href="#is-manual-true" aria-label="Permalink to &quot;is_manual? : \`true\`&quot;">​</a></h4><h4 id="position-number" tabindex="-1">position : <code>number</code> <a class="header-anchor" href="#position-number" aria-label="Permalink to &quot;position : \`number\`&quot;">​</a></h4><h4 id="text-string" tabindex="-1">text : <code>string</code> <a class="header-anchor" href="#text-string" aria-label="Permalink to &quot;text : \`string\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/TextQuote.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TextQuote = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  TextQuote as default
};
