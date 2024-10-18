import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"QueryResultButtonPayload","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/QueryResultButtonPayload.md","filePath":"documentation/interfaces/QueryResultButtonPayload.md"}');
const _sfc_main = { name: "documentation/interfaces/QueryResultButtonPayload.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="queryresultbuttonpayload" tabindex="-1">QueryResultButtonPayload <a class="header-anchor" href="#queryresultbuttonpayload" aria-label="Permalink to &quot;QueryResultButtonPayload&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="start-parameter-string" tabindex="-1">start_parameter? : <code>string</code> <a class="header-anchor" href="#start-parameter-string" aria-label="Permalink to &quot;start_parameter? : \`string\`&quot;">​</a></h4><h4 id="text-string" tabindex="-1">text : <code>string</code> <a class="header-anchor" href="#text-string" aria-label="Permalink to &quot;text : \`string\`&quot;">​</a></h4><h4 id="web-app-webappinfo" tabindex="-1">web_app? : <a href="./WebAppInfo.html"><code>WebAppInfo</code></a> <a class="header-anchor" href="#web-app-webappinfo" aria-label="Permalink to &quot;web_app? : [\`WebAppInfo\`](./WebAppInfo.md)&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/QueryResultButtonPayload.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const QueryResultButtonPayload = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  QueryResultButtonPayload as default
};
