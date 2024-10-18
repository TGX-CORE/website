import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"UsersShared","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/UsersShared.md","filePath":"documentation/interfaces/UsersShared.md"}');
const _sfc_main = { name: "documentation/interfaces/UsersShared.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="usersshared" tabindex="-1">UsersShared <a class="header-anchor" href="#usersshared" aria-label="Permalink to &quot;UsersShared&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="request-id-number" tabindex="-1">request_id : <code>number</code> <a class="header-anchor" href="#request-id-number" aria-label="Permalink to &quot;request_id : \`number\`&quot;">​</a></h4><h4 id="users-shareduser" tabindex="-1">users : <a href="./SharedUser.html"><code>SharedUser</code></a>[] <a class="header-anchor" href="#users-shareduser" aria-label="Permalink to &quot;users : [\`SharedUser\`](./SharedUser.md)[]&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/UsersShared.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UsersShared = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  UsersShared as default
};
