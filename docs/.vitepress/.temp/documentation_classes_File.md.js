import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"File","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/classes/File.md","filePath":"documentation/classes/File.md"}');
const _sfc_main = { name: "documentation/classes/File.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Badge = resolveComponent("Badge");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Class</p><h1 id="file" tabindex="-1">File <a class="header-anchor" href="#file" aria-label="Permalink to &quot;File&quot;">​</a></h1><h4 id="implements" tabindex="-1">implements <a class="header-anchor" href="#implements" aria-label="Permalink to &quot;implements&quot;">​</a></h4><p><a href="./../interfaces/FilePacket.html"><code>FilePacket</code></a></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> File</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">( packet )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>packet?</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code> | <a href="./../interfaces/FilePacket.html"><code>FilePacket</code></a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">The packet, the filel_id, or absolute path to the file to read.</td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="get-form-string-readstream-string" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` form : <code>[string, ReadStream, string]</code> <a class="header-anchor" href="#get-form-string-readstream-string" aria-label="Permalink to &quot;$get form : \`[string, ReadStream, string]\`&quot;">​</a></h4><h4 id="get-id-string" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "get"
  }, null, _parent));
  _push(` id : <code>string</code> <a class="header-anchor" href="#get-id-string" aria-label="Permalink to &quot;$get id : \`string\`&quot;">​</a></h4><h4 id="readonly-client-client" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "readonly"
  }, null, _parent));
  _push(` client? : <a href="./Client.html"><code>Client</code></a> <a class="header-anchor" href="#readonly-client-client" aria-label="Permalink to &quot;$readonly client? : [\`Client\`](./Client.md)&quot;">​</a></h4><p>The client will only be availble if the class is passed by tgx-core itself.</p><h4 id="file-id-string" tabindex="-1">file_id? : <code>string</code> <a class="header-anchor" href="#file-id-string" aria-label="Permalink to &quot;file_id? : \`string\`&quot;">​</a></h4><h4 id="file-path-string" tabindex="-1">file_path? : <code>string</code> <a class="header-anchor" href="#file-path-string" aria-label="Permalink to &quot;file_path? : \`string\`&quot;">​</a></h4><h4 id="path-string" tabindex="-1">path? : <code>string</code> <a class="header-anchor" href="#path-string" aria-label="Permalink to &quot;path? : \`string\`&quot;">​</a></h4><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h4 id="asyncdownload-path" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`download( path ) <a class="header-anchor" href="#asyncdownload-path" aria-label="Permalink to &quot;$asyncdownload( path )&quot;">​</a></h4><p>Downloads the file.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Parameter</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>path</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Leave empty if you want a stream, or an absolute path to the file where you want to write the Stream.</td></tr></tbody></table><p>Returns: <code>Promise</code>&lt;<code>boolean</code> | <code>internal.Stream</code>&gt;</p><h4 id="asyncfetch" tabindex="-1">`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "async"
  }, null, _parent));
  _push(`fetch( ) <a class="header-anchor" href="#asyncfetch" aria-label="Permalink to &quot;$asyncfetch( )&quot;">​</a></h4><p>Fetch the file from Telegram, this is required for downloading the file.</p><p>Returns: <code>Promise</code>&lt;<code>boolean</code> | <a href="./File.html"><code>File</code></a>&gt;</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/classes/File.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const File = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  File as default
};
