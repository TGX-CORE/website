import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"RefundedPayment","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/RefundedPayment.md","filePath":"documentation/interfaces/RefundedPayment.md"}');
const _sfc_main = { name: "documentation/interfaces/RefundedPayment.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="refundedpayment" tabindex="-1">RefundedPayment <a class="header-anchor" href="#refundedpayment" aria-label="Permalink to &quot;RefundedPayment&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="currency-string" tabindex="-1">currency : <code>string</code> <a class="header-anchor" href="#currency-string" aria-label="Permalink to &quot;currency : \`string\`&quot;">​</a></h4><h4 id="invoice-payload-string" tabindex="-1">invoice_payload : <code>string</code> <a class="header-anchor" href="#invoice-payload-string" aria-label="Permalink to &quot;invoice_payload : \`string\`&quot;">​</a></h4><h4 id="provider-payment-charge-id-string" tabindex="-1">provider_payment_charge_id? : <code>string</code> <a class="header-anchor" href="#provider-payment-charge-id-string" aria-label="Permalink to &quot;provider_payment_charge_id? : \`string\`&quot;">​</a></h4><h4 id="telegram-payment-charge-id-string" tabindex="-1">telegram_payment_charge_id : <code>string</code> <a class="header-anchor" href="#telegram-payment-charge-id-string" aria-label="Permalink to &quot;telegram_payment_charge_id : \`string\`&quot;">​</a></h4><h4 id="total-amount-number" tabindex="-1">total_amount : <code>number</code> <a class="header-anchor" href="#total-amount-number" aria-label="Permalink to &quot;total_amount : \`number\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/RefundedPayment.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RefundedPayment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  RefundedPayment as default
};
