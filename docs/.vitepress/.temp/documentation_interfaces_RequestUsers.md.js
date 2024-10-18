import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"RequestUsers","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/RequestUsers.md","filePath":"documentation/interfaces/RequestUsers.md"}');
const _sfc_main = { name: "documentation/interfaces/RequestUsers.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="requestusers" tabindex="-1">RequestUsers <a class="header-anchor" href="#requestusers" aria-label="Permalink to &quot;RequestUsers&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="max-quantity-number" tabindex="-1">max_quantity? : <code>number</code> <a class="header-anchor" href="#max-quantity-number" aria-label="Permalink to &quot;max_quantity? : \`number\`&quot;">​</a></h4><h4 id="request-id-number" tabindex="-1">request_id : <code>number</code> <a class="header-anchor" href="#request-id-number" aria-label="Permalink to &quot;request_id : \`number\`&quot;">​</a></h4><h4 id="request-name-boolean" tabindex="-1">request_name? : <code>boolean</code> <a class="header-anchor" href="#request-name-boolean" aria-label="Permalink to &quot;request_name? : \`boolean\`&quot;">​</a></h4><h4 id="request-photo-boolean" tabindex="-1">request_photo? : <code>boolean</code> <a class="header-anchor" href="#request-photo-boolean" aria-label="Permalink to &quot;request_photo? : \`boolean\`&quot;">​</a></h4><h4 id="request-username-boolean" tabindex="-1">request_username? : <code>boolean</code> <a class="header-anchor" href="#request-username-boolean" aria-label="Permalink to &quot;request_username? : \`boolean\`&quot;">​</a></h4><h4 id="user-is-bot-boolean" tabindex="-1">user_is_bot? : <code>boolean</code> <a class="header-anchor" href="#user-is-bot-boolean" aria-label="Permalink to &quot;user_is_bot? : \`boolean\`&quot;">​</a></h4><h4 id="user-is-premium-boolean" tabindex="-1">user_is_premium? : <code>boolean</code> <a class="header-anchor" href="#user-is-premium-boolean" aria-label="Permalink to &quot;user_is_premium? : \`boolean\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/RequestUsers.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RequestUsers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  RequestUsers as default
};
