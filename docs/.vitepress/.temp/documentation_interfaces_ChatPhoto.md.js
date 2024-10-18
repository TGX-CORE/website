import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ChatPhoto","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/ChatPhoto.md","filePath":"documentation/interfaces/ChatPhoto.md"}');
const _sfc_main = { name: "documentation/interfaces/ChatPhoto.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="chatphoto" tabindex="-1">ChatPhoto <a class="header-anchor" href="#chatphoto" aria-label="Permalink to &quot;ChatPhoto&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="big-file-id-string" tabindex="-1">big_file_id : <code>string</code> <a class="header-anchor" href="#big-file-id-string" aria-label="Permalink to &quot;big_file_id : \`string\`&quot;">​</a></h4><h4 id="big-file-unique-id-string" tabindex="-1">big_file_unique_id : <code>string</code> <a class="header-anchor" href="#big-file-unique-id-string" aria-label="Permalink to &quot;big_file_unique_id : \`string\`&quot;">​</a></h4><h4 id="small-file-id-string" tabindex="-1">small_file_id : <code>string</code> <a class="header-anchor" href="#small-file-id-string" aria-label="Permalink to &quot;small_file_id : \`string\`&quot;">​</a></h4><h4 id="small-file-unique-id-string" tabindex="-1">small_file_unique_id : <code>string</code> <a class="header-anchor" href="#small-file-unique-id-string" aria-label="Permalink to &quot;small_file_unique_id : \`string\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/ChatPhoto.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChatPhoto = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ChatPhoto as default
};
