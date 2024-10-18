import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Emojis","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/type-aliases/Emojis.md","filePath":"documentation/type-aliases/Emojis.md"}');
const _sfc_main = { name: "documentation/type-aliases/Emojis.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export TypeAlias</p><h1 id="emojis" tabindex="-1">Emojis <a class="header-anchor" href="#emojis" aria-label="Permalink to &quot;Emojis&quot;">​</a></h1><p><a href="./../namespaces/Emoji/functions/Emoji.html"><code>Emoji.Emoji</code></a> | <a href="./../namespaces/Emoji/functions/Custom.html"><code>Emoji.Custom</code></a> | <a href="./../namespaces/Emoji/functions/Paid.html"><code>Emoji.Paid</code></a> | <a href="./../interfaces/Emoji.html"><code>Emoji</code></a> | <a href="./../interfaces/CustomEmoji.html"><code>CustomEmoji</code></a> | <a href="./../interfaces/PaidEmoji.html"><code>PaidEmoji</code></a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/type-aliases/Emojis.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Emojis = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Emojis as default
};
