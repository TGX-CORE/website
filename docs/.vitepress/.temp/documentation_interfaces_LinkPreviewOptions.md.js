import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"LinkPreviewOptions","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/LinkPreviewOptions.md","filePath":"documentation/interfaces/LinkPreviewOptions.md"}');
const _sfc_main = { name: "documentation/interfaces/LinkPreviewOptions.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="linkpreviewoptions" tabindex="-1">LinkPreviewOptions <a class="header-anchor" href="#linkpreviewoptions" aria-label="Permalink to &quot;LinkPreviewOptions&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="is-disabled-boolean" tabindex="-1">is_disabled? : <code>boolean</code> <a class="header-anchor" href="#is-disabled-boolean" aria-label="Permalink to &quot;is_disabled? : \`boolean\`&quot;">​</a></h4><h4 id="prefer-large-media-boolean" tabindex="-1">prefer_large_media? : <code>boolean</code> <a class="header-anchor" href="#prefer-large-media-boolean" aria-label="Permalink to &quot;prefer_large_media? : \`boolean\`&quot;">​</a></h4><h4 id="prefer-small-media-boolean" tabindex="-1">prefer_small_media? : <code>boolean</code> <a class="header-anchor" href="#prefer-small-media-boolean" aria-label="Permalink to &quot;prefer_small_media? : \`boolean\`&quot;">​</a></h4><h4 id="show-above-text-boolean" tabindex="-1">show_above_text? : <code>boolean</code> <a class="header-anchor" href="#show-above-text-boolean" aria-label="Permalink to &quot;show_above_text? : \`boolean\`&quot;">​</a></h4><h4 id="url-string" tabindex="-1">url? : <code>string</code> <a class="header-anchor" href="#url-string" aria-label="Permalink to &quot;url? : \`string\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/LinkPreviewOptions.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LinkPreviewOptions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  LinkPreviewOptions as default
};
