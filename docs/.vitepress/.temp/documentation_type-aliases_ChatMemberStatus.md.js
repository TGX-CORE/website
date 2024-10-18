import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ChatMemberStatus","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/type-aliases/ChatMemberStatus.md","filePath":"documentation/type-aliases/ChatMemberStatus.md"}');
const _sfc_main = { name: "documentation/type-aliases/ChatMemberStatus.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export TypeAlias</p><h1 id="chatmemberstatus" tabindex="-1">ChatMemberStatus <a class="header-anchor" href="#chatmemberstatus" aria-label="Permalink to &quot;ChatMemberStatus&quot;">​</a></h1><p><code>&quot;owner&quot;</code> | <code>&quot;administrator&quot;</code> | <code>&quot;member&quot;</code> | <code>&quot;restricted&quot;</code> | <code>&quot;left&quot;</code> | <code>&quot;kicked&quot;</code></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/type-aliases/ChatMemberStatus.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChatMemberStatus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ChatMemberStatus as default
};
