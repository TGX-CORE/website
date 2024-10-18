import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"PollManagerOptions","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/PollManagerOptions.md","filePath":"documentation/interfaces/PollManagerOptions.md"}');
const _sfc_main = { name: "documentation/interfaces/PollManagerOptions.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="pollmanageroptions" tabindex="-1">PollManagerOptions <a class="header-anchor" href="#pollmanageroptions" aria-label="Permalink to &quot;PollManagerOptions&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="allowed-updates-allowedupdatesoptions" tabindex="-1">allowed_updates? : <a href="./../classes/AllowedUpdatesOptions.html"><code>AllowedUpdatesOptions</code></a> <a class="header-anchor" href="#allowed-updates-allowedupdatesoptions" aria-label="Permalink to &quot;allowed_updates? : [\`AllowedUpdatesOptions\`](../classes/AllowedUpdatesOptions.md)&quot;">​</a></h4><h4 id="delay-number" tabindex="-1">delay? : <code>number</code> <a class="header-anchor" href="#delay-number" aria-label="Permalink to &quot;delay? : \`number\`&quot;">​</a></h4><h4 id="ignore-bots-boolean" tabindex="-1">ignore_bots? : <code>boolean</code> <a class="header-anchor" href="#ignore-bots-boolean" aria-label="Permalink to &quot;ignore_bots? : \`boolean\`&quot;">​</a></h4><h4 id="ignore-self-boolean" tabindex="-1">ignore_self? : <code>boolean</code> <a class="header-anchor" href="#ignore-self-boolean" aria-label="Permalink to &quot;ignore_self? : \`boolean\`&quot;">​</a></h4><h4 id="ignore-sender-chats-boolean" tabindex="-1">ignore_sender_chats? : <code>boolean</code> <a class="header-anchor" href="#ignore-sender-chats-boolean" aria-label="Permalink to &quot;ignore_sender_chats? : \`boolean\`&quot;">​</a></h4><h4 id="limit-number" tabindex="-1">limit? : <code>number</code> <a class="header-anchor" href="#limit-number" aria-label="Permalink to &quot;limit? : \`number\`&quot;">​</a></h4><h4 id="timeout-number" tabindex="-1">timeout? : <code>number</code> <a class="header-anchor" href="#timeout-number" aria-label="Permalink to &quot;timeout? : \`number\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/PollManagerOptions.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PollManagerOptions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  PollManagerOptions as default
};
