import{_ as e,V as i,W as l,X as n,Z as t,a1 as c,Y as s,$ as d,G as p}from"./framework-ed4f969a.js";const o={},r=n("h3",{id:"cat-显示较少内容",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cat-显示较少内容","aria-hidden":"true"},"#"),s(" cat 显示较少内容")],-1),m=d(`<p>①、命令名称：</p><p>②、英文原意：</p><p>③、命令所在路径：</p><p>④、执行权限：所有用户</p><p>⑤、功能描述：</p><p>⑥、语法：</p><p>cat 【选项】【文件名】</p><ul><li>-n 统计行号</li><li>-b 空行不计入行号的统计</li><li>-t 禁用制表符</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># cat demo.txt</span>
sdfsdfsdf

<span class="token number">1354354</span>

34sdr23424sdfs

<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># cat -n demo.txt</span>
     <span class="token number">1</span>  sdfsdfsdf
     <span class="token number">2</span>
     <span class="token number">3</span>  <span class="token number">1354354</span>
     <span class="token number">4</span>
     <span class="token number">5</span>  34sdr23424sdfs
     <span class="token number">6</span>
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># cat -b demo.txt</span>
     <span class="token number">1</span>  sdfsdfsdf

     <span class="token number">2</span>  <span class="token number">1354354</span>

     <span class="token number">3</span>  34sdr23424sdfs

<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># cat -T demo.txt</span>
sdfsdfsdf

<span class="token number">1354354</span>

34sdr23424sdfs

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 替换全部内容</span>
<span class="token function">cat</span> <span class="token parameter variable">-s</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /home/test/k8s.conf</span>
vm.swappiness=0
EOF</span>

<span class="token comment"># 追加内容</span>
<span class="token function">cat</span> <span class="token parameter variable">-s</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;&gt;</span> /home/test/k8s.conf</span>
vm.swappiness=0
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function u(v,b){const a=p("RouterLink");return i(),l("div",null,[r,n("ul",null,[n("li",null,[t(a,{to:"/linux/basis/command.html#%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86"},{default:c(()=>[s("返回命令大全列表")]),_:1})])]),m])}const f=e(o,[["render",u],["__file","cat.html.vue"]]);export{f as default};
