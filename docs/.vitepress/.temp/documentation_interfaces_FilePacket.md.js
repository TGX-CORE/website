import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"FilePacket","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/FilePacket.md","filePath":"documentation/interfaces/FilePacket.md"}');
const _sfc_main = { name: "documentation/interfaces/FilePacket.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="filepacket" tabindex="-1">FilePacket <a class="header-anchor" href="#filepacket" aria-label="Permalink to &quot;FilePacket&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="client-client" tabindex="-1">client? : <a href="./../classes/Client.html"><code>Client</code></a> <a class="header-anchor" href="#client-client" aria-label="Permalink to &quot;client? : [\`Client\`](../classes/Client.md)&quot;">​</a></h4><h4 id="file-id-string" tabindex="-1">file_id? : <code>string</code> <a class="header-anchor" href="#file-id-string" aria-label="Permalink to &quot;file_id? : \`string\`&quot;">​</a></h4><h4 id="file-path-string" tabindex="-1">file_path? : <code>string</code> <a class="header-anchor" href="#file-path-string" aria-label="Permalink to &quot;file_path? : \`string\`&quot;">​</a></h4><h4 id="file-size-number" tabindex="-1">file_size? : <code>number</code> <a class="header-anchor" href="#file-size-number" aria-label="Permalink to &quot;file_size? : \`number\`&quot;">​</a></h4><h4 id="file-unique-id-string" tabindex="-1">file_unique_id? : <code>string</code> <a class="header-anchor" href="#file-unique-id-string" aria-label="Permalink to &quot;file_unique_id? : \`string\`&quot;">​</a></h4><h4 id="height-number" tabindex="-1">height? : <code>number</code> <a class="header-anchor" href="#height-number" aria-label="Permalink to &quot;height? : \`number\`&quot;">​</a></h4><h4 id="width-number" tabindex="-1">width? : <code>number</code> <a class="header-anchor" href="#width-number" aria-label="Permalink to &quot;width? : \`number\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/FilePacket.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FilePacket = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  FilePacket as default
};
