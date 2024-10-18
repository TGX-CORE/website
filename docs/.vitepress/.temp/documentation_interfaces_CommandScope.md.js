import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CommandScope","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/CommandScope.md","filePath":"documentation/interfaces/CommandScope.md"}');
const _sfc_main = { name: "documentation/interfaces/CommandScope.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="commandscope" tabindex="-1">CommandScope <a class="header-anchor" href="#commandscope" aria-label="Permalink to &quot;CommandScope&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="chat-id-string-number" tabindex="-1">chat_id? : <code>string</code> | <code>number</code> <a class="header-anchor" href="#chat-id-string-number" aria-label="Permalink to &quot;chat_id? : \`string\` \\| \`number\`&quot;">​</a></h4><h4 id="type-commandscopetype" tabindex="-1">type : <a href="./../enumerations/CommandScopeType.html"><code>CommandScopeType</code></a> <a class="header-anchor" href="#type-commandscopetype" aria-label="Permalink to &quot;type : [\`CommandScopeType\`](../enumerations/CommandScopeType.md)&quot;">​</a></h4><h4 id="user-id-number" tabindex="-1">user_id? : <code>number</code> <a class="header-anchor" href="#user-id-number" aria-label="Permalink to &quot;user_id? : \`number\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/CommandScope.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CommandScope = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  CommandScope as default
};
