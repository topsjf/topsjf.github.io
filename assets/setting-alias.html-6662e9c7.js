import{_ as s,V as n,W as a,a0 as e,$ as l}from"./framework-ed4f969a.js";const t={},i=l(`<h1>在Linux、window设置docker、k8s快捷指令</h1><h2 id="linux-端" tabindex="-1"><a class="header-anchor" href="#linux-端" aria-hidden="true">#</a> linux 端</h2><p><code>vim ~/.bashrc</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># .bashrc</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">rm</span><span class="token operator">=</span><span class="token string">&#39;rm -i&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">cp</span><span class="token operator">=</span><span class="token string">&#39;cp -i&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">mv</span><span class="token operator">=</span><span class="token string">&#39;mv -i&#39;</span>
<span class="token comment"># Source global definitions</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /etc/bashrc <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
	<span class="token builtin class-name">.</span> /etc/bashrc
<span class="token keyword">fi</span>


<span class="token builtin class-name">alias</span> <span class="token assign-left variable">rmf</span><span class="token operator">=</span><span class="token string">&#39;rm -rf&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">la</span><span class="token operator">=</span><span class="token string">&#39;ls -all&#39;</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="k8s-kubectl" tabindex="-1"><a class="header-anchor" href="#k8s-kubectl" aria-hidden="true">#</a> k8s：kubectl</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">########k8s############</span>
<span class="token comment">###########k8s-创建与删除</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">k</span><span class="token operator">=</span><span class="token string">&#39;kubectl&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">ka</span><span class="token operator">=</span><span class="token string">&#39;kubectl apply -f&#39;</span> <span class="token comment">#使用yaml创建apps</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">kd</span><span class="token operator">=</span><span class="token string">&#39;kubectl delete -f&#39;</span> <span class="token comment">#删除yaml创建apps</span>
<span class="token comment">###########k8s-资源信息</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">kg</span><span class="token operator">=</span><span class="token string">&#39;kubectl get&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">kgnodes</span><span class="token operator">=</span><span class="token string">&#39;kubectl get nodes -o wide&#39;</span> <span class="token comment">#获取node资源信息</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">kgpods</span><span class="token operator">=</span><span class="token string">&#39;kubectl get pods -o wide&#39;</span> <span class="token comment">#获取pods资源信息</span>
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
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">kgpodw</span><span class="token operator">=</span><span class="token string">&#39;watch kubectl get pod -n kube-system -o wide&#39;</span>	<span class="token comment">#监控k8s-pod的kube-system进度</span>
<span class="token comment">###########k8s-pods信息</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">kgpodsallns</span><span class="token operator">=</span><span class="token string">&#39;kubectl get pods --all-namespaces -o wide&#39;</span> <span class="token comment">#获取pods所有名称空间</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">kgpodsn</span><span class="token operator">=</span><span class="token string">&#39;kubectl get pods -o wide -n $1&#39;</span> <span class="token comment">#查看输入的【可以kgpodsans查看】名称空间信息</span>
<span class="token builtin class-name">alias</span> kgpodsn-k8s<span class="token operator">=</span><span class="token string">&#39;kubectl get pods -n kube-system -o wide&#39;</span> <span class="token comment">#查看名称空间kube-system的信息</span>
<span class="token builtin class-name">alias</span> kgpodsn-ingressnginx<span class="token operator">=</span><span class="token string">&#39;kubectl get pods -n ingress-nginx -o wide&#39;</span> <span class="token comment">#查看名称空间ingress-nginx的信息</span>
<span class="token builtin class-name">alias</span> kgpods-node<span class="token operator">=</span><span class="token string">&#39;kubectl get pods -n kube-system -o wide | grep $1&#39;</span> <span class="token comment">#查看node子节点的pod信息</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> docker</h3><p>sudo vim ~/.bashrc,来设置Linux命令别名</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">########docker############</span>
<span class="token comment">###some more ls aliases</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">rmf</span><span class="token operator">=</span><span class="token string">&#39;rm -rf&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">ll</span><span class="token operator">=</span><span class="token string">&#39;ls -l&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">la</span><span class="token operator">=</span><span class="token string">&#39;ls -all&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">ggroup</span><span class="token operator">=</span><span class="token string">&#39;cat /etc/group&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">gpasswd</span><span class="token operator">=</span><span class="token string">&#39;cat /etc/passwd&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">stdk</span><span class="token operator">=</span><span class="token string">&#39;systemctl start docker&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">restdk</span><span class="token operator">=</span><span class="token string">&#39;systemctl restart docker&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">stopdk</span><span class="token operator">=</span><span class="token string">&#39;systemctl stop docker&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">enabledk</span><span class="token operator">=</span><span class="token string">&#39;systemctl enable docker&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">disabledk</span><span class="token operator">=</span><span class="token string">&#39;systemctl disable docker&#39;</span>


<span class="token comment">#镜像检索</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkse</span><span class="token operator">=</span><span class="token string">&#39;sudo docker search&#39;</span>      <span class="token comment">#镜像名称</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dklogin</span><span class="token operator">=</span><span class="token string">&#39;sudo docker login&#39;</span>    <span class="token comment">#登录远程镜像仓库</span>
<span class="token comment">#推送</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkpull</span><span class="token operator">=</span><span class="token string">&#39;sudo docker pull&#39;</span>      <span class="token comment">#镜像名称</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkcommit</span><span class="token operator">=</span><span class="token string">&#39;sudo docker commit&#39;</span>  <span class="token comment">#提交容器为镜像         [-a=&#39;作者&#39; -m=&#39;备注&#39; 运行时容器ID 新镜像名称]</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkb</span><span class="token operator">=</span><span class="token string">&#39;sudo docker build&#39;</span>        <span class="token comment">#file文件构建镜像       [-f [DockerFile文件] -t [设置标签]:版本 . ]</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dktag</span><span class="token operator">=</span><span class="token string">&#39;sudo docker tag&#39;</span>        <span class="token comment">#设置镜像为阿里|xx标签  [容器ID [设置标签]:version]</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkpush</span><span class="token operator">=</span><span class="token string">&#39;sudo docker push&#39;</span>      <span class="token comment">#镜像提交到仓库         [输入设置好的标签:verison]</span>
<span class="token comment">#镜像列表</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dki</span><span class="token operator">=</span><span class="token string">&#39;sudo docker images&#39;</span>       <span class="token comment">#镜像名称or镜像Id</span>
<span class="token comment">#镜像删除</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkrmi</span><span class="token operator">=</span><span class="token string">&#39;sudo docker rmi&#39;</span>        <span class="token comment">#镜像名称or镜像Id</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkrmif</span><span class="token operator">=</span><span class="token string">&#39;sudo docker rmi -f&#39;</span>
<span class="token comment">#删除所有镜像</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkrmia</span><span class="token operator">=</span><span class="token string">&#39;sudo docker rmi $(docker images -q)&#39;</span>
<span class="token comment">#容器列表</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkps</span><span class="token operator">=</span><span class="token string">&#39;sudo docker ps&#39;</span>  <span class="token comment">#在运行的容器</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkpsa</span><span class="token operator">=</span><span class="token string">&#39;sudo docker ps -a&#39;</span>      <span class="token comment">#全部容器</span>
<span class="token comment">#启动容器</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkstart</span><span class="token operator">=</span><span class="token string">&#39;sudo docker start&#39;</span>    <span class="token comment">#容器名称or容器Id</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkrestart</span><span class="token operator">=</span><span class="token string">&#39;sudo docker restart&#39;</span>  <span class="token comment">#容器名称or容器Id</span>
<span class="token comment">#停止容器</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkstop</span><span class="token operator">=</span><span class="token string">&#39;sudo docker stop&#39;</span>      <span class="token comment">#stop 容器名称or容器Id</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkkill</span><span class="token operator">=</span><span class="token string">&#39;sudo docker kill&#39;</span>      <span class="token comment">#docker kill 容器ID or 容器名</span>
<span class="token comment">#删除容器</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkrm</span><span class="token operator">=</span><span class="token string">&#39;sudo docker rm&#39;</span>  <span class="token comment">#docker rm 容器id</span>
<span class="token comment">#强制删除容器</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkrmf</span><span class="token operator">=</span><span class="token string">&#39;sudo docker rm -f&#39;</span>      <span class="token comment">#容器ID1  容器ID2 中间空格隔开</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkrma</span><span class="token operator">=</span><span class="token string">&#39;sudo docker rm $(docker ps -a -q)&#39;</span>      <span class="token comment">#删除所有容器</span>

<span class="token comment"># 宿主机和容器之间文件拷</span>
<span class="token comment">#docker cp 容器ID:容器目录   宿主机目录</span>
<span class="token comment">#docker cp 需要拷贝的文件或者目录  容器ID:容器目录</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dkcp</span><span class="token operator">=</span><span class="token string">&#39;sudo docker cp&#39;</span>
<span class="token comment">#容器日志</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dklogs</span><span class="token operator">=</span><span class="token string">&#39;sudo docker logs&#39;</span>      <span class="token comment">#容器名称/容器id</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按<strong>shift + ;</strong> 输入wq保存,再输入bash全局使用 使用:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kong@k:~$ dkse redis
NAME                             DESCRIPTION                                     STARS               OFFICIAL            AUTOMATED
redis                            Redis is an <span class="token function">open</span> <span class="token builtin class-name">source</span> key-value store that…   <span class="token number">9497</span>                <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>                
bitnami/redis                    Bitnami Redis Docker Image                      <span class="token number">181</span>    			<span class="token punctuation">[</span>OK<span class="token punctuation">]</span>

kong@k:~$ dkpull redis
Using default tag: latest
latest: Pulling from library/redis
Status: Downloaded newer image <span class="token keyword">for</span> redis:latest
docker.io/library/redis:latest

kong@k:~$ dki
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
redis               latest              bc8d70f9ef6c        <span class="token number">2</span> weeks ago         105MB

kong@k:~$ dkrmi redis
Untagged: redis:latest
Untagged: redis@sha256:365eddf。。。bcec912973

kong@k:~$ dki
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="windows-端" tabindex="-1"><a class="header-anchor" href="#windows-端" aria-hidden="true">#</a> windows 端</h2><p>1、在Windows Powershell 执行 <mark>echo $PROFILE</mark></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PS C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>k<span class="token punctuation">\\</span>Desktop<span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$PROFILE</span>
C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>k<span class="token punctuation">\\</span>Documents<span class="token punctuation">\\</span>WindowsPowerShell<span class="token punctuation">\\</span>Microsoft.PowerShell_profile.ps1
PS C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>k<span class="token punctuation">\\</span>Desktop<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑：C:\\Users\\k\\Documents\\WindowsPowerShell\\Microsoft.PowerShell_profile.ps1</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">dkse</span><span class="token punctuation">{</span>docker search<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function-name function">dklogin</span><span class="token punctuation">{</span>docker login<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function-name function">dkpull</span><span class="token punctuation">{</span>docker pull<span class="token punctuation">}</span>     
<span class="token keyword">function</span> <span class="token function-name function">dkcommit</span><span class="token punctuation">{</span>docker commit<span class="token punctuation">}</span> 
<span class="token keyword">function</span> <span class="token function-name function">dkb</span><span class="token punctuation">{</span>docker build<span class="token punctuation">}</span>       
<span class="token keyword">function</span> <span class="token function-name function">dktag</span><span class="token punctuation">{</span>docker tag<span class="token punctuation">}</span>        
<span class="token keyword">function</span> <span class="token function-name function">dkpush</span><span class="token punctuation">{</span>docker push<span class="token punctuation">}</span>    
<span class="token keyword">function</span> <span class="token function-name function">dki</span><span class="token punctuation">{</span>docker images<span class="token punctuation">}</span>      
<span class="token keyword">function</span> <span class="token function-name function">dkrmi</span><span class="token punctuation">{</span>docker rmi<span class="token punctuation">}</span>       
<span class="token keyword">function</span> <span class="token function-name function">dkrmif</span><span class="token punctuation">{</span>docker rmi -f<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function-name function">dkrmia</span><span class="token punctuation">{</span>docker rmi <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token parameter variable">-q</span><span class="token variable">)</span></span><span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function-name function">dkps</span><span class="token punctuation">{</span>docker ps<span class="token punctuation">}</span>  
<span class="token keyword">function</span> <span class="token function-name function">dkpsa</span><span class="token punctuation">{</span>docker <span class="token function">ps</span> -a<span class="token punctuation">}</span>    
<span class="token keyword">function</span> <span class="token function-name function">dkstart</span><span class="token punctuation">{</span>docker start<span class="token punctuation">}</span>   
<span class="token keyword">function</span> <span class="token function-name function">dkrestart</span><span class="token punctuation">{</span>docker restart<span class="token punctuation">}</span> 
<span class="token keyword">function</span> <span class="token function-name function">dkstop</span><span class="token punctuation">{</span>docker stop<span class="token punctuation">}</span>    
<span class="token keyword">function</span> <span class="token function-name function">dkkill</span><span class="token punctuation">{</span>docker kill<span class="token punctuation">}</span>   
<span class="token keyword">function</span> <span class="token function-name function">dkrm</span><span class="token punctuation">{</span>docker rm<span class="token punctuation">}</span> 
<span class="token keyword">function</span> <span class="token function-name function">dkrmf</span><span class="token punctuation">{</span>docker <span class="token function">rm</span> -f<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function-name function">dkrma</span><span class="token punctuation">{</span>docker <span class="token function">rm</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span><span class="token variable">)</span></span><span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function-name function">dkcp</span><span class="token punctuation">{</span>docker cp<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function-name function">dklogs</span><span class="token punctuation">{</span>docker logs<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以管理员身份打开Powershell 执行命令: <mark>Set-ExecutionPolicy RemoteSigned</mark> ，然后重新启动计算机</p>`,17);function p(c,o){return n(),a("div",null,[e(" more "),i])}const r=s(t,[["render",p],["__file","setting-alias.html.vue"]]);export{r as default};
