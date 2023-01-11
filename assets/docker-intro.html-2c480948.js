const e=JSON.parse('{"key":"v-00d52cf8","path":"/docker/docker-intro.html","title":"Docker 基本概念解读","lang":"zh-CN","frontmatter":{"icon":"/icons/docker/docker_16x16.png","title":"Docker 基本概念解读","category":["Docker"],"date":"2020-01-01T00:00:00.000Z","tag":["Docker"],"description":"本文只是对 Docker 的概念做了较为详细的介绍，并不涉及一些像 Docker 环境的安装以及 Docker 的一些常见操作和命令。","head":[["meta",{"property":"og:url","content":"https://topjf.github.io/docker/docker-intro.html"}],["meta",{"property":"og:site_name","content":"topjf"}],["meta",{"property":"og:title","content":"Docker 基本概念解读"}],["meta",{"property":"og:description","content":"本文只是对 Docker 的概念做了较为详细的介绍，并不涉及一些像 Docker 环境的安装以及 Docker 的一些常见操作和命令。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-16T06:02:03.000Z"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-16T06:02:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker 基本概念解读\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2022-12-16T06:02:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"一 认识容器","slug":"一-认识容器","link":"#一-认识容器","children":[{"level":3,"title":"1.1 什么是容器?","slug":"_1-1-什么是容器","link":"#_1-1-什么是容器","children":[{"level":4,"title":"先来看看容器较为官方的解释","slug":"先来看看容器较为官方的解释","link":"#先来看看容器较为官方的解释","children":[]},{"level":4,"title":"再来看看容器较为通俗的解释","slug":"再来看看容器较为通俗的解释","link":"#再来看看容器较为通俗的解释","children":[]}]},{"level":3,"title":"1.2 图解物理机,虚拟机与容器","slug":"_1-2-图解物理机-虚拟机与容器","link":"#_1-2-图解物理机-虚拟机与容器","children":[]}]},{"level":2,"title":"二 再来谈谈 Docker 的一些概念","slug":"二-再来谈谈-docker-的一些概念","link":"#二-再来谈谈-docker-的一些概念","children":[{"level":3,"title":"2.1 什么是 Docker?","slug":"_2-1-什么是-docker","link":"#_2-1-什么是-docker","children":[]},{"level":3,"title":"2.2 Docker 思想","slug":"_2-2-docker-思想","link":"#_2-2-docker-思想","children":[]},{"level":3,"title":"2.3 Docker 容器的特点","slug":"_2-3-docker-容器的特点","link":"#_2-3-docker-容器的特点","children":[]},{"level":3,"title":"2.4 为什么要用 Docker ?","slug":"_2-4-为什么要用-docker","link":"#_2-4-为什么要用-docker","children":[]}]},{"level":2,"title":"三 容器 VS 虚拟机","slug":"三-容器-vs-虚拟机","link":"#三-容器-vs-虚拟机","children":[{"level":3,"title":"3.1 两者对比图","slug":"_3-1-两者对比图","link":"#_3-1-两者对比图","children":[]},{"level":3,"title":"3.2 容器与虚拟机总结","slug":"_3-2-容器与虚拟机总结","link":"#_3-2-容器与虚拟机总结","children":[]},{"level":3,"title":"3.3 容器与虚拟机两者是可以共存的","slug":"_3-3-容器与虚拟机两者是可以共存的","link":"#_3-3-容器与虚拟机两者是可以共存的","children":[]}]},{"level":2,"title":"四 Docker 基本概念","slug":"四-docker-基本概念","link":"#四-docker-基本概念","children":[{"level":3,"title":"4.1 镜像(Image):一个特殊的文件系统","slug":"_4-1-镜像-image-一个特殊的文件系统","link":"#_4-1-镜像-image-一个特殊的文件系统","children":[]},{"level":3,"title":"4.2 容器(Container):镜像运行时的实体","slug":"_4-2-容器-container-镜像运行时的实体","link":"#_4-2-容器-container-镜像运行时的实体","children":[]},{"level":3,"title":"4.3 仓库(Repository):集中存放镜像文件的地方","slug":"_4-3-仓库-repository-集中存放镜像文件的地方","link":"#_4-3-仓库-repository-集中存放镜像文件的地方","children":[]}]},{"level":2,"title":"五 常见命令","slug":"五-常见命令","link":"#五-常见命令","children":[{"level":3,"title":"5.1 基本命令","slug":"_5-1-基本命令","link":"#_5-1-基本命令","children":[]},{"level":3,"title":"5.2 拉取镜像","slug":"_5-2-拉取镜像","link":"#_5-2-拉取镜像","children":[]},{"level":3,"title":"5.3 删除镜像","slug":"_5-3-删除镜像","link":"#_5-3-删除镜像","children":[]}]},{"level":2,"title":"六 Build Ship and Run","slug":"六-build-ship-and-run","link":"#六-build-ship-and-run","children":[]},{"level":2,"title":"七 简单了解一下 Docker 底层原理","slug":"七-简单了解一下-docker-底层原理","link":"#七-简单了解一下-docker-底层原理","children":[{"level":3,"title":"7.1 虚拟化技术","slug":"_7-1-虚拟化技术","link":"#_7-1-虚拟化技术","children":[]},{"level":3,"title":"7.2 Docker 基于 LXC 虚拟容器技术","slug":"_7-2-docker-基于-lxc-虚拟容器技术","link":"#_7-2-docker-基于-lxc-虚拟容器技术","children":[]}]},{"level":2,"title":"八 总结","slug":"八-总结","link":"#八-总结","children":[]},{"level":2,"title":"九 推荐阅读","slug":"九-推荐阅读","link":"#九-推荐阅读","children":[]},{"level":2,"title":"十 参考","slug":"十-参考","link":"#十-参考","children":[]}],"git":{"createdTime":1671170523000,"updatedTime":1671170523000,"contributors":[{"name":"jinfang","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":18.25,"words":5474},"filePathRelative":"docker/docker-intro.md","localizedDate":"2020年1月1日","excerpt":"<p><strong>本文只是对 Docker 的概念做了较为详细的介绍，并不涉及一些像 Docker 环境的安装以及 Docker 的一些常见操作和命令。</strong></p>\\n","autoDesc":true}');export{e as data};
