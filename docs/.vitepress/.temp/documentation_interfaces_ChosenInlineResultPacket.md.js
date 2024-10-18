import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ChosenInlineResultPacket","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/ChosenInlineResultPacket.md","filePath":"documentation/interfaces/ChosenInlineResultPacket.md"}');
const _sfc_main = { name: "documentation/interfaces/ChosenInlineResultPacket.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="choseninlineresultpacket" tabindex="-1">ChosenInlineResultPacket <a class="header-anchor" href="#choseninlineresultpacket" aria-label="Permalink to &quot;ChosenInlineResultPacket&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="from-user" tabindex="-1">from : <a href="./../classes/User.html"><code>User</code></a> <a class="header-anchor" href="#from-user" aria-label="Permalink to &quot;from : [\`User\`](../classes/User.md)&quot;">​</a></h4><h4 id="inline-message-id-string" tabindex="-1">inline_message_id? : <code>string</code> <a class="header-anchor" href="#inline-message-id-string" aria-label="Permalink to &quot;inline_message_id? : \`string\`&quot;">​</a></h4><h4 id="location-any" tabindex="-1">location? : <code>any</code> <a class="header-anchor" href="#location-any" aria-label="Permalink to &quot;location? : \`any\`&quot;">​</a></h4><h4 id="query-string" tabindex="-1">query? : <code>string</code> <a class="header-anchor" href="#query-string" aria-label="Permalink to &quot;query? : \`string\`&quot;">​</a></h4><h4 id="result-id-string" tabindex="-1">result_id : <code>string</code> <a class="header-anchor" href="#result-id-string" aria-label="Permalink to &quot;result_id : \`string\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/ChosenInlineResultPacket.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChosenInlineResultPacket = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ChosenInlineResultPacket as default
};
