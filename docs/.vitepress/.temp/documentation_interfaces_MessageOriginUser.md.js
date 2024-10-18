import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"MessageOriginUser","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/MessageOriginUser.md","filePath":"documentation/interfaces/MessageOriginUser.md"}');
const _sfc_main = { name: "documentation/interfaces/MessageOriginUser.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="messageoriginuser" tabindex="-1">MessageOriginUser <a class="header-anchor" href="#messageoriginuser" aria-label="Permalink to &quot;MessageOriginUser&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="date-number" tabindex="-1">date : <code>number</code> <a class="header-anchor" href="#date-number" aria-label="Permalink to &quot;date : \`number\`&quot;">​</a></h4><h4 id="sender-user-userpacket" tabindex="-1">sender_user : <a href="./UserPacket.html"><code>UserPacket</code></a> <a class="header-anchor" href="#sender-user-userpacket" aria-label="Permalink to &quot;sender_user : [\`UserPacket\`](./UserPacket.md)&quot;">​</a></h4><h4 id="type-user" tabindex="-1">type : <code>&quot;user&quot;</code> <a class="header-anchor" href="#type-user" aria-label="Permalink to &quot;type : \`&quot;user&quot;\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/MessageOriginUser.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MessageOriginUser = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  MessageOriginUser as default
};
