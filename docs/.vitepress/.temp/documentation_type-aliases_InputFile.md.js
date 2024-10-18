import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"InputFile","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/type-aliases/InputFile.md","filePath":"documentation/type-aliases/InputFile.md"}');
const _sfc_main = { name: "documentation/type-aliases/InputFile.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export TypeAlias</p><h1 id="inputfile" tabindex="-1">InputFile <a class="header-anchor" href="#inputfile" aria-label="Permalink to &quot;InputFile&quot;">​</a></h1><p>This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.</p><h3 id="additional-information" tabindex="-1">Additional Information <a class="header-anchor" href="#additional-information" aria-label="Permalink to &quot;Additional Information&quot;">​</a></h3><p>Refer to this <a href="/guidebook/Working With Files/Sending a file.html">guide</a> on how to upload files.</p><p><code>string</code> | <a href="./../classes/File.html"><code>File</code></a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/type-aliases/InputFile.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InputFile = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  InputFile as default
};
