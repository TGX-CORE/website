import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"PollOption","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/interfaces/PollOption.md","filePath":"documentation/interfaces/PollOption.md"}');
const _sfc_main = { name: "documentation/interfaces/PollOption.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export Interface</p><h1 id="polloption" tabindex="-1">PollOption <a class="header-anchor" href="#polloption" aria-label="Permalink to &quot;PollOption&quot;">​</a></h1><p>Represents an option of a poll to be sent.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="text-string" tabindex="-1">text : <code>string</code> <a class="header-anchor" href="#text-string" aria-label="Permalink to &quot;text : \`string\`&quot;">​</a></h4><p>Option text, 1-100 characters</p><h4 id="text-entities-messageentities-messageentitypayload" tabindex="-1">text_entities? : <a href="./../classes/MessageEntities.html"><code>MessageEntities</code></a> | <a href="./MessageEntityPayload.html"><code>MessageEntityPayload</code></a>[] <a class="header-anchor" href="#text-entities-messageentities-messageentitypayload" aria-label="Permalink to &quot;text_entities? : [\`MessageEntities\`](../classes/MessageEntities.md) \\| [\`MessageEntityPayload\`](./MessageEntityPayload.md)[]&quot;">​</a></h4><p>List of special entities that appear in the poll option text. It can be specified instead of text_parse_mode.</p><h4 id="text-parse-mode-string" tabindex="-1">text_parse_mode? : <code>string</code> <a class="header-anchor" href="#text-parse-mode-string" aria-label="Permalink to &quot;text_parse_mode? : \`string\`&quot;">​</a></h4><p>Mode for parsing entities in the text. See formatting options for more details. Currently, only custom emoji entities are allowed.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/interfaces/PollOption.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PollOption = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  PollOption as default
};
