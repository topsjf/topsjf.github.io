const l=JSON.parse('{"key":"v-3eb73080","path":"/linux/basis/basis.html","title":"Linux基础","lang":"zh-CN","frontmatter":{"icon":"linux","title":"Linux基础","category":["Linux"],"date":"2022-07-26T00:00:00.000Z","sticky":true,"star":true,"tag":["linux"],"description":"VMware安装 参考博客 csdn ( https://blog.csdn.net/qq_42476834/article/details/104618910) 如果需要自定义分区请注意看一下：自定义分区设置 linux一般来说分为4个基本区： 用户分区：home——保存用户信息 启动分区：boot ——保存系统启动的数据，一般100到200m 交换...","head":[["meta",{"property":"og:url","content":"https://topjf.github.io/linux/basis/basis.html"}],["meta",{"property":"og:site_name","content":"topjf"}],["meta",{"property":"og:title","content":"Linux基础"}],["meta",{"property":"og:description","content":"VMware安装 参考博客 csdn ( https://blog.csdn.net/qq_42476834/article/details/104618910) 如果需要自定义分区请注意看一下：自定义分区设置 linux一般来说分为4个基本区： 用户分区：home——保存用户信息 启动分区：boot ——保存系统启动的数据，一般100到200m 交换..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://topjf.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-16T06:02:03.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Linux基础"}],["meta",{"property":"article:tag","content":"linux"}],["meta",{"property":"article:published_time","content":"2022-07-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-16T06:02:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux基础\\",\\"image\\":[\\"https://topjf.github.io/\\"],\\"datePublished\\":\\"2022-07-26T00:00:00.000Z\\",\\"dateModified\\":\\"2022-12-16T06:02:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"VMware安装","slug":"vmware安装","link":"#vmware安装","children":[]},{"level":2,"title":"Linux学习路线","slug":"linux学习路线","link":"#linux学习路线","children":[]},{"level":2,"title":"Linux 内核","slug":"linux-内核","link":"#linux-内核","children":[]},{"level":2,"title":"linux 目录介绍","slug":"linux-目录介绍","link":"#linux-目录介绍","children":[]},{"level":2,"title":"Linux 文件系统","slug":"linux-文件系统","link":"#linux-文件系统","children":[]},{"level":2,"title":"Linux发行版","slug":"linux发行版","link":"#linux发行版","children":[]},{"level":2,"title":"目录文件管理","slug":"目录文件管理","link":"#目录文件管理","children":[{"level":3,"title":"cd 切换目录","slug":"cd-切换目录","link":"#cd-切换目录","children":[]},{"level":3,"title":"ls 显示目录文件","slug":"ls-显示目录文件","link":"#ls-显示目录文件","children":[]},{"level":3,"title":"ln 链接创建","slug":"ln-链接创建","link":"#ln-链接创建","children":[]},{"level":3,"title":"mkdir 创建目录","slug":"mkdir-创建目录","link":"#mkdir-创建目录","children":[]},{"level":3,"title":"pwd 显示当前目录","slug":"pwd-显示当前目录","link":"#pwd-显示当前目录","children":[]},{"level":3,"title":"cp 复制文件或目录","slug":"cp-复制文件或目录","link":"#cp-复制文件或目录","children":[]},{"level":3,"title":"mv 剪切文件或目录","slug":"mv-剪切文件或目录","link":"#mv-剪切文件或目录","children":[]},{"level":3,"title":"rmdir 删除空目录","slug":"rmdir-删除空目录","link":"#rmdir-删除空目录","children":[]},{"level":3,"title":"rm 删除文件或目录","slug":"rm-删除文件或目录","link":"#rm-删除文件或目录","children":[]},{"level":3,"title":"touch 创建文件","slug":"touch-创建文件","link":"#touch-创建文件","children":[]},{"level":3,"title":"echo 打印字符或者回显","slug":"echo-打印字符或者回显","link":"#echo-打印字符或者回显","children":[]},{"level":3,"title":"tee","slug":"tee","link":"#tee","children":[]},{"level":3,"title":"cat 显示较少内容","slug":"cat-显示较少内容","link":"#cat-显示较少内容","children":[]},{"level":3,"title":"more 向后分页","slug":"more-向后分页","link":"#more-向后分页","children":[]},{"level":3,"title":"less 前后翻页","slug":"less-前后翻页","link":"#less-前后翻页","children":[]},{"level":3,"title":"find 查找文件或者目录","slug":"find-查找文件或者目录","link":"#find-查找文件或者目录","children":[]},{"level":3,"title":"head 查看文件内容","slug":"head-查看文件内容","link":"#head-查看文件内容","children":[]},{"level":3,"title":"tail 查看文件内容后10行","slug":"tail-查看文件内容后10行","link":"#tail-查看文件内容后10行","children":[]},{"level":3,"title":"file 查看文件类型","slug":"file-查看文件类型","link":"#file-查看文件类型","children":[]},{"level":3,"title":"which","slug":"which","link":"#which","children":[]},{"level":3,"title":"whereis","slug":"whereis","link":"#whereis","children":[]},{"level":3,"title":"read","slug":"read","link":"#read","children":[]},{"level":3,"title":"awk","slug":"awk","link":"#awk","children":[]},{"level":3,"title":"sort 排序数据","slug":"sort-排序数据","link":"#sort-排序数据","children":[]}]},{"level":2,"title":"符号含义","slug":"符号含义","link":"#符号含义","children":[]},{"level":2,"title":"编辑器","slug":"编辑器","link":"#编辑器","children":[{"level":3,"title":"vim","slug":"vim","link":"#vim","children":[]},{"level":3,"title":"nano","slug":"nano","link":"#nano","children":[]},{"level":3,"title":"emacs","slug":"emacs","link":"#emacs","children":[]},{"level":3,"title":"kde","slug":"kde","link":"#kde","children":[]},{"level":3,"title":"gnome","slug":"gnome","link":"#gnome","children":[]}]},{"level":2,"title":"用户及权限管理","slug":"用户及权限管理","link":"#用户及权限管理","children":[{"level":3,"title":"chown 所属组","slug":"chown-所属组","link":"#chown-所属组","children":[]},{"level":3,"title":"chmod 文件权限","slug":"chmod-文件权限","link":"#chmod-文件权限","children":[]},{"level":3,"title":"usermod 将用户添加到其他组","slug":"usermod-将用户添加到其他组","link":"#usermod-将用户添加到其他组","children":[]},{"level":3,"title":"umask 显示、设置文件的缺省权限","slug":"umask-显示、设置文件的缺省权限","link":"#umask-显示、设置文件的缺省权限","children":[]},{"level":3,"title":"chgrp","slug":"chgrp","link":"#chgrp","children":[]}]},{"level":2,"title":"文件传输","slug":"文件传输","link":"#文件传输","children":[]},{"level":2,"title":"sed","slug":"sed","link":"#sed","children":[]},{"level":2,"title":"gawk","slug":"gawk","link":"#gawk","children":[]},{"level":2,"title":"正则表达式","slug":"正则表达式","link":"#正则表达式","children":[]},{"level":2,"title":"系统管理","slug":"系统管理","link":"#系统管理","children":[{"level":3,"title":"ps 进程管理","slug":"ps-进程管理","link":"#ps-进程管理","children":[]},{"level":3,"title":"top 实时监测进程","slug":"top-实时监测进程","link":"#top-实时监测进程","children":[]},{"level":3,"title":"kill 终止进程","slug":"kill-终止进程","link":"#kill-终止进程","children":[]},{"level":3,"title":"防火墙","slug":"防火墙","link":"#防火墙","children":[]},{"level":3,"title":"deepin 防火墙","slug":"deepin-防火墙","link":"#deepin-防火墙","children":[]},{"level":3,"title":"端口","slug":"端口","link":"#端口","children":[]},{"level":3,"title":"修改文件监视程序数量的系统限制","slug":"修改文件监视程序数量的系统限制","link":"#修改文件监视程序数量的系统限制","children":[]}]},{"level":2,"title":"系统设置","slug":"系统设置","link":"#系统设置","children":[]},{"level":2,"title":"安装软件程序","slug":"安装软件程序","link":"#安装软件程序","children":[]},{"level":2,"title":"备份压缩","slug":"备份压缩","link":"#备份压缩","children":[{"level":3,"title":"tar 归档数据","slug":"tar-归档数据","link":"#tar-归档数据","children":[]}]},{"level":2,"title":"磁盘管理","slug":"磁盘管理","link":"#磁盘管理","children":[{"level":3,"title":"df 检查文件系统的磁盘空间占用情况","slug":"df-检查文件系统的磁盘空间占用情况","link":"#df-检查文件系统的磁盘空间占用情况","children":[]},{"level":3,"title":"du 查看使用空间","slug":"du-查看使用空间","link":"#du-查看使用空间","children":[]},{"level":3,"title":"fdisk 磁盘分区表","slug":"fdisk-磁盘分区表","link":"#fdisk-磁盘分区表","children":[]},{"level":3,"title":"mkfs 磁盘格式化","slug":"mkfs-磁盘格式化","link":"#mkfs-磁盘格式化","children":[]},{"level":3,"title":"fsck 磁盘检验","slug":"fsck-磁盘检验","link":"#fsck-磁盘检验","children":[]},{"level":3,"title":"mount 磁盘挂载与卸除","slug":"mount-磁盘挂载与卸除","link":"#mount-磁盘挂载与卸除","children":[]}]},{"level":2,"title":"磁盘维护","slug":"磁盘维护","link":"#磁盘维护","children":[]},{"level":2,"title":"网络通讯","slug":"网络通讯","link":"#网络通讯","children":[]},{"level":2,"title":"设备管理","slug":"设备管理","link":"#设备管理","children":[]},{"level":2,"title":"电子邮件与新闻组","slug":"电子邮件与新闻组","link":"#电子邮件与新闻组","children":[]},{"level":2,"title":"其他命令","slug":"其他命令","link":"#其他命令","children":[]},{"level":2,"title":"启动 java 服务","slug":"启动-java-服务","link":"#启动-java-服务","children":[]},{"level":2,"title":"实用的工具","slug":"实用的工具","link":"#实用的工具","children":[]}],"git":{"createdTime":1671170523000,"updatedTime":1671170523000,"contributors":[{"name":"jinfang","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":8.42,"words":2525},"filePathRelative":"linux/basis/basis.md","localizedDate":"2022年7月26日","excerpt":"","autoDesc":true}');export{l as data};
