import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ReplyButton","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/namespaces/ReplyButton/README.md","filePath":"documentation/namespaces/ReplyButton/README.md"}');
const _sfc_main = { name: "documentation/namespaces/ReplyButton/README.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Namespace</p><h1 id="replybutton" tabindex="-1">ReplyButton <a class="header-anchor" href="#replybutton" aria-label="Permalink to &quot;ReplyButton&quot;">​</a></h1><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Member</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Value</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">Chats</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./functions\\Chats.html"><code>Chats</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">Contact</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./functions\\Contact.html"><code>Contact</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">Location</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./functions\\Location.html"><code>Location</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">Poll</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./functions\\Poll.html"><code>Poll</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">Text</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./functions\\Text.html"><code>Text</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">Users</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./functions\\Users.html"><code>Users</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">WebApp</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./functions\\WebApp.html"><code>WebApp</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}"></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/namespaces/ReplyButton/README.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const README = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  README as default
};
