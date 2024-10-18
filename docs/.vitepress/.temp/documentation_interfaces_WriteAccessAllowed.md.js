import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"WriteAccessAllowed","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/WriteAccessAllowed.md","filePath":"documentation/interfaces/WriteAccessAllowed.md"}');
const _sfc_main = { name: "documentation/interfaces/WriteAccessAllowed.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="writeaccessallowed" tabindex="-1">WriteAccessAllowed <a class="header-anchor" href="#writeaccessallowed" aria-label="Permalink to &quot;WriteAccessAllowed&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="from-attachment-menu-boolean" tabindex="-1">from_attachment_menu? : <code>boolean</code> <a class="header-anchor" href="#from-attachment-menu-boolean" aria-label="Permalink to &quot;from_attachment_menu? : \`boolean\`&quot;">​</a></h4><h4 id="from-request-boolean" tabindex="-1">from_request? : <code>boolean</code> <a class="header-anchor" href="#from-request-boolean" aria-label="Permalink to &quot;from_request? : \`boolean\`&quot;">​</a></h4><h4 id="web-app-name-string" tabindex="-1">web_app_name? : <code>string</code> <a class="header-anchor" href="#web-app-name-string" aria-label="Permalink to &quot;web_app_name? : \`string\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/WriteAccessAllowed.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WriteAccessAllowed = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  WriteAccessAllowed as default
};
