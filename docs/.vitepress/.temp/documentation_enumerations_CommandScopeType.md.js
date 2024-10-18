import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CommandScopeType","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/enumerations/CommandScopeType.md","filePath":"documentation/enumerations/CommandScopeType.md"}');
const _sfc_main = { name: "documentation/enumerations/CommandScopeType.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Enum</p><h1 id="commandscopetype" tabindex="-1">CommandScopeType <a class="header-anchor" href="#commandscopetype" aria-label="Permalink to &quot;CommandScopeType&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Member</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Value</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">AllChatAdministrators</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>&quot;all_chat_administrators&quot;</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">AllGroupChats</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>&quot;all_group_chats&quot;</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">AllPrivateChats</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>&quot;all_private_chats&quot;</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">Chat</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>&quot;chat&quot;</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">ChatAdministrators</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>&quot;chat_administrators&quot;</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">ChatMember</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>&quot;chat_member&quot;</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">Default</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>&quot;default&quot;</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/enumerations/CommandScopeType.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CommandScopeType = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  CommandScopeType as default
};
