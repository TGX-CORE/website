import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"MessageAutoDeleteTimerChanged","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/MessageAutoDeleteTimerChanged.md","filePath":"documentation/interfaces/MessageAutoDeleteTimerChanged.md"}');
const _sfc_main = { name: "documentation/interfaces/MessageAutoDeleteTimerChanged.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="messageautodeletetimerchanged" tabindex="-1">MessageAutoDeleteTimerChanged <a class="header-anchor" href="#messageautodeletetimerchanged" aria-label="Permalink to &quot;MessageAutoDeleteTimerChanged&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="message-auto-delete-time-number" tabindex="-1">message_auto_delete_time : <code>number</code> <a class="header-anchor" href="#message-auto-delete-time-number" aria-label="Permalink to &quot;message_auto_delete_time : \`number\`&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/MessageAutoDeleteTimerChanged.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MessageAutoDeleteTimerChanged = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  MessageAutoDeleteTimerChanged as default
};
