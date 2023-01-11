const e=JSON.parse('{"key":"v-5ac119a1","path":"/k8s/nfs-pv-pvc-config-secret.html","title":"k8s nfs-pv-pvc-ConfigMap-secret","lang":"zh-CN","frontmatter":{"icon":"/icons/k8s/k8s_16x16.png","title":"k8s nfs-pv-pvc-ConfigMap-secret","category":["kubernetes"],"date":"2022-08-24T00:00:00.000Z","tag":["Linux","k8s"],"description":"NFS 文件系统 安装nfs (https://zhuanlan.zhihu.com/p/411489781) storageclass存储方法 (https://blog.csdn.net/weixin_43384009/article/details/105958068) nfs文件系统 (https://www.yuque.com/leifeng...","head":[["meta",{"property":"og:url","content":"https://topjf.github.io/k8s/nfs-pv-pvc-config-secret.html"}],["meta",{"property":"og:site_name","content":"topjf"}],["meta",{"property":"og:title","content":"k8s nfs-pv-pvc-ConfigMap-secret"}],["meta",{"property":"og:description","content":"NFS 文件系统 安装nfs (https://zhuanlan.zhihu.com/p/411489781) storageclass存储方法 (https://blog.csdn.net/weixin_43384009/article/details/105958068) nfs文件系统 (https://www.yuque.com/leifeng..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-16T06:02:03.000Z"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"k8s"}],["meta",{"property":"article:published_time","content":"2022-08-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-16T06:02:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"k8s nfs-pv-pvc-ConfigMap-secret\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-24T00:00:00.000Z\\",\\"dateModified\\":\\"2022-12-16T06:02:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"NFS 文件系统","slug":"nfs-文件系统","link":"#nfs-文件系统","children":[{"level":3,"title":"a、安装nfs文件系统","slug":"a、安装nfs文件系统","link":"#a、安装nfs文件系统","children":[]},{"level":3,"title":"b、配置nfs-client（选做）","slug":"b、配置nfs-client-选做","link":"#b、配置nfs-client-选做","children":[]},{"level":3,"title":"c、配置默认存储","slug":"c、配置默认存储","link":"#c、配置默认存储","children":[]},{"level":3,"title":"d、确认配置是否生效","slug":"d、确认配置是否生效","link":"#d、确认配置是否生效","children":[]},{"level":3,"title":"e、metrics-server","slug":"e、metrics-server","link":"#e、metrics-server","children":[]}]},{"level":2,"title":"PV&PVC","slug":"pv-pvc","link":"#pv-pvc","children":[{"level":3,"title":"1、创建pv池 pv.yaml","slug":"_1、创建pv池-pv-yaml","link":"#_1、创建pv池-pv-yaml","children":[]},{"level":3,"title":"2、PVC创建与绑定","slug":"_2、pvc创建与绑定","link":"#_2、pvc创建与绑定","children":[]},{"level":3,"title":"3、创建Pod绑定PVC pvc-deploy.yaml","slug":"_3、创建pod绑定pvc-pvc-deploy-yaml","link":"#_3、创建pod绑定pvc-pvc-deploy-yaml","children":[]}]},{"level":2,"title":"ConfigMap","slug":"configmap","link":"#configmap","children":[{"level":3,"title":"1、以 redis 示例","slug":"_1、以-redis-示例","link":"#_1、以-redis-示例","children":[{"level":4,"title":"1、把之前的配置文件创建为配置集","slug":"_1、把之前的配置文件创建为配置集","link":"#_1、把之前的配置文件创建为配置集","children":[]},{"level":4,"title":"2、创建Pod","slug":"_2、创建pod","link":"#_2、创建pod","children":[]},{"level":4,"title":"3、检查默认配置","slug":"_3、检查默认配置","link":"#_3、检查默认配置","children":[]},{"level":4,"title":"4、修改ConfigMap","slug":"_4、修改configmap","link":"#_4、修改configmap","children":[]},{"level":4,"title":"5、检查配置是否更新","slug":"_5、检查配置是否更新","link":"#_5、检查配置是否更新","children":[]}]}]},{"level":2,"title":"secret","slug":"secret","link":"#secret","children":[]}],"git":{"createdTime":1671170523000,"updatedTime":1671170523000,"contributors":[{"name":"jinfang","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":6.27,"words":1881},"filePathRelative":"k8s/nfs-pv-pvc-config-secret.md","localizedDate":"2022年8月24日","excerpt":"","autoDesc":true}');export{e as data};