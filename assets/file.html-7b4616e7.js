import{_ as e,V as t,W as o,X as n,Z as p,a1 as l,Y as s,$ as c,G as i}from"./framework-ed4f969a.js";const u={},r=n("h3",{id:"file-查看文件类型",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#file-查看文件类型","aria-hidden":"true"},"#"),s(" file 查看文件类型")],-1),d=c(`<p>①、命令名称：file</p><p>②、英文原意：</p><p>③、命令所在路径：</p><p>④、执行权限：所有用户</p><p>⑤、功能描述：查看文件类型</p><p>⑥、语法：</p><p>file 【文件】</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># file user1</span>
user1: directory
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># file demo.txt</span>
demo.txt: empty
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># ln -s ./demo.txt ./user1/</span>
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># ls -l user1/</span>
总用量 <span class="token number">0</span>
lrwxrwxrwx <span class="token number">1</span> root root <span class="token number">10</span> <span class="token number">9</span>月  <span class="token number">13</span> <span class="token number">15</span>:23 demo.txt -<span class="token operator">&gt;</span> ./demo.txt
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># file user1/demo.txt</span>
user1/demo.txt: broken symbolic <span class="token function">link</span> to \`./demo.txt&#39;
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># file /bin/ls</span>
/bin/ls: ELF <span class="token number">64</span>-bit LSB executable, x86-64, version <span class="token number">1</span> <span class="token punctuation">(</span>SYSV<span class="token punctuation">)</span>, dynamically linked <span class="token punctuation">(</span>uses shared libs<span class="token punctuation">)</span>, <span class="token keyword">for</span> GNU/Linux <span class="token number">2.6</span>.32, BuildID<span class="token punctuation">[</span>sha1<span class="token punctuation">]</span><span class="token operator">=</span>c8ada1f7095f6b2bb7ddc848e088c2d615c3743e, stripped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function m(k,b){const a=i("RouterLink");return t(),o("div",null,[r,n("ul",null,[n("li",null,[p(a,{to:"/linux/basis/command.html#%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86"},{default:l(()=>[s("返回命令大全列表")]),_:1})])]),d])}const f=e(u,[["render",m],["__file","file.html.vue"]]);export{f as default};