import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Story","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/Story.md","filePath":"documentation/interfaces/Story.md"}');
const _sfc_main = { name: "documentation/interfaces/Story.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="story" tabindex="-1">Story <a class="header-anchor" href="#story" aria-label="Permalink to &quot;Story&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="chat-chat" tabindex="-1">chat : <a href="./../type-aliases/Chat.html"><code>Chat</code></a> <a class="header-anchor" href="#chat-chat" aria-label="Permalink to &quot;chat : [\`Chat\`](../type-aliases/Chat.md)&quot;">​</a></h4><h4 id="id-number" tabindex="-1">id : <code>number</code> <a class="header-anchor" href="#id-number" aria-label="Permalink to &quot;id : \`number\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/Story.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Story = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Story as default
};
