import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ActionsOptions","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/ActionsOptions.md","filePath":"documentation/interfaces/ActionsOptions.md"}');
const _sfc_main = { name: "documentation/interfaces/ActionsOptions.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="actionsoptions" tabindex="-1">ActionsOptions <a class="header-anchor" href="#actionsoptions" aria-label="Permalink to &quot;ActionsOptions&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="load-clientaction-all-clientaction" tabindex="-1">load : <a href="./../enumerations/ClientAction.html#all"><code>ClientAction.All</code></a> | <a href="./../enumerations/ClientAction.html"><code>ClientAction</code></a>[] <a class="header-anchor" href="#load-clientaction-all-clientaction" aria-label="Permalink to &quot;load : [\`ClientAction.All\`](../enumerations/ClientAction.md#all) \\| [\`ClientAction\`](../enumerations/ClientAction.md)[]&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/ActionsOptions.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ActionsOptions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ActionsOptions as default
};
