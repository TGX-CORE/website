import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"InputVenueMessageContentPayload","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/InputVenueMessageContentPayload.md","filePath":"documentation/interfaces/InputVenueMessageContentPayload.md"}');
const _sfc_main = { name: "documentation/interfaces/InputVenueMessageContentPayload.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="inputvenuemessagecontentpayload" tabindex="-1">InputVenueMessageContentPayload <a class="header-anchor" href="#inputvenuemessagecontentpayload" aria-label="Permalink to &quot;InputVenueMessageContentPayload&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="address-string" tabindex="-1">address : <code>string</code> <a class="header-anchor" href="#address-string" aria-label="Permalink to &quot;address : \`string\`&quot;">​</a></h4><h4 id="foursquare-id-string" tabindex="-1">foursquare_id? : <code>string</code> <a class="header-anchor" href="#foursquare-id-string" aria-label="Permalink to &quot;foursquare_id? : \`string\`&quot;">​</a></h4><h4 id="foursquare-type-string" tabindex="-1">foursquare_type? : <code>string</code> <a class="header-anchor" href="#foursquare-type-string" aria-label="Permalink to &quot;foursquare_type? : \`string\`&quot;">​</a></h4><h4 id="google-place-id-string" tabindex="-1">google_place_id? : <code>string</code> <a class="header-anchor" href="#google-place-id-string" aria-label="Permalink to &quot;google_place_id? : \`string\`&quot;">​</a></h4><h4 id="google-place-type-string" tabindex="-1">google_place_type? : <code>string</code> <a class="header-anchor" href="#google-place-type-string" aria-label="Permalink to &quot;google_place_type? : \`string\`&quot;">​</a></h4><h4 id="latitude-number" tabindex="-1">latitude : <code>number</code> <a class="header-anchor" href="#latitude-number" aria-label="Permalink to &quot;latitude : \`number\`&quot;">​</a></h4><h4 id="longitude-number" tabindex="-1">longitude : <code>number</code> <a class="header-anchor" href="#longitude-number" aria-label="Permalink to &quot;longitude : \`number\`&quot;">​</a></h4><h4 id="title-string" tabindex="-1">title : <code>string</code> <a class="header-anchor" href="#title-string" aria-label="Permalink to &quot;title : \`string\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/InputVenueMessageContentPayload.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InputVenueMessageContentPayload = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  InputVenueMessageContentPayload as default
};
