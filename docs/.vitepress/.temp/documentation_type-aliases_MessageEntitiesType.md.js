import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"MessageEntitiesType","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/type-aliases/MessageEntitiesType.md","filePath":"documentation/type-aliases/MessageEntitiesType.md"}');
const _sfc_main = { name: "documentation/type-aliases/MessageEntitiesType.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export TypeAlias</p><h1 id="messageentitiestype" tabindex="-1">MessageEntitiesType <a class="header-anchor" href="#messageentitiestype" aria-label="Permalink to &quot;MessageEntitiesType&quot;">​</a></h1><p>A message entity can be any of the message entites below.</p><p><a href="./../interfaces/MessageEntityPayload.html"><code>MessageEntityPayload</code></a> | <a href="./../namespaces/MessageEntity/functions/Mention.html"><code>MessageEntity.Mention</code></a> | <a href="./../namespaces/MessageEntity/functions/Hashtag.html"><code>MessageEntity.Hashtag</code></a> | <a href="./../namespaces/MessageEntity/functions/Cashtag.html"><code>MessageEntity.Cashtag</code></a> | <a href="./../namespaces/MessageEntity/functions/BotCommand.html"><code>MessageEntity.BotCommand</code></a> | <a href="./../namespaces/MessageEntity/functions/Url.html"><code>MessageEntity.Url</code></a> | <a href="./../namespaces/MessageEntity/functions/Email.html"><code>MessageEntity.Email</code></a> | <a href="./../namespaces/MessageEntity/functions/PhoneNumber.html"><code>MessageEntity.PhoneNumber</code></a> | <a href="./../namespaces/MessageEntity/functions/Bold.html"><code>MessageEntity.Bold</code></a> | <a href="./../namespaces/MessageEntity/functions/Italic.html"><code>MessageEntity.Italic</code></a> | <a href="./../namespaces/MessageEntity/functions/Underline.html"><code>MessageEntity.Underline</code></a> | <a href="./../namespaces/MessageEntity/functions/Strikethrough.html"><code>MessageEntity.Strikethrough</code></a> | <a href="./../namespaces/MessageEntity/functions/Spoiler.html"><code>MessageEntity.Spoiler</code></a> | <a href="./../namespaces/MessageEntity/functions/Blockquote.html"><code>MessageEntity.Blockquote</code></a> | <a href="./../namespaces/MessageEntity/functions/ExpandableBlockquote.html"><code>MessageEntity.ExpandableBlockquote</code></a> | <a href="./../namespaces/MessageEntity/functions/Code.html"><code>MessageEntity.Code</code></a> | <a href="./../namespaces/MessageEntity/functions/Pre.html"><code>MessageEntity.Pre</code></a> | <a href="./../namespaces/MessageEntity/functions/TextLink.html"><code>MessageEntity.TextLink</code></a> | <a href="./../namespaces/MessageEntity/functions/TextMention.html"><code>MessageEntity.TextMention</code></a> | <a href="./../namespaces/MessageEntity/functions/CustomEmoji.html"><code>MessageEntity.CustomEmoji</code></a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/type-aliases/MessageEntitiesType.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MessageEntitiesType = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  MessageEntitiesType as default
};
