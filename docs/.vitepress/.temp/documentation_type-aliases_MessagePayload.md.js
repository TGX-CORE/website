import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"MessagePayload","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/type-aliases/MessagePayload.md","filePath":"documentation/type-aliases/MessagePayload.md"}');
const _sfc_main = { name: "documentation/type-aliases/MessagePayload.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export TypeAlias</p><h1 id="messagepayload" tabindex="-1">MessagePayload <a class="header-anchor" href="#messagepayload" aria-label="Permalink to &quot;MessagePayload&quot;">​</a></h1><p><a href="./../interfaces/TextPayload.html"><code>TextPayload</code></a> | <a href="./../interfaces/PhotoPayload.html"><code>PhotoPayload</code></a> | <a href="./../interfaces/AudioPayload.html"><code>AudioPayload</code></a> | <a href="./../interfaces/DocumentPayload.html"><code>DocumentPayload</code></a> | <a href="./../interfaces/AnimationPayload.html"><code>AnimationPayload</code></a> | <a href="./../interfaces/VoicePayload.html"><code>VoicePayload</code></a> | <a href="./../interfaces/VideoNotePayload.html"><code>VideoNotePayload</code></a> | <a href="./../interfaces/PaidMediaPayload.html"><code>PaidMediaPayload</code></a> | <a href="./../interfaces/MediaGroupPayload.html"><code>MediaGroupPayload</code></a> | <a href="./../interfaces/VenuePayload.html"><code>VenuePayload</code></a> | <a href="./../interfaces/LocationPayload.html"><code>LocationPayload</code></a> | <a href="./../interfaces/ContactPayload.html"><code>ContactPayload</code></a> | <a href="./../interfaces/PollPayload.html"><code>PollPayload</code></a> | <a href="./../interfaces/DicePayload.html"><code>DicePayload</code></a> | <a href="./../interfaces/ChatActionPayload.html"><code>ChatActionPayload</code></a> | <a href="./../interfaces/CreateInvoiceLinkPayload.html"><code>CreateInvoiceLinkPayload</code></a> | <a href="./../interfaces/SendInvoicePayload.html"><code>SendInvoicePayload</code></a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/type-aliases/MessagePayload.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MessagePayload = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  MessagePayload as default
};
