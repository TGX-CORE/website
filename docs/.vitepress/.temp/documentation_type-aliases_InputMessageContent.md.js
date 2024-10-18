import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"InputMessageContent","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/type-aliases/InputMessageContent.md","filePath":"documentation/type-aliases/InputMessageContent.md"}');
const _sfc_main = { name: "documentation/type-aliases/InputMessageContent.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export TypeAlias</p><h1 id="inputmessagecontent" tabindex="-1">InputMessageContent <a class="header-anchor" href="#inputmessagecontent" aria-label="Permalink to &quot;InputMessageContent&quot;">​</a></h1><p><a href="./../namespaces/InputMessage/functions/Text.html"><code>InputMessage.Text</code></a> | <a href="./../namespaces/InputMessage/functions/Location.html"><code>InputMessage.Location</code></a> | <a href="./../namespaces/InputMessage/functions/Contact.html"><code>InputMessage.Contact</code></a> | <a href="./../namespaces/InputMessage/functions/Venue.html"><code>InputMessage.Venue</code></a> | <a href="./../namespaces/InputMessage/functions/Invoice.html"><code>InputMessage.Invoice</code></a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/type-aliases/InputMessageContent.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InputMessageContent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  InputMessageContent as default
};
