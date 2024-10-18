import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ProximityAlertTriggered","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/ProximityAlertTriggered.md","filePath":"documentation/interfaces/ProximityAlertTriggered.md"}');
const _sfc_main = { name: "documentation/interfaces/ProximityAlertTriggered.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="proximityalerttriggered" tabindex="-1">ProximityAlertTriggered <a class="header-anchor" href="#proximityalerttriggered" aria-label="Permalink to &quot;ProximityAlertTriggered&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="distance-number" tabindex="-1">distance : <code>number</code> <a class="header-anchor" href="#distance-number" aria-label="Permalink to &quot;distance : \`number\`&quot;">​</a></h4><h4 id="traveler-userpacket" tabindex="-1">traveler : <a href="./UserPacket.html"><code>UserPacket</code></a> <a class="header-anchor" href="#traveler-userpacket" aria-label="Permalink to &quot;traveler : [\`UserPacket\`](./UserPacket.md)&quot;">​</a></h4><h4 id="watcher-userpacket" tabindex="-1">watcher : <a href="./UserPacket.html"><code>UserPacket</code></a> <a class="header-anchor" href="#watcher-userpacket" aria-label="Permalink to &quot;watcher : [\`UserPacket\`](./UserPacket.md)&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/ProximityAlertTriggered.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProximityAlertTriggered = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ProximityAlertTriggered as default
};
