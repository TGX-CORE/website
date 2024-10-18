import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ReactionTypeEmoji","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/ReactionTypeEmoji.md","filePath":"documentation/interfaces/ReactionTypeEmoji.md"}');
const _sfc_main = { name: "documentation/interfaces/ReactionTypeEmoji.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="reactiontypeemoji" tabindex="-1">ReactionTypeEmoji <a class="header-anchor" href="#reactiontypeemoji" aria-label="Permalink to &quot;ReactionTypeEmoji&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="emoji-acceptedemoji" tabindex="-1">emoji : <a href="./../type-aliases/AcceptedEmoji.html"><code>AcceptedEmoji</code></a> <a class="header-anchor" href="#emoji-acceptedemoji" aria-label="Permalink to &quot;emoji : [\`AcceptedEmoji\`](../type-aliases/AcceptedEmoji.md)&quot;">​</a></h4><h4 id="type-emoji" tabindex="-1">type : <code>&quot;emoji&quot;</code> <a class="header-anchor" href="#type-emoji" aria-label="Permalink to &quot;type : \`&quot;emoji&quot;\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/ReactionTypeEmoji.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ReactionTypeEmoji = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ReactionTypeEmoji as default
};
