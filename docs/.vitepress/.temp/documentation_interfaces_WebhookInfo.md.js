import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"WebhookInfo","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/WebhookInfo.md","filePath":"documentation/interfaces/WebhookInfo.md"}');
const _sfc_main = { name: "documentation/interfaces/WebhookInfo.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="webhookinfo" tabindex="-1">WebhookInfo <a class="header-anchor" href="#webhookinfo" aria-label="Permalink to &quot;WebhookInfo&quot;">​</a></h1><p>The information about a webhook.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="allowed-updates-allowedupdates" tabindex="-1">allowed_updates? : <a href="./../enumerations/AllowedUpdates.html"><code>AllowedUpdates</code></a>[] <a class="header-anchor" href="#allowed-updates-allowedupdates" aria-label="Permalink to &quot;allowed_updates? : [\`AllowedUpdates\`](../enumerations/AllowedUpdates.md)[]&quot;">​</a></h4><h4 id="has-custom-certificate-boolean" tabindex="-1">has_custom_certificate : <code>boolean</code> <a class="header-anchor" href="#has-custom-certificate-boolean" aria-label="Permalink to &quot;has_custom_certificate : \`boolean\`&quot;">​</a></h4><h4 id="ip-address-string" tabindex="-1">ip_address? : <code>string</code> <a class="header-anchor" href="#ip-address-string" aria-label="Permalink to &quot;ip_address? : \`string\`&quot;">​</a></h4><h4 id="last-error-date-number" tabindex="-1">last_error_date? : <code>number</code> <a class="header-anchor" href="#last-error-date-number" aria-label="Permalink to &quot;last_error_date? : \`number\`&quot;">​</a></h4><h4 id="last-error-message-string" tabindex="-1">last_error_message? : <code>string</code> <a class="header-anchor" href="#last-error-message-string" aria-label="Permalink to &quot;last_error_message? : \`string\`&quot;">​</a></h4><h4 id="last-synchronization-error-date-number" tabindex="-1">last_synchronization_error_date? : <code>number</code> <a class="header-anchor" href="#last-synchronization-error-date-number" aria-label="Permalink to &quot;last_synchronization_error_date? : \`number\`&quot;">​</a></h4><h4 id="max-connections-number" tabindex="-1">max_connections? : <code>number</code> <a class="header-anchor" href="#max-connections-number" aria-label="Permalink to &quot;max_connections? : \`number\`&quot;">​</a></h4><h4 id="pending-update-count-number" tabindex="-1">pending_update_count : <code>number</code> <a class="header-anchor" href="#pending-update-count-number" aria-label="Permalink to &quot;pending_update_count : \`number\`&quot;">​</a></h4><h4 id="url-string" tabindex="-1">url : <code>string</code> <a class="header-anchor" href="#url-string" aria-label="Permalink to &quot;url : \`string\`&quot;">​</a></h4><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h2><p>The information was provided from the <a href="https://core.telegram.org/bots/api#webhookinfo" target="_blank" rel="noreferrer"><code>Telegram API</code></a>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/WebhookInfo.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WebhookInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  WebhookInfo as default
};