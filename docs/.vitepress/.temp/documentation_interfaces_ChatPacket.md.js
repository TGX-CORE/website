import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ChatPacket","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/ChatPacket.md","filePath":"documentation/interfaces/ChatPacket.md"}');
const _sfc_main = { name: "documentation/interfaces/ChatPacket.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="chatpacket" tabindex="-1">ChatPacket <a class="header-anchor" href="#chatpacket" aria-label="Permalink to &quot;ChatPacket&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="first-name-string" tabindex="-1">first_name? : <code>string</code> <a class="header-anchor" href="#first-name-string" aria-label="Permalink to &quot;first_name? : \`string\`&quot;">​</a></h4><h4 id="id-number" tabindex="-1">id : <code>number</code> <a class="header-anchor" href="#id-number" aria-label="Permalink to &quot;id : \`number\`&quot;">​</a></h4><h4 id="is-forum-boolean" tabindex="-1">is_forum? : <code>boolean</code> <a class="header-anchor" href="#is-forum-boolean" aria-label="Permalink to &quot;is_forum? : \`boolean\`&quot;">​</a></h4><h4 id="last-name-string" tabindex="-1">last_name? : <code>string</code> <a class="header-anchor" href="#last-name-string" aria-label="Permalink to &quot;last_name? : \`string\`&quot;">​</a></h4><h4 id="type-private-group-supergroup-channel" tabindex="-1">type : <code>&quot;private&quot;</code> | <code>&quot;group&quot;</code> | <code>&quot;supergroup&quot;</code> | <code>&quot;channel&quot;</code> <a class="header-anchor" href="#type-private-group-supergroup-channel" aria-label="Permalink to &quot;type : \`&quot;private&quot;\` \\| \`&quot;group&quot;\` \\| \`&quot;supergroup&quot;\` \\| \`&quot;channel&quot;\`&quot;">​</a></h4><h4 id="user-name-string" tabindex="-1">user_name? : <code>string</code> <a class="header-anchor" href="#user-name-string" aria-label="Permalink to &quot;user_name? : \`string\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/ChatPacket.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChatPacket = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ChatPacket as default
};
