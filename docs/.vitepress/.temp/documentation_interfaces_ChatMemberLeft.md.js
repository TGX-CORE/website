import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ChatMemberLeft","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/ChatMemberLeft.md","filePath":"documentation/interfaces/ChatMemberLeft.md"}');
const _sfc_main = { name: "documentation/interfaces/ChatMemberLeft.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="chatmemberleft" tabindex="-1">ChatMemberLeft <a class="header-anchor" href="#chatmemberleft" aria-label="Permalink to &quot;ChatMemberLeft&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><code>BaseChatMember</code></p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="status-left" tabindex="-1">status : <code>&quot;left&quot;</code> <a class="header-anchor" href="#status-left" aria-label="Permalink to &quot;status : \`&quot;left&quot;\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/ChatMemberLeft.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChatMemberLeft = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ChatMemberLeft as default
};
