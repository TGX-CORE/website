import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ReactionType","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/type-aliases/ReactionType.md","filePath":"documentation/type-aliases/ReactionType.md"}');
const _sfc_main = { name: "documentation/type-aliases/ReactionType.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export TypeAlias</p><h1 id="reactiontype" tabindex="-1">ReactionType <a class="header-anchor" href="#reactiontype" aria-label="Permalink to &quot;ReactionType&quot;">​</a></h1><p><a href="./../interfaces/ReactionTypeEmoji.html"><code>ReactionTypeEmoji</code></a> | <a href="./../interfaces/ReactionTypeCustomEmoji.html"><code>ReactionTypeCustomEmoji</code></a> | <a href="./../interfaces/ReactionTypePaid.html"><code>ReactionTypePaid</code></a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/type-aliases/ReactionType.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ReactionType = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ReactionType as default
};
