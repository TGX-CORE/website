import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ForumTopicCreated","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/ForumTopicCreated.md","filePath":"documentation/interfaces/ForumTopicCreated.md"}');
const _sfc_main = { name: "documentation/interfaces/ForumTopicCreated.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="forumtopiccreated" tabindex="-1">ForumTopicCreated <a class="header-anchor" href="#forumtopiccreated" aria-label="Permalink to &quot;ForumTopicCreated&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="icon-color-number" tabindex="-1">icon_color : <code>number</code> <a class="header-anchor" href="#icon-color-number" aria-label="Permalink to &quot;icon_color : \`number\`&quot;">​</a></h4><h4 id="icon-custom-emoji-id-number" tabindex="-1">icon_custom_emoji_id? : <code>number</code> <a class="header-anchor" href="#icon-custom-emoji-id-number" aria-label="Permalink to &quot;icon_custom_emoji_id? : \`number\`&quot;">​</a></h4><h4 id="name-string" tabindex="-1">name : <code>string</code> <a class="header-anchor" href="#name-string" aria-label="Permalink to &quot;name : \`string\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/ForumTopicCreated.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ForumTopicCreated = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ForumTopicCreated as default
};
