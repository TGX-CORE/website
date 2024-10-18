import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ReplyParameters","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/ReplyParameters.md","filePath":"documentation/interfaces/ReplyParameters.md"}');
const _sfc_main = { name: "documentation/interfaces/ReplyParameters.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="replyparameters" tabindex="-1">ReplyParameters <a class="header-anchor" href="#replyparameters" aria-label="Permalink to &quot;ReplyParameters&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="allow-sending-without-reply-boolean" tabindex="-1">allow_sending_without_reply? : <code>boolean</code> <a class="header-anchor" href="#allow-sending-without-reply-boolean" aria-label="Permalink to &quot;allow_sending_without_reply? : \`boolean\`&quot;">​</a></h4><h4 id="chat-id-string-number" tabindex="-1">chat_id? : <code>string</code> | <code>number</code> <a class="header-anchor" href="#chat-id-string-number" aria-label="Permalink to &quot;chat_id? : \`string\` \\| \`number\`&quot;">​</a></h4><h4 id="message-id-number" tabindex="-1">message_id? : <code>number</code> <a class="header-anchor" href="#message-id-number" aria-label="Permalink to &quot;message_id? : \`number\`&quot;">​</a></h4><h4 id="quote-string" tabindex="-1">quote? : <code>string</code> <a class="header-anchor" href="#quote-string" aria-label="Permalink to &quot;quote? : \`string\`&quot;">​</a></h4><h4 id="quote-entities-messageentities-messageentitypayload" tabindex="-1">quote_entities? : <a href="./../classes/MessageEntities.html"><code>MessageEntities</code></a> | <a href="./MessageEntityPayload.html"><code>MessageEntityPayload</code></a>[] <a class="header-anchor" href="#quote-entities-messageentities-messageentitypayload" aria-label="Permalink to &quot;quote_entities? : [\`MessageEntities\`](../classes/MessageEntities.md) \\| [\`MessageEntityPayload\`](./MessageEntityPayload.md)[]&quot;">​</a></h4><h4 id="quote-parse-mode-string" tabindex="-1">quote_parse_mode? : <code>string</code> <a class="header-anchor" href="#quote-parse-mode-string" aria-label="Permalink to &quot;quote_parse_mode? : \`string\`&quot;">​</a></h4><h4 id="quote-position-number" tabindex="-1">quote_position? : <code>number</code> <a class="header-anchor" href="#quote-position-number" aria-label="Permalink to &quot;quote_position? : \`number\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/ReplyParameters.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ReplyParameters = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ReplyParameters as default
};