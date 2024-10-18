import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Giveaway","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/Giveaway.md","filePath":"documentation/interfaces/Giveaway.md"}');
const _sfc_main = { name: "documentation/interfaces/Giveaway.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="giveaway" tabindex="-1">Giveaway <a class="header-anchor" href="#giveaway" aria-label="Permalink to &quot;Giveaway&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="chats-chat" tabindex="-1">chats : <a href="./../type-aliases/Chat.html"><code>Chat</code></a>[] <a class="header-anchor" href="#chats-chat" aria-label="Permalink to &quot;chats : [\`Chat\`](../type-aliases/Chat.md)[]&quot;">​</a></h4><h4 id="country-codes-string" tabindex="-1">country_codes? : <code>string</code>[] <a class="header-anchor" href="#country-codes-string" aria-label="Permalink to &quot;country_codes? : \`string\`[]&quot;">​</a></h4><h4 id="has-public-winners-true" tabindex="-1">has_public_winners? : <code>true</code> <a class="header-anchor" href="#has-public-winners-true" aria-label="Permalink to &quot;has_public_winners? : \`true\`&quot;">​</a></h4><h4 id="only-new-members-true" tabindex="-1">only_new_members? : <code>true</code> <a class="header-anchor" href="#only-new-members-true" aria-label="Permalink to &quot;only_new_members? : \`true\`&quot;">​</a></h4><h4 id="premium-subscription-month-count-number" tabindex="-1">premium_subscription_month_count? : <code>number</code> <a class="header-anchor" href="#premium-subscription-month-count-number" aria-label="Permalink to &quot;premium_subscription_month_count? : \`number\`&quot;">​</a></h4><h4 id="prize-description-string" tabindex="-1">prize_description? : <code>string</code> <a class="header-anchor" href="#prize-description-string" aria-label="Permalink to &quot;prize_description? : \`string\`&quot;">​</a></h4><h4 id="prize-star-count-number" tabindex="-1">prize_star_count? : <code>number</code> <a class="header-anchor" href="#prize-star-count-number" aria-label="Permalink to &quot;prize_star_count? : \`number\`&quot;">​</a></h4><h4 id="winner-count-number" tabindex="-1">winner_count : <code>number</code> <a class="header-anchor" href="#winner-count-number" aria-label="Permalink to &quot;winner_count : \`number\`&quot;">​</a></h4><h4 id="winners-selection-date-number" tabindex="-1">winners_selection_date : <code>number</code> <a class="header-anchor" href="#winners-selection-date-number" aria-label="Permalink to &quot;winners_selection_date : \`number\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/Giveaway.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Giveaway = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Giveaway as default
};
