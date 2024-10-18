import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CustomEmoji","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/CustomEmoji.md","filePath":"documentation/interfaces/CustomEmoji.md"}');
const _sfc_main = { name: "documentation/interfaces/CustomEmoji.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="customemoji" tabindex="-1">CustomEmoji <a class="header-anchor" href="#customemoji" aria-label="Permalink to &quot;CustomEmoji&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="custom-emoji-id-string" tabindex="-1">custom_emoji_id : <code>string</code> <a class="header-anchor" href="#custom-emoji-id-string" aria-label="Permalink to &quot;custom_emoji_id : \`string\`&quot;">​</a></h4><h4 id="type-custom-emoji" tabindex="-1">type : <code>&quot;custom_emoji&quot;</code> <a class="header-anchor" href="#type-custom-emoji" aria-label="Permalink to &quot;type : \`&quot;custom_emoji&quot;\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/CustomEmoji.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CustomEmoji = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  CustomEmoji as default
};
