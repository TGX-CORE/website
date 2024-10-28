import{_ as t,c as a,a2 as s,o}from"./chunks/framework.DPuwY6B9.js";const y=JSON.parse('{"title":"MessageEntitiesStore","description":"","frontmatter":{"outline":[1,4],"next":false,"prev":false},"headers":[],"relativePath":"documentation/classes/MessageEntitiesStore.md","filePath":"documentation/classes/MessageEntitiesStore.md"}'),l={name:"documentation/classes/MessageEntitiesStore.md"};function i(n,e,r,d,h,c){return o(),a("div",null,e[0]||(e[0]=[s('<p>export Class</p><h1 id="messageentitiesstore" tabindex="-1">MessageEntitiesStore <a class="header-anchor" href="#messageentitiesstore" aria-label="Permalink to &quot;MessageEntitiesStore&quot;">​</a></h1><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MessageEntitiesStore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( text, entities )</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>entities</code> = <code>[]</code></td><td style="text-align:left;"><a href="./../interfaces/MessageEntityPayload.html"><code>MessageEntityPayload[]</code></a></td><td style="text-align:left;"></td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h4 id="entities-messageentitypayload" tabindex="-1">entities : <a href="./../interfaces/MessageEntityPayload.html"><code>MessageEntityPayload[]</code></a> <a class="header-anchor" href="#entities-messageentitypayload" aria-label="Permalink to &quot;entities : [`MessageEntityPayload[]`](../interfaces/MessageEntityPayload.md)&quot;">​</a></h4><h4 id="text-string" tabindex="-1">text : <code>string</code> <a class="header-anchor" href="#text-string" aria-label="Permalink to &quot;text : `string`&quot;">​</a></h4><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h4 id="blockquotes" tabindex="-1">blockquotes( ) <a class="header-anchor" href="#blockquotes" aria-label="Permalink to &quot;blockquotes( )&quot;">​</a></h4><blockquote><p>Returns: <a href="./../interfaces/MessageEntityPayload.html"><code>MessageEntityPayload[]</code></a></p></blockquote><h4 id="bolds" tabindex="-1">bolds( ) <a class="header-anchor" href="#bolds" aria-label="Permalink to &quot;bolds( )&quot;">​</a></h4><blockquote><p>Returns: <a href="./../interfaces/MessageEntityPayload.html"><code>MessageEntityPayload[]</code></a></p></blockquote><h4 id="bot-commands" tabindex="-1">bot_commands( ) <a class="header-anchor" href="#bot-commands" aria-label="Permalink to &quot;bot_commands( )&quot;">​</a></h4><blockquote><p>Returns: <a href="./../interfaces/MessageEntityPayload.html"><code>MessageEntityPayload[]</code></a></p></blockquote><h4 id="cashtags" tabindex="-1">cashtags( ) <a class="header-anchor" href="#cashtags" aria-label="Permalink to &quot;cashtags( )&quot;">​</a></h4><blockquote><p>Returns: <a href="./../interfaces/MessageEntityPayload.html"><code>MessageEntityPayload[]</code></a></p></blockquote><h4 id="codes" tabindex="-1">codes( ) <a class="header-anchor" href="#codes" aria-label="Permalink to &quot;codes( )&quot;">​</a></h4><blockquote><p>Returns: <a href="./../interfaces/MessageEntityPayload.html"><code>MessageEntityPayload[]</code></a></p></blockquote><h4 id="custom-emojis" tabindex="-1">custom_emojis( ) <a class="header-anchor" href="#custom-emojis" aria-label="Permalink to &quot;custom_emojis( )&quot;">​</a></h4><blockquote><p>Returns: <a href="./../interfaces/MessageEntityPayload.html"><code>MessageEntityPayload[]</code></a></p></blockquote><h4 id="emails" tabindex="-1">emails( ) <a class="header-anchor" href="#emails" aria-label="Permalink to &quot;emails( )&quot;">​</a></h4><blockquote><p>Returns: <a href="./../interfaces/MessageEntityPayload.html"><code>MessageEntityPayload[]</code></a></p></blockquote><h4 id="expandable-blockquotes" tabindex="-1">expandable_blockquotes( ) <a class="header-anchor" href="#expandable-blockquotes" aria-label="Permalink to &quot;expandable_blockquotes( )&quot;">​</a></h4><blockquote><p>Returns: <a href="./../interfaces/MessageEntityPayload.html"><code>MessageEntityPayload[]</code></a></p></blockquote><h4 id="get-type" tabindex="-1">get( type ) <a class="header-anchor" href="#get-type" aria-label="Permalink to &quot;get( type )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><a href="./../enumerations/EntityType.html"><code>EntityType</code></a></td><td style="text-align:left;">Obtains the message entities with type.</td></tr></tbody></table><blockquote><p>Obtains all of the entites with the correct type.</p><p>Returns: <a href="./../interfaces/MessageEntityPayload.html"><code>MessageEntityPayload[]</code></a></p></blockquote><h4 id="hashtags" tabindex="-1">hashtags( ) <a class="header-anchor" href="#hashtags" aria-label="Permalink to &quot;hashtags( )&quot;">​</a></h4><blockquote><p>Returns: <a href="./../interfaces/MessageEntityPayload.html"><code>MessageEntityPayload[]</code></a></p></blockquote><h4 id="italics" tabindex="-1">italics( ) <a class="header-anchor" href="#italics" aria-label="Permalink to &quot;italics( )&quot;">​</a></h4><blockquote><p>Returns: <a href="./../interfaces/MessageEntityPayload.html"><code>MessageEntityPayload[]</code></a></p></blockquote><h4 id="mentions" tabindex="-1">mentions( ) <a class="header-anchor" href="#mentions" aria-label="Permalink to &quot;mentions( )&quot;">​</a></h4><blockquote><p>Returns: <a href="./../interfaces/MessageEntityPayload.html"><code>MessageEntityPayload[]</code></a></p></blockquote><h4 id="parse-type-index" tabindex="-1">parse( type, index ) <a class="header-anchor" href="#parse-type-index" aria-label="Permalink to &quot;parse( type, index )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><a href="./../enumerations/EntityType.html"><code>EntityType</code></a></td><td style="text-align:left;">The type of the message entity.</td></tr><tr><td style="text-align:left;"><code>index</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">The index of the entity, starting from 0.</td></tr></tbody></table><blockquote><p>Obtains an entity by type and index by their appearance in a message.</p><p>Returns: <code>string</code> | <code>boolean</code></p></blockquote><h4 id="parsetext-offset-length" tabindex="-1">parseText( offset, length ) <a class="header-anchor" href="#parsetext-offset-length" aria-label="Permalink to &quot;parseText( offset, length )&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>offset</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">The starting position of the string.</td></tr><tr><td style="text-align:left;"><code>length</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">The length of the portion.</td></tr></tbody></table><blockquote><p>Gets a portion of the string or the message this manager belongs to.</p><p>Returns: <code>string</code></p></blockquote><h4 id="phone-numbers" tabindex="-1">phone_numbers( ) <a class="header-anchor" href="#phone-numbers" aria-label="Permalink to &quot;phone_numbers( )&quot;">​</a></h4><blockquote><p>Returns: <a href="./../interfaces/MessageEntityPayload.html"><code>MessageEntityPayload[]</code></a></p></blockquote><h4 id="pres" tabindex="-1">pres( ) <a class="header-anchor" href="#pres" aria-label="Permalink to &quot;pres( )&quot;">​</a></h4><blockquote><p>Returns: <a href="./../interfaces/MessageEntityPayload.html"><code>MessageEntityPayload[]</code></a></p></blockquote><h4 id="spoilers" tabindex="-1">spoilers( ) <a class="header-anchor" href="#spoilers" aria-label="Permalink to &quot;spoilers( )&quot;">​</a></h4><blockquote><p>Returns: <a href="./../interfaces/MessageEntityPayload.html"><code>MessageEntityPayload[]</code></a></p></blockquote><h4 id="strikethroughs" tabindex="-1">strikethroughs( ) <a class="header-anchor" href="#strikethroughs" aria-label="Permalink to &quot;strikethroughs( )&quot;">​</a></h4><blockquote><p>Returns: <a href="./../interfaces/MessageEntityPayload.html"><code>MessageEntityPayload[]</code></a></p></blockquote><h4 id="text-links" tabindex="-1">text_links( ) <a class="header-anchor" href="#text-links" aria-label="Permalink to &quot;text_links( )&quot;">​</a></h4><blockquote><p>Returns: <a href="./../interfaces/MessageEntityPayload.html"><code>MessageEntityPayload[]</code></a></p></blockquote><h4 id="text-mentions" tabindex="-1">text_mentions( ) <a class="header-anchor" href="#text-mentions" aria-label="Permalink to &quot;text_mentions( )&quot;">​</a></h4><blockquote><p>Returns: <a href="./../interfaces/MessageEntityPayload.html"><code>MessageEntityPayload[]</code></a></p></blockquote><h4 id="underlines" tabindex="-1">underlines( ) <a class="header-anchor" href="#underlines" aria-label="Permalink to &quot;underlines( )&quot;">​</a></h4><blockquote><p>Returns: <a href="./../interfaces/MessageEntityPayload.html"><code>MessageEntityPayload[]</code></a></p></blockquote><h4 id="urls" tabindex="-1">urls( ) <a class="header-anchor" href="#urls" aria-label="Permalink to &quot;urls( )&quot;">​</a></h4><blockquote><p>Returns: <a href="./../interfaces/MessageEntityPayload.html"><code>MessageEntityPayload[]</code></a></p></blockquote>',56)]))}const b=t(l,[["render",i]]);export{y as __pageData,b as default};
