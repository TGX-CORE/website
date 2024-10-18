import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"InputLocationMessageContentPayload","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/InputLocationMessageContentPayload.md","filePath":"documentation/interfaces/InputLocationMessageContentPayload.md"}');
const _sfc_main = { name: "documentation/interfaces/InputLocationMessageContentPayload.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="inputlocationmessagecontentpayload" tabindex="-1">InputLocationMessageContentPayload <a class="header-anchor" href="#inputlocationmessagecontentpayload" aria-label="Permalink to &quot;InputLocationMessageContentPayload&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="heading-number" tabindex="-1">heading? : <code>number</code> <a class="header-anchor" href="#heading-number" aria-label="Permalink to &quot;heading? : \`number\`&quot;">​</a></h4><h4 id="horizontal-accuracy-number" tabindex="-1">horizontal_accuracy? : <code>number</code> <a class="header-anchor" href="#horizontal-accuracy-number" aria-label="Permalink to &quot;horizontal_accuracy? : \`number\`&quot;">​</a></h4><h4 id="latitude-number" tabindex="-1">latitude : <code>number</code> <a class="header-anchor" href="#latitude-number" aria-label="Permalink to &quot;latitude : \`number\`&quot;">​</a></h4><h4 id="live-period-number" tabindex="-1">live_period? : <code>number</code> <a class="header-anchor" href="#live-period-number" aria-label="Permalink to &quot;live_period? : \`number\`&quot;">​</a></h4><h4 id="longitude-number" tabindex="-1">longitude : <code>number</code> <a class="header-anchor" href="#longitude-number" aria-label="Permalink to &quot;longitude : \`number\`&quot;">​</a></h4><h4 id="proximity-alert-radius-number" tabindex="-1">proximity_alert_radius? : <code>number</code> <a class="header-anchor" href="#proximity-alert-radius-number" aria-label="Permalink to &quot;proximity_alert_radius? : \`number\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/InputLocationMessageContentPayload.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InputLocationMessageContentPayload = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  InputLocationMessageContentPayload as default
};
