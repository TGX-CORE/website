import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"InputTextMessageContentPayload","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/InputTextMessageContentPayload.md","filePath":"documentation/interfaces/InputTextMessageContentPayload.md"}');
const _sfc_main = { name: "documentation/interfaces/InputTextMessageContentPayload.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="inputtextmessagecontentpayload" tabindex="-1">InputTextMessageContentPayload <a class="header-anchor" href="#inputtextmessagecontentpayload" aria-label="Permalink to &quot;InputTextMessageContentPayload&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="entities-messageentities-messageentitypayload" tabindex="-1">entities? : <a href="./../classes/MessageEntities.html"><code>MessageEntities</code></a> | <a href="./MessageEntityPayload.html"><code>MessageEntityPayload</code></a>[] <a class="header-anchor" href="#entities-messageentities-messageentitypayload" aria-label="Permalink to &quot;entities? : [\`MessageEntities\`](../classes/MessageEntities.md) \\| [\`MessageEntityPayload\`](./MessageEntityPayload.md)[]&quot;">​</a></h4><h4 id="link-preview-options-linkpreviewoptions" tabindex="-1">link_preview_options? : <a href="./LinkPreviewOptions.html"><code>LinkPreviewOptions</code></a> <a class="header-anchor" href="#link-preview-options-linkpreviewoptions" aria-label="Permalink to &quot;link_preview_options? : [\`LinkPreviewOptions\`](./LinkPreviewOptions.md)&quot;">​</a></h4><h4 id="message-text-string" tabindex="-1">message_text : <code>string</code> <a class="header-anchor" href="#message-text-string" aria-label="Permalink to &quot;message_text : \`string\`&quot;">​</a></h4><h4 id="parse-mode-string" tabindex="-1">parse_mode? : <code>string</code> <a class="header-anchor" href="#parse-mode-string" aria-label="Permalink to &quot;parse_mode? : \`string\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/InputTextMessageContentPayload.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InputTextMessageContentPayload = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  InputTextMessageContentPayload as default
};
