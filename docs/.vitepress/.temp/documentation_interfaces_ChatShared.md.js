import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ChatShared","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/ChatShared.md","filePath":"documentation/interfaces/ChatShared.md"}');
const _sfc_main = { name: "documentation/interfaces/ChatShared.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="chatshared" tabindex="-1">ChatShared <a class="header-anchor" href="#chatshared" aria-label="Permalink to &quot;ChatShared&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="chat-id-number" tabindex="-1">chat_id : <code>number</code> <a class="header-anchor" href="#chat-id-number" aria-label="Permalink to &quot;chat_id : \`number\`&quot;">​</a></h4><h4 id="photo-photosize" tabindex="-1">photo? : <a href="./PhotoSize.html"><code>PhotoSize</code></a>[] <a class="header-anchor" href="#photo-photosize" aria-label="Permalink to &quot;photo? : [\`PhotoSize\`](./PhotoSize.md)[]&quot;">​</a></h4><h4 id="request-id-number" tabindex="-1">request_id : <code>number</code> <a class="header-anchor" href="#request-id-number" aria-label="Permalink to &quot;request_id : \`number\`&quot;">​</a></h4><h4 id="title-string" tabindex="-1">title? : <code>string</code> <a class="header-anchor" href="#title-string" aria-label="Permalink to &quot;title? : \`string\`&quot;">​</a></h4><h4 id="username-string" tabindex="-1">username? : <code>string</code> <a class="header-anchor" href="#username-string" aria-label="Permalink to &quot;username? : \`string\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/ChatShared.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChatShared = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ChatShared as default
};
