import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"TextMention","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/namespaces/MessageEntity/functions/TextMention.md","filePath":"documentation/namespaces/MessageEntity/functions/TextMention.md"}');
const _sfc_main = { name: "documentation/namespaces/MessageEntity/functions/TextMention.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Function</p><h1 id="textmention" tabindex="-1">TextMention <a class="header-anchor" href="#textmention" aria-label="Permalink to &quot;TextMention&quot;">​</a></h1><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">MessageEntity.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">TextMention</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">( offset, length, user )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>offset</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>number</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>length</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>number</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>user</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../../../interfaces/UserPacket.html"><code>UserPacket</code></a> | <a href="./../../../classes/User.html"><code>User</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table><p>Return: <a href="./../../../interfaces/MessageEntityPayload.html">MessageEntityPayload</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/namespaces/MessageEntity/functions/TextMention.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TextMention = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  TextMention as default
};
