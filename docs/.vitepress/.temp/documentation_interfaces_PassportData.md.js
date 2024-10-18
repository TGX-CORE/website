import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"PassportData","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/PassportData.md","filePath":"documentation/interfaces/PassportData.md"}');
const _sfc_main = { name: "documentation/interfaces/PassportData.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="passportdata" tabindex="-1">PassportData <a class="header-anchor" href="#passportdata" aria-label="Permalink to &quot;PassportData&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="credentials-encryptedcredentials" tabindex="-1">credentials : <code>EncryptedCredentials</code> <a class="header-anchor" href="#credentials-encryptedcredentials" aria-label="Permalink to &quot;credentials : \`EncryptedCredentials\`&quot;">​</a></h4><h4 id="data-encryptedpassportelement" tabindex="-1">data : <a href="./EncryptedPassportElement.html"><code>EncryptedPassportElement</code></a>[] <a class="header-anchor" href="#data-encryptedpassportelement" aria-label="Permalink to &quot;data : [\`EncryptedPassportElement\`](./EncryptedPassportElement.md)[]&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/PassportData.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PassportData = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  PassportData as default
};
