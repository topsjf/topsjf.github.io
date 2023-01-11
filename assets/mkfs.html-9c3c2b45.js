import{_ as e,V as p,W as t,X as s,Z as o,a1 as l,Y as n,$ as c,G as i}from"./framework-ed4f969a.js";const r={},u=s("h3",{id:"mkfs-磁盘格式化",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mkfs-磁盘格式化","aria-hidden":"true"},"#"),n(" mkfs 磁盘格式化")],-1),d=c(`<p>①、命令名称：</p><p>②、英文原意：</p><p>③、命令所在路径：</p><p>④、执行权限：所有用户</p><p>⑤、功能描述：</p><p>⑥、语法：</p><p>磁盘分割完毕后自然就是要进行文件系统的格式化，格式化的命令非常的简单，使用 <code>mkfs</code>（make filesystem） 命令。</p><p>语法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkfs</span> <span class="token punctuation">[</span>-t 文件系统格式<span class="token punctuation">]</span> 装置文件名
<span class="token function">mkfs</span> <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> <span class="token punctuation">[</span>-t <span class="token operator">&lt;</span>类型<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>文件系统选项<span class="token punctuation">]</span> <span class="token operator">&lt;</span>设备<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>大小<span class="token operator">&gt;</span><span class="token punctuation">]</span>
选项：
 -t, <span class="token parameter variable">--type</span><span class="token operator">=</span><span class="token operator">&lt;</span>类型<span class="token operator">&gt;</span>   文件系统类型；若不指定，将使用 ext2
     fs-options     实际文件系统构建程序的参数
     <span class="token operator">&lt;</span>设备<span class="token operator">&gt;</span>          要使用设备的路径
     <span class="token operator">&lt;</span>大小<span class="token operator">&gt;</span>          要使用设备上的块数
 -V, <span class="token parameter variable">--verbose</span>       解释正在进行的操作；
                      多次指定 <span class="token parameter variable">-V</span> 将导致空运行<span class="token punctuation">(</span>dry-run<span class="token punctuation">)</span>
 -V, <span class="token parameter variable">--version</span>       显示版本信息并退出
                      将 <span class="token parameter variable">-V</span> 作为 <span class="token parameter variable">--version</span> 选项时必须是惟一选项
 -h, <span class="token parameter variable">--help</span>          显示此帮助并退出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实例 1</strong></p><p>查看 mkfs 支持的文件格式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># mkfs[tab][tab]</span>
<span class="token function">mkfs</span>         mkfs.cramfs  mkfs.ext2    mkfs.ext3    mkfs.msdos   mkfs.vfat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>按下两个[tab]，会发现 mkfs 支持的文件格式如上所示。</p><p><strong>实例 2</strong></p><p>将分区 <code>/dev/hdc6</code>（可指定你自己的分区） 格式化为 <code>ext3</code> 文件系统：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># mkfs -t ext3 /dev/hdc6</span>
<span class="token function">mke2fs</span> <span class="token number">1.39</span> <span class="token punctuation">(</span><span class="token number">29</span>-May-2006<span class="token punctuation">)</span>
Filesystem <span class="token assign-left variable">label</span><span class="token operator">=</span>                <span class="token operator">&lt;=</span><span class="token operator">=</span>这里指的是分割槽的名称<span class="token punctuation">(</span>label<span class="token punctuation">)</span>
OS type: Linux
Block <span class="token assign-left variable">size</span><span class="token operator">=</span><span class="token number">4096</span> <span class="token punctuation">(</span>log<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>          <span class="token operator">&lt;=</span><span class="token operator">=</span>block 的大小配置为 4K 
Fragment <span class="token assign-left variable">size</span><span class="token operator">=</span><span class="token number">4096</span> <span class="token punctuation">(</span>log<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token number">251392</span> inodes, <span class="token number">502023</span> blocks     <span class="token operator">&lt;=</span><span class="token operator">=</span>由此配置决定的inode/block数量
<span class="token number">25101</span> blocks <span class="token punctuation">(</span><span class="token number">5.00</span>%<span class="token punctuation">)</span> reserved <span class="token keyword">for</span> the super user
First data <span class="token assign-left variable">block</span><span class="token operator">=</span><span class="token number">0</span>
Maximum filesystem <span class="token assign-left variable">blocks</span><span class="token operator">=</span><span class="token number">515899392</span>
<span class="token number">16</span> block <span class="token function">groups</span>
<span class="token number">32768</span> blocks per group, <span class="token number">32768</span> fragments per group
<span class="token number">15712</span> inodes per group
Superblock backups stored on blocks:
        <span class="token number">32768</span>, <span class="token number">98304</span>, <span class="token number">163840</span>, <span class="token number">229376</span>, <span class="token number">294912</span>

Writing inode tables: <span class="token keyword">done</span>
Creating journal <span class="token punctuation">(</span><span class="token number">8192</span> blocks<span class="token punctuation">)</span>: <span class="token keyword">done</span> <span class="token operator">&lt;=</span><span class="token operator">=</span>有日志记录
Writing superblocks and filesystem accounting information: <span class="token keyword">done</span>

This filesystem will be automatically checked every <span class="token number">34</span> mounts or
<span class="token number">180</span> days, whichever comes first.  Use tune2fs <span class="token parameter variable">-c</span> or <span class="token parameter variable">-i</span> to override.
<span class="token comment"># 这样就创建起来我们所需要的 Ext3 文件系统了！简单明了！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function k(m,v){const a=i("RouterLink");return p(),t("div",null,[u,s("ul",null,[s("li",null,[o(a,{to:"/linux/basis/command.html#%E7%A3%81%E7%9B%98%E7%AE%A1%E7%90%86"},{default:l(()=>[n("返回命令大全列表")]),_:1})])]),d])}const f=e(r,[["render",k],["__file","mkfs.html.vue"]]);export{f as default};