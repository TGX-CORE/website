import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ChatInviteLinkCreatePayload","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/ChatInviteLinkCreatePayload.md","filePath":"documentation/interfaces/ChatInviteLinkCreatePayload.md"}');
const _sfc_main = { name: "documentation/interfaces/ChatInviteLinkCreatePayload.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="chatinvitelinkcreatepayload" tabindex="-1">ChatInviteLinkCreatePayload <a class="header-anchor" href="#chatinvitelinkcreatepayload" aria-label="Permalink to &quot;ChatInviteLinkCreatePayload&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="chat-id-string-number" tabindex="-1">chat_id : <code>string</code> | <code>number</code> <a class="header-anchor" href="#chat-id-string-number" aria-label="Permalink to &quot;chat_id : \`string\` \\| \`number\`&quot;">​</a></h4><h4 id="creates-join-request-boolean" tabindex="-1">creates_join_request? : <code>boolean</code> <a class="header-anchor" href="#creates-join-request-boolean" aria-label="Permalink to &quot;creates_join_request? : \`boolean\`&quot;">​</a></h4><h4 id="expire-date-number" tabindex="-1">expire_date? : <code>number</code> <a class="header-anchor" href="#expire-date-number" aria-label="Permalink to &quot;expire_date? : \`number\`&quot;">​</a></h4><h4 id="member-limit-number" tabindex="-1">member_limit? : <code>number</code> <a class="header-anchor" href="#member-limit-number" aria-label="Permalink to &quot;member_limit? : \`number\`&quot;">​</a></h4><h4 id="name-string" tabindex="-1">name? : <code>string</code> <a class="header-anchor" href="#name-string" aria-label="Permalink to &quot;name? : \`string\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/ChatInviteLinkCreatePayload.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChatInviteLinkCreatePayload = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ChatInviteLinkCreatePayload as default
};
