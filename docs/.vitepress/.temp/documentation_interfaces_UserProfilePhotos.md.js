import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"UserProfilePhotos","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/UserProfilePhotos.md","filePath":"documentation/interfaces/UserProfilePhotos.md"}');
const _sfc_main = { name: "documentation/interfaces/UserProfilePhotos.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="userprofilephotos" tabindex="-1">UserProfilePhotos <a class="header-anchor" href="#userprofilephotos" aria-label="Permalink to &quot;UserProfilePhotos&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="photos-photosize" tabindex="-1">photos : <a href="./PhotoSize.html"><code>PhotoSize</code></a>[][] <a class="header-anchor" href="#photos-photosize" aria-label="Permalink to &quot;photos : [\`PhotoSize\`](./PhotoSize.md)[][]&quot;">​</a></h4><h4 id="total-count-number" tabindex="-1">total_count : <code>number</code> <a class="header-anchor" href="#total-count-number" aria-label="Permalink to &quot;total_count : \`number\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/UserProfilePhotos.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UserProfilePhotos = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  UserProfilePhotos as default
};
