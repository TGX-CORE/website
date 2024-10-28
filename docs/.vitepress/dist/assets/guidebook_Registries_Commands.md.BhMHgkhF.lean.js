import{_ as a,c as i,a2 as n,o as e}from"./chunks/framework.DPuwY6B9.js";const c=JSON.parse('{"title":"Command Registries","description":"","frontmatter":{},"headers":[],"relativePath":"guidebook/Registries/Commands.md","filePath":"guidebook/Registries/Commands.md"}'),p={name:"guidebook/Registries/Commands.md"};function t(l,s,h,k,r,d){return e(),i("div",null,s[0]||(s[0]=[n(`<h1 id="command-registries" tabindex="-1">Command Registries <a class="header-anchor" href="#command-registries" aria-label="Permalink to &quot;Command Registries&quot;">​</a></h1><p>With command registries, you can organize your commands and code neatly.</p><h2 id="preparation" tabindex="-1">Preparation <a class="header-anchor" href="#preparation" aria-label="Permalink to &quot;Preparation&quot;">​</a></h2><p>Before proceeding, read the <a href="./README.html">introduction</a>.</p><ul><li>Just create a folder named <code>commands</code> in your designated working directory.</li><li>You may create or add folders and files.</li><li>Let&#39;s create a <code>ping</code> command.</li></ul><p>This is only an example, change the paths according to your working directory. Here is what your directory would look like.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>src/</span></span>
<span class="line"><span>├── commands/</span></span>
<span class="line"><span>│   └── ping.js</span></span>
<span class="line"><span>├── index.js</span></span>
<span class="line"><span>└── package.json</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>src/</span></span>
<span class="line"><span>├── commands/</span></span>
<span class="line"><span>│   └── monitoring/</span></span>
<span class="line"><span>│       └── ping.js</span></span>
<span class="line"><span>├── index.js</span></span>
<span class="line"><span>└── package.json</span></span></code></pre></div><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;tgx-core&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TestCommand</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        super</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(context, { </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">options,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ping&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            description: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Ping the bot.&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        message.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replyText</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pong!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TestCommand</span></span></code></pre></div><h2 id="advance-setup" tabindex="-1">Advance Setup <a class="header-anchor" href="#advance-setup" aria-label="Permalink to &quot;Advance Setup&quot;">​</a></h2><p>Refer to this <a href="./../Commands/Registry Setup.html"><code>Registry Setup</code></a> on how to set up command registries with scope.</p>`,12)]))}const E=a(p,[["render",t]]);export{c as __pageData,E as default};
