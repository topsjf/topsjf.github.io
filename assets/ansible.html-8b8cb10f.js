const e=JSON.parse('{"key":"v-0fb1720c","path":"/linux/ansible/ansible.html","title":"ansible AD-Hoc命令执行工具","lang":"zh-CN","frontmatter":{"icon":"linux","title":"ansible AD-Hoc命令执行工具","category":["Linux"],"date":"2022-07-29T00:00:00.000Z","tag":["ansible"],"description":"ansible 中文指南 (http://ansible.com.cn/docs/intro.html) 本节示例文件 提取码：1234 (https://pan.baidu.com/s/1fkosURl4HaYZALtSjKvcKg) 一、ansible AD-Hoc Ansibe AD-Hoc 临时命令执行工具，常用于临时命令的执行 也可以通过an...","head":[["meta",{"property":"og:url","content":"https://topjf.github.io/linux/ansible/ansible.html"}],["meta",{"property":"og:site_name","content":"topjf"}],["meta",{"property":"og:title","content":"ansible AD-Hoc命令执行工具"}],["meta",{"property":"og:description","content":"ansible 中文指南 (http://ansible.com.cn/docs/intro.html) 本节示例文件 提取码：1234 (https://pan.baidu.com/s/1fkosURl4HaYZALtSjKvcKg) 一、ansible AD-Hoc Ansibe AD-Hoc 临时命令执行工具，常用于临时命令的执行 也可以通过an..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://topjf.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-16T06:02:03.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"ansible AD-Hoc命令执行工具"}],["meta",{"property":"article:tag","content":"ansible"}],["meta",{"property":"article:published_time","content":"2022-07-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-16T06:02:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ansible AD-Hoc命令执行工具\\",\\"image\\":[\\"https://topjf.github.io/\\"],\\"datePublished\\":\\"2022-07-29T00:00:00.000Z\\",\\"dateModified\\":\\"2022-12-16T06:02:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"一、ansible AD-Hoc","slug":"一、ansible-ad-hoc","link":"#一、ansible-ad-hoc","children":[{"level":3,"title":"自己配置","slug":"自己配置","link":"#自己配置","children":[]},{"level":3,"title":"SSH免密登录","slug":"ssh免密登录","link":"#ssh免密登录","children":[]},{"level":3,"title":"主机连通性测试","slug":"主机连通性测试","link":"#主机连通性测试","children":[]},{"level":3,"title":"command 模块（直接在远程主机上执行命令，并将结果返回本主机）","slug":"command-模块-直接在远程主机上执行命令-并将结果返回本主机","link":"#command-模块-直接在远程主机上执行命令-并将结果返回本主机","children":[{"level":4,"title":"chdir 在执行命令之前，先切换到该目录","slug":"chdir-在执行命令之前-先切换到该目录","link":"#chdir-在执行命令之前-先切换到该目录","children":[]},{"level":4,"title":"creates（存在，不执行ls，不存在，执行ls）","slug":"creates-存在-不执行ls-不存在-执行ls","link":"#creates-存在-不执行ls-不存在-执行ls","children":[]},{"level":4,"title":"removes（存在，执行ls、不存在，不执行ls）","slug":"removes-存在-执行ls、不存在-不执行ls","link":"#removes-存在-执行ls、不存在-不执行ls","children":[]}]},{"level":3,"title":"Shell 模块","slug":"shell-模块","link":"#shell-模块","children":[]},{"level":3,"title":"copy 模块","slug":"copy-模块","link":"#copy-模块","children":[{"level":4,"title":"复制文件（src、dest）","slug":"复制文件-src、dest","link":"#复制文件-src、dest","children":[]},{"level":4,"title":"给定内容生成文件（content），并制定权限（mode）","slug":"给定内容生成文件-content-并制定权限-mode","link":"#给定内容生成文件-content-并制定权限-mode","children":[]},{"level":4,"title":"覆盖备份（backup）","slug":"覆盖备份-backup","link":"#覆盖备份-backup","children":[]}]},{"level":3,"title":"file 模块（文件管理）","slug":"file-模块-文件管理","link":"#file-模块-文件管理","children":[{"level":4,"title":"创建目录","slug":"创建目录","link":"#创建目录","children":[]},{"level":4,"title":"创建链接文件","slug":"创建链接文件","link":"#创建链接文件","children":[]},{"level":4,"title":"删除文件","slug":"删除文件","link":"#删除文件","children":[]}]},{"level":3,"title":"fetch 模块（复制远程文件到本地主机）","slug":"fetch-模块-复制远程文件到本地主机","link":"#fetch-模块-复制远程文件到本地主机","children":[]},{"level":3,"title":"cron 模块（计划任务）","slug":"cron-模块-计划任务","link":"#cron-模块-计划任务","children":[{"level":4,"title":"① 添加计划任务","slug":"_1-添加计划任务","link":"#_1-添加计划任务","children":[]},{"level":4,"title":"② 删除计划任务","slug":"_2-删除计划任务","link":"#_2-删除计划任务","children":[]}]},{"level":3,"title":"yum 模块（用于软件的安装）","slug":"yum-模块-用于软件的安装","link":"#yum-模块-用于软件的安装","children":[]},{"level":3,"title":"service 模块（服务程序的管理）","slug":"service-模块-服务程序的管理","link":"#service-模块-服务程序的管理","children":[{"level":4,"title":"① 开启服务并设置自启动","slug":"_1-开启服务并设置自启动","link":"#_1-开启服务并设置自启动","children":[]},{"level":4,"title":"② 关闭服务","slug":"_2-关闭服务","link":"#_2-关闭服务","children":[]}]},{"level":3,"title":"user 模块（管理用户账号）","slug":"user-模块-管理用户账号","link":"#user-模块-管理用户账号","children":[{"level":4,"title":"① 添加一个用户并指定其 uid","slug":"_1-添加一个用户并指定其-uid","link":"#_1-添加一个用户并指定其-uid","children":[]},{"level":4,"title":"② 删除用户","slug":"_2-删除用户","link":"#_2-删除用户","children":[]}]},{"level":3,"title":"group 模块（添加或删除组）","slug":"group-模块-添加或删除组","link":"#group-模块-添加或删除组","children":[{"level":4,"title":"① 创建组","slug":"_1-创建组","link":"#_1-创建组","children":[]},{"level":4,"title":"② 删除组","slug":"_2-删除组","link":"#_2-删除组","children":[]}]},{"level":3,"title":"script 模块（将本机的脚本sh在被管理端的机器上运行）","slug":"script-模块-将本机的脚本sh在被管理端的机器上运行","link":"#script-模块-将本机的脚本sh在被管理端的机器上运行","children":[]},{"level":3,"title":"setup 模块（收集被管理主机的信息）","slug":"setup-模块-收集被管理主机的信息","link":"#setup-模块-收集被管理主机的信息","children":[{"level":4,"title":"① 查看信息","slug":"_1-查看信息","link":"#_1-查看信息","children":[]},{"level":4,"title":"② 保存信息","slug":"_2-保存信息","link":"#_2-保存信息","children":[]}]}]}],"git":{"createdTime":1671170523000,"updatedTime":1671170523000,"contributors":[{"name":"jinfang","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":18.44,"words":5533},"filePathRelative":"linux/ansible/ansible.md","localizedDate":"2022年7月29日","excerpt":"","autoDesc":true}');export{e as data};
