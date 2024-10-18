import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"InlineQueryPacket","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/InlineQueryPacket.md","filePath":"documentation/interfaces/InlineQueryPacket.md"}');
const _sfc_main = { name: "documentation/interfaces/InlineQueryPacket.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="inlinequerypacket" tabindex="-1">InlineQueryPacket <a class="header-anchor" href="#inlinequerypacket" aria-label="Permalink to &quot;InlineQueryPacket&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="chat-type-private-group-supergroup-channel" tabindex="-1">chat_type? : <code>&quot;private&quot;</code> | <code>&quot;group&quot;</code> | <code>&quot;supergroup&quot;</code> | <code>&quot;channel&quot;</code> <a class="header-anchor" href="#chat-type-private-group-supergroup-channel" aria-label="Permalink to &quot;chat_type? : \`&quot;private&quot;\` \\| \`&quot;group&quot;\` \\| \`&quot;supergroup&quot;\` \\| \`&quot;channel&quot;\`&quot;">​</a></h4><h4 id="from-user" tabindex="-1">from : <a href="./../classes/User.html"><code>User</code></a> <a class="header-anchor" href="#from-user" aria-label="Permalink to &quot;from : [\`User\`](../classes/User.md)&quot;">​</a></h4><h4 id="id-string" tabindex="-1">id : <code>string</code> <a class="header-anchor" href="#id-string" aria-label="Permalink to &quot;id : \`string\`&quot;">​</a></h4><h4 id="location-location" tabindex="-1">location? : <a href="./Location.html"><code>Location</code></a> <a class="header-anchor" href="#location-location" aria-label="Permalink to &quot;location? : [\`Location\`](./Location.md)&quot;">​</a></h4><h4 id="offset-string" tabindex="-1">offset : <code>string</code> <a class="header-anchor" href="#offset-string" aria-label="Permalink to &quot;offset : \`string\`&quot;">​</a></h4><h4 id="query-string" tabindex="-1">query : <code>string</code> <a class="header-anchor" href="#query-string" aria-label="Permalink to &quot;query : \`string\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/InlineQueryPacket.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InlineQueryPacket = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  InlineQueryPacket as default
};
