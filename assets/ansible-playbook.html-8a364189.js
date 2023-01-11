import{_ as p,V as i,W as l,a0 as o,X as n,Y as s,Z as e,$ as t,G as c}from"./framework-ed4f969a.js";const u="/assets/true-1204916-20171208112235999-1825222840-0f020375.png",r="/assets/true-image-20220729140706857-20605ba2.png",d="/assets/true-image-20220729141300986-ecf49178.png",k="/assets/true-image-20220729141702897-fa23053c.png",m="/assets/true-image-20220729141854324-ee411d60.png",v="/assets/true-image-20220729142232724-7939fd92.png",b="/assets/true-image-20220729143142605-95e2e4ef.png",g="/assets/true-image-20220729143155466-3944f399.png",h="/assets/true-image-20220729145916358-88d06803.png",y="/assets/true-image-20220729150326860-4b84094f.png",x="/assets/true-image-20220729211246699-378e0158.png",_="/assets/true-image-20220729211332978-7bf2e7e6.png",f="/assets/true-image-20220729212349643-4c9ebf47.png",q="/assets/true-image-20220729214251417-f8312efa.png",w={},A=n("h1",null,"ansible-playbook任务编排工具（剧本）",-1),$={href:"http://ansible.com.cn/docs/intro.html",target:"_blank",rel:"noopener noreferrer"},N={href:"https://pan.baidu.com/s/1fkosURl4HaYZALtSjKvcKg",target:"_blank",rel:"noopener noreferrer"},E=t(`<h2 id="ansible-playbook" tabindex="-1"><a class="header-anchor" href="#ansible-playbook" aria-hidden="true">#</a> ansible-playbook</h2><h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h3><p>playbook 是 ansible 用于配置，部署，和管理被控节点的剧本。</p><p>通过 playbook 的详细描述，执行其中的一系列 tasks ，可以让远端主机达到预期的状态。playbook 就像 Ansible 控制器给被控节点列出的的一系列 to-do-list ，而被控节点必须要完成。</p><p>也可以这么理解，playbook 字面意思，即剧本，现实中由演员按照剧本表演，在Ansible中，这次由计算机进行表演，由计算机安装，部署应用，提供对外服务，以及组织计算机处理各种各样的事情。</p><h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h3><p>执行一些简单的任务，使用ad-hoc命令可以方便的解决问题，但是有时一个设施过于复杂，需要大量的操作时候，执行的ad-hoc命令是不适合的，这时最好使用playbook。</p><p>就像执行shell命令与写shell脚本一样，也可以理解为批处理任务，不过playbook有自己的语法格式。</p><p>使用playbook你可以方便的重用这些代码，可以移植到不同的机器上面，像函数一样，最大化的利用代码。在你使用Ansible的过程中，你也会发现，你所处理的大部分操作都是编写playbook。可以把常见的应用都编写成playbook，之后管理服务器会变得十分简单。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><p>**playbook由YMAL语言编写。**YMAL格式是类似于JSON的文件格式，便于人理解和阅读，同时便于书写。</p><p>以下为playbook常用到的YMAL格式：</p><p>1、文件的第一行应该以 &quot;---&quot; (三个连字符)开始，表明YMAL文件的开始。</p><p>2、在同一行中，#之后的内容表示注释，类似于shell，python和ruby。</p><p>3、YMAL中的列表元素以”-”开头然后紧跟着一个空格，后面为元素内容。</p><p>4、同一个列表中的元素应该保持相同的缩进。否则会被当做错误处理。</p><p>5、play中hosts，variables，roles，tasks等对象的表示方法都是键值中间以&quot;:&quot;分隔表示，&quot;:&quot;后面还要增加一个空格。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 自定义主机与组
[web]
192.168.0.[8:10]

[mysql_server]
192.168.0.[8:10]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>ansible-playbook &lt;filename.yml&gt; ... [options]</p><ul><li>options:</li><li><ul><li>--check，-C #只检测可能会发生的改变，但不真正执行操作</li><li>--list-hosts #列出运行任务的主机</li><li>--list-tags #列出tag</li><li>--list-tasks #列出task</li><li>--limit 主机列表 #只针对主机列表中的主机执行</li><li>-v -vv -vvv #显示过程</li><li>-t，--tags #仅运行标记有这些值的 tags 和 tasks</li></ul></li></ul></blockquote><h3 id="示例剧本文件" tabindex="-1"><a class="header-anchor" href="#示例剧本文件" aria-hidden="true">#</a> 示例剧本文件</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> web
  <span class="token key atrule">vars</span><span class="token punctuation">:</span>
    <span class="token key atrule">http_port</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">max_clients</span><span class="token punctuation">:</span> <span class="token number">200</span>
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">sudo</span><span class="token punctuation">:</span> yes
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ensure apache is at the latest version
    <span class="token key atrule">yum</span><span class="token punctuation">:</span> pkg=httpd state=latest
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> write the apache config file
    <span class="token key atrule">template</span><span class="token punctuation">:</span> src=/srv/httpd.j2 dest=/etc/httpd.conf
    <span class="token key atrule">notify</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> restart apache
    
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ensure apache is running
    <span class="token key atrule">service</span><span class="token punctuation">:</span> name=httpd state=started
    
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> test with_items
    <span class="token key atrule">file</span><span class="token punctuation">:</span> name=<span class="token punctuation">{</span><span class="token punctuation">{</span> item <span class="token punctuation">}</span><span class="token punctuation">}</span> state=directory mode=0750 recurse=yes
    <span class="token key atrule">with_items</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;{{ SOURCE_DIR }}&quot;</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;{{ DATA_BASE }}&quot;</span>
  
  <span class="token key atrule">handlers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> restart apache
      <span class="token key atrule">service</span><span class="token punctuation">:</span> name=httpd state=restarted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>host部分</code>：使用 hosts 指示使用哪个主机或主机组来运行下面的 tasks ，每个 playbook 都必须指定 hosts ，hosts也<strong>可以使用通配符格式</strong>。主机或主机组在 inventory 清单中指定，可以使用系统默认的<code>/etc/ansible/hosts</code>，也可以自己编辑，在运行的时候加上<code>-i</code>选项，指定清单的位置即可。在运行清单文件的时候，<code>–list-hosts</code>选项会显示那些主机将会参与执行 task 的过程中。</p><p><code>remote_user</code>：指定远端主机中的哪个用户来登录远端系统，在远端系统执行 task 的用户，可以任意指定，也可以使用 sudo，但是用户必须要有执行相应 task 的权限。</p><p><code>tasks</code>：指定远端主机将要执行的一系列动作。tasks 的核心为 ansible 的模块，前面已经提到模块的用法。tasks 包含 <code>name</code> 和<code>要执行的模块</code>，name 是可选的，只是为了便于用户阅读，不过还是建议加上去，模块是必须的，同时也要给予模块相应的参数。</p><p><code>handlers</code>：处理器，tasks 通过 notify 来指定需要执行的处理器。handlers 最佳的应用场景是用来重启服务,或者触发系统重启操作.除此以外很少用到了.</p></blockquote><p>ansible-playbook 运行playbook文件</p><blockquote><p>ansible-playbook mysql.yml</p></blockquote><p>执行有三个步骤：</p><p>1、收集facts</p><p>2、执行tasks</p><p>3、报告结果</p><p><img src="`+u+`" alt=""></p><h3 id="核心元素" tabindex="-1"><a class="header-anchor" href="#核心元素" aria-hidden="true">#</a> 核心元素</h3><p>Playbook的核心元素：</p><blockquote><p><code>Hosts</code>：主机组；</p><p><code>Tasks</code>：任务列表；</p><p><code>Variables</code>：变量，设置方式有四种；</p><p><code>Templates</code>：包含了模板语法的文本文件；</p><p><code>Handlers</code>：由特定条件触发的任务；</p></blockquote><h3 id="基本组件" tabindex="-1"><a class="header-anchor" href="#基本组件" aria-hidden="true">#</a> 基本组件</h3><p>Playbooks配置文件的基础组件：</p><blockquote><p><code>Hosts</code>：运行指定任务的目标主机</p><p><code>remoute_user</code>：在远程主机上执行任务的用户；</p><p><code>sudo_user</code>：</p><p><code>tasks</code>：任务列表</p><blockquote><p>tasks格式</p><p>– name: TASK_NAME</p><p>​ module: arguments</p><p>​ notify: HANDLER_NAME</p></blockquote><blockquote><p>handlers:</p><p>​ – name: HANDLER_NAME</p><p>​ module: arguments</p></blockquote></blockquote><blockquote><p><code>模块，模块参数</code>：</p><blockquote><p>格式： 　　　(1) action: module arguments 　　　(2) module: arguments 　　　注意：shell和command模块后面直接跟命令，而非key=value类的参数列表；</p></blockquote></blockquote><blockquote><p><code>handlers</code>：任务，在特定条件下触发；接收到其它任务的通知时被触发；</p></blockquote><p>(1) 某任务的状态在运行后为changed时，可通过“notify”通知给相应的handlers；</p><p>(2) 任务可以通过“tags“打标签，而后可在ansible-playbook命令上使用-t指定进行调用；</p><h4 id="_1-定义-playbook" tabindex="-1"><a class="header-anchor" href="#_1-定义-playbook" aria-hidden="true">#</a> ① 定义 playbook</h4><p>前提：本机配置好 nginx.conf 模板</p><p><strong>目录结构</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@admin ansible]# tree nginx/
nginx/
├── conf
│   └── nginx.conf
├── conf.d
│   ├── ry.conf
│   └── time.txt
├── html
│   ├── 404.html
│   ├── 50x.html
│   ├── dist
│   │   ├── assets
│   │   │   ├── 401.386cda99.js
│   │   │   └── zip.f12aeb4c.svg
│   │   ├── favicon.ico
│   │   └── index.html
│   └── index.html
└── logs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>nginx.conf</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#user nginx;</span>

<span class="token comment">#工作线程数等同cpu数</span>
worker_processes 1; 

error_log /etc/nginx/logs/error.log;
pid /run/nginx.pid;

events <span class="token punctuation">{</span>
    worker_connections 1024;
<span class="token punctuation">}</span>
http <span class="token punctuation">{</span>
    server_tokens off;
    include       mime.types;
    default_type  application/octet<span class="token punctuation">-</span>stream;
    
    log_format  mylog &#39;<span class="token punctuation">{</span><span class="token key atrule">&quot;date_time&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;$year-$month-$day $hour:$minutes:$seconds&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;host&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$server_addr&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;client_ip&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$remote_addr&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;client_id&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$remote_user&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;url&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$request_uri&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;request&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$request&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;referer&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$http_referer&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;request_time&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$request_time&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;status&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$status&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;size&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$body_bytes_sent&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;info&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$http_user_agent&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;x_forwarded_for&quot;<span class="token punctuation">:</span> &quot;$http_x_forwarded_for&quot;&#39;
                      &#39;<span class="token punctuation">}</span>&#39;;
                      
    sendfile        on;
  	<span class="token comment">#tcp_nopush     on;</span>
  	keepalive_timeout  65;
  
  	client_max_body_size 50m;
  	client_body_buffer_size 256k;
  	client_header_timeout 3m;
  	client_body_timeout 3m;
  	proxy_connect_timeout 300s;
  	proxy_read_timeout 300s;
  	proxy_send_timeout 300s;
  	proxy_buffer_size 64k;
  	proxy_buffers 4 32k;
  	proxy_busy_buffers_size 64k;
  	proxy_temp_file_write_size 64k;
  	proxy_ignore_client_abort on;
  	proxy_set_header Host $host;
  	proxy_set_header X<span class="token punctuation">-</span>Forwarder<span class="token punctuation">-</span>For $remote_addr;

    gzip  on;
    
    include /etc/nginx/conf.d/<span class="token important">*.conf;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ry.conf</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    server {
        listen       80;
        server_name  localhost;
        charset utf-8;
        #access_log  logs/host.access.log  main;
        
        location / {
            root   /etc/nginx/html;
            index  index.html index.htm;
        }
        
        error_page 404 /404.html;
        
        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
            root   /etc/nginx/html;
        }
    }
    
#server {
#    listen       80;
#    server_name  www.ry8.cn;
#    charset utf-8;
#    include /etc/nginx/conf.d/time.txt;
#    access_log  /etc/nginx/logs/ry.log  mylog;

#    location / {
#        root  /etc/nginx/html/dist/;
#        index	index.html index.htm;
#        try_files $uri $uri/ /index.html;
#    }
#}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ansible -&gt; hosts</strong></p><blockquote><p>[web]</p><p>192.168.0.[8:10]</p></blockquote><p><strong>playbook</strong></p><p><code>vim /etc/ansible/playbook/i-nginx.yml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> web
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install nginx
      <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=nginx state=present
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> copy config
      <span class="token key atrule">copy</span><span class="token punctuation">:</span> src=/etc/ansible/nginx dest=/etc backup=yes
      <span class="token key atrule">notify</span><span class="token punctuation">:</span> restarted nginx service
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> restartnginx
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> start nginx service
      <span class="token key atrule">service</span><span class="token punctuation">:</span> name=nginx state=started enabled=true
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> startnginx
 
  <span class="token key atrule">handlers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> restarted nginx service
      <span class="token key atrule">service</span><span class="token punctuation">:</span> name=nginx  state=restarted
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> reloaded nginx service
      <span class="token key atrule">service</span><span class="token punctuation">:</span> name=nginx  state=reloaded
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-测试安装-nginx" tabindex="-1"><a class="header-anchor" href="#_2-测试安装-nginx" aria-hidden="true">#</a> ② 测试安装 nginx</h4><p>写完了以后，我们就可以运行了：</p><blockquote><p>ansible-playbook -C i-nginx.yml</p></blockquote><p><img src="`+r+'" alt=""></p><blockquote><p>ansible-playbook i-nginx.yml</p></blockquote><p><img src="'+d+`" alt=""></p><p>看看两台机器的端口是否开启：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin playbook<span class="token punctuation">]</span><span class="token comment"># ansible web -m shell -a &#39;ss -nutlp |grep nginx&#39;</span>
<span class="token number">192.168</span>.0.9 <span class="token operator">|</span> CHANGED <span class="token operator">|</span> <span class="token assign-left variable">rc</span><span class="token operator">=</span><span class="token number">0</span> <span class="token operator">&gt;&gt;</span>
tcp    LISTEN     <span class="token number">0</span>      <span class="token number">128</span>       *:80                    *:*                   users:<span class="token variable"><span class="token punctuation">((</span>&quot;nginx&quot;<span class="token punctuation">,</span>pid<span class="token operator">=</span><span class="token number">17874</span><span class="token punctuation">,</span>fd<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span>&quot;nginx&quot;<span class="token punctuation">,</span>pid<span class="token operator">=</span><span class="token number">17873</span><span class="token punctuation">,</span>fd<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span>&quot;nginx&quot;<span class="token punctuation">,</span>pid<span class="token operator">=</span><span class="token number">17872</span><span class="token punctuation">,</span>fd<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">))</span></span>
tcp    LISTEN     <span class="token number">0</span>      <span class="token number">128</span>    <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:80                 <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:*                   users:<span class="token variable"><span class="token punctuation">((</span>&quot;nginx&quot;<span class="token punctuation">,</span>pid<span class="token operator">=</span><span class="token number">17874</span><span class="token punctuation">,</span>fd<span class="token operator">=</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span>&quot;nginx&quot;<span class="token punctuation">,</span>pid<span class="token operator">=</span><span class="token number">17873</span><span class="token punctuation">,</span>fd<span class="token operator">=</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span>&quot;nginx&quot;<span class="token punctuation">,</span>pid<span class="token operator">=</span><span class="token number">17872</span><span class="token punctuation">,</span>fd<span class="token operator">=</span><span class="token number">7</span><span class="token punctuation">))</span></span>
<span class="token number">192.168</span>.0.8 <span class="token operator">|</span> CHANGED <span class="token operator">|</span> <span class="token assign-left variable">rc</span><span class="token operator">=</span><span class="token number">0</span> <span class="token operator">&gt;&gt;</span>
tcp    LISTEN     <span class="token number">0</span>      <span class="token number">128</span>       *:80                    *:*                   users:<span class="token variable"><span class="token punctuation">((</span>&quot;nginx&quot;<span class="token punctuation">,</span>pid<span class="token operator">=</span><span class="token number">22272</span><span class="token punctuation">,</span>fd<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span>&quot;nginx&quot;<span class="token punctuation">,</span>pid<span class="token operator">=</span><span class="token number">22271</span><span class="token punctuation">,</span>fd<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span>&quot;nginx&quot;<span class="token punctuation">,</span>pid<span class="token operator">=</span><span class="token number">22270</span><span class="token punctuation">,</span>fd<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">))</span></span>
tcp    LISTEN     <span class="token number">0</span>      <span class="token number">128</span>    <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:80                 <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:*                   users:<span class="token variable"><span class="token punctuation">((</span>&quot;nginx&quot;<span class="token punctuation">,</span>pid<span class="token operator">=</span><span class="token number">22272</span><span class="token punctuation">,</span>fd<span class="token operator">=</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span>&quot;nginx&quot;<span class="token punctuation">,</span>pid<span class="token operator">=</span><span class="token number">22271</span><span class="token punctuation">,</span>fd<span class="token operator">=</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span>&quot;nginx&quot;<span class="token punctuation">,</span>pid<span class="token operator">=</span><span class="token number">22270</span><span class="token punctuation">,</span>fd<span class="token operator">=</span><span class="token number">7</span><span class="token punctuation">))</span></span>
<span class="token number">192.168</span>.0.10 <span class="token operator">|</span> CHANGED <span class="token operator">|</span> <span class="token assign-left variable">rc</span><span class="token operator">=</span><span class="token number">0</span> <span class="token operator">&gt;&gt;</span>
tcp    LISTEN     <span class="token number">0</span>      <span class="token number">128</span>       *:80                    *:*                   users:<span class="token variable"><span class="token punctuation">((</span>&quot;nginx&quot;<span class="token punctuation">,</span>pid<span class="token operator">=</span><span class="token number">17842</span><span class="token punctuation">,</span>fd<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span>&quot;nginx&quot;<span class="token punctuation">,</span>pid<span class="token operator">=</span><span class="token number">17841</span><span class="token punctuation">,</span>fd<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span>&quot;nginx&quot;<span class="token punctuation">,</span>pid<span class="token operator">=</span><span class="token number">17840</span><span class="token punctuation">,</span>fd<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">))</span></span>
tcp    LISTEN     <span class="token number">0</span>      <span class="token number">128</span>    <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:80                 <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:*                   users:<span class="token variable"><span class="token punctuation">((</span>&quot;nginx&quot;<span class="token punctuation">,</span>pid<span class="token operator">=</span><span class="token number">17842</span><span class="token punctuation">,</span>fd<span class="token operator">=</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span>&quot;nginx&quot;<span class="token punctuation">,</span>pid<span class="token operator">=</span><span class="token number">17841</span><span class="token punctuation">,</span>fd<span class="token operator">=</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span>&quot;nginx&quot;<span class="token punctuation">,</span>pid<span class="token operator">=</span><span class="token number">17840</span><span class="token punctuation">,</span>fd<span class="token operator">=</span><span class="token number">7</span><span class="token punctuation">))</span></span>
<span class="token punctuation">[</span>root@admin playbook<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-测试-start" tabindex="-1"><a class="header-anchor" href="#_3-测试-start" aria-hidden="true">#</a> ③ 测试 start</h4><p>直接引用标签。但是我们需要先把服务关闭，再来运行剧本并引用标签：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible web <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">&#39;systemctl stop nginx&#39;</span>
ansible-playbook i-nginx.yml <span class="token parameter variable">-t</span> startnginx
ansible web <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">&#39;ss -nutlp |grep nginx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+k+`" alt=""></p><h4 id="_4-测试-restarted" tabindex="-1"><a class="header-anchor" href="#_4-测试-restarted" aria-hidden="true">#</a> ④ 测试 restarted</h4><p>我们还做了一个<code>notify</code>，来测试一下：</p><p>首先，它的触发条件是配置文件被改变，所以我们去把配置文件中的端口改一下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/ansible/nginx/conf.d/ry.conf
	listen       <span class="token number">80</span><span class="token punctuation">;</span>
	
ansible-playbook i-nginx.yml <span class="token parameter variable">-t</span> restartnginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后我们重新加载一下这个剧本：</p><p><img src="`+m+'" alt=""></p><p>发现我们执行的就是 restart 段以及我们定义的<code>notify</code>部分。</p><p>我们来看一看我们的端口号：</p><blockquote><p>ansible web -m shell -a &#39;ss -ntlp | grep nginx&#39;</p></blockquote><p><img src="'+v+`" alt=""></p><p>可以看出，我们的nginx端口已经变成了8080。 　#### ⑤ 测试 reloaded</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> web
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install nginx
      <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=nginx state=present
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> copy config
      <span class="token key atrule">copy</span><span class="token punctuation">:</span> src=/etc/ansible/nginx dest=/etc backup=yes
      <span class="token key atrule">notify</span><span class="token punctuation">:</span> reloaded nginx service
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> reloadednginx
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> start nginx service
      <span class="token key atrule">service</span><span class="token punctuation">:</span> name=nginx state=started enabled=true
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> startnginx
 
  <span class="token key atrule">handlers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> restarted nginx service
      <span class="token key atrule">service</span><span class="token punctuation">:</span> name=nginx  state=restarted
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> reloaded nginx service
      <span class="token key atrule">service</span><span class="token punctuation">:</span> name=nginx  state=reloaded

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/ansible/nginx/conf.d/ry.conf
	listen       <span class="token number">81</span><span class="token punctuation">;</span>
	
ansible-playbook i-nginx.yml <span class="token parameter variable">-t</span> reloadednginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+b+'" alt=""></p><blockquote><p>ansible web -m shell -a &#39;ss -ntlp | grep nginx&#39;</p></blockquote><p><img src="'+g+`" alt=""></p><p>#### ⑥ 卸载 nginx</p><p>vim uni-nginx.yml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> web
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
<span class="token comment">#    - name: stop nginx service</span>
<span class="token comment">#      service: name=nginx state=stopped</span>
<span class="token comment">#      tags: stopnginx</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> uninstall nginx
      <span class="token key atrule">shell</span><span class="token punctuation">:</span> yum remove <span class="token punctuation">-</span>y nginx <span class="token important">&amp;&amp;</span> rm <span class="token punctuation">-</span>rf /etc/nginx <span class="token important">&amp;&amp;</span> ls /usr/sbin/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ansible-playbook uni-nginx.yml</code></p><h3 id="variables-变量" tabindex="-1"><a class="header-anchor" href="#variables-变量" aria-hidden="true">#</a> variables 变量</h3><p>上文中，我们说到了<code>variables</code>是变量，有四种定义方法，现在我们就来说说这四种定义方法：</p><h4 id="_1-facts-可直接调用" tabindex="-1"><a class="header-anchor" href="#_1-facts-可直接调用" aria-hidden="true">#</a> ① facts ：可直接调用</h4><p>上一篇中，我们有说到<code>setup</code>这个模块，这个模块就是通过调用facts组件来实现的。我们这里的<code>variables</code>也可以直接调用<code>facts</code>组件。 　具体的<code>facters</code>我们可以使用<code>setup</code>模块来获取，然后直接放入我们的剧本中调用即可。</p><h4 id="_2-用户自定义变量" tabindex="-1"><a class="header-anchor" href="#_2-用户自定义变量" aria-hidden="true">#</a> ② 用户自定义变量</h4><p>我们也可以直接使用用户自定义变量，想要自定义变量有以下两种方式：</p><blockquote><p>通过命令行传入</p></blockquote><p><code>ansible-playbook</code>命令的命令行中的<code>-e VARS, --extra-vars=VARS</code>，这样就可以直接把自定义的变量传入。</p><blockquote><p>在playbook中定义变量</p></blockquote><p>我们也可以直接在playbook中定义我们的变量：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> web
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">vars</span><span class="token punctuation">:</span>
　　<span class="token punctuation">-</span> <span class="token key atrule">var1</span><span class="token punctuation">:</span> value1
　　<span class="token punctuation">-</span> <span class="token punctuation">-</span> <span class="token key atrule">var2</span><span class="token punctuation">:</span> value2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-定义剧本" tabindex="-1"><a class="header-anchor" href="#_3-定义剧本" aria-hidden="true">#</a> ③ 定义剧本</h4><p>我们就使用全局替换把我们刚刚编辑的文件修改一下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ansible<span class="token punctuation">]</span><span class="token comment"># vim /etc/ansible/playbook/i-nginx.yml</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> web
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install <span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=<span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span> state=present
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> copy config
      <span class="token key atrule">copy</span><span class="token punctuation">:</span> src=/etc/ansible/<span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span> dest=/etc backup=yes
      <span class="token key atrule">notify</span><span class="token punctuation">:</span> restarted <span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span> service
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> restart<span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> start <span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span> service
      <span class="token key atrule">service</span><span class="token punctuation">:</span> name=<span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span> state=started enabled=true
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> start<span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span>
 
  <span class="token key atrule">handlers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> restarted <span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span> service
      <span class="token key atrule">service</span><span class="token punctuation">:</span> name=<span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span>  state=restarted
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> reloaded <span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span> service
      <span class="token key atrule">service</span><span class="token punctuation">:</span> name=<span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span>  state=reloaded
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样一来，我们的剧本就定义完成了。</p><h4 id="_4-拷贝配置文件" tabindex="-1"><a class="header-anchor" href="#_4-拷贝配置文件" aria-hidden="true">#</a> ④ 拷贝配置文件</h4><p>我们想要在被监管的机器上安装什么服务的话，就直接在我们的server端上把该服务的配置文件拷贝到我们的<code>/tmp/</code>目录下。这样我们的剧本才能正常运行。</p><p>我们就以<code>keepalived</code>服务为例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ansible<span class="token punctuation">]</span><span class="token comment"># cp /etc/ansible/keepalived/keepalived.conf /tmp/keepalived.conf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_5-运行剧本-变量由命令行传入" tabindex="-1"><a class="header-anchor" href="#_5-运行剧本-变量由命令行传入" aria-hidden="true">#</a> ⑤ 运行剧本，变量由命令行传入</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ansible<span class="token punctuation">]</span><span class="token comment"># ansible-playbook i-nginx.yml -e rpmname=keepalived</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+h+`" alt=""></p><h4 id="_6-修改剧本-直接定义变量" tabindex="-1"><a class="header-anchor" href="#_6-修改剧本-直接定义变量" aria-hidden="true">#</a> ⑥ 修改剧本，直接定义变量</h4><p>同样的，我们可以直接在剧本中把变量定义好，这样就不需要在通过命令行传入了。以后想要安装不同的服务，直接在剧本里把变量修改一下即可。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ansible<span class="token punctuation">]</span><span class="token comment"># vim /etc/ansible/playbook/i-nginx.yml</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> web
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">vars</span><span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> <span class="token key atrule">rpmname</span><span class="token punctuation">:</span> keepalived
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install <span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=<span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span> state=present
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> copy config
      <span class="token key atrule">copy</span><span class="token punctuation">:</span> src=/etc/ansible/<span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span> dest=/etc backup=yes
      <span class="token key atrule">notify</span><span class="token punctuation">:</span> restarted <span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span> service
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> restart<span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> start <span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span> service
      <span class="token key atrule">service</span><span class="token punctuation">:</span> name=<span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span> state=started enabled=true
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> start<span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span>
 
  <span class="token key atrule">handlers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> restarted <span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span> service
      <span class="token key atrule">service</span><span class="token punctuation">:</span> name=<span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span>  state=restarted
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> reloaded <span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span> service
      <span class="token key atrule">service</span><span class="token punctuation">:</span> name=<span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span>  state=reloaded
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-运行定义过变量的剧本" tabindex="-1"><a class="header-anchor" href="#_7-运行定义过变量的剧本" aria-hidden="true">#</a> ⑦ 运行定义过变量的剧本</h4><p>我们刚刚已经把变量定义在剧本里面了。现在我们来运行一下试试看：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ansible<span class="token punctuation">]</span><span class="token comment"># ansible-playbook i-nginx.yml</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+y+'" alt=""></p><p>发现这样也是可以的</p><h4 id="_8-通过roles传递变量" tabindex="-1"><a class="header-anchor" href="#_8-通过roles传递变量" aria-hidden="true">#</a> ⑧ 通过roles传递变量</h4>',117),j={href:"https://www.cnblogs.com/keerya/p/8004566.html#jump",target:"_blank",rel:"noopener noreferrer"},L=t(`<h4 id="_9-host-inventory" tabindex="-1"><a class="header-anchor" href="#_9-host-inventory" aria-hidden="true">#</a> ⑨ Host Inventory</h4><p>我们也可以直接在主机清单中定义。</p><blockquote><p>向不同的主机传递不同的变量：</p></blockquote><div class="language-ABAP line-numbers-mode" data-ext="ABAP"><pre class="language-ABAP"><code>IP/HOSTNAME varaiable=value var2=value2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>向组中的主机传递相同的变量：</p></blockquote><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">web:vars</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">variable</span><span class="token punctuation">=</span><span class="token value attr-value">value</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="templates-模板" tabindex="-1"><a class="header-anchor" href="#templates-模板" aria-hidden="true">#</a> templates 模板</h3><p>模板是一个文本文件，嵌套有脚本（使用模板编程语言编写）。</p><p><code>Jinja2</code>：Jinja2是python的一种模板语言，以Django的模板语言为原本。 模板支持：</p>`,9),T=n("blockquote",null,[n("p",null,"字符串：使用单引号或双引号；"),n("p",null,"数字：整数，浮点数；"),n("p",null,"列表：[item1, item2, ...]"),n("p",null,"元组：(item1, item2, ...)"),n("p",{"key1:value1,":"","key2:value2,":"","css-module":"."},"字典："),n("p",null,"布尔型：true/false"),n("p",null,"算术运算： +, -, *, /, //, %, **"),n("p",null,"比较操作： ==, !=, >, >=, <, <="),n("p",null,"逻辑运算： and, or, not")],-1),C=t(`<p>通常来说，模板都是通过引用变量来运用的。</p><h4 id="_1-定义模板" tabindex="-1"><a class="header-anchor" href="#_1-定义模板" aria-hidden="true">#</a> ① 定义模板</h4><p>我们直接把之前定义的<code>/tmp/nginx.conf</code>改个名，然后编辑一下，就可以定义成我们的模板文件了：</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>cd <span class="token operator">/</span>templates
vim <span class="token operator">.</span><span class="token operator">/</span>nginx<span class="token regex">/conf/nginx</span><span class="token operator">.</span>conf<span class="token operator">.</span>j2 <span class="token operator">||</span> vim <span class="token operator">.</span><span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token operator">.</span>d<span class="token operator">/</span>ry<span class="token operator">.</span>conf<span class="token operator">.</span>j2
	worker_processes  <span class="token punctuation">{</span><span class="token punctuation">{</span> ansible_processor_vcpus <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	listen       <span class="token punctuation">{</span><span class="token punctuation">{</span> nginxport <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-修改剧本" tabindex="-1"><a class="header-anchor" href="#_2-修改剧本" aria-hidden="true">#</a> ② 修改剧本</h4><p>我们现在需要去修改剧本来定义变量：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ansible<span class="token punctuation">]</span><span class="token comment"># vim /etc/ansible/playbook/i-nginx.yml</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> web
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">vars</span><span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> <span class="token key atrule">rpmname</span><span class="token punctuation">:</span> nginx
      <span class="token key atrule">nginxport</span><span class="token punctuation">:</span> <span class="token number">8888</span>
      <span class="token key atrule">ansible_processor_vcpus</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install <span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=<span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span> state=present
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> copy config
      <span class="token key atrule">copy</span><span class="token punctuation">:</span> src=/etc/ansible/templates/<span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span> dest=/etc backup=yes
      <span class="token key atrule">notify</span><span class="token punctuation">:</span> restarted <span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span> service
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> restart<span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> start <span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span> service
      <span class="token key atrule">service</span><span class="token punctuation">:</span> name=<span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span> state=started enabled=true
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> start<span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span>
 
  <span class="token key atrule">handlers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> restarted <span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span> service
      <span class="token key atrule">service</span><span class="token punctuation">:</span> name=<span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span>  state=restarted
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> reloaded <span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span> service
      <span class="token key atrule">service</span><span class="token punctuation">:</span> name=<span class="token punctuation">{</span><span class="token punctuation">{</span> rpmname <span class="token punctuation">}</span><span class="token punctuation">}</span>  state=reloaded
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-运行剧本" tabindex="-1"><a class="header-anchor" href="#_3-运行剧本" aria-hidden="true">#</a> ③ 运行剧本</h4><p>上面的准备工作完成后，我们就可以去运行剧本了：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible-playbook i-nginx.yml
ansible-playbook i-nginx.yml <span class="token parameter variable">-t</span> restartnginx
ansible web <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">&#39;ss -ntlp | grep nginx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="条件测试" tabindex="-1"><a class="header-anchor" href="#条件测试" aria-hidden="true">#</a> 条件测试</h3><p>when语句：在task中使用，jinja2的语法格式。</p><div class="language-vhdl line-numbers-mode" data-ext="vhdl"><pre class="language-vhdl"><code>tasks<span class="token punctuation">:</span>
  <span class="token operator">-</span> name<span class="token punctuation">:</span> install conf <span class="token keyword">file</span> <span class="token keyword">to</span> centos7
    template<span class="token punctuation">:</span> src<span class="token operator">=</span>files<span class="token operator">/</span>nginx<span class="token punctuation">.</span>conf<span class="token punctuation">.</span>c7<span class="token punctuation">.</span>j2
    <span class="token keyword">when</span><span class="token punctuation">:</span> ansible_distribution_major_version <span class="token operator">=</span><span class="token operator">=</span> <span class="token string">&quot;7&quot;</span>
  <span class="token operator">-</span> name<span class="token punctuation">:</span> install conf <span class="token keyword">file</span> <span class="token keyword">to</span> centos6
    template<span class="token punctuation">:</span> src<span class="token operator">=</span>files<span class="token operator">/</span>nginx<span class="token punctuation">.</span>conf<span class="token punctuation">.</span>c6<span class="token punctuation">.</span>j2
    <span class="token keyword">when</span><span class="token punctuation">:</span> ansible_distribution_major_version <span class="token operator">=</span><span class="token operator">=</span> <span class="token string">&quot;6&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环" tabindex="-1"><a class="header-anchor" href="#循环" aria-hidden="true">#</a> 循环</h3><p>迭代，需要重复执行的任务；</p><p>对迭代项的引用，固定变量名为&quot;item&quot;，而后，要在task中使用with_items给定要迭代的元素列表； 举例如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> unstall web packages
      <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=<span class="token punctuation">{</span><span class="token punctuation">{</span> item <span class="token punctuation">}</span><span class="token punctuation">}</span> state=absent
      <span class="token key atrule">with_items</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> httpd
        <span class="token punctuation">-</span> php
        <span class="token punctuation">-</span> php<span class="token punctuation">-</span>mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字典" tabindex="-1"><a class="header-anchor" href="#字典" aria-hidden="true">#</a> 字典</h3><p>ansible playbook 还支持字典功能。举例如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install some packages
      <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=<span class="token punctuation">{</span><span class="token punctuation">{</span> item <span class="token punctuation">}</span><span class="token punctuation">}</span> state=present
      <span class="token key atrule">with_items</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> nginx
        <span class="token punctuation">-</span> memcached
        <span class="token punctuation">-</span> php<span class="token punctuation">-</span>fpm
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> add some groups
      <span class="token key atrule">group</span><span class="token punctuation">:</span> name=<span class="token punctuation">{</span><span class="token punctuation">{</span> item <span class="token punctuation">}</span><span class="token punctuation">}</span> state=present
      <span class="token key atrule">with_items</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> group11
        <span class="token punctuation">-</span> group12
        <span class="token punctuation">-</span> group13
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> add some users
      <span class="token key atrule">user</span><span class="token punctuation">:</span> name=<span class="token punctuation">{</span><span class="token punctuation">{</span> item.name <span class="token punctuation">}</span><span class="token punctuation">}</span> group=<span class="token punctuation">{</span><span class="token punctuation">{</span> item.group <span class="token punctuation">}</span><span class="token punctuation">}</span> state=present
      <span class="token key atrule">with_items</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;user11&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">group</span><span class="token punctuation">:</span> <span class="token string">&#39;group11&#39;</span> <span class="token punctuation">}</span>
        <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;user12&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">group</span><span class="token punctuation">:</span> <span class="token string">&#39;group12&#39;</span> <span class="token punctuation">}</span>
        <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;user13&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">group</span><span class="token punctuation">:</span> <span class="token string">&#39;group13&#39;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="角色订制-roles-以-nginx-为例" tabindex="-1"><a class="header-anchor" href="#角色订制-roles-以-nginx-为例" aria-hidden="true">#</a> 角色订制 roles 以 nginx 为例</h2><h4 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> ① 简介</h4><p>对于以上所有的方式有个弊端就是无法实现复用假设在同时部署Web、db、ha 时或不同服务器组合不同的应用就需要写多个yml文件。很难实现灵活的调用。</p><p>roles 用于层次性、结构化地组织playbook。roles 能够根据层次型结构自动装载变量文件、tasks以及handlers等。</p><p>要使用roles只需要在playbook中使用include指令即可。简单来讲，roles就是通过分别将变量(vars)、文件(file)、任务(tasks)、模块(modules)及处理器(handlers)放置于单独的目录中，并可以便捷地include它们的一种机制。</p><p>角色一般用于基于主机构建服务的场景中，但也可以是用于构建守护进程等场景中。</p><h4 id="_2-目录说明" tabindex="-1"><a class="header-anchor" href="#_2-目录说明" aria-hidden="true">#</a> ② 目录说明</h4><p><strong>xxx模块下面的每个目录至少应该有一个名为main.yml的文件，其它的文件需要由main.yml进行“包含”调用；</strong></p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code><span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span># tree
.
├── xxx模块
│   ├── default		# 用于设定默认变量；变量的优先级是最低的
│   ├── files		# 存储由 copy 或 script 等模块调用的文件；
│   ├── handlers	# 用于定义各 handler 处理器；
│   ├── meta		# 定义当前角色的特殊设定及其依赖关系；比如 作者信息、角色主要作用等等
│   ├── tasks		# 用于定义各 task;
│   ├── templates	# 模板文本；
│   └── vars		# 用于定义各 variable 变量，变量的优先级非常高
| ......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>tasks目录</strong>：角色需要执行的主任务文件放置在此目录中，默认的主任务文件名为main.yml，当调用角色时，默认会执行main.yml文件中的任务，你也可以将其他需要执行的任务文件通过include的方式包含在tasks/main.yml文件中。</p><p><strong>handlers目录</strong>：当角色需要调用handlers时，默认会在此目录中的main.yml文件中查找对应的handler</p><p><strong>defaults目录</strong>：角色会使用到的变量可以写入到此目录中的main.yml文件中，通常，defaults/main.yml文件中的变量都用于设置默认值，以便在你没有设置对应变量值时，变量有默认的值可以使用，定义在defaults/main.yml文件中的变量的优先级是最低的。</p><p><strong>vars目录</strong>：角色会使用到的变量可以写入到此目录中的main.yml文件中，看到这里你肯定会有疑问，vars/main.yml文件和defaults/main.yml文件的区别在哪里呢？区别就是，defaults/main.yml文件中的变量的优先级是最低的，而vars/main.yml文件中的变量的优先级非常高，如果你只是想提供一个默认的配置，那么你可以把对应的变量定义在defaults/main.yml中，如果你想要确保别人在调用角色时，使用的值就是你指定的值，则可以将变量定义在vars/main.yml中，因为定义在vars/main.yml文件中的变量的优先级非常高，所以其值比较难以覆盖。</p><p><strong>meta目录</strong>：如果你想要赋予这个角色一些元数据，则可以将元数据写入到meta/main.yml文件中，这些元数据用于描述角色的相关属性，比如 作者信息、角色主要作用等等，你也可以在meta/main.yml文件中定义这个角色依赖于哪些其他角色，或者改变角色的默认调用设定，在之后会有一些实际的示例，此处不用纠结。</p><p><strong>templates目录</strong>： 角色相关的模板文件可以放置在此目录中，当使用角色相关的模板时，如果没有指定路径，会默认从此目录中查找对应名称的模板文件。</p><p><strong>files目录</strong>：角色可能会用到的一些其他文件可以放置在此目录中，比如，当你定义nginx角色时，需要配置https，那么相关的证书文件即可放置在此目录中。</p><h4 id="_3-在roles目录下生成对应的目录结构" tabindex="-1"><a class="header-anchor" href="#_3-在roles目录下生成对应的目录结构" aria-hidden="true">#</a> ③ 在<code>roles</code>目录下生成对应的目录结构</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ansible<span class="token punctuation">]</span><span class="token comment"># cd roles/</span>
<span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># ls</span>

<span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># mkdir -pv ./{nginx,mysql,httpd}/{files,templates,vars,tasks,handlers,meta,default}</span>

<span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># touch ./{nginx,mysql,httpd}/{files,templates,vars,tasks,handlers,meta,default}/main.yml</span>

<span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># tree</span>
<span class="token builtin class-name">.</span>
├── httpd
<span class="token operator">|</span>   <span class="token punctuation">..</span>.
└── nginx
    ├── default
    │   └── main.yml
    ├── files
    │   └── main.yml
    ├── handlers
    │   └── main.yml
    ├── meta
    │   └── main.yml
    ├── tasks
    │   └── main.yml
    ├── templates
    │   └── main.yml
    └── vars
        └── main.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>可以使用 ansible-galaxy role init xxx 来实现目录的自动创建，结构跟上面一样</strong></p><h4 id="准备-nginx-conf-j2-配置文件" tabindex="-1"><a class="header-anchor" href="#准备-nginx-conf-j2-配置文件" aria-hidden="true">#</a> 准备 nginx.conf.j2 配置文件</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>
user nginx;

worker_processes <span class="token punctuation">{</span><span class="token punctuation">{</span> ansible_processor_vcpus <span class="token punctuation">}</span><span class="token punctuation">}</span>;

error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

include /usr/share/nginx/modules/<span class="token important">*.conf;</span>

events <span class="token punctuation">{</span>
    worker_connections 1024;
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
    log_format  main  &#39;$remote_addr <span class="token punctuation">-</span> $remote_user <span class="token punctuation">[</span>$time_local<span class="token punctuation">]</span> &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;
                      
                      
    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 4096;

    include             /etc/nginx/mime.types;
    default_type        application/octet<span class="token punctuation">-</span>stream;

    include /etc/nginx/conf.d/<span class="token important">*.conf;</span>

    server <span class="token punctuation">{</span>
        listen       <span class="token punctuation">{</span><span class="token punctuation">{</span> nginxprot <span class="token punctuation">}</span><span class="token punctuation">}</span>;
        listen       <span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token punctuation">{</span> nginxprot <span class="token punctuation">}</span><span class="token punctuation">}</span>;
        server_name  localhost;
        
        root         /usr/share/nginx/html;
        
        location / <span class="token punctuation">{</span>
           root   /usr/share/nginx/html;
           index  index.html index.htm;
        <span class="token punctuation">}</span>
        
        error_page 404 /404.html;
        location = /404.html <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>

        error_page 500 502 503 504 /50x.html;
        location = /50x.html <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-定义-tasks-任务文件" tabindex="-1"><a class="header-anchor" href="#_4-定义-tasks-任务文件" aria-hidden="true">#</a> ④ 定义 tasks 任务文件</h4><p>rpm包下载：</p>`,44),S={href:"http://nginx.org/packages/centos/7/x86_64/RPMS/nginx-1.22.0-1.el7.ngx.x86_64.rpm",target:"_blank",rel:"noopener noreferrer"},H=n("p",null,"chmod -R 777 nginx-1.22.0-1.el7.ngx.x86_64.rpm",-1),D=t(`<p><strong>vim /etc/ansible/roles/nginx/tasks/main.yml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">include</span><span class="token punctuation">:</span> install.yml
<span class="token punctuation">-</span> <span class="token key atrule">include</span><span class="token punctuation">:</span> copy.yml
<span class="token punctuation">-</span> <span class="token key atrule">include</span><span class="token punctuation">:</span> start.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>install.yml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install nginx
  <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=nginx state=present
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>copy.yml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> copy config
  <span class="token key atrule">template</span><span class="token punctuation">:</span> src=/etc/ansible/roles/nginx/templates/nginx.conf.j2 dest=/etc/nginx/nginx.conf mode=0777
  <span class="token comment"># notify: restarted、reloaded 这里对应的触发是 handlers 处理器</span>
  <span class="token key atrule">notify</span><span class="token punctuation">:</span> restarted nginx service
  <span class="token comment"># tags: restartnginx、reloadnginx</span>
  <span class="token key atrule">tags</span><span class="token punctuation">:</span> restartnginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>start.yml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> start nginx service
  <span class="token key atrule">service</span><span class="token punctuation">:</span> name=nginx state=started enabled=true
  <span class="token key atrule">tags</span><span class="token punctuation">:</span> startnginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>stop.yml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> web
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> stop nginx service
      <span class="token key atrule">service</span><span class="token punctuation">:</span> name=nginx state=stopped
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> stopnginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>ansible-playbook ./nginx/tasks/stop.yml</p><p>ansible-playbook nginx.yml -t startnginx</p></blockquote><p><strong>uninstall.yml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> web
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> uninstall nginx
      <span class="token key atrule">shell</span><span class="token punctuation">:</span> yum remove <span class="token punctuation">-</span>y nginx <span class="token important">&amp;&amp;</span> rm <span class="token punctuation">-</span>rf /etc/nginx <span class="token important">&amp;&amp;</span> ls /usr/sbin/nginx <span class="token important">&amp;&amp;</span> ls /etc/nginx
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> uninstallnginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>ansible-playbook ./nginx/tasks/uninstall.yml</p></blockquote><h4 id="_5-放置我们所需要的文件到指定目录" tabindex="-1"><a class="header-anchor" href="#_5-放置我们所需要的文件到指定目录" aria-hidden="true">#</a> ⑤ 放置我们所需要的文件到指定目录</h4><p>因为我们定义的角色已经有了新的组成方式，所以我们需要把文件都放到指定的位置，这样，才能让配置文件找到这些并进行加载。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin nginx<span class="token punctuation">]</span><span class="token comment"># tree</span>
├── default
│   └── main.yml
├── files
│   ├── main.yml
│   └── nginx-1.22.0-1.el7.ngx.x86_64.rpm
├── handlers
│   └── main.yml
├── meta
│   └── main.yml
├── tasks
│   ├── copy.yml
│   ├── install.yml
│   ├── main.yml
│   ├── stop.yml
│   ├── uninstall.yml
│   └── start.yml
├── templates
│   ├── default.conf.j2
│   ├── html
│   │   ├── <span class="token number">404</span>.html
│   │   ├── 50x.html
│   │   └── index.html
│   ├── logs
│   ├── main.yml
│   ├── nginx.conf.j2
│   └── time.txt
└── vars
    └── main.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-定义-vars-变量文件" tabindex="-1"><a class="header-anchor" href="#_6-定义-vars-变量文件" aria-hidden="true">#</a> ⑥ 定义 vars 变量文件</h4><p>我们在模板中定义的变量，也要去配置文件中加上：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin nginx<span class="token punctuation">]</span><span class="token comment"># vim ./vars/main.yml</span>
---
nginxprot: <span class="token number">5120</span>
ansible_processor_vcpus: <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-定义-handlers-文件" tabindex="-1"><a class="header-anchor" href="#_7-定义-handlers-文件" aria-hidden="true">#</a> ⑦ 定义 handlers 文件</h4><p>我们在配置文件中定义了<code>notify</code>，所以我么也需要定义<code>handlers</code>，我们来修改配置文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin nginx<span class="token punctuation">]</span><span class="token comment"># vim ./handlers/main.yml</span>
---
- name: restarted nginx <span class="token function">service</span>
  service: <span class="token assign-left variable">name</span><span class="token operator">=</span>nginx <span class="token assign-left variable">state</span><span class="token operator">=</span>restarted
- name: reloaded nginx <span class="token function">service</span>
  service: <span class="token assign-left variable">name</span><span class="token operator">=</span>nginx <span class="token assign-left variable">state</span><span class="token operator">=</span>reloaded

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-定义-nginx-剧本文件" tabindex="-1"><a class="header-anchor" href="#_8-定义-nginx-剧本文件" aria-hidden="true">#</a> ⑧ 定义 nginx 剧本文件</h4><p>接下来，我们就来定义剧本文件，由于大部分设置我们都单独配置在了roles里面，所以，接下来剧本就只需要写一点点内容即可：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># vim ./nginx.yml</span>
<span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> web
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> nginx

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9-启动服务" tabindex="-1"><a class="header-anchor" href="#_9-启动服务" aria-hidden="true">#</a> ⑨ 启动服务</h4><p>剧本定义完成以后，我们就可以来启动服务了：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># ansible-playbook nginx.yml</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+x+`" alt=""></p><h4 id="_10-启动过后照例查看端口号" tabindex="-1"><a class="header-anchor" href="#_10-启动过后照例查看端口号" aria-hidden="true">#</a> ⑩ 启动过后照例查看端口号：</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># ansible web -m shell -a &quot;ss -ntulp |grep 5120&quot;</span>

<span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># ansible web -m shell -a &quot;ss -ntulp |grep nginx&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+_+`" alt=""></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># ansible web -m shell -a &#39;curl http://127.0.0.1:5120/&#39;</span>

<span class="token punctuation">[</span>WARNING<span class="token punctuation">]</span>: Consider using the get_url or uri module rather than running <span class="token string">&#39;curl&#39;</span><span class="token builtin class-name">.</span>  If you need to use <span class="token builtin class-name">command</span> because
get_url or uri is insufficient you can <span class="token function">add</span> <span class="token string">&#39;warn: false&#39;</span> to this <span class="token builtin class-name">command</span> task or <span class="token builtin class-name">set</span> <span class="token string">&#39;command_warnings=False&#39;</span> <span class="token keyword">in</span>
ansible.cfg to get rid of this message.

<span class="token number">192.168</span>.0.8 <span class="token operator">|</span> CHANGED <span class="token operator">|</span> <span class="token assign-left variable">rc</span><span class="token operator">=</span><span class="token number">0</span> <span class="token operator">&gt;&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span>DOCTYPE HTML PUBLIC <span class="token string">&quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Welcome to CentOS<span class="token operator">&lt;</span>/title<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>style <span class="token assign-left variable">rel</span><span class="token operator">=</span><span class="token string">&quot;stylesheet&quot;</span> <span class="token assign-left variable">type</span><span class="token operator">=</span><span class="token string">&quot;text/css&quot;</span><span class="token operator">&gt;</span>

<span class="token number">192.168</span>.0.10 <span class="token operator">|</span> CHANGED <span class="token operator">|</span> <span class="token assign-left variable">rc</span><span class="token operator">=</span><span class="token number">0</span> <span class="token operator">&gt;&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span>DOCTYPE HTML PUBLIC <span class="token string">&quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Welcome to CentOS<span class="token operator">&lt;</span>/title<span class="token operator">&gt;</span>
  <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_11-测试修改后重新加载配置文件-restartnginx" tabindex="-1"><a class="header-anchor" href="#_11-测试修改后重新加载配置文件-restartnginx" aria-hidden="true">#</a> 11 测试修改后重新加载配置文件 - restartnginx</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin nginx<span class="token punctuation">]</span><span class="token comment"># vim ./vars/main.yml</span>

nginxprot: <span class="token number">5133</span>

<span class="token punctuation">[</span>root@admin nginx<span class="token punctuation">]</span><span class="token comment"># vim ./tasks/copy.yml</span>
- name: copy config
  template: <span class="token assign-left variable">src</span><span class="token operator">=</span>/etc/ansible/roles/nginx/templates/nginx.conf.j2 <span class="token assign-left variable">dest</span><span class="token operator">=</span>/etc/nginx/nginx.conf <span class="token assign-left variable">mode</span><span class="token operator">=</span>0777
  notify: restarted nginx <span class="token function">service</span>
  tags: restartnginx

<span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># ansible-playbook nginx.yml -t restartnginx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+f+`" alt=""></p><h4 id="_12-测试修改后重新加载配置文件-reloadnginx" tabindex="-1"><a class="header-anchor" href="#_12-测试修改后重新加载配置文件-reloadnginx" aria-hidden="true">#</a> 12 测试修改后重新加载配置文件 - reloadnginx</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin nginx<span class="token punctuation">]</span><span class="token comment"># vim ./vars/main.yml</span>

nginxprot: <span class="token number">5166</span>

<span class="token punctuation">[</span>root@admin nginx<span class="token punctuation">]</span><span class="token comment"># vim ./tasks/copy.yml</span>
- name: copy config
  template: <span class="token assign-left variable">src</span><span class="token operator">=</span>/etc/ansible/roles/nginx/templates/nginx.conf.j2 <span class="token assign-left variable">dest</span><span class="token operator">=</span>/etc/nginx/nginx.conf <span class="token assign-left variable">mode</span><span class="token operator">=</span>0777
  notify: reloaded nginx <span class="token function">service</span>
  tags: reloadnginx

<span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># ansible-playbook nginx.yml -t reloadnginx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+q+'" alt=""></p>',40);function I(M,P){const a=c("ExternalLinkIcon");return i(),l("div",null,[o(" more "),A,n("p",null,[n("a",$,[s("ansible 中文指南"),e(a)])]),n("p",null,[n("a",N,[s("本节示例文件 提取码：1234"),e(a)])]),E,n("p",null,[s("具体的，我们下文中说到 roles 的时候再详细说明。这里是"),n("a",j,[s("传送带"),e(a)])]),L,T,C,n("blockquote",null,[n("p",null,[s("wget "),n("a",S,[s("http://nginx.org/packages/centos/7/x86_64/RPMS/nginx-1.22.0-1.el7.ngx.x86_64.rpm"),e(a)])]),H]),D])}const z=p(w,[["render",I],["__file","ansible-playbook.html.vue"]]);export{z as default};
