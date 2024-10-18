import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"PaidMediaInfo","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/PaidMediaInfo.md","filePath":"documentation/interfaces/PaidMediaInfo.md"}');
const _sfc_main = { name: "documentation/interfaces/PaidMediaInfo.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="paidmediainfo" tabindex="-1">PaidMediaInfo <a class="header-anchor" href="#paidmediainfo" aria-label="Permalink to &quot;PaidMediaInfo&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="paid-media-inputpaidmediabuilder" tabindex="-1">paid_media? : <a href="./../classes/InputPaidMediaBuilder.html"><code>InputPaidMediaBuilder</code></a> <a class="header-anchor" href="#paid-media-inputpaidmediabuilder" aria-label="Permalink to &quot;paid_media? : [\`InputPaidMediaBuilder\`](../classes/InputPaidMediaBuilder.md)&quot;">​</a></h4><h4 id="star-count-number" tabindex="-1">star_count : <code>number</code> <a class="header-anchor" href="#star-count-number" aria-label="Permalink to &quot;star_count : \`number\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/PaidMediaInfo.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PaidMediaInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  PaidMediaInfo as default
};
