import{_ as e,V as o,W as t,X as n,Z as c,a1 as p,Y as s,$ as i,G as d}from"./framework-ed4f969a.js";const l={},u=n("h3",{id:"pwd-显示当前目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pwd-显示当前目录","aria-hidden":"true"},"#"),s(" pwd 显示当前目录")],-1),m=i(`<p>①、命令名称：pwd</p><p>②、英文原意：print working directory</p><p>③、命令所在路径：/bin/pwd</p><p>④、执行权限：所有用户</p><p>⑤、功能描述：显示当前目录</p><p>⑥、语法： pwd</p><p><strong>案例</strong></p><p>将当前目录路径存入c盘下一个文件叫做he.txt文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># pwd &gt; /home/c/he.log</span>
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># cat /home/c/he.log</span>
/home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&gt;</code> 写入内容到指定目录文件，<code>cat</code> 命令为用文本的方式打开一个文件</p><p>直接写字符串进入一个文本 echo &quot;str&quot; &gt; file</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># echo &quot;替换写入文本1&quot; &gt; /home/c/dd.log</span>
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># echo &quot;替换写入文本2&quot; &gt; /home/c/dd.log</span>
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># cat /home/c/dd.log</span>
替换写入文本2
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># echo &quot;追加文本1&quot; &gt;&gt; /home/c/dd.log</span>
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># echo &quot;追加文本2&quot; &gt;&gt; /home/c/dd.log</span>
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># cat /home/c/dd.log</span>
替换写入文本2
追加文本1
追加文本2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function r(h,v){const a=d("RouterLink");return o(),t("div",null,[u,n("ul",null,[n("li",null,[c(a,{to:"/linux/basis/command.html#%E7%A3%81%E7%9B%98%E7%AE%A1%E7%90%86"},{default:p(()=>[s("返回命令大全列表")]),_:1})])]),m])}const g=e(l,[["render",r],["__file","pwd.html.vue"]]);export{g as default};
