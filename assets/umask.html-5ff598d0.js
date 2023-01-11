import{_ as e,V as o,W as t,X as s,Z as p,a1 as r,Y as n,$ as c,G as l}from"./framework-ed4f969a.js";const i={},u=s("h3",{id:"umask-显示、设置文件的缺省权限",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#umask-显示、设置文件的缺省权限","aria-hidden":"true"},"#"),n(" umask 显示、设置文件的缺省权限")],-1),m=c(`<p>①、命令名称：umask</p><p>②、英文原意：the user file-creation mask</p><p>③、命令所在路径：shell 内置命令</p><p>④、执行权限：所有用户</p><p>⑤、功能描述：显示、设置文件的缺省权限</p><p>⑥、语法： umask 【-S】</p><blockquote><p><code>-S</code> 以rwx形式显示新建文件的缺省权限</p></blockquote><p><strong>注意：可能大家不太明白这个命令的意思，我们分别执行umask</strong> 和 umask -S 如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># umask</span>
0022
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># umask -S</span>
<span class="token assign-left variable">u</span><span class="token operator">=</span>rwx,g<span class="token operator">=</span>rx,o<span class="token operator">=</span>rx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中umask 执行显示结果是 0022,第一个0表示特殊权限，后面我们会单独进行讲解有哪几种特殊权限。022表示权限的掩码值，我们用7 7 7 减去 0 2 2得到755（是每一位相减），表示的就是下面通过加上-S输出的rwxr-xr-x，这个值用数字表示就是755.</p><p>这个意思说明创建一个文件的默认权限所有者为rwx,所属组为rx,其他人为rx。也就是说创建一个新文件默认权限为 rwxr-xr-x，我们创建一个文件来验证一下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># touch a.log</span>
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># ll a.log</span>
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">0</span> <span class="token number">9</span>月   <span class="token number">9</span> <span class="token number">22</span>:42 a.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们发现使用touch命令创建了一个文件a.txt，然后发现权限并不是rwxr-xr-x，而是rw-r--r--。对比发现少了三个x，也就是少了可执行权限。这是为什么呢？</p><p>这是因为在Linux系统中，所有新创建的文件都是没有可执行权限的。这是出于Linux系统的一种自我保护，因为类似的病毒木马程序都是具有可执行权限的。所以在Linux系统中，新创建的文件是没有可执行权限的。</p><p>那么我们如何设置默认权限呢？比如我们想将新创建的文件权限设置为rwxr-xr--，也就是754。我们用777减去754得到023。也就是通过执行 umask 023 来完成默认权限设置。</p>`,15);function d(k,x){const a=l("RouterLink");return o(),t("div",null,[u,s("ul",null,[s("li",null,[p(a,{to:"/linux/basis/command.html#%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86"},{default:r(()=>[n("返回命令大全列表")]),_:1})])]),m])}const v=e(i,[["render",d],["__file","umask.html.vue"]]);export{v as default};
