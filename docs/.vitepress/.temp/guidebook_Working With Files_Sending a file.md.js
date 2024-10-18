import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sending a file","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guidebook/Working With Files/Sending a file.md","filePath":"guidebook/Working With Files/Sending a file.md"}');
const _sfc_main = { name: "guidebook/Working With Files/Sending a file.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sending-a-file" tabindex="-1">Sending a file <a class="header-anchor" href="#sending-a-file" aria-label="Permalink to &quot;Sending a file&quot;">​</a></h1><p>There are three ways to send files (photos, stickers, audio, media, etc.):</p><ul><li>If the file is already stored somewhere on the Telegram servers, you don&#39;t need to reupload it: each file object has a file_id field, simply pass this <code>file_id</code> as a parameter instead of uploading. There are no limits for files sent this way.</li><li>Provide Telegram with an HTTP URL for the file to be sent. Telegram will download and send the file. 5 MB max size for photos and 20 MB max for other types of content.</li><li>Post the file using <code>multipart/form-data</code> or <code>FormDataBuilder</code> in the usual way that files are uploaded via the browser. 10 MB max size for photos, 50 MB for other files.</li></ul><h2 id="sending-by-multipart-form-data" tabindex="-1">Sending by multipart/form-data <a class="header-anchor" href="#sending-by-multipart-form-data" aria-label="Permalink to &quot;Sending by multipart/form-data&quot;">​</a></h2><ul><li><code>tgx-core</code> provides a <a href="./../../documentation/classes/FormDataBuilder.html"><code>FormDataBuilder</code></a> to attach to a query to send a file.</li><li>Here&#39;s an example of sending a photo.<div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">message.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">reply</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    MessagePayloadMethod.Photo,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">        photo: </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> File</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;../media/photo.png&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">)</span></span></code></pre></div></li><li>Here&#39;s an example of sending a photo with advanced configuration.<div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">message.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">reply</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    MessagePayloadMethod.Photo,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">        photo: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;attach://photo_name&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">    new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> FormdataBuilder</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">()</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">        .</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">append</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;photo_name&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">, </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;../media/photo.png&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">, </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">--</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">FormData.AppendOptions)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">)</span></span></code></pre></div></li></ul><h2 id="sending-by-file-id" tabindex="-1">Sending by file_id <a class="header-anchor" href="#sending-by-file-id" aria-label="Permalink to &quot;Sending by file_id&quot;">​</a></h2><ul><li>It is not possible to change the file type when resending by <code>file_id</code>. I.e. a video can&#39;t be sent as a photo, a photo can&#39;t be sent as a document, etc.</li><li>It is not possible to resend thumbnails.</li><li>Resending a photo by file_id will send all of its sizes.</li><li><code>file_id</code> is unique for each individual bot and can&#39;t be transferred from one bot to another.</li><li><code>file_id</code> uniquely identifies a file, but a file can have different valid file_ids even for the same bot.</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">message.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">reply</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(MessagePayloadMethod.Photo, {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    photo: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;&lt;file_id&gt;&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">})</span></span></code></pre></div><h2 id="sending-by-url" tabindex="-1">Sending by URL <a class="header-anchor" href="#sending-by-url" aria-label="Permalink to &quot;Sending by URL&quot;">​</a></h2><ul><li>When sending by URL the file must have the correct MIME type (e.g., audio/mpeg for sendAudio, etc.).</li><li>In sendDocument, sending by URL will currently only work for GIF, PDF and ZIP files.</li><li>To use sendVoice, the file must have the type audio/ogg and be no more than 1MB in size. 1-20MB voice notes will be sent as files.</li><li>Other configurations may work but we can&#39;t guarantee that they will.</li></ul><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h2><p>The information was provided by Telegram&#39;s bot API documentation, <a href="https://core.telegram.org/bots/api#sending-files" target="_blank" rel="noreferrer"><code>TelegramAPI#sending-files</code></a>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guidebook/Working With Files/Sending a file.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Sending_a_file = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Sending_a_file as default
};
