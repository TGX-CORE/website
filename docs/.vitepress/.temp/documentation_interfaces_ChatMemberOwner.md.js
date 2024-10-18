import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ChatMemberOwner","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/ChatMemberOwner.md","filePath":"documentation/interfaces/ChatMemberOwner.md"}');
const _sfc_main = { name: "documentation/interfaces/ChatMemberOwner.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="chatmemberowner" tabindex="-1">ChatMemberOwner <a class="header-anchor" href="#chatmemberowner" aria-label="Permalink to &quot;ChatMemberOwner&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><code>BaseChatMember</code></p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="custom-title-string" tabindex="-1">custom_title? : <code>string</code> <a class="header-anchor" href="#custom-title-string" aria-label="Permalink to &quot;custom_title? : \`string\`&quot;">​</a></h4><h4 id="is-anonymous-boolean" tabindex="-1">is_anonymous? : <code>boolean</code> <a class="header-anchor" href="#is-anonymous-boolean" aria-label="Permalink to &quot;is_anonymous? : \`boolean\`&quot;">​</a></h4><h4 id="status-owner" tabindex="-1">status : <code>&quot;owner&quot;</code> <a class="header-anchor" href="#status-owner" aria-label="Permalink to &quot;status : \`&quot;owner&quot;\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/ChatMemberOwner.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChatMemberOwner = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ChatMemberOwner as default
};
