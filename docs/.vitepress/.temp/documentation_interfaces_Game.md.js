import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Game","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/Game.md","filePath":"documentation/interfaces/Game.md"}');
const _sfc_main = { name: "documentation/interfaces/Game.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="game" tabindex="-1">Game <a class="header-anchor" href="#game" aria-label="Permalink to &quot;Game&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="animation-animation" tabindex="-1">animation? : <code>Animation</code> <a class="header-anchor" href="#animation-animation" aria-label="Permalink to &quot;animation? : \`Animation\`&quot;">​</a></h4><h4 id="description-string" tabindex="-1">description : <code>string</code> <a class="header-anchor" href="#description-string" aria-label="Permalink to &quot;description : \`string\`&quot;">​</a></h4><h4 id="photo-photosize" tabindex="-1">photo : <a href="./PhotoSize.html"><code>PhotoSize</code></a>[] <a class="header-anchor" href="#photo-photosize" aria-label="Permalink to &quot;photo : [\`PhotoSize\`](./PhotoSize.md)[]&quot;">​</a></h4><h4 id="text-string" tabindex="-1">text? : <code>string</code> <a class="header-anchor" href="#text-string" aria-label="Permalink to &quot;text? : \`string\`&quot;">​</a></h4><h4 id="text-entities-messageentities-messageentitypayload" tabindex="-1">text_entities? : <a href="./../classes/MessageEntities.html"><code>MessageEntities</code></a> | <a href="./MessageEntityPayload.html"><code>MessageEntityPayload</code></a>[] <a class="header-anchor" href="#text-entities-messageentities-messageentitypayload" aria-label="Permalink to &quot;text_entities? : [\`MessageEntities\`](../classes/MessageEntities.md) \\| [\`MessageEntityPayload\`](./MessageEntityPayload.md)[]&quot;">​</a></h4><h4 id="title-string" tabindex="-1">title : <code>string</code> <a class="header-anchor" href="#title-string" aria-label="Permalink to &quot;title : \`string\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/Game.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Game = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Game as default
};
