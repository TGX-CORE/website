import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BusinessConnectionPacket","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/BusinessConnectionPacket.md","filePath":"documentation/interfaces/BusinessConnectionPacket.md"}');
const _sfc_main = { name: "documentation/interfaces/BusinessConnectionPacket.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="businessconnectionpacket" tabindex="-1">BusinessConnectionPacket <a class="header-anchor" href="#businessconnectionpacket" aria-label="Permalink to &quot;BusinessConnectionPacket&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="can-reply-boolean" tabindex="-1">can_reply : <code>boolean</code> <a class="header-anchor" href="#can-reply-boolean" aria-label="Permalink to &quot;can_reply : \`boolean\`&quot;">​</a></h4><h4 id="date-number" tabindex="-1">date : <code>number</code> <a class="header-anchor" href="#date-number" aria-label="Permalink to &quot;date : \`number\`&quot;">​</a></h4><h4 id="id-string" tabindex="-1">id : <code>string</code> <a class="header-anchor" href="#id-string" aria-label="Permalink to &quot;id : \`string\`&quot;">​</a></h4><h4 id="is-enabled-boolean" tabindex="-1">is_enabled : <code>boolean</code> <a class="header-anchor" href="#is-enabled-boolean" aria-label="Permalink to &quot;is_enabled : \`boolean\`&quot;">​</a></h4><h4 id="user-user" tabindex="-1">user : <a href="./../classes/User.html"><code>User</code></a> <a class="header-anchor" href="#user-user" aria-label="Permalink to &quot;user : [\`User\`](../classes/User.md)&quot;">​</a></h4><h4 id="user-chat-id-number" tabindex="-1">user_chat_id : <code>number</code> <a class="header-anchor" href="#user-chat-id-number" aria-label="Permalink to &quot;user_chat_id : \`number\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/BusinessConnectionPacket.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BusinessConnectionPacket = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  BusinessConnectionPacket as default
};
