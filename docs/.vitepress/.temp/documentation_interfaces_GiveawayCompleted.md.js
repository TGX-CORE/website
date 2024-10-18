import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"GiveawayCompleted","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/GiveawayCompleted.md","filePath":"documentation/interfaces/GiveawayCompleted.md"}');
const _sfc_main = { name: "documentation/interfaces/GiveawayCompleted.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="giveawaycompleted" tabindex="-1">GiveawayCompleted <a class="header-anchor" href="#giveawaycompleted" aria-label="Permalink to &quot;GiveawayCompleted&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="giveaway-message-messagepacket" tabindex="-1">giveaway_message? : <a href="./MessagePacket.html"><code>MessagePacket</code></a> <a class="header-anchor" href="#giveaway-message-messagepacket" aria-label="Permalink to &quot;giveaway_message? : [\`MessagePacket\`](./MessagePacket.md)&quot;">​</a></h4><h4 id="is-star-giveaway-true" tabindex="-1">is_star_giveaway? : <code>true</code> <a class="header-anchor" href="#is-star-giveaway-true" aria-label="Permalink to &quot;is_star_giveaway? : \`true\`&quot;">​</a></h4><h4 id="unclaimed-prize-count-number" tabindex="-1">unclaimed_prize_count? : <code>number</code> <a class="header-anchor" href="#unclaimed-prize-count-number" aria-label="Permalink to &quot;unclaimed_prize_count? : \`number\`&quot;">​</a></h4><h4 id="winner-count-number" tabindex="-1">winner_count : <code>number</code> <a class="header-anchor" href="#winner-count-number" aria-label="Permalink to &quot;winner_count : \`number\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/GiveawayCompleted.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const GiveawayCompleted = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  GiveawayCompleted as default
};
