import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ChatAction","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/enumerations/ChatAction.md","filePath":"documentation/enumerations/ChatAction.md"}');
const _sfc_main = { name: "documentation/enumerations/ChatAction.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Enum</p><h1 id="chataction" tabindex="-1">ChatAction <a class="header-anchor" href="#chataction" aria-label="Permalink to &quot;ChatAction&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Member</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Value</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">ChooseSticker</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>&quot;choose_sticker&quot;</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">FindLocation</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>&quot;find_location&quot;</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">RecordVideo</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>&quot;record_video&quot;</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">RecordVideoNote</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>&quot;record_video_note&quot;</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">RecordVoice</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>&quot;record_voice&quot;</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">Typing</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>&quot;typing&quot;</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">UplaodVideo</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>&quot;upload_video&quot;</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">UploadDocument</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>&quot;upload_document&quot;</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">UploadPhoto</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>&quot;upload_photo&quot;</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">UploadVideoNote</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>&quot;upload_video_note&quot;</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">UploadVoice</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>&quot;upload_voice&quot;</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/enumerations/ChatAction.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChatAction = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ChatAction as default
};