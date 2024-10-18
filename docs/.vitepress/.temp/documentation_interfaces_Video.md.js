import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Video","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/Video.md","filePath":"documentation/interfaces/Video.md"}');
const _sfc_main = { name: "documentation/interfaces/Video.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="video" tabindex="-1">Video <a class="header-anchor" href="#video" aria-label="Permalink to &quot;Video&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="duration-number" tabindex="-1">duration : <code>number</code> <a class="header-anchor" href="#duration-number" aria-label="Permalink to &quot;duration : \`number\`&quot;">​</a></h4><h4 id="file-id-string" tabindex="-1">file_id : <code>string</code> <a class="header-anchor" href="#file-id-string" aria-label="Permalink to &quot;file_id : \`string\`&quot;">​</a></h4><h4 id="file-name-string" tabindex="-1">file_name? : <code>string</code> <a class="header-anchor" href="#file-name-string" aria-label="Permalink to &quot;file_name? : \`string\`&quot;">​</a></h4><h4 id="file-size-number" tabindex="-1">file_size? : <code>number</code> <a class="header-anchor" href="#file-size-number" aria-label="Permalink to &quot;file_size? : \`number\`&quot;">​</a></h4><h4 id="file-unique-id-string" tabindex="-1">file_unique_id : <code>string</code> <a class="header-anchor" href="#file-unique-id-string" aria-label="Permalink to &quot;file_unique_id : \`string\`&quot;">​</a></h4><h4 id="height-number" tabindex="-1">height : <code>number</code> <a class="header-anchor" href="#height-number" aria-label="Permalink to &quot;height : \`number\`&quot;">​</a></h4><h4 id="mime-type-string" tabindex="-1">mime_type? : <code>string</code> <a class="header-anchor" href="#mime-type-string" aria-label="Permalink to &quot;mime_type? : \`string\`&quot;">​</a></h4><h4 id="thumbnail-photosize" tabindex="-1">thumbnail? : <a href="./PhotoSize.html"><code>PhotoSize</code></a> <a class="header-anchor" href="#thumbnail-photosize" aria-label="Permalink to &quot;thumbnail? : [\`PhotoSize\`](./PhotoSize.md)&quot;">​</a></h4><h4 id="width-number" tabindex="-1">width : <code>number</code> <a class="header-anchor" href="#width-number" aria-label="Permalink to &quot;width : \`number\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/Video.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Video = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Video as default
};
