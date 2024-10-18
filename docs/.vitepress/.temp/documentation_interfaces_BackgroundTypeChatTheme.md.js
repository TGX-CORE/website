import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BackgroundTypeChatTheme","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/BackgroundTypeChatTheme.md","filePath":"documentation/interfaces/BackgroundTypeChatTheme.md"}');
const _sfc_main = { name: "documentation/interfaces/BackgroundTypeChatTheme.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="backgroundtypechattheme" tabindex="-1">BackgroundTypeChatTheme <a class="header-anchor" href="#backgroundtypechattheme" aria-label="Permalink to &quot;BackgroundTypeChatTheme&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="theme-name-string" tabindex="-1">theme_name : <code>string</code> <a class="header-anchor" href="#theme-name-string" aria-label="Permalink to &quot;theme_name : \`string\`&quot;">​</a></h4><h4 id="type-chat-theme" tabindex="-1">type : <code>&quot;chat_theme&quot;</code> <a class="header-anchor" href="#type-chat-theme" aria-label="Permalink to &quot;type : \`&quot;chat_theme&quot;\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/BackgroundTypeChatTheme.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BackgroundTypeChatTheme = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  BackgroundTypeChatTheme as default
};
