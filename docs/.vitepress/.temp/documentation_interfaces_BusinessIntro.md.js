import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BusinessIntro","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/BusinessIntro.md","filePath":"documentation/interfaces/BusinessIntro.md"}');
const _sfc_main = { name: "documentation/interfaces/BusinessIntro.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="businessintro" tabindex="-1">BusinessIntro <a class="header-anchor" href="#businessintro" aria-label="Permalink to &quot;BusinessIntro&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="message-string" tabindex="-1">message : <code>string</code> <a class="header-anchor" href="#message-string" aria-label="Permalink to &quot;message : \`string\`&quot;">​</a></h4><h4 id="sticker-sticker" tabindex="-1">sticker : <a href="./Sticker.html"><code>Sticker</code></a> <a class="header-anchor" href="#sticker-sticker" aria-label="Permalink to &quot;sticker : [\`Sticker\`](./Sticker.md)&quot;">​</a></h4><h4 id="title-string" tabindex="-1">title : <code>string</code> <a class="header-anchor" href="#title-string" aria-label="Permalink to &quot;title : \`string\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/BusinessIntro.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BusinessIntro = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  BusinessIntro as default
};
