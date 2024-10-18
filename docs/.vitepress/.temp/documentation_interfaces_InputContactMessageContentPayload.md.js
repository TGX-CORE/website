import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"InputContactMessageContentPayload","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/InputContactMessageContentPayload.md","filePath":"documentation/interfaces/InputContactMessageContentPayload.md"}');
const _sfc_main = { name: "documentation/interfaces/InputContactMessageContentPayload.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="inputcontactmessagecontentpayload" tabindex="-1">InputContactMessageContentPayload <a class="header-anchor" href="#inputcontactmessagecontentpayload" aria-label="Permalink to &quot;InputContactMessageContentPayload&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="first-name-string" tabindex="-1">first_name : <code>string</code> <a class="header-anchor" href="#first-name-string" aria-label="Permalink to &quot;first_name : \`string\`&quot;">​</a></h4><h4 id="last-name-string" tabindex="-1">last_name? : <code>string</code> <a class="header-anchor" href="#last-name-string" aria-label="Permalink to &quot;last_name? : \`string\`&quot;">​</a></h4><h4 id="phone-number-string" tabindex="-1">phone_number : <code>string</code> <a class="header-anchor" href="#phone-number-string" aria-label="Permalink to &quot;phone_number : \`string\`&quot;">​</a></h4><h4 id="vcard-string" tabindex="-1">vcard? : <code>string</code> <a class="header-anchor" href="#vcard-string" aria-label="Permalink to &quot;vcard? : \`string\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/InputContactMessageContentPayload.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InputContactMessageContentPayload = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  InputContactMessageContentPayload as default
};
