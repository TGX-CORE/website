import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"MessageOriginHiddenUser","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/MessageOriginHiddenUser.md","filePath":"documentation/interfaces/MessageOriginHiddenUser.md"}');
const _sfc_main = { name: "documentation/interfaces/MessageOriginHiddenUser.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="messageoriginhiddenuser" tabindex="-1">MessageOriginHiddenUser <a class="header-anchor" href="#messageoriginhiddenuser" aria-label="Permalink to &quot;MessageOriginHiddenUser&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="date-number" tabindex="-1">date : <code>number</code> <a class="header-anchor" href="#date-number" aria-label="Permalink to &quot;date : \`number\`&quot;">​</a></h4><h4 id="sender-user-name-string" tabindex="-1">sender_user_name : <code>string</code> <a class="header-anchor" href="#sender-user-name-string" aria-label="Permalink to &quot;sender_user_name : \`string\`&quot;">​</a></h4><h4 id="type-hidden-user" tabindex="-1">type : <code>&quot;hidden_user&quot;</code> <a class="header-anchor" href="#type-hidden-user" aria-label="Permalink to &quot;type : \`&quot;hidden_user&quot;\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/MessageOriginHiddenUser.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MessageOriginHiddenUser = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  MessageOriginHiddenUser as default
};
