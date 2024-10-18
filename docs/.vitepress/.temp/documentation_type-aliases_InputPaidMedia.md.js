import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"InputPaidMedia","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/type-aliases/InputPaidMedia.md","filePath":"documentation/type-aliases/InputPaidMedia.md"}');
const _sfc_main = { name: "documentation/type-aliases/InputPaidMedia.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export TypeAlias</p><h1 id="inputpaidmedia" tabindex="-1">InputPaidMedia <a class="header-anchor" href="#inputpaidmedia" aria-label="Permalink to &quot;InputPaidMedia&quot;">​</a></h1><p><a href="./../namespaces/PaidMedia/functions/Photo.html"><code>PaidMedia.Photo</code></a> | <a href="./../namespaces/PaidMedia/functions/Video.html"><code>PaidMedia.Video</code></a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/type-aliases/InputPaidMedia.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InputPaidMedia = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  InputPaidMedia as default
};
