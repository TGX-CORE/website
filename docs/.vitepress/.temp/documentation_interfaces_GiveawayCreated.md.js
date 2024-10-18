import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"GiveawayCreated","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/GiveawayCreated.md","filePath":"documentation/interfaces/GiveawayCreated.md"}');
const _sfc_main = { name: "documentation/interfaces/GiveawayCreated.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="giveawaycreated" tabindex="-1">GiveawayCreated <a class="header-anchor" href="#giveawaycreated" aria-label="Permalink to &quot;GiveawayCreated&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="prize-star-count-number" tabindex="-1">prize_star_count? : <code>number</code> <a class="header-anchor" href="#prize-star-count-number" aria-label="Permalink to &quot;prize_star_count? : \`number\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/GiveawayCreated.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const GiveawayCreated = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  GiveawayCreated as default
};
