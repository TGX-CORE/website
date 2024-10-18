import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BackgroundTypePattern","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/BackgroundTypePattern.md","filePath":"documentation/interfaces/BackgroundTypePattern.md"}');
const _sfc_main = { name: "documentation/interfaces/BackgroundTypePattern.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="backgroundtypepattern" tabindex="-1">BackgroundTypePattern <a class="header-anchor" href="#backgroundtypepattern" aria-label="Permalink to &quot;BackgroundTypePattern&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="document-document" tabindex="-1">document : <code>Document</code> <a class="header-anchor" href="#document-document" aria-label="Permalink to &quot;document : \`Document\`&quot;">​</a></h4><h4 id="fill-backgroundfill" tabindex="-1">fill : <a href="./../type-aliases/BackgroundFill.html"><code>BackgroundFill</code></a> <a class="header-anchor" href="#fill-backgroundfill" aria-label="Permalink to &quot;fill : [\`BackgroundFill\`](../type-aliases/BackgroundFill.md)&quot;">​</a></h4><h4 id="intensity-number" tabindex="-1">intensity : <code>number</code> <a class="header-anchor" href="#intensity-number" aria-label="Permalink to &quot;intensity : \`number\`&quot;">​</a></h4><h4 id="is-inverted-true" tabindex="-1">is_inverted? : <code>true</code> <a class="header-anchor" href="#is-inverted-true" aria-label="Permalink to &quot;is_inverted? : \`true\`&quot;">​</a></h4><h4 id="is-moving-true" tabindex="-1">is_moving? : <code>true</code> <a class="header-anchor" href="#is-moving-true" aria-label="Permalink to &quot;is_moving? : \`true\`&quot;">​</a></h4><h4 id="type-pattern" tabindex="-1">type : <code>&quot;pattern&quot;</code> <a class="header-anchor" href="#type-pattern" aria-label="Permalink to &quot;type : \`&quot;pattern&quot;\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/BackgroundTypePattern.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BackgroundTypePattern = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  BackgroundTypePattern as default
};
