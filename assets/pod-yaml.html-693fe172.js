const e=JSON.parse('{"key":"v-0d882c70","path":"/k8s/pod-yaml.html","title":"k8s Pod-yaml篇","lang":"zh-CN","frontmatter":{"icon":"/icons/k8s/k8s_16x16.png","title":"k8s Pod-yaml篇","category":["kubernetes"],"date":"2022-08-24T00:00:00.000Z","tag":["Linux","k8s"],"description":"1、Pod 整体结构 Pod YAML的整体结构，可以初步分为 Resource(资源)、Object(元数据)、Spec(规范)、Status(状态)。 Resource：定义资源类型与版本， 作为从Rest API中获取资源必带的属性。; Object：资源的元数据属性，明确资源的基本标识。; Spec / Status：; - Spec：定义资源...","head":[["meta",{"property":"og:url","content":"https://topjf.github.io/k8s/pod-yaml.html"}],["meta",{"property":"og:site_name","content":"topjf"}],["meta",{"property":"og:title","content":"k8s Pod-yaml篇"}],["meta",{"property":"og:description","content":"1、Pod 整体结构 Pod YAML的整体结构，可以初步分为 Resource(资源)、Object(元数据)、Spec(规范)、Status(状态)。 Resource：定义资源类型与版本， 作为从Rest API中获取资源必带的属性。; Object：资源的元数据属性，明确资源的基本标识。; Spec / Status：; - Spec：定义资源..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://topjf.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-16T06:02:03.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"k8s Pod-yaml篇"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"k8s"}],["meta",{"property":"article:published_time","content":"2022-08-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-16T06:02:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"k8s Pod-yaml篇\\",\\"image\\":[\\"https://topjf.github.io/\\"],\\"datePublished\\":\\"2022-08-24T00:00:00.000Z\\",\\"dateModified\\":\\"2022-12-16T06:02:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1、Pod 整体结构","slug":"_1、pod-整体结构","link":"#_1、pod-整体结构","children":[]},{"level":2,"title":"2、Resource（资源）- Rest API","slug":"_2、resource-资源-rest-api","link":"#_2、resource-资源-rest-api","children":[]},{"level":2,"title":"3、Object（元数据）","slug":"_3、object-元数据","link":"#_3、object-元数据","children":[{"level":3,"title":"label & Selector","slug":"label-selector","link":"#label-selector","children":[]},{"level":3,"title":"Owner & GC(垃圾回收)","slug":"owner-gc-垃圾回收","link":"#owner-gc-垃圾回收","children":[]},{"level":3,"title":"Deploy & Replicaset","slug":"deploy-replicaset","link":"#deploy-replicaset","children":[]}]},{"level":2,"title":"4、Spec（规范）","slug":"_4、spec-规范","link":"#_4、spec-规范","children":[{"level":3,"title":"Pod生命周期: Pending","slug":"pod生命周期-pending","link":"#pod生命周期-pending","children":[]},{"level":3,"title":"资源策略","slug":"资源策略","link":"#资源策略","children":[]},{"level":3,"title":"节点标签筛选策略","slug":"节点标签筛选策略","link":"#节点标签筛选策略","children":[]},{"level":3,"title":"亲和策略","slug":"亲和策略","link":"#亲和策略","children":[]},{"level":3,"title":"Pod生命周期: Creating","slug":"pod生命周期-creating","link":"#pod生命周期-creating","children":[]},{"level":3,"title":"image","slug":"image","link":"#image","children":[]},{"level":3,"title":"containers","slug":"containers","link":"#containers","children":[]},{"level":3,"title":"postStart","slug":"poststart","link":"#poststart","children":[]},{"level":3,"title":"Pod生命周期: Running","slug":"pod生命周期-running","link":"#pod生命周期-running","children":[]}]},{"level":2,"title":"5、Status（状态）","slug":"_5、status-状态","link":"#_5、status-状态","children":[]}],"git":{"createdTime":1671170523000,"updatedTime":1671170523000,"contributors":[{"name":"jinfang","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":11.6,"words":3479},"filePathRelative":"k8s/pod-yaml.md","localizedDate":"2022年8月24日","excerpt":"","autoDesc":true}');export{e as data};
