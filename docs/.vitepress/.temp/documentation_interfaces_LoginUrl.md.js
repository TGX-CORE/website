import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"LoginUrl","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/LoginUrl.md","filePath":"documentation/interfaces/LoginUrl.md"}');
const _sfc_main = { name: "documentation/interfaces/LoginUrl.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="loginurl" tabindex="-1">LoginUrl <a class="header-anchor" href="#loginurl" aria-label="Permalink to &quot;LoginUrl&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="bot-username-string" tabindex="-1">bot_username? : <code>string</code> <a class="header-anchor" href="#bot-username-string" aria-label="Permalink to &quot;bot_username? : \`string\`&quot;">​</a></h4><h4 id="forward-text-string" tabindex="-1">forward_text? : <code>string</code> <a class="header-anchor" href="#forward-text-string" aria-label="Permalink to &quot;forward_text? : \`string\`&quot;">​</a></h4><h4 id="request-write-access-boolean" tabindex="-1">request_write_access? : <code>boolean</code> <a class="header-anchor" href="#request-write-access-boolean" aria-label="Permalink to &quot;request_write_access? : \`boolean\`&quot;">​</a></h4><h4 id="url-string" tabindex="-1">url : <code>string</code> <a class="header-anchor" href="#url-string" aria-label="Permalink to &quot;url : \`string\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/LoginUrl.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LoginUrl = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  LoginUrl as default
};
