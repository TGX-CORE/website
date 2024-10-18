import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ReplyKeyboardButton","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/type-aliases/ReplyKeyboardButton.md","filePath":"documentation/type-aliases/ReplyKeyboardButton.md"}');
const _sfc_main = { name: "documentation/type-aliases/ReplyKeyboardButton.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export TypeAlias</p><h1 id="replykeyboardbutton" tabindex="-1">ReplyKeyboardButton <a class="header-anchor" href="#replykeyboardbutton" aria-label="Permalink to &quot;ReplyKeyboardButton&quot;">​</a></h1><p>A reply keyboard button can be any of the reply buttons below.</p><p><a href="./../interfaces/ReplyButtonPayload.html"><code>ReplyButtonPayload</code></a> | <a href="./../namespaces/ReplyButton/functions/Text.html"><code>ReplyButton.Text</code></a> | <a href="./../namespaces/ReplyButton/functions/Chats.html"><code>ReplyButton.Chats</code></a> | <a href="./../namespaces/ReplyButton/functions/Contact.html"><code>ReplyButton.Contact</code></a> | <a href="./../namespaces/ReplyButton/functions/Users.html"><code>ReplyButton.Users</code></a> | <a href="./../namespaces/ReplyButton/functions/Location.html"><code>ReplyButton.Location</code></a> | <a href="./../namespaces/ReplyButton/functions/Poll.html"><code>ReplyButton.Poll</code></a> | <a href="./../namespaces/ReplyButton/functions/WebApp.html"><code>ReplyButton.WebApp</code></a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/type-aliases/ReplyKeyboardButton.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ReplyKeyboardButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ReplyKeyboardButton as default
};
