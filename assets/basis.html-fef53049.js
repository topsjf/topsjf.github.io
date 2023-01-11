import{_ as l,V as i,W as p,a0 as c,X as n,Y as s,Z as e,$ as t,G as o}from"./framework-ed4f969a.js";const r="/assets/true-image-20220830090744821-39666014.png",d="/assets/true-1625452569657-833e64b2-1403-4fb6-9ee3-1e166504ccf0-5d65f964.png",u="/assets/true-image-20211119152904883-a62af16d.png",k="/assets/true-image-20211119152923933-0a728a1d.png",m="/assets/true-image-20211119152942908-0b9d7bba.png",b="/assets/true-1625452728905-e72041a2-cf1b-4b24-a327-7f0c3974a931-e8cfbf57.png",v="/assets/true-1626605698082-bf4351dd-6751-44b7-aaf7-7608c847ea42-0e83a11e.png",h="/assets/true-image-20211119155506746-20363ed0.png",g="/assets/true-image-20211212160128007-b96c229b.png",y="/assets/true-image-20220827152630437-3effd2a5.png",f="/assets/true-image-20211207225032232-3bba15e0.png",_="/assets/true-image-20211207225209670-bf5d087d.png",x="/assets/true-image-20211207225504118-12031911.png",E="/assets/true-image-20211207225722559-14ab1f0f.png",P="/assets/true-image-20211207230129356-334ba033.png",A="/assets/true-image-20211207231251942-978d3211.png",q="/assets/true-image-20211207231314338-8657278e.png",w="/assets/true-image-20211207231849655-a4121ffd.png",R="/assets/true-image-20211208174133284-2ae5eec0.png",S="/assets/true-image-20211208175833308-14204af3.png",N="/assets/true-image-20211208180527896-6d163569.png",T="/assets/true-image-20211208181306441-82c92871.png",D="/assets/true-image-20211208212559503-c73b0cb9.png",I="/assets/true-image-20211208215629869-bcbbe5ba.png",C="/assets/true-image-20211208220838638-2e1ae245.png",O="/assets/components-of-kubernetes-cd7b9b2d.svg",j="/assets/true-image-20211208203943489-deb54355.png",B="/assets/true-image-20211208205239059-d6141b29.png",F="/assets/true-2839691-20220421215548249-23947997-511eeaed.png",M="/assets/true-image-20211208205421842-64437e36.png",V="/assets/true-image-20211208205753063-e288e4ab.png",K="/assets/true-image-20211208205714089-4904c227.png",G={},L=n("h1",null,"一、K8S 基础搭建",-1),z={href:"https://www.kubernetes.org.cn/",target:"_blank",rel:"noopener noreferrer"},$={href:"https://kubernetes.io/zh/docs/home/",target:"_blank",rel:"noopener noreferrer"},U={href:"http://docs.kubernetes.org.cn/",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://feisky.gitbooks.io/kubernetes/content/",target:"_blank",rel:"noopener noreferrer"},H={href:"https://kubernetes.io/releases/",target:"_blank",rel:"noopener noreferrer"},X={href:"https://github.com/kubernetes/kubernetes/tree/master/CHANGELOG",target:"_blank",rel:"noopener noreferrer"},Z=t('<p>配置SSH、配置k8s环境、安装docker、安装k8s、初始化k8s集群（加入节点）、网络插件fiannel、安装ingress负载均衡、配置nfs</p><p><img src="'+r+'" alt=""></p><h2 id="_1-、概念" tabindex="-1"><a class="header-anchor" href="#_1-、概念" aria-hidden="true">#</a> 1）、概念</h2><p><img src="'+d+'" alt=""></p><p><strong>传统部署时代</strong></p><p><strong>虚拟化部署时代</strong></p><p><strong>容器部署时代</strong></p><p>好处：</p><ul><li>敏捷应用程序的创建和部署：与使用 VM 镜像相比，提高了容器镜像创建的简便性和效率。</li><li>持续开发、集成和部署：通过快速简单的回滚(由于镜像不可变性)，提供可靠且频繁的容器镜像构建和部署。</li><li>关注开发与运维的分离：在构建/发布时而不是在部署时创建应用程序容器镜像，从而将应用程序与基础架构分离。</li><li>可观察性不仅可以显示操作系统级别的信息和指标，还可以显示应用程序的运行状况和其他指标信号。</li><li>跨开发、测试和生产的环境一致性：在便携式计算机上与在云中相同地运行。</li><li>云和操作系统分发的可移植性：可在 Ubuntu、RHEL、CoreOS、本地、Google Kubernetes Engine 和其他任何地方运行。</li><li>以应用程序为中心的管理：提高抽象级别，从在虚拟硬件上运行 OS 到使用逻辑资源在 OS 上运行应用程序。</li><li>松散耦合、分布式、弹性、解放的微服务：应用程序被分解成较小的独立部分，并且可以动态部署和管理 - 而不是在一台大型单机上整体运行。</li><li>资源隔离：可预测的应用程序性能。</li><li>资源利用：高效率和高密度</li></ul>',9),J={id:"为什么需要-kubernetes-它能做什么",tabindex:"-1"},W=n("a",{class:"header-anchor",href:"#为什么需要-kubernetes-它能做什么","aria-hidden":"true"},"#",-1),Q={href:"https://v1-18.docs.kubernetes.io/zh/docs/concepts/overview/what-is-kubernetes/#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81-kubernetes-%E5%AE%83%E8%83%BD%E5%81%9A%E4%BB%80%E4%B9%88",target:"_blank",rel:"noopener noreferrer"},nn=t('<h3 id="简介-调度、自动修复、水平伸缩" tabindex="-1"><a class="header-anchor" href="#简介-调度、自动修复、水平伸缩" aria-hidden="true">#</a> 简介：调度、自动修复、水平伸缩</h3><p><img src="'+u+'" alt=""></p><p><img src="'+k+'" alt=""></p><p><img src="'+m+'" alt=""></p><h3 id="组件架构" tabindex="-1"><a class="header-anchor" href="#组件架构" aria-hidden="true">#</a> 组件架构</h3><p><img src="'+b+'" alt=""></p><h4 id="kube-apiserver" tabindex="-1"><a class="header-anchor" href="#kube-apiserver" aria-hidden="true">#</a> kube-apiserver</h4>',7),sn={href:"https://kubernetes.io/zh/docs/reference/glossary/?all=true#term-control-plane",target:"_blank",rel:"noopener noreferrer"},an=n("h4",{id:"etcd",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#etcd","aria-hidden":"true"},"#"),s(" etcd")],-1),en=n("p",null,"etcd 是兼具一致性和高可用性的键值数据库，可以作为保存 Kubernetes 所有集群数据的后台数据库。",-1),tn=n("h4",{id:"kube-scheduler",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#kube-scheduler","aria-hidden":"true"},"#"),s(" kube-scheduler")],-1),ln={href:"https://kubernetes.io/zh/docs/concepts/architecture/nodes/",target:"_blank",rel:"noopener noreferrer"},pn={href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/",target:"_blank",rel:"noopener noreferrer"},cn=n("h4",{id:"kube-controller-manager",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#kube-controller-manager","aria-hidden":"true"},"#"),s(" kube-controller-manager")],-1),on={href:"https://kubernetes.io/zh/docs/concepts/architecture/controller/",target:"_blank",rel:"noopener noreferrer"},rn=n("blockquote",null,[n("p",null,"这些控制器包括:"),n("ul",null,[n("li",null,"节点控制器（Node Controller）: 负责在节点出现故障时进行通知和响应"),n("li",null,"任务控制器（Job controller）: 监测代表一次性任务的 Job 对象，然后创建 Pods 来运行这些任务直至完成"),n("li",null,"端点控制器（Endpoints Controller）: 填充端点(Endpoints)对象(即加入 Service 与 Pod)"),n("li",null,"服务帐户和令牌控制器（Service Account & Token Controllers）: 为新的命名空间创建默认帐户和 API 访问令牌")])],-1),dn=n("h4",{id:"cloud-controller-manager",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cloud-controller-manager","aria-hidden":"true"},"#"),s(" cloud-controller-manager")],-1),un={href:"https://kubernetes.io/zh/docs/reference/glossary/?all=true#term-control-plane",target:"_blank",rel:"noopener noreferrer"},kn=t('<blockquote><p>下面的控制器都包含对云平台驱动的依赖：</p><ul><li>节点控制器（Node Controller）: 用于在节点终止响应后检查云提供商以确定节点是否已被删除</li><li>路由控制器（Route Controller）: 用于在底层云基础架构中设置路由</li><li>服务控制器（Service Controller）: 用于创建、更新和删除云提供商负载均衡器</li></ul></blockquote><h3 id="node-组件" tabindex="-1"><a class="header-anchor" href="#node-组件" aria-hidden="true">#</a> Node 组件</h3><h4 id="kubelet" tabindex="-1"><a class="header-anchor" href="#kubelet" aria-hidden="true">#</a> kubelet</h4><p>一个在集群中每个节点（node）上运行的代理。 它保证容器containers都 运行在 Pod 中。</p><h4 id="kube-proxy" tabindex="-1"><a class="header-anchor" href="#kube-proxy" aria-hidden="true">#</a> kube-proxy</h4><p>是集群中每个节点上运行的网络代理</p><p><img src="'+v+'" alt=""></p><h2 id="_3-、集群安装-环境配置搭建" tabindex="-1"><a class="header-anchor" href="#_3-、集群安装-环境配置搭建" aria-hidden="true">#</a> 3）、集群安装+环境配置搭建</h2><h3 id="kubectl-快捷键-alias" tabindex="-1"><a class="header-anchor" href="#kubectl-快捷键-alias" aria-hidden="true">#</a> kubectl 快捷键（alias）</h3><h4 id="k8s" tabindex="-1"><a class="header-anchor" href="#k8s" aria-hidden="true">#</a> k8s<a name="k8s-alias"></a></h4>',10),mn={href:"https://blog.csdn.net/qq_42476834/article/details/117373828",target:"_blank",rel:"noopener noreferrer"},bn=t(`<p>vim ~/.bashrc</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># .bashrc</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">rm</span><span class="token operator">=</span><span class="token string">&#39;rm -i&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">cp</span><span class="token operator">=</span><span class="token string">&#39;cp -i&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">mv</span><span class="token operator">=</span><span class="token string">&#39;mv -i&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">rmf</span><span class="token operator">=</span><span class="token string">&#39;rm -rf&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">ll</span><span class="token operator">=</span><span class="token string">&#39;ls -l&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">la</span><span class="token operator">=</span><span class="token string">&#39;ls -all&#39;</span>

<span class="token comment"># Source global definitions</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /etc/bashrc <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
	<span class="token builtin class-name">.</span> /etc/bashrc
<span class="token keyword">fi</span>


<span class="token builtin class-name">alias</span> <span class="token assign-left variable">getgroup</span><span class="token operator">=</span><span class="token string">&#39;cat /etc/group&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">getpasswd</span><span class="token operator">=</span><span class="token string">&#39;cat /etc/passwd&#39;</span>

<span class="token builtin class-name">alias</span> <span class="token assign-left variable">stdk</span><span class="token operator">=</span><span class="token string">&#39;systemctl start docker&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">restdk</span><span class="token operator">=</span><span class="token string">&#39;systemctl restart docker&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">stopdk</span><span class="token operator">=</span><span class="token string">&#39;systemctl stop docker&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">enabledk</span><span class="token operator">=</span><span class="token string">&#39;systemctl enable docker&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">disabledk</span><span class="token operator">=</span><span class="token string">&#39;systemctl disable docker&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">statusdk</span><span class="token operator">=</span><span class="token string">&#39;systemctl status kubectl&#39;</span>

<span class="token builtin class-name">alias</span> <span class="token assign-left variable">stk8s</span><span class="token operator">=</span><span class="token string">&#39;systemctl start kubectl&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">restk8s</span><span class="token operator">=</span><span class="token string">&#39;systemctl restart kubectl&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">stopk8s</span><span class="token operator">=</span><span class="token string">&#39;systemctl stop kubectl&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">enablek8s</span><span class="token operator">=</span><span class="token string">&#39;systemctl enable kubectl&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">disablek8s</span><span class="token operator">=</span><span class="token string">&#39;systemctl disable kubectl&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">statusk8s</span><span class="token operator">=</span><span class="token string">&#39;systemctl status kubectl&#39;</span>


<span class="token comment">########k8s############</span>
<span class="token comment">###########k8s-创建与删除</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">k</span><span class="token operator">=</span><span class="token string">&#39;kubectl&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">kaf</span><span class="token operator">=</span><span class="token string">&#39;kubectl apply -f&#39;</span> <span class="token comment">#使用yaml创建apps</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">kdf</span><span class="token operator">=</span><span class="token string">&#39;kubectl delete -f&#39;</span> <span class="token comment">#删除yaml创建apps</span>
<span class="token comment">###########k8s-资源信息</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">kg</span><span class="token operator">=</span><span class="token string">&#39;kubectl get&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">kgnodes</span><span class="token operator">=</span><span class="token string">&#39;kubectl get nodes -o wide&#39;</span> <span class="token comment">#获取node资源信息</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">kgpods</span><span class="token operator">=</span><span class="token string">&#39;kubectl get pods -o wide&#39;</span> <span class="token comment">#获取pods资源信息</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">kgingress</span><span class="token operator">=</span><span class="token string">&#39;kubectl get ingress -owide&#39;</span> <span class="token comment">#获取ingress资源信息</span>
<span class="token comment">###########k8s-名称空间</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">kgns</span><span class="token operator">=</span><span class="token string">&#39;kubectl get ns&#39;</span> <span class="token comment">#获取所有名称空间</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">kgall</span><span class="token operator">=</span><span class="token string">&#39;kubectl get all -o wide&#39;</span> <span class="token comment">#获取所有apps-pod-service</span>
<span class="token comment">###########k8s-svc服务信息</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">kgsvc</span><span class="token operator">=</span><span class="token string">&#39;kubectl get svc&#39;</span>
<span class="token builtin class-name">alias</span> kgsvc-n<span class="token operator">=</span><span class="token string">&#39;kubectl get svc -n $1&#39;</span> <span class="token comment">#自定义名称空间的svc查询</span>
<span class="token builtin class-name">alias</span> kgsvc-k8s<span class="token operator">=</span><span class="token string">&#39;kubectl get svc -n kube-system -o wide&#39;</span> <span class="token comment">#获取k8s服务</span>
<span class="token builtin class-name">alias</span> kgsvc-ing<span class="token operator">=</span><span class="token string">&#39;kubectl get svc -n ingress-nginx -o wide&#39;</span> <span class="token comment">#获取ingress服务</span>
<span class="token comment">###########k8s-pod信息</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">kgpod</span><span class="token operator">=</span><span class="token string">&#39;kubectl get pod --show-labels&#39;</span> <span class="token comment">#查看k8s的pod信息</span>
<span class="token builtin class-name">alias</span> kgpod-show<span class="token operator">=</span><span class="token string">&#39;kubectl get pod --show-labels&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">kgpodw</span><span class="token operator">=</span><span class="token string">&#39;watch kubectl get pod -n kube-system -o wide&#39;</span>	<span class="token comment">#监控k8s-pod的kube-system进度</span>
<span class="token comment">###########k8s-pods信息</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">kgpodsallns</span><span class="token operator">=</span><span class="token string">&#39;kubectl get pods --all-namespaces -o wide&#39;</span> <span class="token comment">#获取pods所有名称空间</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">kgpodsn</span><span class="token operator">=</span><span class="token string">&#39;kubectl get pods -o wide -n $1&#39;</span> <span class="token comment">#查看输入的【kgpodsallns】名称空间信息</span>
<span class="token builtin class-name">alias</span> kgpodsn-k8s<span class="token operator">=</span><span class="token string">&#39;kubectl get pods -n kube-system -o wide&#39;</span> <span class="token comment">#查看名称空间kube-system的信息</span>
<span class="token builtin class-name">alias</span> kgpodsn-ingressnginx<span class="token operator">=</span><span class="token string">&#39;kubectl get pods -n ingress-nginx -o wide&#39;</span> <span class="token comment">#查看名称空间ingress-nginx的信息</span>
<span class="token builtin class-name">alias</span> kgpodsn-node<span class="token operator">=</span><span class="token string">&#39;kubectl get pods -n kube-system -o wide | grep $1&#39;</span> <span class="token comment">#查看node子节点的pod信息</span>
<span class="token comment">###########k8s-describe信息</span>
<span class="token builtin class-name">alias</span> kdesc-node<span class="token operator">=</span><span class="token string">&#39;kubectl describe node $1&#39;</span> <span class="token comment">#传入node主机名称</span>
<span class="token builtin class-name">alias</span> kdesc-pod<span class="token operator">=</span><span class="token string">&#39;kubectl describe pod -n $1&#39;</span> <span class="token comment">#传入名称空间</span>
<span class="token comment">###########k8s-log信息</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">klog</span><span class="token operator">=</span><span class="token string">&#39;kubectl logs -n $1&#39;</span> <span class="token comment">#传入名称空间</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">klog</span><span class="token operator">=</span><span class="token string">&#39;kubectl logs $1&#39;</span> <span class="token comment">#传入svc的名称【tomcat-b8cdc6f6b-7ngdx】</span>
<span class="token comment">###########k8s-系统操作部分</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">ks</span><span class="token operator">=</span><span class="token string">&#39;kubectl set&#39;</span> <span class="token comment">#设置应用资源</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">ke</span><span class="token operator">=</span><span class="token string">&#39;kubectl edit&#39;</span> <span class="token comment">#编辑资源</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">kc</span><span class="token operator">=</span><span class="token string">&#39;kubectl create&#39;</span> <span class="token comment">#创建资源</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">kd</span><span class="token operator">=</span><span class="token string">&#39;kubectl delete&#39;</span> <span class="token comment">#删除</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">krollout</span><span class="token operator">=</span><span class="token string">&#39;kubectl rollout&#39;</span> <span class="token comment">#输出、查看、回滚</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">klabel</span><span class="token operator">=</span><span class="token string">&#39;kubectl label&#39;</span> <span class="token comment">#更新资源对象的label</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">kpatch</span><span class="token operator">=</span><span class="token string">&#39;kubectl patch&#39;</span> <span class="token comment">#更新资源对象字段</span>
<span class="token comment">###########k8s-快捷键提示</span>
<span class="token builtin class-name">source</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span>kubectl completion <span class="token function">bash</span><span class="token punctuation">)</span>

<span class="token comment">########docker############</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkse</span><span class="token operator">=</span><span class="token string">&#39;docker search&#39;</span>      <span class="token comment">#镜像名称</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dklogin</span><span class="token operator">=</span><span class="token string">&#39;docker login&#39;</span>    <span class="token comment">#登录远程镜像仓库</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkpull</span><span class="token operator">=</span><span class="token string">&#39;docker pull&#39;</span>      <span class="token comment">#镜像名称</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkcommit</span><span class="token operator">=</span><span class="token string">&#39;docker commit&#39;</span>  <span class="token comment">#提交容器为镜像         [-a=&#39;作者&#39; -m=&#39;备注&#39; 运行时容器ID 新镜像名称]</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkb</span><span class="token operator">=</span><span class="token string">&#39;docker build&#39;</span>        <span class="token comment">#file文件构建镜像       [-f [DockerFile文件] -t [设置标签]:版本 . ]</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dktag</span><span class="token operator">=</span><span class="token string">&#39;docker tag&#39;</span>        <span class="token comment">#设置镜像为阿里|xx标签  [容器ID [设置标签]:version]</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkpush</span><span class="token operator">=</span><span class="token string">&#39;docker push&#39;</span>      <span class="token comment">#镜像提交到仓库         [输入设置好的标签:verison]</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dki</span><span class="token operator">=</span><span class="token string">&#39;docker images&#39;</span>       <span class="token comment">#镜像名称or镜像Id</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkrmi</span><span class="token operator">=</span><span class="token string">&#39;docker rmi&#39;</span>        <span class="token comment">#镜像名称or镜像Id</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkrmif</span><span class="token operator">=</span><span class="token string">&#39;docker rmi -f&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkrmia</span><span class="token operator">=</span><span class="token string">&#39;docker rmi \\$(docker images -q)&#39;</span> <span class="token comment">#自动删除没有启动的镜像</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkps</span><span class="token operator">=</span><span class="token string">&#39;docker ps&#39;</span>  <span class="token comment">#在运行的容器</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkpsa</span><span class="token operator">=</span><span class="token string">&#39;docker ps -a&#39;</span>      <span class="token comment">#全部容器</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkstart</span><span class="token operator">=</span><span class="token string">&#39;docker start&#39;</span>    <span class="token comment">#容器名称or容器Id</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkrestart</span><span class="token operator">=</span><span class="token string">&#39;docker restart&#39;</span>  <span class="token comment">#容器名称or容器Id</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkstop</span><span class="token operator">=</span><span class="token string">&#39;docker stop&#39;</span>      <span class="token comment">#stop 容器名称or容器Id</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkkill</span><span class="token operator">=</span><span class="token string">&#39;docker kill&#39;</span>      <span class="token comment">#docker kill 容器ID or 容器名</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkrm</span><span class="token operator">=</span><span class="token string">&#39;docker rm&#39;</span>  <span class="token comment">#docker rm 容器id</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkrmf</span><span class="token operator">=</span><span class="token string">&#39;docker rm -f&#39;</span>      <span class="token comment">#容器ID1  容器ID2 中间空格隔开</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkrma</span><span class="token operator">=</span><span class="token string">&#39;docker rm \\$(docker ps -a -q)&#39;</span>      <span class="token comment">#自动删除所有停止的容器</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkcp</span><span class="token operator">=</span><span class="token string">&#39;docker cp&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dklogs</span><span class="token operator">=</span><span class="token string">&#39;docker logs&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部署步骤" tabindex="-1"><a class="header-anchor" href="#部署步骤" aria-hidden="true">#</a> 部署步骤</h3><div class="language-ABAP line-numbers-mode" data-ext="ABAP"><pre class="language-ABAP"><code>1.在所有节点上安装 Docker和 kubeadm
2.部署 Kubernetes Master
3.部署容器网络插件
4.部署 Kubernetes Node，将节点加入 Kubernetes集群中
5.部署可视化管理 Kubernetes 资源
6.部署程序
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+h+'" alt=""></p><h3 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h3><h4 id="vmware" tabindex="-1"><a class="header-anchor" href="#vmware" aria-hidden="true">#</a> VMware</h4><h4 id="创建虚拟机" tabindex="-1"><a class="header-anchor" href="#创建虚拟机" aria-hidden="true">#</a> 创建虚拟机</h4><p><img src="'+g+`" alt=""></p><p>安装 net-tools 工具</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> net-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>本机添加hosts：C:\\Windows\\System32\\drivers\\etc</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>192.168.100.130 tomcat.k8s.com
192.168.100.130 nginx.k8s.com
# k8s-可视化管理工具-KubeSphere
192.168.100.130 ks.k8s.com
# k8s-可视化管理工具-KubeOperator
192.168.100.130 ko.k8s.com
192.168.100.130 master
192.168.100.131 node1
192.168.100.132 node2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在每个节点上添加 vim /etc/hosts</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6

192.168.100.130 master
192.168.100.131 node1
192.168.100.132 node2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>systemctl restart network.service //重启网络服务，</p><p>ping -c 3 master-120 &amp;&amp; ping -c 3 node-121 &amp;&amp; ping -c 3 node-122 &amp;&amp; ping -c 3 node-123</p></blockquote><p>用户：a，密码：123456a， 设置主机名称： hostnamectl set-hostname</p><h4 id="开启-ssh-远程登录" tabindex="-1"><a class="header-anchor" href="#开启-ssh-远程登录" aria-hidden="true">#</a> 开启 ssh 远程登录<a name="ssh"></a></h4>`,18),vn={href:"https://blog.csdn.net/qq_42476834/article/details/124766896",target:"_blank",rel:"noopener noreferrer"},hn=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/#PermitRootLogin yes/PermitRootLogin yes/g&#39;</span> /etc/ssh/sshd_config
登录master、node1、node2、node3
ssh-keygen <span class="token parameter variable">-t</span> rsa	（ssh-keygen这里一路回车就行）
    
ssh-copy-id <span class="token parameter variable">-i</span> ~/.ssh/id_rsa.pub root@192.168.100.130 <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
ssh-copy-id <span class="token parameter variable">-i</span> ~/.ssh/id_rsa.pub root@192.168.100.131 <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
ssh-copy-id <span class="token parameter variable">-i</span> ~/.ssh/id_rsa.pub root@192.168.100.132 <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
ssh-copy-id <span class="token parameter variable">-i</span> ~/.ssh/id_rsa.pub a@192.168.100.130 <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
ssh-copy-id <span class="token parameter variable">-i</span> ~/.ssh/id_rsa.pub a@192.168.100.131 <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
ssh-copy-id <span class="token parameter variable">-i</span> ~/.ssh/id_rsa.pub a@192.168.100.132

免密登录测试
<span class="token function">ssh</span> <span class="token number">192.168</span>.100.130
<span class="token function">ssh</span> <span class="token number">192.168</span>.100.131
<span class="token function">ssh</span> <span class="token number">192.168</span>.100.132
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),gn={href:"http://k8s-init.sh",target:"_blank",rel:"noopener noreferrer"},yn={href:"http://k8s-docker.sh",target:"_blank",rel:"noopener noreferrer"},fn={href:"http://k8s-install.sh",target:"_blank",rel:"noopener noreferrer"},_n=t(`<h4 id="开启ipvs支持" tabindex="-1"><a class="header-anchor" href="#开启ipvs支持" aria-hidden="true">#</a> 开启IPVS支持</h4><p>vim /etc/sysconfig/modules/ipvs.modules</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token parameter variable">-s</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/sysconfig/modules/ipvs.modules</span>
#!/bin/bash
ipvs_modules=&quot;ip_vs ip_vs_lc ip_vs_wlc ip_vs_rr ip_vs_wrr ip_vs_lblc ip_vs_lblcr ip_vs_dh ip_vs_sh ip_vs_fo ip_vs_nq ip_vs_sed ip_vs_ftp nf_conntrack&quot;
for kernel_module in <span class="token variable">\${ipvs_modules}</span>; do
  /sbin/modinfo -F filename <span class="token variable">\${kernel_module}</span> &gt; /dev/null 2&gt;&amp;1
  if [ <span class="token variable">$?</span> -eq 0 ]; then
    /sbin/modprobe <span class="token variable">\${kernel_module}</span>
  fi
done
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>chmod 755 /etc/sysconfig/modules/ipvs.modules</p><p>sh /etc/sysconfig/modules/ipvs.modules</p><p>lsmod | grep ip_vs</p></blockquote><h4 id="将桥接的ipv4流量传递到iptables的链" tabindex="-1"><a class="header-anchor" href="#将桥接的ipv4流量传递到iptables的链" aria-hidden="true">#</a> 将桥接的IPv4流量传递到iptables的链</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token parameter variable">-s</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/modules-load.d/k8s.conf</span>
br_netfilter
EOF</span>

<span class="token comment"># cat /usr/lib/sysctl.d/00-system.conf 与之相同</span>
<span class="token function">cat</span> <span class="token parameter variable">-s</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/sysctl.d/k8s.conf</span>
# For binary values, 0 is disabled, 1 is enabled
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward = 1
vm.swappiness=0
EOF</span>

<span class="token function">cat</span> <span class="token parameter variable">-s</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/sysctl.d/k8s.conf</span>
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward = 1
vm.swappiness=0
EOF</span>

modprobe br_netfilter
<span class="token function">sysctl</span> <span class="token parameter variable">-p</span> /etc/sysctl.d/k8s.conf
<span class="token function">sysctl</span> <span class="token parameter variable">--system</span>

<span class="token comment">#修改/etc/sysctl.d/10-network-security.conf</span>
<span class="token comment">#与 /usr/lib/sysctl.d/50-default.conf 类似</span>
<span class="token function">cat</span> <span class="token parameter variable">-s</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/sysctl.d/10-network-security.conf</span>
net.ipv4.conf.default.rp_filter=1
net.ipv4.conf.all.rp_filter=1
EOF</span>
<span class="token comment">#然后使之生效</span>
<span class="token function">sysctl</span> <span class="token parameter variable">--system</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="时间同步" tabindex="-1"><a class="header-anchor" href="#时间同步" aria-hidden="true">#</a> 时间同步</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  yum <span class="token function">install</span> <span class="token parameter variable">-y</span> chrony
  systemctl <span class="token builtin class-name">enable</span> chronyd
  systemctl start chronyd
  timedatectl set-ntp <span class="token boolean">true</span>
设置时区：timedatectl set-timezone Asia/Shanghai
timedatectl status
检查 ntp-server 是否可用：chronyc activity <span class="token parameter variable">-v</span>
---------------------------------------
  yum <span class="token parameter variable">-y</span> <span class="token function">install</span> ntpdate <span class="token operator">&amp;&amp;</span> yum <span class="token function">install</span> ntpsec-ntpdate
  ntpdate time.windows.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="a、在所有节点上安装-docker和-kubeadm、kubelet、kubectl" tabindex="-1"><a class="header-anchor" href="#a、在所有节点上安装-docker和-kubeadm、kubelet、kubectl" aria-hidden="true">#</a> A、在所有节点上安装 Docker和 kubeadm、kubelet、kubectl</h3><h4 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h4>`,10),xn={href:"https://kubernetes.io/zh/docs/tasks/tools/",target:"_blank",rel:"noopener noreferrer"},En={href:"https://docs.docker.com/engine/install/centos/",target:"_blank",rel:"noopener noreferrer"},Pn=n("h4",{id:"_1、安装docker",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1、安装docker","aria-hidden":"true"},"#"),s(" 1、安装docker")],-1),An={href:"https://docs.docker.com/engine/install/centos/",target:"_blank",rel:"noopener noreferrer"},qn=t(`<p>卸载的旧版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  yum remove <span class="token function">docker</span> docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>华为安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>、若您安装过docker，需要先删掉，之后再安装依赖:
  yum remove <span class="token function">docker</span> docker-common docker-selinux docker-engine
  yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2
<span class="token number">2</span>、下载repo文件
  <span class="token function">wget</span> <span class="token parameter variable">-O</span> /etc/yum.repos.d/docker-ce.repo https://repo.huaweicloud.com/docker-ce/linux/centos/docker-ce.repo
替换为：
  <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s+download.docker.com+repo.huaweicloud.com/docker-ce+&#39;</span> /etc/yum.repos.d/docker-ce.repo
<span class="token number">3</span>、更新索引文件并安装
  yum clean all <span class="token operator">&amp;&amp;</span>   yum makecache fast
yum list docker-ce.x86_64 <span class="token parameter variable">--showduplicates</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-r</span>
  yum <span class="token function">install</span> <span class="token parameter variable">-y</span> docker-ce
<span class="token number">4</span>、开启Docker服务
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>阿里安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># step 1: 安装必要的一些系统工具</span>
  yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2
<span class="token comment"># Step 2: 添加软件源信息</span>
  yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
<span class="token comment"># Step 3</span>
  <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s+download.docker.com+mirrors.aliyun.com/docker-ce+&#39;</span> /etc/yum.repos.d/docker-ce.repo
<span class="token comment"># Step 4: 更新并安装Docker-CE</span>
  yum clean all <span class="token operator">&amp;&amp;</span>   yum makecache fast
yum list docker-ce.x86_64 <span class="token parameter variable">--showduplicates</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-r</span>
  yum <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce-<span class="token punctuation">[</span>VERSION<span class="token punctuation">]</span>
<span class="token comment"># Step 4: 开启Docker服务</span>
  <span class="token function">service</span> <span class="token function">docker</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>systemctl docker</code></p><p><code>systemctl restart docker</code></p><p><code>systemctl stop docker</code></p><p><code>systemctl enable docker</code></p><p><code>systemctl disable docker</code></p><p><code>systemctl status docker</code></p><p><code>usermod -aG docker a</code> #非root用户</p><p>设置加速</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token parameter variable">-su</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/docker/daemon.json</span>
{
  &quot;exec-opts&quot;: [&quot;native.cgroupdriver=systemd&quot;],
  &quot;log-driver&quot;: &quot;json-file&quot;,
  &quot;log-opts&quot;: {
    &quot;max-size&quot;: &quot;100m&quot;
  },
  &quot;storage-driver&quot;: &quot;overlay2&quot;,
  &quot;registry-mirrors&quot;: [
    &quot;https://04eo9xup.mirror.aliyuncs.com&quot;,
    &quot;https://098cc8006500f4db0f2fc01937bbce40.mirror.swr.myhuaweicloud.com&quot;
  ],
}
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  systemctl daemon-reload
  systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>docker配置http代理（可选）</strong></p><p>首先, 使用<code>systemctl status docker</code>命令查询<code>docker.service</code>文件的路径, 在我的环境中它的文件路径是<code>/lib/systemd/system/docker.service</code>; 然后编辑这个文件, 添加如下内容:</p><p>vim /lib/systemd/system/docker.service</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Environment</span><span class="token operator">=</span><span class="token string">&quot;HTTP_PROXY=http://127.0.0.1:10809&quot;</span>
<span class="token assign-left variable">Environment</span><span class="token operator">=</span><span class="token string">&quot;HTTPS_PROXY=http://127.0.0.1:10809&quot;</span> 
<span class="token assign-left variable">Environment</span><span class="token operator">=</span><span class="token string">&quot;NO_PROXY=localhost,127.0.0.0/8,192.168.0.0/16,10.0.0.0/8&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><hr><h4 id="_2、添加-阿里kubernetes-仓库源-推荐" tabindex="-1"><a class="header-anchor" href="#_2、添加-阿里kubernetes-仓库源-推荐" aria-hidden="true">#</a> 2、添加 阿里kubernetes 仓库源（推荐）</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token parameter variable">-s</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/yum.repos.d/kubernetes.repo</span>
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/
enabled=1
gpgcheck=1
repo_gpgcheck=0
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、添加-华为kubernetes-仓库源-仓库维护太慢了" tabindex="-1"><a class="header-anchor" href="#_3、添加-华为kubernetes-仓库源-仓库维护太慢了" aria-hidden="true">#</a> 3、添加 华为kubernetes 仓库源（仓库维护太慢了）</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token parameter variable">-s</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/yum.repos.d/kubernetes.repo</span>
[kubernetes]
name=Kubernetes
baseurl=https://repo.huaweicloud.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=1
repo_gpgcheck=0
gpgkey=https://repo.huaweicloud.com/kubernetes/yum/doc/yum-key.gpg https://repo.huaweicloud.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、更新索引文件并安装-kubernetes" tabindex="-1"><a class="header-anchor" href="#_4、更新索引文件并安装-kubernetes" aria-hidden="true">#</a> 4、更新索引文件并安装 <strong>kubernetes</strong></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum clean all <span class="token operator">&amp;&amp;</span> yum makecache <span class="token operator">&amp;&amp;</span> yum <span class="token parameter variable">-y</span> update <span class="token operator">&amp;&amp;</span> yum repolist all
yum list kubelet	yum list kube*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>failure: repodata/repomd.xml from kubernetes: [Errno 256] No more mirrors to try.</code></p><p>暂时禁用存储库：<code>yum --disablerepo=kubernetes</code></p><p>永久禁用存储库：<code>yum-config-manager --disable kubernetes or subscription-manager repos --disable=kubernetes</code></p><p>如果不可用，则跳过：<code>yum-config-manager --save --setopt=kubernetes.skip_if_unavailable=true</code></p><h4 id="_5、master-安装" tabindex="-1"><a class="header-anchor" href="#_5、master-安装" aria-hidden="true">#</a> 5、master 安装</h4><p><strong>升级0，新安装0，降级3，删除0，未升级25</strong></p><div class="language-ABAP line-numbers-mode" data-ext="ABAP"><pre class="language-ABAP"><code>apt-get install -y kubeadm=1.23.8-0 kubelet=1.23.8-0 kubectl=1.23.8-0

yum install kubeadm-1.23.8-0 kubelet-1.23.8-0 kubectl-1.23.8-0
yum install --nogpgcheck kubelet-1.23.8-0 kubeadm-1.23.8-0 kubectl-1.23.8-0
华为：yum install kubeadm-1.23.8-0 kubelet-1.23.8-0 kubectl-1.23.8-0 --disableexcludes=kubernetes
阿里：yum install kubeadm-1.23.8-0 kubelet-1.23.8-0 kubectl-1.23.8-0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5、node-节点安装" tabindex="-1"><a class="header-anchor" href="#_5、node-节点安装" aria-hidden="true">#</a> 5、node 节点安装</h4><blockquote><p>yum install kubeadm-1.23.8-0 kubelet-1.23.8-0 kubectl-1.23.8-0</p></blockquote><h4 id="_6、创建k8s软连接" tabindex="-1"><a class="header-anchor" href="#_6、创建k8s软连接" aria-hidden="true">#</a> 6、创建k8s软连接</h4><p>执行：<code>ln -s /usr/bin/kube* /usr/local/bin/</code></p><h4 id="启动-k8s" tabindex="-1"><a class="header-anchor" href="#启动-k8s" aria-hidden="true">#</a> 启动 k8s</h4><blockquote><p>systemctl enable kubelet systemctl disable kubelet</p><p>systemctl start kubelet systemctl stop kubelet</p><p>systemctl status kubelet</p><p>发现：<code>kubelet.service - kubelet: The Kubernetes Node Agent</code>，属于正常，k8s还没有配置</p></blockquote>`,41),wn={href:"https://kubernetes.io/releases/",target:"_blank",rel:"noopener noreferrer"},Rn={href:"https://github.com/kubernetes/kubernetes/tree/master/CHANGELOG",target:"_blank",rel:"noopener noreferrer"},Sn=n("h3",{id:"b、master-部署-kubernetes",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#b、master-部署-kubernetes","aria-hidden":"true"},"#"),s(" B、Master 部署 Kubernetes")],-1),Nn={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},Tn={href:"https://hub.docker.com/u/aiotceo",target:"_blank",rel:"noopener noreferrer"},Dn={href:"https://hub.docker.com/u/mirrorgooglecontainers",target:"_blank",rel:"noopener noreferrer"},In={href:"http://swr.myhuaweicloud.com/iivey",target:"_blank",rel:"noopener noreferrer"},Cn={href:"http://registry.cn-chengdu.aliyuncs.com/k8sjf",target:"_blank",rel:"noopener noreferrer"},On={href:"http://registry.aliyuncs.com/google_containers",target:"_blank",rel:"noopener noreferrer"},jn=t(`<h4 id="设置k8s镜像仓库源" tabindex="-1"><a class="header-anchor" href="#设置k8s镜像仓库源" aria-hidden="true">#</a> 设置k8s镜像仓库源</h4><div class="language-ABAP line-numbers-mode" data-ext="ABAP"><pre class="language-ABAP"><code>#查看安装k8s的相关信息
kubeadm config print init-defaults
#查询需要的镜像
kubeadm config images list
------------------
#设置k8s镜像仓库为，如果不确定，可以设置为 registry.aliyuncs.com/google_containers
kubeadm config images list --kubernetes-version=v1.23.8 --image-repository registry.cn-chengdu.aliyuncs.com/k8sjf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所需镜像版本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>------------官方需要
kube-apiserver:v1.23.8
kube-controller-manager:v1.23.8
kube-scheduler:v1.23.8
kube-proxy:v1.23.8
pause:3.6
etcd:3.5.1-0
coredns:v1.8.6
------------其他需要
flannel:v0.19.0
flannelcni-flannel-cni-plugin:v1.1.0
nginx-ingress-controller:v1.3.0
kube-webhook-certgen:v1.1.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> login <span class="token parameter variable">--username</span><span class="token operator">=</span>小牛 registry.cn-chengdu.aliyuncs.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="master-kubeadm-初始化" tabindex="-1"><a class="header-anchor" href="#master-kubeadm-初始化" aria-hidden="true">#</a> master -&gt; kubeadm 初始化<a name="kubeadm init"></a></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubeadm init <span class="token punctuation">\\</span>
--apiserver-advertise-address<span class="token operator">=</span><span class="token number">192.168</span>.100.130 <span class="token punctuation">\\</span>
--control-plane-endpoint<span class="token operator">=</span><span class="token number">192.168</span>.100.130 <span class="token punctuation">\\</span>
--image-repository registry.cn-chengdu.aliyuncs.com/k8sjf <span class="token punctuation">\\</span>
--kubernetes-version v1.23.8 <span class="token punctuation">\\</span>
--service-cidr<span class="token operator">=</span><span class="token number">10.96</span>.0.0/16 <span class="token punctuation">\\</span>
--pod-network-cidr<span class="token operator">=</span><span class="token number">10.244</span>.0.0/16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="得到-kubeadm-join" tabindex="-1"><a class="header-anchor" href="#得到-kubeadm-join" aria-hidden="true">#</a> 得到 kubeadm join</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>您的Kubernetes控制平面已成功初始化！
要开始使用群集，您需要以普通用户身份运行以下命令：
    <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token environment constant">$HOME</span>/.kube
    <span class="token function">sudo</span> <span class="token function">cp</span> <span class="token parameter variable">-i</span> /etc/kubernetes/admin.conf <span class="token environment constant">$HOME</span>/.kube/config
    <span class="token function">sudo</span> <span class="token function">chown</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span><span class="token builtin class-name">:</span><span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-g</span><span class="token variable">)</span></span> <span class="token environment constant">$HOME</span>/.kube/config

或者，如果您是root用户，则可以运行：
  <span class="token builtin class-name">export</span> <span class="token assign-left variable">KUBECONFIG</span><span class="token operator">=</span>/etc/kubernetes/admin.conf
  
您现在应该在集群上部署一个pod网络。
使用下列选项之一运行“kubectl apply-f<span class="token punctuation">[</span>podnetwork<span class="token punctuation">]</span>.yaml”：
https://kubernetes.io/docs/concepts/cluster-administration/addons/

<span class="token comment">##### master</span>
现在，您可以通过复制证书颁发机构来加入任意数量的控制平面节点
和每个节点上的服务帐户密钥，然后以root用户身份运行以下操作：
kubeadm <span class="token function">join</span> <span class="token number">192.168</span>.100.130:6443 <span class="token parameter variable">--token</span> wmgb01.rwvu0csqrn5ayt1k <span class="token punctuation">\\</span>
        --discovery-token-ca-cert-hash sha256:e542e830faf3e7e5ed7449989279c288800600260f327a7fd42627bc27f39bb0 <span class="token punctuation">\\</span>
        --control-plane

然后，在每个节点上以root身份运行以下操作，可以加入任意数量的工作节点：
<span class="token comment">###### node</span>
<span class="token function">su</span> root
kubeadm <span class="token function">join</span> <span class="token number">192.168</span>.100.130:6443 <span class="token parameter variable">--token</span> wmgb01.rwvu0csqrn5ayt1k <span class="token punctuation">\\</span>
        --discovery-token-ca-cert-hash sha256:e542e830faf3e7e5ed7449989279c288800600260f327a7fd42627bc27f39bb0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="kubectl-命令的自动补全功能-所有的节点" tabindex="-1"><a class="header-anchor" href="#kubectl-命令的自动补全功能-所有的节点" aria-hidden="true">#</a> kubectl 命令的自动补全功能（所有的节点）</h4><blockquote><p>echo &quot;source &lt;(kubectl completion bash)&quot; &gt;&gt; ~/.bashrc</p></blockquote><h4 id="重启后出现-the-connection-to-the-server-localhost-8080-was-refused-did-you-specify-the-right-host-or-port" tabindex="-1"><a class="header-anchor" href="#重启后出现-the-connection-to-the-server-localhost-8080-was-refused-did-you-specify-the-right-host-or-port" aria-hidden="true">#</a> 重启后出现：<code>The connection to the server localhost:8080 was refused - did you specify the right host or port?</code></h4>`,12),Bn={href:"https://blog.csdn.net/qq_42476834/article/details/124730955",target:"_blank",rel:"noopener noreferrer"},Fn=n("p",null,[n("a",{href:"#ssh"},"ssh免密登录访问")],-1),Mn=t(`<h4 id="将主节点-master-中的-etc-kubernetes-admin-conf-文件拷贝到从节点-node-相同目录下" tabindex="-1"><a class="header-anchor" href="#将主节点-master-中的-etc-kubernetes-admin-conf-文件拷贝到从节点-node-相同目录下" aria-hidden="true">#</a> 将主节点（master）中的“/etc/kubernetes/admin.conf”文件拷贝到从节点（node）相同目录下</h4><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>scp /etc/kubernetes/admin.conf root@192.168.100.131:/etc/kubernetes/ &amp;&amp; \\
scp /etc/kubernetes/admin.conf root@192.168.100.132:/etc/kubernetes/

echo &quot;export KUBECONFIG=/etc/kubernetes/admin.conf&quot; &gt;&gt; ~/.bash_profile
scp ~/.bash_profile root@192.168.100.131:/root/ &amp;&amp; \\
scp ~/.bash_profile root@192.168.100.132:/root/

source ~/.bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h4 id="解决端口占用-kubeadm-reset" tabindex="-1"><a class="header-anchor" href="#解决端口占用-kubeadm-reset" aria-hidden="true">#</a> 解决端口占用：kubeadm reset</h4><h3 id="c、将从节点-node-加入-kubernetes-master-集群中" tabindex="-1"><a class="header-anchor" href="#c、将从节点-node-加入-kubernetes-master-集群中" aria-hidden="true">#</a> C、将从节点（node）加入 Kubernetes （Master）集群中</h3><p>su root 在每个根节点上运行以下操作：</p><p>[查看 kubeadm init](#kubeadm init)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">su</span> root
kubeadm <span class="token function">join</span> <span class="token number">192.168</span>.100.130:6443 <span class="token parameter variable">--token</span> wmgb01.rwvu0csqrn5ayt1k <span class="token punctuation">\\</span>
        --discovery-token-ca-cert-hash sha256:e542e830faf3e7e5ed7449989279c288800600260f327a7fd42627bc27f39bb0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@node-121 ~<span class="token punctuation">]</span><span class="token comment"># kubeadm join 192.168.100.130:6443 --token 971p07.4h9ljb93kcm471bd --discovery-token-ca-cert-hash sha256:2f02b1e11049f9cbe3784ed6a78f1f7f4fc794d421eabe642335bc55393ea61b</span>

<span class="token punctuation">[</span>preflight<span class="token punctuation">]</span> 进行飞行前检查
<span class="token punctuation">[</span>preflight<span class="token punctuation">]</span> 从集群中读取配置<span class="token punctuation">..</span>.
<span class="token punctuation">[</span>preflight<span class="token punctuation">]</span> 仅供参考：您可以查看此配置文件<span class="token string">&#39;kubectl -n kube-system get cm kubeadm-config -o yaml&#39;</span>
<span class="token punctuation">[</span>kubelet-start<span class="token punctuation">]</span> 将 kubelet 配置写入文件 <span class="token string">&quot;/var/lib/kubelet/config.yaml&quot;</span>
<span class="token punctuation">[</span>kubelet-start<span class="token punctuation">]</span> 将带有标志的 kubelet 环境文件写入文件 <span class="token string">&quot;/var/lib/kubelet/kubeadm-flags.env&quot;</span>
<span class="token punctuation">[</span>kubelet-start<span class="token punctuation">]</span> 启动 kubelet
<span class="token punctuation">[</span>kubelet-start<span class="token punctuation">]</span> 等待 kubelet 执行 TLS Bootstrap<span class="token punctuation">..</span>.

此节点已加入集群：
* 证书签名请求已发送到 apiserver 并收到响应。
* Kubelet  被告知新的安全连接细节。

Run <span class="token string">&#39;kubectl get nodes&#39;</span> 在控制平面上查看该节点加入集群。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="kubeadm-config-略过-嘿嘿嘿" tabindex="-1"><a class="header-anchor" href="#kubeadm-config-略过-嘿嘿嘿" aria-hidden="true">#</a> kubeadm-config（略过 嘿嘿嘿）</h4><p>kubectl -n kube-system get cm kubeadm-config -o yaml &gt; /etc/kubernetes/kubeadm-config.yaml</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>apiVersion<span class="token operator">:</span> v1
data<span class="token operator">:</span>
  ClusterConfiguration<span class="token operator">:</span> |
    apiServer<span class="token operator">:</span>
      extraArgs<span class="token operator">:</span>
        authorization-mode<span class="token operator">:</span> Node<span class="token punctuation">,</span>RBAC
      timeoutForControlPlane<span class="token operator">:</span> 4m0s
    apiVersion<span class="token operator">:</span> kubeadm.k8s.io/v1beta3
    certificatesDir<span class="token operator">:</span> /etc/kubernetes/pki
    clusterName<span class="token operator">:</span> kubernetes
    controlPlaneEndpoint<span class="token operator">:</span> <span class="token number">192.168</span>.<span class="token number">100.130</span><span class="token operator">:</span><span class="token number">6443</span>
    controllerManager<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    dns<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    etcd<span class="token operator">:</span>
      local<span class="token operator">:</span>
        dataDir<span class="token operator">:</span> /var/lib/etcd
    imageRepository<span class="token operator">:</span> registry.cn-chengdu.aliyuncs.com/k8sjf
    kind<span class="token operator">:</span> ClusterConfiguration
    kubernetesVersion<span class="token operator">:</span> v1.<span class="token number">23.8</span>
    networking<span class="token operator">:</span>
      dnsDomain<span class="token operator">:</span> cluster.local
      podSubnet<span class="token operator">:</span> <span class="token number">10.244</span>.<span class="token number">0.0</span>/<span class="token number">16</span>
      serviceSubnet<span class="token operator">:</span> <span class="token number">10.96</span>.<span class="token number">0.0</span>/<span class="token number">16</span>
    scheduler<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
kind<span class="token operator">:</span> ConfigMap
metadata<span class="token operator">:</span>
  creationTimestamp<span class="token operator">:</span> <span class="token string">&quot;2022-08-27T07:05:29Z&quot;</span>
  name<span class="token operator">:</span> kubeadm-config
  namespace<span class="token operator">:</span> kube-system
  resourceVersion<span class="token operator">:</span> <span class="token string">&quot;199&quot;</span>
  uid<span class="token operator">:</span> 45ddd51c-8ef3-4f86<span class="token number">-8406</span>-3d1a11d5e4c5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="token过期-重新设置" tabindex="-1"><a class="header-anchor" href="#token过期-重新设置" aria-hidden="true">#</a> token过期，重新设置</h4><blockquote><p>kubeadm token list</p><p>kubeadm token create --print-join-command</p><p>kubeadm token create --ttl 0 --print-join-command</p></blockquote><h3 id="d、master-部署容器网络插件-flannel" tabindex="-1"><a class="header-anchor" href="#d、master-部署容器网络插件-flannel" aria-hidden="true">#</a> D、master 部署容器网络插件 Flannel</h3><p><img src="`+y+'" alt=""></p>',15),Vn={href:"https://kubernetes.io/zh/docs/concepts/cluster-administration/addons/",target:"_blank",rel:"noopener noreferrer"},Kn=n("p",null,"Flannel 的缺点之一是缺乏高级功能，例如配置网络策略和防火墙的能力。因此 Flannel 是 Kubernetes 集群网络的一个很好的入门级选择，但是，如果你正在寻找高级网络功能，你可能需要考虑其他 CNI 选项，例如 Calico。",-1),Gn=n("h4",{id:"配置网络策略-flannel",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置网络策略-flannel","aria-hidden":"true"},"#"),s(" 配置网络策略 Flannel")],-1),Ln={href:"https://github.com/flannel-io/flannel#deploying-flannel-manually",target:"_blank",rel:"noopener noreferrer"},zn={href:"https://gitee.com/k8s_s/flannel/blob/master/Documentation/kube-flannel.yml",target:"_blank",rel:"noopener noreferrer"},$n={href:"https://gitee.com/k8s_s/flannel/blob/v0.17.0/Documentation/kube-flannel.yml",target:"_blank",rel:"noopener noreferrer"},Un={href:"https://gitee.com/k8s_s/flannel/blob/v0.19.1/Documentation/kube-flannel.yml",target:"_blank",rel:"noopener noreferrer"},Yn=n("p",null,"kubectl apply -f kube-flannel-0.19.1.yml",-1),Hn=n("p",null,"删除：kubectl delete -f kube-flannel-0.19.1.yml",-1),Xn=t(`<h5>kube-flannel.yml 镜像版本</h5><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>（flannel版本）<span class="token punctuation">---</span>（flannel<span class="token punctuation">-</span>cni<span class="token punctuation">-</span>plugin镜像版本）<span class="token punctuation">---</span>（flannel镜像版本）
<span class="token comment">### v0.15.1-v0.16.1：：：：：：v1.0.0、v0.15.1</span>
<span class="token comment">### v0.16.2-v0.16.3：：：：：：v1.0.1、v0.16.1</span>
<span class="token comment">### v0.17.0：：：：：：v1.0.1、v0.16.3</span>
<span class="token comment">### v0.18.0：：：：：：v1.1.0、v0.18.0</span>
<span class="token comment">### v0.18.1：：：：：：v1.1.0、v0.18.1</span>
<span class="token comment">### v0.19.0：：：：：：v1.1.0、v0.18.1</span>
<span class="token comment">### v0.19.1：：：：：：v1.1.0、v0.19.0</span>

dkpull rancher/mirrored<span class="token punctuation">-</span>flannelcni<span class="token punctuation">-</span>flannel<span class="token punctuation">-</span>cni<span class="token punctuation">-</span>plugin<span class="token punctuation">:</span>v1.1.0
dkpull rancher/mirrored<span class="token punctuation">-</span>flannelcni<span class="token punctuation">-</span>flannel<span class="token punctuation">:</span>v0.19.0

docker tag rancher/mirrored<span class="token punctuation">-</span>flannelcni<span class="token punctuation">-</span>flannel<span class="token punctuation">-</span>cni<span class="token punctuation">-</span>plugin<span class="token punctuation">:</span>v1.1.0 registry.cn<span class="token punctuation">-</span>chengdu.aliyuncs.com/k8sjf/flannelcni<span class="token punctuation">-</span>flannel<span class="token punctuation">-</span>cni<span class="token punctuation">-</span>plugin<span class="token punctuation">:</span>v1.1.0
docker push registry.cn<span class="token punctuation">-</span>chengdu.aliyuncs.com/k8sjf/flannelcni<span class="token punctuation">-</span>flannel<span class="token punctuation">-</span>cni<span class="token punctuation">-</span>plugin<span class="token punctuation">:</span>v1.1.0
docker rmi rancher/mirrored<span class="token punctuation">-</span>flannelcni<span class="token punctuation">-</span>flannel<span class="token punctuation">-</span>cni<span class="token punctuation">-</span>plugin<span class="token punctuation">:</span>v1.1.0
<span class="token punctuation">---</span><span class="token punctuation">---</span><span class="token punctuation">---</span><span class="token punctuation">---</span><span class="token punctuation">---</span><span class="token punctuation">---</span><span class="token punctuation">---</span><span class="token punctuation">---</span>
docker tag rancher/mirrored<span class="token punctuation">-</span>flannelcni<span class="token punctuation">-</span>flannel<span class="token punctuation">:</span>v0.19.0 registry.cn<span class="token punctuation">-</span>chengdu.aliyuncs.com/k8sjf/flannel<span class="token punctuation">:</span>v0.19.0
docker push registry.cn<span class="token punctuation">-</span>chengdu.aliyuncs.com/k8sjf/flannel<span class="token punctuation">:</span>v0.19.0
docker rmi rancher/mirrored<span class="token punctuation">-</span>flannelcni<span class="token punctuation">-</span>flannel<span class="token punctuation">:</span>v0.19.0

image修改：
registry.cn<span class="token punctuation">-</span>chengdu.aliyuncs.com/k8sjf/flannelcni<span class="token punctuation">-</span>flannel<span class="token punctuation">-</span>cni<span class="token punctuation">-</span>plugin<span class="token punctuation">:</span>v1.1.0
registry.cn<span class="token punctuation">-</span>chengdu.aliyuncs.com/k8sjf/flannel<span class="token punctuation">:</span>v0.19.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Zn={id:"kubectl-命令基础",tabindex:"-1"},Jn=n("a",{class:"header-anchor",href:"#kubectl-命令基础","aria-hidden":"true"},"#",-1),Wn={href:"https://blog.csdn.net/qq_42476834/article/details/121781274",target:"_blank",rel:"noopener noreferrer"},Qn=t(`<h4 id="查看" tabindex="-1"><a class="header-anchor" href="#查看" aria-hidden="true">#</a> 查看</h4><p>列出所有运行的Pod信息</p><p>列出Pod以及运行Pod节点信息。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master-120 kubelet<span class="token punctuation">]</span><span class="token comment"># kubectl get pods</span>
No resources found <span class="token keyword">in</span> default namespace.
<span class="token punctuation">[</span>root@master-120 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -o wide</span>
No resources found <span class="token keyword">in</span> default namespace.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看所以节点 kg nodes</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master-120 kubelet<span class="token punctuation">]</span><span class="token comment"># kg nodes</span>
NAME         STATUS   ROLES                  AGE   VERSION
master-120   Ready    control-plane,master   63m   v1.23.8
node-121     Ready    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>                 58m   v1.23.8
node-122     Ready    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>                 58m   v1.23.8
node-123     Ready    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>                 58m   v1.23.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看命名空间 kubectl get ns</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master-120 kubelet<span class="token punctuation">]</span><span class="token comment"># kubectl get ns</span>
NAME              STATUS   AGE
default           Active   63m
kube-node-lease   Active   63m
kube-public       Active   63m
kube-system       Active   63m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 pod 命名空间 kubectl get pods --all-namespaces -owide</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods --all-namespaces</span>
NAMESPACE      NAME                             READY   STATUS    RESTARTS   AGE
kube-flannel   kube-flannel-ds-kfd89            <span class="token number">1</span>/1     Running   <span class="token number">0</span>          4m50s
kube-flannel   kube-flannel-ds-n8fr9            <span class="token number">1</span>/1     Running   <span class="token number">0</span>          4m50s
kube-flannel   kube-flannel-ds-tfj78            <span class="token number">1</span>/1     Running   <span class="token number">0</span>          4m50s
kube-system    coredns-687d9f64f-b8cvf          <span class="token number">1</span>/1     Running   <span class="token number">0</span>          55m
kube-system    coredns-687d9f64f-d99x9          <span class="token number">1</span>/1     Running   <span class="token number">0</span>          55m
kube-system    etcd-master                      <span class="token number">1</span>/1     Running   <span class="token number">0</span>          55m
kube-system    kube-apiserver-master            <span class="token number">1</span>/1     Running   <span class="token number">0</span>          55m
kube-system    kube-controller-manager-master   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          55m
kube-system    kube-proxy-6v2v9                 <span class="token number">1</span>/1     Running   <span class="token number">0</span>          51m
kube-system    kube-proxy-8z62f                 <span class="token number">1</span>/1     Running   <span class="token number">0</span>          52m
kube-system    kube-proxy-ch88v                 <span class="token number">1</span>/1     Running   <span class="token number">0</span>          55m
kube-system    kube-scheduler-master            <span class="token number">1</span>/1     Running   <span class="token number">0</span>          55m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl get pods -n kube-system</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master-120 kubelet<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n kube-flannel</span>
NAME                                 READY   STATUS    RESTARTS   AGE
kube-flannel-ds-44l8g                <span class="token number">1</span>/1     Running   <span class="token number">0</span>          48m
kube-flannel-ds-cf2zd                <span class="token number">1</span>/1     Running   <span class="token number">0</span>          48m
kube-flannel-ds-tkbnh                <span class="token number">1</span>/1     Running   <span class="token number">0</span>          48m
kube-flannel-ds-wxhk4                <span class="token number">1</span>/1     Running   <span class="token number">0</span>          48m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl get pods -n kube-system -o wide</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n kube-flannel -o wide</span>
NAME                    READY   STATUS    RESTARTS   AGE     IP                NODE     NOMINATED NODE   READINESS GATES
kube-flannel-ds-kfd89   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          4m15s   <span class="token number">192.168</span>.100.132   node2    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
kube-flannel-ds-n8fr9   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          4m15s   <span class="token number">192.168</span>.100.130   master   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
kube-flannel-ds-tfj78   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          4m15s   <span class="token number">192.168</span>.100.131   node1    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>kube-flannel-ds-xxxx 必须运行OK</strong></p><h3 id="e、可视化查看-kubernetes资源" tabindex="-1"><a class="header-anchor" href="#e、可视化查看-kubernetes资源" aria-hidden="true">#</a> E、可视化查看 Kubernetes资源</h3>`,16),ns={href:"https://kuboard.cn/install/install-k8s-dashboard.html",target:"_blank",rel:"noopener noreferrer"},ss=n("h4",{id:"_1、dashboard-不推荐",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1、dashboard-不推荐","aria-hidden":"true"},"#"),s(" 1、dashboard（不推荐）")],-1),as={href:"https://github.com/kubernetes/dashboard/releases/tag/v2.4.0",target:"_blank",rel:"noopener noreferrer"},es={href:"https://gitee.com/k8s_s/dashboard1/blob/v2.4.0/aio/deploy/recommended.yaml",target:"_blank",rel:"noopener noreferrer"},ts=n("h4",{id:"_2、kubesphere-推荐",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2、kubesphere-推荐","aria-hidden":"true"},"#"),s(" 2、KubeSphere（推荐）")],-1),ls=n("p",null,[n("a",{href:"./kube-sphere"},"跳转到 KubeSphere 安装")],-1),is={href:"https://github.com/kubesphere/kubesphere",target:"_blank",rel:"noopener noreferrer"},ps=n("h4",{id:"_3、kuboard",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3、kuboard","aria-hidden":"true"},"#"),s(" 3、Kuboard")],-1),cs={href:"https://kuboard.cn/overview/",target:"_blank",rel:"noopener noreferrer"},os={href:"https://github.com/eip-work/kuboard-press",target:"_blank",rel:"noopener noreferrer"},rs=t(`<h4 id="_4、kubeoperator" tabindex="-1"><a class="header-anchor" href="#_4、kubeoperator" aria-hidden="true">#</a> 4、KubeOperator</h4><hr><hr><h2 id="_4-、k8s-入门" tabindex="-1"><a class="header-anchor" href="#_4-、k8s-入门" aria-hidden="true">#</a> 4）、k8s 入门</h2><p>后期直接到这里开始吧：<a href="#apps+expose-port"> 使用 [apps +暴露Service port] 的 yaml 格式 </a></p><p><strong>资源包括(不区分大小写)：pod（po），service（svc），replication controller（rc），deployment（deploy），replica set（rs）</strong></p><p>具体命令请看：<a href="#k8s-alias">k8s-alias</a></p><h3 id="kubectl-get-po" tabindex="-1"><a class="header-anchor" href="#kubectl-get-po" aria-hidden="true">#</a> kubectl get po</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master-120 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get po</span>
NAME                      READY   STATUS    RESTARTS      AGE
nginx-689b55fcd-2c8v8     <span class="token number">1</span>/1     Running   <span class="token number">1</span> <span class="token punctuation">(</span>19h ago<span class="token punctuation">)</span>   19h
nginx-689b55fcd-5qpkp     <span class="token number">1</span>/1     Running   <span class="token number">1</span> <span class="token punctuation">(</span>19h ago<span class="token punctuation">)</span>   19h
nginx-689b55fcd-gpdqz     <span class="token number">1</span>/1     Running   <span class="token number">1</span> <span class="token punctuation">(</span>19h ago<span class="token punctuation">)</span>   19h
tomcat-549f8d66bc-bln66   <span class="token number">1</span>/1     Running   <span class="token number">1</span> <span class="token punctuation">(</span>19h ago<span class="token punctuation">)</span>   19h
tomcat-549f8d66bc-rqhvm   <span class="token number">1</span>/1     Running   <span class="token number">1</span> <span class="token punctuation">(</span>19h ago<span class="token punctuation">)</span>   19h
tomcat-549f8d66bc-zkc94   <span class="token number">1</span>/1     Running   <span class="token number">1</span> <span class="token punctuation">(</span>19h ago<span class="token punctuation">)</span>   19h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kubectl-get-svc" tabindex="-1"><a class="header-anchor" href="#kubectl-get-svc" aria-hidden="true">#</a> kubectl get svc</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master-120 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get svc</span>
NAME         TYPE        CLUSTER-IP     EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>    AGE
kubernetes   ClusterIP   <span class="token number">10.96</span>.0.1      <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>/TCP    29h
nginx        ClusterIP   <span class="token number">10.96</span>.99.230   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">8000</span>/TCP   19h
tomcat       ClusterIP   <span class="token number">10.96</span>.102.96   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">8001</span>/TCP   19h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kubectl-get-rc" tabindex="-1"><a class="header-anchor" href="#kubectl-get-rc" aria-hidden="true">#</a> kubectl get rc</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>No resources found <span class="token keyword">in</span> default namespace.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="kubectl-get-deploy" tabindex="-1"><a class="header-anchor" href="#kubectl-get-deploy" aria-hidden="true">#</a> kubectl get deploy</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master-120 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get deploy</span>
NAME     READY   UP-TO-DATE   AVAILABLE   AGE
nginx    <span class="token number">3</span>/3     <span class="token number">3</span>            <span class="token number">3</span>           19h
tomcat   <span class="token number">3</span>/3     <span class="token number">3</span>            <span class="token number">3</span>           19h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kubectl-get-rs" tabindex="-1"><a class="header-anchor" href="#kubectl-get-rs" aria-hidden="true">#</a> kubectl get rs</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master-120 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get rs</span>
NAME                DESIRED   CURRENT   READY   AGE
nginx-689b55fcd     <span class="token number">3</span>         <span class="token number">3</span>         <span class="token number">3</span>       19h
tomcat-549f8d66bc   <span class="token number">3</span>         <span class="token number">3</span>         <span class="token number">3</span>       19h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="a、基本命令" tabindex="-1"><a class="header-anchor" href="#a、基本命令" aria-hidden="true">#</a> A、基本命令</h3><h4 id="_1、创建apps-create-deployment" tabindex="-1"><a class="header-anchor" href="#_1、创建apps-create-deployment" aria-hidden="true">#</a> 1、创建apps：create deployment</h4><p>master安装tomcat</p><h5>kubectl create deployment tomcat6 --image=tomcat:6.0.53-jre8</h5><h4 id="_2、查看-kg-all" tabindex="-1"><a class="header-anchor" href="#_2、查看-kg-all" aria-hidden="true">#</a> 2、查看 kg all</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>a1@node01:~/k8s$ kubectl get all
NAME                           READY   STATUS              RESTARTS  		 AGE
pod/tomcat6-56fcc999cb-47vfm   <span class="token number">0</span>/1     ContainerCreating      <span class="token number">0</span>      		 23s
NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>   		 AGE
service/kubernetes   ClusterIP   <span class="token number">10.96</span>.0.1    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>/TCP  		 115m
NAME                      READY   UP-TO-DATE   AVAILABLE   					AGE
deployment.apps/tomcat6   <span class="token number">0</span>/1     	 <span class="token number">1</span>             <span class="token number">0</span>           				23s
NAME                                 DESIRED   CURRENT   READY  			AGE
replicaset.apps/tomcat6-56fcc999cb   <span class="token number">1</span>         <span class="token number">1</span>         <span class="token number">0</span>      			23s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、查看详细-kg-all-o-wide" tabindex="-1"><a class="header-anchor" href="#_3、查看详细-kg-all-o-wide" aria-hidden="true">#</a> 3、查看详细 kg all -o wide</h4><p>tomcat6在节点node2---docker下载镜像ok</p><p><img src="`+f+'" alt=""></p><p>在node2查看</p><p><img src="'+_+'" alt=""></p><p><img src="'+x+'" alt=""></p><h4 id="_4、查看-kg-pod-o-wide" tabindex="-1"><a class="header-anchor" href="#_4、查看-kg-pod-o-wide" aria-hidden="true">#</a> 4、查看 kg pod -o wide</h4><p><img src="'+E+'" alt=""></p><h5>node02模拟宕机，看看k8s怎么处理（dkstop与node02关机）</h5><p><img src="'+P+'" alt=""></p><p>发现node2节点已经不行了，全部压力到了node3</p><p><img src="'+A+'" alt=""></p><p><img src="'+q+'" alt=""></p><h5>重启 node02</h5><p><img src="'+w+`" alt=""></p><h4 id="_5、暴露-port-expose" tabindex="-1"><a class="header-anchor" href="#_5、暴露-port-expose" aria-hidden="true">#</a> 5、暴露 port ：expose</h4><blockquote><p>expose (-f FILENAME | TYPE NAME) [--port=port] [--protocol=TCP|UDP] [--target-port=number-or-name] [--name=name] [--external-ip=external-ip-of-service] [--type=type]</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl expose rc nginx <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">80</span> --target-port<span class="token operator">=</span><span class="token number">8080</span>
kubectl expose deploy tomcat6 <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">80</span> --target-port<span class="token operator">=</span><span class="token number">8080</span> <span class="token parameter variable">--type</span><span class="token operator">=</span>NodePort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+R+'" alt=""></p><p><img src="'+S+'" alt=""></p>',43),ds={href:"http://192.168.100.131:31002/",target:"_blank",rel:"noopener noreferrer"},us=t(`<h4 id="_6、修改-port-edit" tabindex="-1"><a class="header-anchor" href="#_6、修改-port-edit" aria-hidden="true">#</a> 6、修改 port：edit</h4><blockquote><p>kubectl edit svc tomcat6 ###修改app应用服务的port</p><p>kubectl edit deploy tomcat6 ### 修改app应用</p></blockquote><h4 id="_7、扩容或缩容-scale" tabindex="-1"><a class="header-anchor" href="#_7、扩容或缩容-scale" aria-hidden="true">#</a> 7、扩容或缩容：scale</h4><blockquote><p>scale [--resource-version=version] [--current-replicas=count] --replicas=COUNT (-f FILENAME | TYPE NAME)</p></blockquote><p>将名为tomcat6中的pod副本数设置为3。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl scale --replicas=3 deployment tomcat6
kg pods -o wide
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+N+`" alt=""></p><p>如果当前副本数为2，则将其扩展至3。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl scale --current-replicas=2 --replicas=3 deployment/tomcat6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_8、删除以-create-deployment-部署的-apps、service-delete" tabindex="-1"><a class="header-anchor" href="#_8、删除以-create-deployment-部署的-apps、service-delete" aria-hidden="true">#</a> 8、删除以 create deployment 部署的(apps、service) delete</h4><blockquote><p>kubectl get all</p><p>kubectl delete deployment.apps/tomcat6</p><p>kubectl delete service/tomcat6</p></blockquote><p><img src="`+T+'" alt=""></p><h4 id="_9、部署-删除以-yaml-部署的实例" tabindex="-1"><a class="header-anchor" href="#_9、部署-删除以-yaml-部署的实例" aria-hidden="true">#</a> 9、部署&amp;删除以 yaml 部署的实例</h4><p><a href="#xxx.yaml">查看 xxx.yaml</a></p><h5>kubectl apply -f xxx.yaml</h5><h5>kubectl delete -f xxx.yaml</h5><hr><hr><h3 id="b、yaml-基本使用" tabindex="-1"><a class="header-anchor" href="#b、yaml-基本使用" aria-hidden="true">#</a> B、yaml &amp; 基本使用</h3>',19),ks={href:"https://kubernetes.io/zh/docs/reference/kubectl/overview/",target:"_blank",rel:"noopener noreferrer"},ms=t(`<p>后期使用：<a href="#apps+expose-port"># apps+expose-port</a>，而不是使用 <a href="#%E5%88%9D%E7%BA%A7%E4%BD%BF%E7%94%A8yaml%E5%88%9B%E5%BB%BAapps"># 初级使用yaml创建apps</a></p><h4 id="pod-模版" tabindex="-1"><a class="header-anchor" href="#pod-模版" aria-hidden="true">#</a> Pod 模版</h4><p>一般不会自己创建</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> tomcat9<span class="token punctuation">-</span><span class="token number">02</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> tomcat9<span class="token punctuation">-</span><span class="token number">02</span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> tomcat<span class="token punctuation">:</span>6.0.53<span class="token punctuation">-</span>jre8
    <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
    <span class="token key atrule">name</span><span class="token punctuation">:</span> tomcat9<span class="token punctuation">-</span><span class="token number">02</span>
  <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
    <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="deployment-模版" tabindex="-1"><a class="header-anchor" href="#deployment-模版" aria-hidden="true">#</a> Deployment 模版</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> tomcat601
  <span class="token key atrule">name</span><span class="token punctuation">:</span> tomcat601<span class="token punctuation">-</span>deployment
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token comment">#replicas复制几份</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">2</span> 
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> tomcat601
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token comment">#Pod模板</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> tomcat601
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> tomcat<span class="token punctuation">:</span>6.0.53<span class="token punctuation">-</span>jre8
        <span class="token key atrule">name</span><span class="token punctuation">:</span> tomcat601
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>deployment
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
  <span class="token comment">#Pod模板</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
 	<span class="token comment">#Pod模板规约：spec-指示 Pods 运行一个 nginx 容器</span>
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
        <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.14.2
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="service-模版" tabindex="-1"><a class="header-anchor" href="#service-模版" aria-hidden="true">#</a> Service 模版</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> tomcat601
  <span class="token key atrule">name</span><span class="token punctuation">:</span> tomcat601<span class="token punctuation">-</span>xxx<span class="token punctuation">-</span>jp3sk
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token comment">#- NodePort: 30965</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">8080</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> tomcat601
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1、初级使用yaml创建apps-后期不使用这种方式" tabindex="-1"><a class="header-anchor" href="#_1、初级使用yaml创建apps-后期不使用这种方式" aria-hidden="true">#</a> 1、初级使用yaml创建apps<a name="初级使用yaml创建apps"></a>（后期不使用这种方式）</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用 example-service.yaml 中的定义创建服务。</span>
kubectl apply <span class="token parameter variable">-f</span> example-service.yaml

<span class="token comment"># 使用 example-controller.yaml 中的定义创建 replication controller。</span>
kubectl apply <span class="token parameter variable">-f</span> example-controller.yaml

<span class="token comment"># 使用 &lt;directory&gt; 路径下的任意 .yaml, .yml, 或 .json 文件 创建对象。</span>
kubectl apply <span class="token parameter variable">-f</span> <span class="token operator">&lt;</span>directory<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看并保存 Deployment 的 yaml 文件（--dry-run）</p><blockquote><p>--dry-run：仅查看不运行</p><p>kubectl create deployment 服务名称--image=镜像名称 --dry-run -o yaml &gt; 保存目标</p><p>kubectl create deployment tomcat6 --image=tomcat:6.0.53-jre8 --dry-run -o yaml &gt; tomcat6.yaml</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> tomcat6
  <span class="token key atrule">name</span><span class="token punctuation">:</span> tomcat6
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">2</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> tomcat6
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> tomcat6
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> tomcat<span class="token punctuation">:</span>6.0.53<span class="token punctuation">-</span>jre8
        <span class="token key atrule">name</span><span class="token punctuation">:</span> tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建 Deployment apps：kubectl apply -f tomcat6.yaml</p><p>kubectl get deployments</p><p>更新 Deployment</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl <span class="token builtin class-name">set</span> image deployment.v1.apps/tomcat6 <span class="token assign-left variable">tomcat</span><span class="token operator">=</span>tomcat:9.0.53-jre8
或
kubectl <span class="token builtin class-name">set</span> image deployment/tomcat6 <span class="token assign-left variable">tomcat</span><span class="token operator">=</span>tomcat:9.0.53-jre8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回滚 Deployment</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl <span class="token builtin class-name">set</span> image deployment/tomcat6 <span class="token assign-left variable">tomcat</span><span class="token operator">=</span>tomcat:9.0.53-jre8 <span class="token parameter variable">--record</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>暴露 service 端口：kubectl expose deploy tomcat6 --port=80 --target-port=8080 --type=NodePort</p><p>查看 Pod（kg all ，kg pods -o wide，kg pod xx -o yaml）</p><p><img src="`+D+`" alt=""></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> tomcat6
    <span class="token key atrule">pod-template-hash</span><span class="token punctuation">:</span> 56fcc999cb
  <span class="token key atrule">name</span><span class="token punctuation">:</span> tomcat6<span class="token punctuation">-</span>56fcc999cb<span class="token punctuation">-</span>nm2nx
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
  <span class="token key atrule">ownerReferences</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
    <span class="token key atrule">blockOwnerDeletion</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">controller</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">kind</span><span class="token punctuation">:</span> ReplicaSet
    <span class="token key atrule">name</span><span class="token punctuation">:</span> tomcat6<span class="token punctuation">-</span>56fcc999cb
    <span class="token key atrule">uid</span><span class="token punctuation">:</span> 28633fd6<span class="token punctuation">-</span>b3ee<span class="token punctuation">-</span>45aa<span class="token punctuation">-</span>93d5<span class="token punctuation">-</span>fb8931735029
  <span class="token key atrule">resourceVersion</span><span class="token punctuation">:</span> <span class="token string">&quot;47929&quot;</span>
  <span class="token key atrule">uid</span><span class="token punctuation">:</span> 59333abe<span class="token punctuation">-</span>6a24<span class="token punctuation">-</span>4995<span class="token punctuation">-</span>888b<span class="token punctuation">-</span>88577fef9559
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> tomcat<span class="token punctuation">:</span>6.0.53<span class="token punctuation">-</span>jre8
    <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
    <span class="token key atrule">name</span><span class="token punctuation">:</span> tomcat
<span class="token punctuation">...</span> <span class="token punctuation">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自己创建 pod（.yaml）文件</p><p>Pod 通常不是直接创建的，而是使用工作负载资源创建的。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
  	<span class="token comment">#实例名称</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> tomcat601
  <span class="token comment">#容器名称  </span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span>  tomcat6<span class="token punctuation">-</span>xxx<span class="token punctuation">-</span>wzfj2
  <span class="token comment">#命名空间</span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token comment">#容器</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> tomcat<span class="token punctuation">:</span>6.0.53<span class="token punctuation">-</span>jre8
    <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
    <span class="token key atrule">name</span><span class="token punctuation">:</span> tomcat601
  <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
    <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl apply -f myPod.yaml</p><p>查看 Service（kg svc tomcat6 -o yaml）</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">creationTimestamp</span><span class="token punctuation">:</span> <span class="token string">&quot;2021-12-08T13:41:18Z&quot;</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> tomcat6
  <span class="token key atrule">name</span><span class="token punctuation">:</span> tomcat6
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
  <span class="token key atrule">resourceVersion</span><span class="token punctuation">:</span> <span class="token string">&quot;48461&quot;</span>
  <span class="token key atrule">uid</span><span class="token punctuation">:</span> b4ebfb65<span class="token punctuation">-</span>4e0c<span class="token punctuation">-</span>478a<span class="token punctuation">-</span>8e85<span class="token punctuation">-</span>f03acef2d166
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">clusterIP</span><span class="token punctuation">:</span> 10.96.126.87
  <span class="token key atrule">clusterIPs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> 10.96.126.87
  <span class="token key atrule">externalTrafficPolicy</span><span class="token punctuation">:</span> Cluster
  <span class="token key atrule">internalTrafficPolicy</span><span class="token punctuation">:</span> Cluster
  <span class="token key atrule">ipFamilies</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> IPv4
  <span class="token key atrule">ipFamilyPolicy</span><span class="token punctuation">:</span> SingleStack
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">nodePort</span><span class="token punctuation">:</span> <span class="token number">31005</span> <span class="token comment">#暴露给外部使用port</span>
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">8080</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> tomcat6
  <span class="token key atrule">sessionAffinity</span><span class="token punctuation">:</span> None
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
<span class="token key atrule">status</span><span class="token punctuation">:</span>
  <span class="token key atrule">loadBalancer</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 Deployment-apps（kg deploy tomcat6 -o yaml）</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> tomcat6
  <span class="token key atrule">name</span><span class="token punctuation">:</span> tomcat6
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
  <span class="token punctuation">...</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">2</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> tomcat6
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> tomcat6
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> tomcat<span class="token punctuation">:</span>6.0.53<span class="token punctuation">-</span>jre8
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
        <span class="token key atrule">name</span><span class="token punctuation">:</span> tomcat
        <span class="token key atrule">terminationMessagePath</span><span class="token punctuation">:</span> /dev/termination<span class="token punctuation">-</span>log
        <span class="token key atrule">terminationMessagePolicy</span><span class="token punctuation">:</span> File
   <span class="token punctuation">...</span>.
<span class="token key atrule">status</span><span class="token punctuation">:</span>
    <span class="token punctuation">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 Deployment 上线状态<code>kubectl rollout status deployment/nginx-deployment</code></p>`,33),bs={href:"http://192.168.100.130:80/",target:"_blank",rel:"noopener noreferrer"},vs=t('<p><img src="'+I+`" alt=""></p><h4 id="_2、使用-apps-暴露service-port-的-yaml-格式-使用这个-不使用-初级使用yaml创建apps-推荐" tabindex="-1"><a class="header-anchor" href="#_2、使用-apps-暴露service-port-的-yaml-格式-使用这个-不使用-初级使用yaml创建apps-推荐" aria-hidden="true">#</a> 2、使用 [apps +暴露Service port] 的 yaml 格式（使用这个，不使用<a href="#%E5%88%9D%E7%BA%A7%E4%BD%BF%E7%94%A8yaml%E5%88%9B%E5%BB%BAapps"># 初级使用yaml创建apps</a>）=<mark><mark><mark><mark>推荐</mark></mark></mark></mark>==<a name="apps+expose-port"></a></h4><p>=<mark><mark><mark><mark>推荐</mark></mark></mark></mark>==</p><h5>安装 Deployment（apps ）与暴露Service（expose-port ）在同一个yaml文件里设置，通过<code>---</code>分隔</h5><p>=<mark><mark><mark><mark>推荐</mark></mark></mark></mark>==</p><p>xxx.yaml<a name="xxx.yaml"></a></p><details class="hint-container details"><summary>点击查看代码</summary><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> tomcat
  <span class="token key atrule">name</span><span class="token punctuation">:</span> tomcat
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> tomcat
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> tomcat
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> tomcat
        <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.cn<span class="token punctuation">-</span>chengdu.aliyuncs.com/k8sjf/tomcat<span class="token punctuation">:</span>9.0.62<span class="token punctuation">-</span>jre11<span class="token punctuation">-</span>temurin<span class="token punctuation">-</span>focal
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">8080</span>
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> tomcat
  <span class="token key atrule">name</span><span class="token punctuation">:</span> tomcat
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">8080</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> tomcat
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p><img src="`+C+'" alt=""></p><h3 id="c、deployment-service-概念" tabindex="-1"><a class="header-anchor" href="#c、deployment-service-概念" aria-hidden="true">#</a> C、Deployment &amp; service 概念</h3><p><img src="'+O+'" alt=""></p><h4 id="pod-service" tabindex="-1"><a class="header-anchor" href="#pod-service" aria-hidden="true">#</a> pod &amp; service</h4><p><img src="'+j+'" alt=""></p><p><img src="'+B+'" alt=""></p><p>将一组pod公开为网络服务，通过service代理，可以实现负载均衡</p><p><img src="'+F+'" alt=""></p><h4 id="clusterip" tabindex="-1"><a class="header-anchor" href="#clusterip" aria-hidden="true">#</a> ClusterIP</h4><p>此方式只能在集群内访问</p><h4 id="label-selector" tabindex="-1"><a class="header-anchor" href="#label-selector" aria-hidden="true">#</a> label &amp; selector</h4><p><img src="'+M+'" alt=""></p><p>通讯1</p><p><img src="'+V+'" alt=""></p><p>通讯2</p><p><img src="'+K+'" alt=""></p><h4 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明：</h4><blockquote><p>一个集群后多台mster、node，一个节点node，里面有多个Pod，一个Pod里可能有多个服务，各个Pod通过service暴露port给其他Pod、node之间是互通，通过controller来管理使用Pod资源。</p></blockquote><p>node -&gt; pod -&gt; service -&gt; controller</p>',26);function hs(gs,ys){const a=o("ExternalLinkIcon");return i(),p("div",null,[c(" more "),L,n("p",null,[s("中文社区: "),n("a",z,[s("https://www.kubernetes.org.cn/"),e(a)])]),n("p",null,[s("官方文档: "),n("a",$,[s("https://kubernetes.io/zh/docs/home/"),e(a)])]),n("p",null,[s("社区文档: "),n("a",U,[s("http://docs.kubernetes.org.cn/"),e(a)])]),n("p",null,[n("a",Y,[s("https://feisky.gitbooks.io/kubernetes/content/"),e(a)])]),n("p",null,[n("a",H,[s("历史版本 Release History"),e(a)])]),n("p",null,[n("a",X,[s("客户端下载 github"),e(a)])]),Z,n("h3",J,[W,s(),n("a",Q,[s("为什么需要 Kubernetes，它能做什么?"),e(a)])]),nn,n("p",null,[s("API 服务器是 Kubernetes "),n("a",sn,[s("控制面"),e(a)]),s("的组件， 该组件公开了 Kubernetes API。")]),an,en,tn,n("p",null,[s("控制平面组件，负责监视新创建的、未指定运行"),n("a",ln,[s("节点（node）"),e(a)]),s("的 "),n("a",pn,[s("Pods"),e(a)]),s("，选择节点让 Pod 在上面运行。")]),cn,n("p",null,[s("在主节点上运行 "),n("a",on,[s("控制器"),e(a)]),s(" 的组件")]),rn,dn,n("p",null,[s("云控制器管理器是指嵌入特定云的控制逻辑的 "),n("a",un,[s("控制平面"),e(a)]),s("组件")]),kn,n("p",null,[n("a",mn,[s("快捷键设置 原文链接"),e(a)])]),bn,n("p",null,[n("a",vn,[s("具体参考文档"),e(a)])]),hn,n("p",null,[s("执行sh脚本："),n("a",gn,[s("k8s-init.sh"),e(a)]),s("，"),n("a",yn,[s("k8s-docker.sh"),e(a)]),s("，"),n("a",fn,[s("k8s-install.sh"),e(a)])]),_n,n("p",null,[n("a",xn,[s("安装工具"),e(a)]),s("："),n("a",En,[s("docker"),e(a)]),s("、kubeadm管理、kukelet代理、kubectl命令行")]),Pn,n("p",null,[n("a",An,[s("https://docs.docker.com/engine/install/centos/"),e(a)])]),qn,n("p",null,[n("a",wn,[s("版本 History"),e(a)]),s(),n("a",Rn,[s("https://github.com/kubernetes/kubernetes/tree/master/CHANGELOG"),e(a)])]),Sn,n("p",null,[s("编辑 master_images.sh：设置需要的镜像，仓库地址,"),n("a",Nn,[s("官网docker镜像搜索"),e(a)])]),n("blockquote",null,[n("p",null,[n("a",Tn,[s("https://hub.docker.com/u/aiotceo"),e(a)]),s(" 、"),n("a",Dn,[s("https://hub.docker.com/u/mirrorgooglecontainers"),e(a)])]),n("p",null,[n("a",In,[s("swr.myhuaweicloud.com/iivey"),e(a)])]),n("p",null,[n("a",Cn,[s("registry.cn-chengdu.aliyuncs.com/k8sjf"),e(a)])]),n("p",null,[n("a",On,[s("registry.aliyuncs.com/google_containers"),e(a)])])]),jn,n("blockquote",null,[n("p",null,[s("解决："),n("a",Bn,[s("https://blog.csdn.net/qq_42476834/article/details/124730955"),e(a)])]),Fn]),Mn,n("p",null,[s("参考："),n("a",Vn,[s("https://kubernetes.io/zh/docs/concepts/cluster-administration/addons/"),e(a)])]),Kn,Gn,n("p",null,[s("root用户：使用"),n("a",Ln,[s("Flannel"),e(a)]),s(" 配置，执行：")]),n("blockquote",null,[n("p",null,[n("a",zn,[s("https://gitee.com/k8s_s/flannel/blob/master/Documentation/kube-flannel.yml"),e(a)])]),n("p",null,[n("a",$n,[s("https://gitee.com/k8s_s/flannel/blob/v0.17.0/Documentation/kube-flannel.yml"),e(a)])]),n("p",null,[n("a",Un,[s("https://gitee.com/k8s_s/flannel/blob/v0.19.1/Documentation/kube-flannel.yml"),e(a)])]),Yn,Hn]),Xn,n("h4",Zn,[Jn,s(),n("a",Wn,[s("kubectl 命令基础"),e(a)])]),Qn,n("p",null,[s("文档："),n("a",ns,[s("https://kuboard.cn/install/install-k8s-dashboard.html"),e(a)])]),ss,n("blockquote",null,[n("p",null,[n("a",as,[s("https://github.com/kubernetes/dashboard/releases/tag/v2.4.0"),e(a)])]),n("p",null,[s("kubectl apply -f "),n("a",es,[s("https://gitee.com/k8s_s/dashboard1/blob/v2.4.0/aio/deploy/recommended.yaml"),e(a)]),s(" -o yaml > dashboard.yaml")])]),ts,ls,n("p",null,[n("a",is,[s("github kubesphere"),e(a)]),s("，star: 9.8+K")]),ps,n("p",null,[n("a",cs,[s("https://kuboard.cn/overview/"),e(a)])]),n("p",null,[n("a",os,[s("Github kuboard"),e(a)]),s(" stars 14.5+K")]),rs,n("p",null,[n("a",ds,[s("http://192.168.100.131:31002/"),e(a)])]),us,n("p",null,[n("a",ks,[s("https://kubernetes.io/zh/docs/reference/kubectl/overview/"),e(a)])]),ms,n("p",null,[s("校验："),n("a",bs,[s("http://192.168.100.130:80/"),e(a)])]),vs])}const _s=l(G,[["render",hs],["__file","basis.html.vue"]]);export{_s as default};
