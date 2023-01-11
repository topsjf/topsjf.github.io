import{_ as l,V as t,W as i,a0 as o,X as a,Y as n,Z as e,$ as c,G as p}from"./framework-ed4f969a.js";const r={},d=a("h1",null,"jdk安装与配置",-1),u=a("h2",{id:"一、环境准备",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#一、环境准备","aria-hidden":"true"},"#"),n(" 一、环境准备")],-1),v=a("p",null,"前提是先把网络ip配置好",-1),k=a("h3",{id:"_1、下载jdk",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_1、下载jdk","aria-hidden":"true"},"#"),n(" 1、下载JDK")],-1),b=a("p",null,"官网下载地址：",-1),m={href:"https://www.oracle.com/java/technologies/downloads/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.oracle.com/java/technologies/downloads/archive/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://pan.baidu.com/s/17pkHcX7YrssnEVctveHbHQ",target:"_blank",rel:"noopener noreferrer"},g=c(`<h3 id="_2、下载-ssh-secure-file-transfer-client-连接工具-或-mobaxterm" tabindex="-1"><a class="header-anchor" href="#_2、下载-ssh-secure-file-transfer-client-连接工具-或-mobaxterm" aria-hidden="true">#</a> 2、下载 SSH Secure File Transfer Client 连接工具 或 MobaXterm</h3><p>A:网上随便兽兽道首；</p><h2 id="二、解压安装" tabindex="-1"><a class="header-anchor" href="#二、解压安装" aria-hidden="true">#</a> 二、解压安装</h2><h3 id="_1、使用工具wind10-linux传输文件" tabindex="-1"><a class="header-anchor" href="#_1、使用工具wind10-linux传输文件" aria-hidden="true">#</a> 1、使用工具wind10--&gt;Linux传输文件</h3><p>file--connect---hostName（linux的ip）---user name（系统用户）---prot（端口：默认）--authentication（选择password）---点击connect后----输入密码</p><p>选中点击鼠标右键---Upload-----&gt;</p><h3 id="_2、contos删除自带的jdk" tabindex="-1"><a class="header-anchor" href="#_2、contos删除自带的jdk" aria-hidden="true">#</a> 2、contos删除自带的jdk</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>//检查jdk
<span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">java</span>

<span class="token function">rpm</span> 　　管理套件    
<span class="token parameter variable">-qa</span> 　　使用询问模式，查询所有套件
<span class="token function">grep</span>　　查找文件里符合条件的字符串
<span class="token function">java</span> 　　查找包含java字符串的文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>只删除这几个
java-1.7.0-openjdk-1.7.0.111-2.6.7.8.el7.x86_64
java-1.8.0-openjdk-1.8.0.102-4.b14.el7.x86_64
java-1.8.0-openjdk-headless-1.8.0.102-4.b14.el7.x86_64
java-1.7.0-openjdk-headless-1.7.0.111-2.6.7.8.el7.x86_64

//删除命令
<span class="token function">rpm</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">--nodeps</span> java-1.7.0-openjdk-1.7.0.111-2.6.7.8.el7.x86_64

<span class="token function">rpm</span> 　　　　管理套件  
<span class="token parameter variable">-e</span>　　　　　删除指定的套件
<span class="token parameter variable">--nodeps</span>　　不验证套件档的相互关联性

//检查
<span class="token function">java</span> <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-ubuntu卸载jdk" tabindex="-1"><a class="header-anchor" href="#_3-ubuntu卸载jdk" aria-hidden="true">#</a> 3.Ubuntu卸载jdk</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>//查看java安装路径：
	root@hdas:/home/kong$ <span class="token function">which</span> <span class="token function">java</span>
//其他jvm地址：
	/usr/lib/jvm
-----------------------------------
//删除指令：
	<span class="token function">sudo</span> <span class="token function">apt-get</span> remove openjdk*     在输入openj后可以按Tab键查看提示
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>root@de:/home/af$ <span class="token function">sudo</span> <span class="token function">apt-get</span> remove openj
	openjdk-11-jre           openjdk-8-jre-headless
	openjdk-11-jre-headless  openjfx                  
root@de:/home/af$ <span class="token function">sudo</span> <span class="token function">apt-get</span> remove openjdk*
*****
解压缩后将会空出 <span class="token number">583</span> MB 的空间。
您希望继续执行吗？ <span class="token punctuation">[</span>Y/n<span class="token punctuation">]</span> y
****
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、在linux解压文件" tabindex="-1"><a class="header-anchor" href="#_4、在linux解压文件" aria-hidden="true">#</a> 4、在Linux解压文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@yu local<span class="token punctuation">]</span>$ <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> 【文件名】【目标路径】 【eclipse】新名称
<span class="token punctuation">[</span>root@yu local<span class="token punctuation">]</span>$ <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> 【文件名】【目标路径】 【jdk】新名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>//查看
<span class="token punctuation">[</span>root@yu local<span class="token punctuation">]</span>$ ll
总用量 <span class="token number">48</span>
drwxrwxr-x. <span class="token number">8</span> root root <span class="token number">4096</span> <span class="token number">12</span>月 <span class="token number">12</span> <span class="token number">23</span>:25 eclipse
drwxr-xr-x. <span class="token number">7</span>   <span class="token number">10</span>  <span class="token number">143</span> <span class="token number">4096</span> <span class="token number">12</span>月 <span class="token number">16</span> <span class="token number">2018</span> jdk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、配置环境变量" tabindex="-1"><a class="header-anchor" href="#三、配置环境变量" aria-hidden="true">#</a> 三、配置环境变量</h2><p><mark>jdk11后没有jre</mark></p><h3 id="打开文件" tabindex="-1"><a class="header-anchor" href="#打开文件" aria-hidden="true">#</a> 打开文件</h3><blockquote><p>vim /etc/profile 按i 开始编辑 //保存退出： 先按 <mark>esc</mark> &gt; 再按 <mark>shift+:</mark> 然后输入<mark>wq</mark> &gt; 回车键</p></blockquote><p>jdk&gt;=11</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/local/java/jdk-17.0.3
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>jdk&lt;11</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/local/java/jdk1.8
<span class="token builtin class-name">export</span> <span class="token assign-left variable">M2_HOME</span><span class="token operator">=</span>/usr/local/java/maven-3.8.3
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:<span class="token variable">\${JAVA_HOME}</span>/jre/lib/rt.jar:<span class="token variable">\${JAVA_HOME}</span>/lib/dt.jar:<span class="token variable">\${JAVA_HOME}</span>/lib/tools.jar
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">\${JAVA_HOME}</span>/bin:<span class="token variable">\${JAVA_HOME}</span>/jre/bin:<span class="token variable">\${M2_HOME}</span>/bin

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="刷新配置" tabindex="-1"><a class="header-anchor" href="#刷新配置" aria-hidden="true">#</a> 刷新配置</h3><blockquote><p>source /etc/profile</p></blockquote><h3 id="查看java" tabindex="-1"><a class="header-anchor" href="#查看java" aria-hidden="true">#</a> 查看java</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token punctuation">[</span>root<span class="token annotation punctuation">@yu</span> <span class="token operator">/</span><span class="token punctuation">]</span># java <span class="token operator">-</span>version
java version <span class="token string">&quot;1.8.0_201&quot;</span>
<span class="token class-name">Java</span><span class="token punctuation">(</span><span class="token constant">TM</span><span class="token punctuation">)</span> <span class="token constant">SE</span> <span class="token class-name">Runtime</span> <span class="token class-name">Environment</span> <span class="token punctuation">(</span>build <span class="token number">1.8</span><span class="token number">.0_201</span><span class="token operator">-</span>b09<span class="token punctuation">)</span>
<span class="token class-name">Java</span> <span class="token class-name">HotSpot</span><span class="token punctuation">(</span><span class="token constant">TM</span><span class="token punctuation">)</span> <span class="token number">64</span><span class="token operator">-</span><span class="token class-name">Bit</span> <span class="token class-name">Server</span> <span class="token constant">VM</span> <span class="token punctuation">(</span>build <span class="token number">25.201</span><span class="token operator">-</span>b09<span class="token punctuation">,</span> mixed mode<span class="token punctuation">)</span>

<span class="token comment">//</span>
<span class="token punctuation">[</span>root<span class="token annotation punctuation">@yu</span> <span class="token operator">/</span><span class="token punctuation">]</span># java
用法<span class="token operator">:</span> java <span class="token punctuation">[</span><span class="token operator">-</span>options<span class="token punctuation">]</span> <span class="token keyword">class</span> <span class="token punctuation">[</span>args<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>
           <span class="token punctuation">(</span>执行类<span class="token punctuation">)</span>
   或  java <span class="token punctuation">[</span><span class="token operator">-</span>options<span class="token punctuation">]</span> <span class="token operator">-</span>jar jarfile <span class="token punctuation">[</span>args<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>
           <span class="token punctuation">(</span>执行 jar 文件<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、测试、运行hello-world。java-程序" tabindex="-1"><a class="header-anchor" href="#四、测试、运行hello-world。java-程序" aria-hidden="true">#</a> 四、测试、运行hello world。java 程序</h2><h3 id="创建一个java文件" tabindex="-1"><a class="header-anchor" href="#创建一个java文件" aria-hidden="true">#</a> 创建一个java文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@yu eclipse<span class="token punctuation">]</span>$ <span class="token function">touch</span> HelloWorld.java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="编写java代码文件" tabindex="-1"><a class="header-anchor" href="#编写java代码文件" aria-hidden="true">#</a> 编写java代码文件</h3><blockquote><p>vim HelloWorld.java</p></blockquote><p>内容如下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> agrs<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编译java文件" tabindex="-1"><a class="header-anchor" href="#编译java文件" aria-hidden="true">#</a> 编译java文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@yu eclipse<span class="token punctuation">]</span>$ javac HelloWorld.java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="运行文件" tabindex="-1"><a class="header-anchor" href="#运行文件" aria-hidden="true">#</a> 运行文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@yu eclipse<span class="token punctuation">]</span>$ <span class="token function">java</span> HelloWorld

//运行结果
Hello World
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-centos7-安装jdk、构建jar包镜像" tabindex="-1"><a class="header-anchor" href="#docker-centos7-安装jdk、构建jar包镜像" aria-hidden="true">#</a> docker-centos7 安装jdk、构建jar包镜像</h2>`,40),f={href:"https://blog.csdn.net/qq_42476834/article/details/125121395",target:"_blank",rel:"noopener noreferrer"};function _(x,H){const s=p("ExternalLinkIcon");return t(),i("div",null,[o(" more "),d,u,v,k,b,a("ul",null,[a("li",null,[a("a",m,[n("jdk各个版本下载"),e(s)])]),a("li",null,[a("a",h,[n("jdk各个版本档案"),e(s)])]),a("li",null,[a("a",j,[n("jdk各版本下载-百度网盘"),e(s)]),n(" 提取码：1234")])]),g,a("p",null,[a("a",f,[n("🚀地址🚀"),e(s)])])])}const A=l(r,[["render",_],["__file","java.html.vue"]]);export{A as default};
