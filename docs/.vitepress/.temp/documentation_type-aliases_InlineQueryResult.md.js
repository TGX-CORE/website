import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"InlineQueryResult","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/type-aliases/InlineQueryResult.md","filePath":"documentation/type-aliases/InlineQueryResult.md"}');
const _sfc_main = { name: "documentation/type-aliases/InlineQueryResult.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export TypeAlias</p><h1 id="inlinequeryresult" tabindex="-1">InlineQueryResult <a class="header-anchor" href="#inlinequeryresult" aria-label="Permalink to &quot;InlineQueryResult&quot;">​</a></h1><p>An inline query result can be any of the query results below.</p><p><a href="./../namespaces/QueryResult/functions/Article.html"><code>QueryResult.Article</code></a> | <a href="./../namespaces/QueryResult/functions/Audio.html"><code>QueryResult.Audio</code></a> | <a href="./../namespaces/QueryResult/functions/Contact.html"><code>QueryResult.Contact</code></a> | <a href="./../namespaces/QueryResult/functions/CachedAudio.html"><code>QueryResult.CachedAudio</code></a> | <a href="./../namespaces/QueryResult/functions/CachedDocument.html"><code>QueryResult.CachedDocument</code></a> | <a href="./../namespaces/QueryResult/functions/CachedGif.html"><code>QueryResult.CachedGif</code></a> | <a href="./../namespaces/QueryResult/functions/CachedMpeg4Gif.html"><code>QueryResult.CachedMpeg4Gif</code></a> | <a href="./../namespaces/QueryResult/functions/CachedPhoto.html"><code>QueryResult.CachedPhoto</code></a> | <a href="./../namespaces/QueryResult/functions/CachedSticker.html"><code>QueryResult.CachedSticker</code></a> | <a href="./../namespaces/QueryResult/functions/CachedVideo.html"><code>QueryResult.CachedVideo</code></a> | <a href="./../namespaces/QueryResult/functions/CachedVoice.html"><code>QueryResult.CachedVoice</code></a> | <a href="./../namespaces/QueryResult/functions/Document.html"><code>QueryResult.Document</code></a> | <a href="./../namespaces/QueryResult/functions/Game.html"><code>QueryResult.Game</code></a> | <a href="./../namespaces/QueryResult/functions/Gif.html"><code>QueryResult.Gif</code></a> | <a href="./../namespaces/QueryResult/functions/Location.html"><code>QueryResult.Location</code></a> | <a href="./../namespaces/QueryResult/functions/Mpeg4Gif.html"><code>QueryResult.Mpeg4Gif</code></a> | <a href="./../namespaces/QueryResult/functions/Photo.html"><code>QueryResult.Photo</code></a> | <a href="./../namespaces/QueryResult/functions/Button.html"><code>QueryResult.Button</code></a> | <a href="./../namespaces/QueryResult/functions/Venue.html"><code>QueryResult.Venue</code></a> | <a href="./../namespaces/QueryResult/functions/Video.html"><code>QueryResult.Video</code></a> | <a href="./../namespaces/QueryResult/functions/Voice.html"><code>QueryResult.Voice</code></a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/type-aliases/InlineQueryResult.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InlineQueryResult = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  InlineQueryResult as default
};
