import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CommandMeta","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/CommandMeta.md","filePath":"documentation/interfaces/CommandMeta.md"}');
const _sfc_main = { name: "documentation/interfaces/CommandMeta.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="commandmeta" tabindex="-1">CommandMeta <a class="header-anchor" href="#commandmeta" aria-label="Permalink to &quot;CommandMeta&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="chat-groups-object" tabindex="-1">chat_groups? : <code>Object</code> <a class="header-anchor" href="#chat-groups-object" aria-label="Permalink to &quot;chat_groups? : \`Object\`&quot;">​</a></h4><h4 id="chat-ids-number" tabindex="-1">chat_ids? : <code>number</code>[] <a class="header-anchor" href="#chat-ids-number" aria-label="Permalink to &quot;chat_ids? : \`number\`[]&quot;">​</a></h4><h4 id="command-string" tabindex="-1">command : <code>string</code> <a class="header-anchor" href="#command-string" aria-label="Permalink to &quot;command : \`string\`&quot;">​</a></h4><h4 id="description-string" tabindex="-1">description : <code>string</code> <a class="header-anchor" href="#description-string" aria-label="Permalink to &quot;description : \`string\`&quot;">​</a></h4><h4 id="emitter-any" tabindex="-1">emitter? : <code>any</code> <a class="header-anchor" href="#emitter-any" aria-label="Permalink to &quot;emitter? : \`any\`&quot;">​</a></h4><h4 id="ignore-boolean" tabindex="-1">ignore? : <code>boolean</code> <a class="header-anchor" href="#ignore-boolean" aria-label="Permalink to &quot;ignore? : \`boolean\`&quot;">​</a></h4><h4 id="language-code-string" tabindex="-1">language_code? : <code>string</code> <a class="header-anchor" href="#language-code-string" aria-label="Permalink to &quot;language_code? : \`string\`&quot;">​</a></h4><h4 id="name-string" tabindex="-1">name : <code>string</code> <a class="header-anchor" href="#name-string" aria-label="Permalink to &quot;name : \`string\`&quot;">​</a></h4><h4 id="scope-commandscopetype" tabindex="-1">scope? : <a href="./../enumerations/CommandScopeType.html"><code>CommandScopeType</code></a> <a class="header-anchor" href="#scope-commandscopetype" aria-label="Permalink to &quot;scope? : [\`CommandScopeType\`](../enumerations/CommandScopeType.md)&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/CommandMeta.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CommandMeta = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  CommandMeta as default
};
