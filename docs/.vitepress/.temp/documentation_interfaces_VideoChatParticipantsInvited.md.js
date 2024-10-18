import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"VideoChatParticipantsInvited","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/VideoChatParticipantsInvited.md","filePath":"documentation/interfaces/VideoChatParticipantsInvited.md"}');
const _sfc_main = { name: "documentation/interfaces/VideoChatParticipantsInvited.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="videochatparticipantsinvited" tabindex="-1">VideoChatParticipantsInvited <a class="header-anchor" href="#videochatparticipantsinvited" aria-label="Permalink to &quot;VideoChatParticipantsInvited&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="users-userpacket" tabindex="-1">users : <a href="./UserPacket.html"><code>UserPacket</code></a>[] <a class="header-anchor" href="#users-userpacket" aria-label="Permalink to &quot;users : [\`UserPacket\`](./UserPacket.md)[]&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/VideoChatParticipantsInvited.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const VideoChatParticipantsInvited = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  VideoChatParticipantsInvited as default
};
