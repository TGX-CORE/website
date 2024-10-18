import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"PollAnswerPacket","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/PollAnswerPacket.md","filePath":"documentation/interfaces/PollAnswerPacket.md"}');
const _sfc_main = { name: "documentation/interfaces/PollAnswerPacket.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="pollanswerpacket" tabindex="-1">PollAnswerPacket <a class="header-anchor" href="#pollanswerpacket" aria-label="Permalink to &quot;PollAnswerPacket&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="option-ids-number" tabindex="-1">option_ids : <code>number</code>[] <a class="header-anchor" href="#option-ids-number" aria-label="Permalink to &quot;option_ids : \`number\`[]&quot;">​</a></h4><h4 id="poll-id-string" tabindex="-1">poll_id : <code>string</code> <a class="header-anchor" href="#poll-id-string" aria-label="Permalink to &quot;poll_id : \`string\`&quot;">​</a></h4><h4 id="user-userpacket" tabindex="-1">user? : <a href="./UserPacket.html"><code>UserPacket</code></a> <a class="header-anchor" href="#user-userpacket" aria-label="Permalink to &quot;user? : [\`UserPacket\`](./UserPacket.md)&quot;">​</a></h4><h4 id="voter-chat-chatpacket" tabindex="-1">voter_chat? : <a href="./ChatPacket.html"><code>ChatPacket</code></a> <a class="header-anchor" href="#voter-chat-chatpacket" aria-label="Permalink to &quot;voter_chat? : [\`ChatPacket\`](./ChatPacket.md)&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/PollAnswerPacket.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PollAnswerPacket = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  PollAnswerPacket as default
};
