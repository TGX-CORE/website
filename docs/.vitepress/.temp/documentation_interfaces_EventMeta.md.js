import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"EventMeta","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/EventMeta.md","filePath":"documentation/interfaces/EventMeta.md"}');
const _sfc_main = { name: "documentation/interfaces/EventMeta.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="eventmeta" tabindex="-1">EventMeta <a class="header-anchor" href="#eventmeta" aria-label="Permalink to &quot;EventMeta&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="emitter-any" tabindex="-1">emitter? : <code>any</code> <a class="header-anchor" href="#emitter-any" aria-label="Permalink to &quot;emitter? : \`any\`&quot;">​</a></h4><h4 id="event-string" tabindex="-1">event? : <code>string</code> <a class="header-anchor" href="#event-string" aria-label="Permalink to &quot;event? : \`string\`&quot;">​</a></h4><h4 id="name-clientevent" tabindex="-1">name : <a href="./../enumerations/ClientEvent.html"><code>ClientEvent</code></a> <a class="header-anchor" href="#name-clientevent" aria-label="Permalink to &quot;name : [\`ClientEvent\`](../enumerations/ClientEvent.md)&quot;">​</a></h4><h4 id="once-boolean" tabindex="-1">once? : <code>boolean</code> <a class="header-anchor" href="#once-boolean" aria-label="Permalink to &quot;once? : \`boolean\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/EventMeta.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EventMeta = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  EventMeta as default
};
