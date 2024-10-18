import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"SharedUser","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/SharedUser.md","filePath":"documentation/interfaces/SharedUser.md"}');
const _sfc_main = { name: "documentation/interfaces/SharedUser.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="shareduser" tabindex="-1">SharedUser <a class="header-anchor" href="#shareduser" aria-label="Permalink to &quot;SharedUser&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="first-name-string" tabindex="-1">first_name? : <code>string</code> <a class="header-anchor" href="#first-name-string" aria-label="Permalink to &quot;first_name? : \`string\`&quot;">​</a></h4><h4 id="last-name-string" tabindex="-1">last_name? : <code>string</code> <a class="header-anchor" href="#last-name-string" aria-label="Permalink to &quot;last_name? : \`string\`&quot;">​</a></h4><h4 id="photo-photosize" tabindex="-1">photo? : <a href="./PhotoSize.html"><code>PhotoSize</code></a>[] <a class="header-anchor" href="#photo-photosize" aria-label="Permalink to &quot;photo? : [\`PhotoSize\`](./PhotoSize.md)[]&quot;">​</a></h4><h4 id="user-id-number" tabindex="-1">user_id : <code>number</code> <a class="header-anchor" href="#user-id-number" aria-label="Permalink to &quot;user_id : \`number\`&quot;">​</a></h4><h4 id="username-string" tabindex="-1">username? : <code>string</code> <a class="header-anchor" href="#username-string" aria-label="Permalink to &quot;username? : \`string\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/SharedUser.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SharedUser = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  SharedUser as default
};
