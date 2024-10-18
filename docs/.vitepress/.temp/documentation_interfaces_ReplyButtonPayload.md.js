import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ReplyButtonPayload","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/ReplyButtonPayload.md","filePath":"documentation/interfaces/ReplyButtonPayload.md"}');
const _sfc_main = { name: "documentation/interfaces/ReplyButtonPayload.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="replybuttonpayload" tabindex="-1">ReplyButtonPayload <a class="header-anchor" href="#replybuttonpayload" aria-label="Permalink to &quot;ReplyButtonPayload&quot;">​</a></h1><p>This object represents a custom keyboard with reply options (see Introduction to bots for details and examples). Not supported in channels and for messages sent on behalf of a Telegram Business account.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="request-chat-requestchat" tabindex="-1">request_chat? : <a href="./RequestChat.html"><code>RequestChat</code></a> <a class="header-anchor" href="#request-chat-requestchat" aria-label="Permalink to &quot;request_chat? : [\`RequestChat\`](./RequestChat.md)&quot;">​</a></h4><h4 id="request-contact-boolean" tabindex="-1">request_contact? : <code>boolean</code> <a class="header-anchor" href="#request-contact-boolean" aria-label="Permalink to &quot;request_contact? : \`boolean\`&quot;">​</a></h4><h4 id="request-location-boolean" tabindex="-1">request_location? : <code>boolean</code> <a class="header-anchor" href="#request-location-boolean" aria-label="Permalink to &quot;request_location? : \`boolean\`&quot;">​</a></h4><h4 id="request-poll-object" tabindex="-1">request_poll? : <code>Object</code> <a class="header-anchor" href="#request-poll-object" aria-label="Permalink to &quot;request_poll? : \`Object\`&quot;">​</a></h4><h4 id="request-users-requestusers" tabindex="-1">request_users? : <a href="./RequestUsers.html"><code>RequestUsers</code></a> <a class="header-anchor" href="#request-users-requestusers" aria-label="Permalink to &quot;request_users? : [\`RequestUsers\`](./RequestUsers.md)&quot;">​</a></h4><h4 id="text-string" tabindex="-1">text : <code>string</code> <a class="header-anchor" href="#text-string" aria-label="Permalink to &quot;text : \`string\`&quot;">​</a></h4><h4 id="web-app-webappinfo" tabindex="-1">web_app? : <a href="./WebAppInfo.html"><code>WebAppInfo</code></a> <a class="header-anchor" href="#web-app-webappinfo" aria-label="Permalink to &quot;web_app? : [\`WebAppInfo\`](./WebAppInfo.md)&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/ReplyButtonPayload.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ReplyButtonPayload = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ReplyButtonPayload as default
};
