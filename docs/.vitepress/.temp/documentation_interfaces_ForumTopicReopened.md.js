import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ForumTopicReopened","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/ForumTopicReopened.md","filePath":"documentation/interfaces/ForumTopicReopened.md"}');
const _sfc_main = { name: "documentation/interfaces/ForumTopicReopened.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="forumtopicreopened" tabindex="-1">ForumTopicReopened <a class="header-anchor" href="#forumtopicreopened" aria-label="Permalink to &quot;ForumTopicReopened&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/ForumTopicReopened.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ForumTopicReopened = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ForumTopicReopened as default
};
