const e=JSON.parse('{"key":"v-d1a49ece","path":"/tools/rsync.html","title":"Linux 数据同步工具","lang":"zh-CN","frontmatter":{"icon":"edit","title":"Linux 数据同步工具","category":["开发工具"],"date":"2022-10-11T00:00:00.000Z","tag":["rsync"],"description":"一、简介 1、认识 Rsync（remote synchronize）是一个远程数据同步工具，可通过LAN/WAN快速同步多台主机间的文件。Rsync使用所谓的“Rsync算法”来使本地和远 程两个主机之间的文件达到同步，这个算法只传送两个文件的不同部分，而不是每次都整份传送，因此速度相当快； Rsync支持大多数的类Unix系统，无论是Linux、S...","head":[["meta",{"property":"og:url","content":"https://topjf.github.io/tools/rsync.html"}],["meta",{"property":"og:site_name","content":"topjf"}],["meta",{"property":"og:title","content":"Linux 数据同步工具"}],["meta",{"property":"og:description","content":"一、简介 1、认识 Rsync（remote synchronize）是一个远程数据同步工具，可通过LAN/WAN快速同步多台主机间的文件。Rsync使用所谓的“Rsync算法”来使本地和远 程两个主机之间的文件达到同步，这个算法只传送两个文件的不同部分，而不是每次都整份传送，因此速度相当快； Rsync支持大多数的类Unix系统，无论是Linux、S..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-16T06:02:03.000Z"}],["meta",{"property":"article:tag","content":"rsync"}],["meta",{"property":"article:published_time","content":"2022-10-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-16T06:02:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux 数据同步工具\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-10-11T00:00:00.000Z\\",\\"dateModified\\":\\"2022-12-16T06:02:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"一、简介","slug":"一、简介","link":"#一、简介","children":[{"level":3,"title":"1、认识","slug":"_1、认识","link":"#_1、认识","children":[]},{"level":3,"title":"2、原理","slug":"_2、原理","link":"#_2、原理","children":[]},{"level":3,"title":"3、特点","slug":"_3、特点","link":"#_3、特点","children":[]}]},{"level":2,"title":"二、ssh模式","slug":"二、ssh模式","link":"#二、ssh模式","children":[{"level":3,"title":"1、本地间同步","slug":"_1、本地间同步","link":"#_1、本地间同步","children":[]},{"level":3,"title":"2、局域网间同步","slug":"_2、局域网间同步","link":"#_2、局域网间同步","children":[]},{"level":3,"title":"3、局域网指定用户同步","slug":"_3、局域网指定用户同步","link":"#_3、局域网指定用户同步","children":[]}]},{"level":2,"title":"三、daemon模式","slug":"三、daemon模式","link":"#三、daemon模式","children":[{"level":3,"title":"1、服务启动方式","slug":"_1、服务启动方式","link":"#_1、服务启动方式","children":[{"level":4,"title":"1.1、对于负荷较重的 rsync 服务器应该使用独立运行方式","slug":"_1-1、对于负荷较重的-rsync-服务器应该使用独立运行方式","link":"#_1-1、对于负荷较重的-rsync-服务器应该使用独立运行方式","children":[]},{"level":4,"title":"1.2、对于负荷较轻的 rsync 服务器可以使用 xinetd 运行方式","slug":"_1-2、对于负荷较轻的-rsync-服务器可以使用-xinetd-运行方式","link":"#_1-2、对于负荷较轻的-rsync-服务器可以使用-xinetd-运行方式","children":[]}]},{"level":3,"title":"2、配置详解","slug":"_2、配置详解","link":"#_2、配置详解","children":[]},{"level":3,"title":"3、服务端配置","slug":"_3、服务端配置","link":"#_3、服务端配置","children":[]}]},{"level":2,"title":"四、测试","slug":"四、测试","link":"#四、测试","children":[{"level":3,"title":"1、客户端","slug":"_1、客户端","link":"#_1、客户端","children":[]},{"level":3,"title":"2、小试参数","slug":"_2、小试参数","link":"#_2、小试参数","children":[]},{"level":3,"title":"3、通过密码文件同步","slug":"_3、通过密码文件同步","link":"#_3、通过密码文件同步","children":[]},{"level":3,"title":"4、客户端自动同步","slug":"_4、客户端自动同步","link":"#_4、客户端自动同步","children":[]}]},{"level":2,"title":"五、数据实时同步","slug":"五、数据实时同步","link":"#五、数据实时同步","children":[{"level":3,"title":"1、inotify-tools","slug":"_1、inotify-tools","link":"#_1、inotify-tools","children":[]},{"level":3,"title":"2、安装inotify-tools","slug":"_2、安装inotify-tools","link":"#_2、安装inotify-tools","children":[]},{"level":3,"title":"3、设置环境变量","slug":"_3、设置环境变量","link":"#_3、设置环境变量","children":[]},{"level":3,"title":"4、常用参数","slug":"_4、常用参数","link":"#_4、常用参数","children":[]},{"level":3,"title":"5、测试一","slug":"_5、测试一","link":"#_5、测试一","children":[]}]}],"git":{"createdTime":1671170523000,"updatedTime":1671170523000,"contributors":[{"name":"jinfang","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":11.78,"words":3534},"filePathRelative":"tools/rsync.md","localizedDate":"2022年10月11日","excerpt":"","autoDesc":true}');export{e as data};