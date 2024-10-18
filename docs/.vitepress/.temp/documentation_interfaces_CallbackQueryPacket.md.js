import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CallbackQueryPacket","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/CallbackQueryPacket.md","filePath":"documentation/interfaces/CallbackQueryPacket.md"}');
const _sfc_main = { name: "documentation/interfaces/CallbackQueryPacket.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="callbackquerypacket" tabindex="-1">CallbackQueryPacket <a class="header-anchor" href="#callbackquerypacket" aria-label="Permalink to &quot;CallbackQueryPacket&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="chat-instance-string" tabindex="-1">chat_instance : <code>string</code> <a class="header-anchor" href="#chat-instance-string" aria-label="Permalink to &quot;chat_instance : \`string\`&quot;">​</a></h4><h4 id="data-string" tabindex="-1">data : <code>string</code> <a class="header-anchor" href="#data-string" aria-label="Permalink to &quot;data : \`string\`&quot;">​</a></h4><h4 id="from-user" tabindex="-1">from : <a href="./../classes/User.html"><code>User</code></a> <a class="header-anchor" href="#from-user" aria-label="Permalink to &quot;from : [\`User\`](../classes/User.md)&quot;">​</a></h4><h4 id="game-short-name-string" tabindex="-1">game_short_name? : <code>string</code> <a class="header-anchor" href="#game-short-name-string" aria-label="Permalink to &quot;game_short_name? : \`string\`&quot;">​</a></h4><h4 id="id-string" tabindex="-1">id : <code>string</code> <a class="header-anchor" href="#id-string" aria-label="Permalink to &quot;id : \`string\`&quot;">​</a></h4><h4 id="inline-message-id-string" tabindex="-1">inline_message_id? : <code>string</code> <a class="header-anchor" href="#inline-message-id-string" aria-label="Permalink to &quot;inline_message_id? : \`string\`&quot;">​</a></h4><h4 id="message-messagepacket" tabindex="-1">message? : <a href="./MessagePacket.html"><code>MessagePacket</code></a> <a class="header-anchor" href="#message-messagepacket" aria-label="Permalink to &quot;message? : [\`MessagePacket\`](./MessagePacket.md)&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/CallbackQueryPacket.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CallbackQueryPacket = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  CallbackQueryPacket as default
};
