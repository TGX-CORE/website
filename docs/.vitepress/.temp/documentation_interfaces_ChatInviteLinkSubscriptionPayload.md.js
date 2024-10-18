import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ChatInviteLinkSubscriptionPayload","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/ChatInviteLinkSubscriptionPayload.md","filePath":"documentation/interfaces/ChatInviteLinkSubscriptionPayload.md"}');
const _sfc_main = { name: "documentation/interfaces/ChatInviteLinkSubscriptionPayload.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="chatinvitelinksubscriptionpayload" tabindex="-1">ChatInviteLinkSubscriptionPayload <a class="header-anchor" href="#chatinvitelinksubscriptionpayload" aria-label="Permalink to &quot;ChatInviteLinkSubscriptionPayload&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="chat-id-string-number" tabindex="-1">chat_id : <code>string</code> | <code>number</code> <a class="header-anchor" href="#chat-id-string-number" aria-label="Permalink to &quot;chat_id : \`string\` \\| \`number\`&quot;">​</a></h4><h4 id="name-string" tabindex="-1">name? : <code>string</code> <a class="header-anchor" href="#name-string" aria-label="Permalink to &quot;name? : \`string\`&quot;">​</a></h4><h4 id="subscription-period-number" tabindex="-1">subscription_period : <code>number</code> <a class="header-anchor" href="#subscription-period-number" aria-label="Permalink to &quot;subscription_period : \`number\`&quot;">​</a></h4><h4 id="subscription-price-number" tabindex="-1">subscription_price : <code>number</code> <a class="header-anchor" href="#subscription-price-number" aria-label="Permalink to &quot;subscription_price : \`number\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/ChatInviteLinkSubscriptionPayload.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChatInviteLinkSubscriptionPayload = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ChatInviteLinkSubscriptionPayload as default
};
