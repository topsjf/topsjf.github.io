import{_ as n,V as s,W as a,a0 as t,$ as e}from"./framework-ed4f969a.js";const p="/assets/true-image-20210926162217627-2385cc09.png",o="/assets/true-image-20210926163452492-d824ff42.png",i="/assets/true-image-20210926163659508-6a084e86.png",c="/assets/true-image-20210926165049222-0fc114b8.png",l={},u=e('<h2 id="分布式-session" tabindex="-1"><a class="header-anchor" href="#分布式-session" aria-hidden="true">#</a> 分布式 session</h2><h3 id="_7-1-分析" tabindex="-1"><a class="header-anchor" href="#_7-1-分析" aria-hidden="true">#</a> 7.1 分析</h3><p><img src="'+p+'" alt=""></p><h3 id="_7-2-解决session已知弊端" tabindex="-1"><a class="header-anchor" href="#_7-2-解决session已知弊端" aria-hidden="true">#</a> 7.2 解决session已知弊端：</h3><p><img src="'+o+'" alt=""></p><p><img src="'+i+'" alt=""></p><p>使用第一种，但是存在子域名问题，所以使用SpringSession</p><p><img src="'+c+`" alt=""></p><h3 id="_7-3-开始" tabindex="-1"><a class="header-anchor" href="#_7-3-开始" aria-hidden="true">#</a> 7.3 开始</h3><h4 id="_7-3-1-依赖、启动类" tabindex="-1"><a class="header-anchor" href="#_7-3-1-依赖、启动类" aria-hidden="true">#</a> 7.3.1 依赖、启动类</h4><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 整合springsession --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.session<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-session-data-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@EnableRedisHttpSession</span>     <span class="token comment">//开启springsession</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_7-3-2-配置-放大作用域" tabindex="-1"><a class="header-anchor" href="#_7-3-2-配置-放大作用域" aria-hidden="true">#</a> 7.3.2 配置，放大作用域</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SessionConfig</span><span class="token punctuation">{</span>
   <span class="token annotation punctuation">@Bean</span>
   <span class="token keyword">public</span> <span class="token class-name">CookieSerializer</span> <span class="token function">cookieSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token class-name">DefaultCookieSerializer</span> cookieSerializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultCookieSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//放大作用域</span>
      cookieSerializer<span class="token punctuation">.</span><span class="token function">setDomainName</span><span class="token punctuation">(</span><span class="token string">&quot;yumall.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      cookieSerializer<span class="token punctuation">.</span><span class="token function">setCookieName</span><span class="token punctuation">(</span><span class="token string">&quot;YUMALLSESSION&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> cookieSerializer<span class="token punctuation">;</span><span class="token punctuation">}</span>
   <span class="token annotation punctuation">@Bean</span>
   <span class="token keyword">public</span> <span class="token class-name">RedisSerializer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">springSessionDefaultRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">GenericJackson2JsonRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.session.store-type</span><span class="token punctuation">=</span><span class="token value attr-value">redis</span>
<span class="token key attr-name">server</span><span class="token punctuation">:</span>
<span class="token key attr-name">  servlet</span><span class="token punctuation">:</span>
<span class="token key attr-name">    session</span><span class="token punctuation">:</span>
<span class="token key attr-name">      timeout</span><span class="token punctuation">:</span> <span class="token value attr-value">30m</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-3-2-开始" tabindex="-1"><a class="header-anchor" href="#_7-3-2-开始" aria-hidden="true">#</a> 7.3.2 开始</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>session<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token constant">LOGIN_USER</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${session.loginUser != null}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>欢迎, [[\${session.loginUser.nickname}]]<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${session.loginUser == null}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://auth.yumall.com/login.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>你好，请登录<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function r(d,k){return s(),a("div",null,[t(" more "),u])}const v=n(l,[["render",r],["__file","cloud-session.html.vue"]]);export{v as default};
