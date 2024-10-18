import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"MessageReactionPayload","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/MessageReactionPayload.md","filePath":"documentation/interfaces/MessageReactionPayload.md"}');
const _sfc_main = { name: "documentation/interfaces/MessageReactionPayload.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="messagereactionpayload" tabindex="-1">MessageReactionPayload <a class="header-anchor" href="#messagereactionpayload" aria-label="Permalink to &quot;MessageReactionPayload&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="chat-id-string-number" tabindex="-1">chat_id? : <code>string</code> | <code>number</code> <a class="header-anchor" href="#chat-id-string-number" aria-label="Permalink to &quot;chat_id? : \`string\` \\| \`number\`&quot;">​</a></h4><p>The id of the chat.</p><h4 id="is-big-boolean" tabindex="-1">is_big? : <code>boolean</code> <a class="header-anchor" href="#is-big-boolean" aria-label="Permalink to &quot;is_big? : \`boolean\`&quot;">​</a></h4><p>Pass <em>True</em> to set the reaction with a big animation</p><h4 id="message-id-number" tabindex="-1">message_id? : <code>number</code> <a class="header-anchor" href="#message-id-number" aria-label="Permalink to &quot;message_id? : \`number\`&quot;">​</a></h4><p>The id of the message.</p><h4 id="reaction-reactions" tabindex="-1">reaction? : <a href="./../classes/Reactions.html"><code>Reactions</code></a> <a class="header-anchor" href="#reaction-reactions" aria-label="Permalink to &quot;reaction? : [\`Reactions\`](../classes/Reactions.md)&quot;">​</a></h4><p>The reactions to attach to this payload.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/MessageReactionPayload.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MessageReactionPayload = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  MessageReactionPayload as default
};
