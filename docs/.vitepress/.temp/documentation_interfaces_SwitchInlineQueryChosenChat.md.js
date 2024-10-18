import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"SwitchInlineQueryChosenChat","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/SwitchInlineQueryChosenChat.md","filePath":"documentation/interfaces/SwitchInlineQueryChosenChat.md"}');
const _sfc_main = { name: "documentation/interfaces/SwitchInlineQueryChosenChat.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="switchinlinequerychosenchat" tabindex="-1">SwitchInlineQueryChosenChat <a class="header-anchor" href="#switchinlinequerychosenchat" aria-label="Permalink to &quot;SwitchInlineQueryChosenChat&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="allow-bot-chats-boolean" tabindex="-1">allow_bot_chats? : <code>boolean</code> <a class="header-anchor" href="#allow-bot-chats-boolean" aria-label="Permalink to &quot;allow_bot_chats? : \`boolean\`&quot;">​</a></h4><h4 id="allow-channel-chats-boolean" tabindex="-1">allow_channel_chats? : <code>boolean</code> <a class="header-anchor" href="#allow-channel-chats-boolean" aria-label="Permalink to &quot;allow_channel_chats? : \`boolean\`&quot;">​</a></h4><h4 id="allow-group-chats-boolean" tabindex="-1">allow_group_chats? : <code>boolean</code> <a class="header-anchor" href="#allow-group-chats-boolean" aria-label="Permalink to &quot;allow_group_chats? : \`boolean\`&quot;">​</a></h4><h4 id="allow-user-chats-boolean" tabindex="-1">allow_user_chats? : <code>boolean</code> <a class="header-anchor" href="#allow-user-chats-boolean" aria-label="Permalink to &quot;allow_user_chats? : \`boolean\`&quot;">​</a></h4><h4 id="query-string" tabindex="-1">query? : <code>string</code> <a class="header-anchor" href="#query-string" aria-label="Permalink to &quot;query? : \`string\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/SwitchInlineQueryChosenChat.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SwitchInlineQueryChosenChat = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  SwitchInlineQueryChosenChat as default
};
