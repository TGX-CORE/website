import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ChatBoostSourceGiveaway","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/ChatBoostSourceGiveaway.md","filePath":"documentation/interfaces/ChatBoostSourceGiveaway.md"}');
const _sfc_main = { name: "documentation/interfaces/ChatBoostSourceGiveaway.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="chatboostsourcegiveaway" tabindex="-1">ChatBoostSourceGiveaway <a class="header-anchor" href="#chatboostsourcegiveaway" aria-label="Permalink to &quot;ChatBoostSourceGiveaway&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="giveaway-message-id-number" tabindex="-1">giveaway_message_id : <code>number</code> <a class="header-anchor" href="#giveaway-message-id-number" aria-label="Permalink to &quot;giveaway_message_id : \`number\`&quot;">​</a></h4><h4 id="is-unclaimed-boolean" tabindex="-1">is_unclaimed? : <code>boolean</code> <a class="header-anchor" href="#is-unclaimed-boolean" aria-label="Permalink to &quot;is_unclaimed? : \`boolean\`&quot;">​</a></h4><h4 id="prize-star-count-number" tabindex="-1">prize_star_count? : <code>number</code> <a class="header-anchor" href="#prize-star-count-number" aria-label="Permalink to &quot;prize_star_count? : \`number\`&quot;">​</a></h4><h4 id="source-giveaway" tabindex="-1">source : <code>&quot;giveaway&quot;</code> <a class="header-anchor" href="#source-giveaway" aria-label="Permalink to &quot;source : \`&quot;giveaway&quot;\`&quot;">​</a></h4><h4 id="user-userpacket" tabindex="-1">user? : <a href="./UserPacket.html"><code>UserPacket</code></a> <a class="header-anchor" href="#user-userpacket" aria-label="Permalink to &quot;user? : [\`UserPacket\`](./UserPacket.md)&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/ChatBoostSourceGiveaway.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChatBoostSourceGiveaway = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ChatBoostSourceGiveaway as default
};
