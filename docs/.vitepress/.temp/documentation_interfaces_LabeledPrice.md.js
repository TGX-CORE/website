import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"LabeledPrice","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/LabeledPrice.md","filePath":"documentation/interfaces/LabeledPrice.md"}');
const _sfc_main = { name: "documentation/interfaces/LabeledPrice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="labeledprice" tabindex="-1">LabeledPrice <a class="header-anchor" href="#labeledprice" aria-label="Permalink to &quot;LabeledPrice&quot;">​</a></h1><p>Represents a portion of a price.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="amount-number" tabindex="-1">amount : <code>number</code> <a class="header-anchor" href="#amount-number" aria-label="Permalink to &quot;amount : \`number\`&quot;">​</a></h4><p>Price of the product in the smallest units of the <a href="https://core.telegram.org/bots/payments#supported-currencies" target="_blank" rel="noreferrer">currency</a> (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145.</p><p>See the exp parameter in <a href="https://core.telegram.org/bots/payments/currencies.json" target="_blank" rel="noreferrer">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</p><h4 id="label-string" tabindex="-1">label : <code>string</code> <a class="header-anchor" href="#label-string" aria-label="Permalink to &quot;label : \`string\`&quot;">​</a></h4><p>The label of the portion of the price.</p><p>An example of the label would be; Base Shipping Fee, Taxes, Transaction Fee, etc.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/LabeledPrice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LabeledPrice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  LabeledPrice as default
};
