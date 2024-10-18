import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"InlineKeyboardButton","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/type-aliases/InlineKeyboardButton.md","filePath":"documentation/type-aliases/InlineKeyboardButton.md"}');
const _sfc_main = { name: "documentation/type-aliases/InlineKeyboardButton.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export TypeAlias</p><h1 id="inlinekeyboardbutton" tabindex="-1">InlineKeyboardButton <a class="header-anchor" href="#inlinekeyboardbutton" aria-label="Permalink to &quot;InlineKeyboardButton&quot;">​</a></h1><p>An inline keyboard button can be any of the keyboard buttons below.</p><p><a href="./../interfaces/KeyboardButtonPayload.html"><code>KeyboardButtonPayload</code></a> | <a href="./../namespaces/KeyboardButton/functions/Pay.html"><code>KeyboardButton.Pay</code></a> | <a href="./../namespaces/KeyboardButton/functions/Url.html"><code>KeyboardButton.Url</code></a> | <a href="./../namespaces/KeyboardButton/functions/LoginUrl.html"><code>KeyboardButton.LoginUrl</code></a> | <a href="./../namespaces/KeyboardButton/functions/WebAppInfo.html"><code>KeyboardButton.WebAppInfo</code></a> | <a href="./../namespaces/KeyboardButton/functions/CallbackGame.html"><code>KeyboardButton.CallbackGame</code></a> | <a href="./../namespaces/KeyboardButton/functions/CallbackData.html"><code>KeyboardButton.CallbackData</code></a> | <a href="./../namespaces/KeyboardButton/functions/SwitchInlineQuery.html"><code>KeyboardButton.SwitchInlineQuery</code></a> | <a href="./../namespaces/KeyboardButton/functions/SwitchInlineQueryChosenChat.html"><code>KeyboardButton.SwitchInlineQueryChosenChat</code></a> | <a href="./../namespaces/KeyboardButton/functions/SwitchInlineQueryCurrentChat.html"><code>KeyboardButton.SwitchInlineQueryCurrentChat</code></a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/type-aliases/InlineKeyboardButton.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InlineKeyboardButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  InlineKeyboardButton as default
};
