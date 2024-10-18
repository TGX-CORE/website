import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"InputMedia","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/type-aliases/InputMedia.md","filePath":"documentation/type-aliases/InputMedia.md"}');
const _sfc_main = { name: "documentation/type-aliases/InputMedia.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export TypeAlias</p><h1 id="inputmedia" tabindex="-1">InputMedia <a class="header-anchor" href="#inputmedia" aria-label="Permalink to &quot;InputMedia&quot;">​</a></h1><p>An input media can be any of the input medias below.</p><p><a href="./../namespaces/Media/functions/Photo.html"><code>Media.Photo</code></a> | <a href="./../namespaces/Media/functions/Video.html"><code>Media.Video</code></a> | <a href="./../namespaces/Media/functions/Audio.html"><code>Media.Audio</code></a> | <a href="./../namespaces/Media/functions/Document.html"><code>Media.Document</code></a> | <a href="./../namespaces/Media/functions/Animation.html"><code>Media.Animation</code></a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/type-aliases/InputMedia.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InputMedia = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  InputMedia as default
};
