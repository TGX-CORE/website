import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"GeneralForumTopicUnhidden","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/GeneralForumTopicUnhidden.md","filePath":"documentation/interfaces/GeneralForumTopicUnhidden.md"}');
const _sfc_main = { name: "documentation/interfaces/GeneralForumTopicUnhidden.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="generalforumtopicunhidden" tabindex="-1">GeneralForumTopicUnhidden <a class="header-anchor" href="#generalforumtopicunhidden" aria-label="Permalink to &quot;GeneralForumTopicUnhidden&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/GeneralForumTopicUnhidden.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const GeneralForumTopicUnhidden = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  GeneralForumTopicUnhidden as default
};
