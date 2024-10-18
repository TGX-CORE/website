import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ChatMemberBanned","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/ChatMemberBanned.md","filePath":"documentation/interfaces/ChatMemberBanned.md"}');
const _sfc_main = { name: "documentation/interfaces/ChatMemberBanned.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="chatmemberbanned" tabindex="-1">ChatMemberBanned <a class="header-anchor" href="#chatmemberbanned" aria-label="Permalink to &quot;ChatMemberBanned&quot;">​</a></h1><h4 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h4><p><code>BaseChatMember</code></p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="status-kicked" tabindex="-1">status : <code>&quot;kicked&quot;</code> <a class="header-anchor" href="#status-kicked" aria-label="Permalink to &quot;status : \`&quot;kicked&quot;\`&quot;">​</a></h4><h4 id="until-date-number" tabindex="-1">until_date? : <code>number</code> <a class="header-anchor" href="#until-date-number" aria-label="Permalink to &quot;until_date? : \`number\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/ChatMemberBanned.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChatMemberBanned = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ChatMemberBanned as default
};
