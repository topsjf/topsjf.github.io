import{_ as e,V as p,W as i,X as a,Z as l,a1 as t,Y as s,$ as c,G as r}from"./framework-ed4f969a.js";const o={},d=a("h3",{id:"find-查找文件或者目录",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#find-查找文件或者目录","aria-hidden":"true"},"#"),s(" find 查找文件或者目录")],-1),u=c(`<p>①、命令名称： find</p><p>②、英文原意：</p><p>③、命令所在路径： /usr/bin/find</p><p>④、执行权限：所有用户</p><p>⑤、功能描述： find 指令将从指定目录向下递归地遍历其各个子目录，将满足条件的文件显示在终端。</p><p>⑥、语法：</p><p>find 【搜索范围】 【选项】</p><p><em>选项：</em></p><ul><li>-name&lt;查询方式&gt; 按照指定的文件名查找模式查找文件</li><li>-user&lt;用户名&gt; 查找属于指定用户名所有文件</li><li>-size&lt;文件大小&gt; 按照指定的文件大小查找文件 （<code>+n</code>大于 <code>-n</code>小于 <code>n</code>等于）</li></ul><p>我们可以将其计量单位指定为以下约定：</p><ul><li>b：512 字节块（默认）</li><li>c：字节</li><li>w：双字节字</li><li>k：KB</li><li>M：MB</li><li>G：GB</li></ul><p>（1）按文件名：根据名称查找/目录下的所有 txt 文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> xiaoyu/ <span class="token parameter variable">-name</span> “*.txt”
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（2）按拥有者：查找/opt目录下，所属用户名称为 user1 的文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> xiaoyu/ <span class="token parameter variable">-user</span> user1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（3）按文件大小：在/home目录下查找大于200m的文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> /home <span class="token parameter variable">-size</span> +204800
<span class="token function">find</span> /home <span class="token parameter variable">-type</span> f <span class="token parameter variable">-size</span> +10M <span class="token parameter variable">-size</span> <span class="token parameter variable">-1G</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）删除该目录下最后一次访问时间超过一年的日志文件呢？</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-atime</span> +365 <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（5）按名称或正则表达式查找文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-name</span> test.txt
<span class="token function">find</span> ./books <span class="token parameter variable">-name</span> <span class="token string">&quot;*.pdf&quot;</span>
<span class="token function">find</span> ./books <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;*.pdf&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>默认情况下，find 命令会搜索常规文件，但最好进行指定（-type f）以使所有内容更清晰。</p></blockquote><p>（6）查找不同类型的文件</p><p>除了搜索常规文件外，我们还可以通过指定 <code>-type</code> 选项来搜索其他类型的文件。</p><p>例如目录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> d <span class="token parameter variable">-name</span> <span class="token string">&quot;yu*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者符号链接：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> l <span class="token parameter variable">-name</span> <span class="token string">&quot;yu*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（7）按指定的时间戳查找文件</p><p>要按指定的时间戳搜索文件，我们需要知道 Linux 系统中的 3 个不同的时间戳：</p><p><strong>访问时间戳（atime）</strong> ：最后一次读取文件的时间。</p><p><strong>修改时间戳（mtime）</strong> ：文件内容最后一次被修改的时间。</p><p><strong>更改时间戳（ctime）</strong> ：上次更改文件元数据的时间（如，所有权、位置、文件类型和权限设置）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-atime</span> +365
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-mtime</span> <span class="token number">5</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-ctime</span> +5 <span class="token parameter variable">-ctime</span> <span class="token parameter variable">-10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（9）按权限查找文件</p><p><code>-perm</code> 选项可以帮助我们按指定权限查找文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-perm</span> <span class="token number">777</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（10）按所有权查找文件</p><p>使用 <code>-user</code> 选项指定用户名。</p><p>例如，以下命令将查找所有属于 yu 的文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-user</span> yu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（11）在找到文件后执行命令</p><p>在找到我们需要的文件后进行后续操作。</p><p>例如将其删除，或检查它们的详细信息等等。</p><p><code>-exec</code> 命令使这些所有事情变得更加容易</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-atime</span> +365 <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>{}</code> 是用于查找结果的占位符。</p><blockquote><p>注意：占位符 {} 非常重要，尤其是在您想删除文件时。 因为，如果您不使用它，该命令将对所有文件执行 （而不是您刚刚通过 find 命令找到的文件）。</p></blockquote><p><em>一个使用占位符：</em></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-atime</span> +5 <span class="token parameter variable">-exec</span> <span class="token function">ls</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>另一个不使用：</em></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-atime</span> +5 <span class="token parameter variable">-exec</span> <span class="token function">ls</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-exec</code> 选项后面的命令必须以分号（;）结束。 众所周知，转义字符用于去除单个字符的特殊含义。 在 Linux 中，反斜杠 \\ 用作转义字符。 所以我们将它用于分号字符。</p>`,53);function m(b,v){const n=r("RouterLink");return p(),i("div",null,[d,a("ul",null,[a("li",null,[l(n,{to:"/linux/basis/command.html#%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86"},{default:t(()=>[s("返回命令大全列表")]),_:1})])]),u])}const f=e(o,[["render",m],["__file","find.html.vue"]]);export{f as default};
