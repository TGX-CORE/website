import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Registries","description":"","frontmatter":{},"headers":[],"relativePath":"guidebook/Registries/README.md","filePath":"guidebook/Registries/README.md"}');
const _sfc_main = { name: "guidebook/Registries/README.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="registries" tabindex="-1">Registries <a class="header-anchor" href="#registries" aria-label="Permalink to &quot;Registries&quot;">​</a></h1><p>Before creating registries, make sure to set your <code>main</code> to the entry file of your working directory.</p><p>If your <code>main</code> would be <code>src/index.js</code>, you would put your registries in <code>src/</code>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>src/</span></span>
<span class="line"><span>├── commands/</span></span>
<span class="line"><span>├── events/</span></span>
<span class="line"><span>├── auxiliaries/</span></span>
<span class="line"><span>├── index.js</span></span>
<span class="line"><span>└── package.json</span></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>Loading the registries read their correspoding directories, make sure the folder exists or the folder cannot be found and the client will throw an error.</p></div><p>You can also put your registries in a specific path by modifyng <a href="./../../documentation/interfaces/ClientOptions.html#sweep-string-boolean"><code>ClientOptions#sweep</code></a>, make sure to set this to true or set a relative path from your working directory.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guidebook/Registries/README.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const README = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  README as default
};
