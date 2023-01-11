const l=JSON.parse('{"key":"v-5e6faf8e","path":"/java/basis/mysql-setting.html","title":"数据库设计需要注意什么","lang":"zh-CN","frontmatter":{"icon":"edit","title":"数据库设计需要注意什么","category":["database"],"date":"2019-08-13T00:00:00.000Z","tag":["MySQL"],"description":"数据库设计需要注意什么？ 一、 基础规范 1、必须使用InnoDB存储引擎 支持事务、行级锁、并发性能更好、CPU及内存缓存页优化使得资源利用率更高 2、新库默认使用utf8mb4字符集 utf8mb4是utf8的超集，emoji表情以及部分不常见汉字在utf8下会表现为乱码。 3、数据表、数据字段必须加中文注释 添加注释能以后更好的知道是干什么用的 ...","head":[["meta",{"property":"og:url","content":"https://topjf.github.io/java/basis/mysql-setting.html"}],["meta",{"property":"og:site_name","content":"topjf"}],["meta",{"property":"og:title","content":"数据库设计需要注意什么"}],["meta",{"property":"og:description","content":"数据库设计需要注意什么？ 一、 基础规范 1、必须使用InnoDB存储引擎 支持事务、行级锁、并发性能更好、CPU及内存缓存页优化使得资源利用率更高 2、新库默认使用utf8mb4字符集 utf8mb4是utf8的超集，emoji表情以及部分不常见汉字在utf8下会表现为乱码。 3、数据表、数据字段必须加中文注释 添加注释能以后更好的知道是干什么用的 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://topjf.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-16T06:02:03.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"数据库设计需要注意什么"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2019-08-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-16T06:02:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据库设计需要注意什么\\",\\"image\\":[\\"https://topjf.github.io/\\"],\\"datePublished\\":\\"2019-08-13T00:00:00.000Z\\",\\"dateModified\\":\\"2022-12-16T06:02:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"一、 基础规范","slug":"一、-基础规范","link":"#一、-基础规范","children":[{"level":3,"title":"1、必须使用InnoDB存储引擎","slug":"_1、必须使用innodb存储引擎","link":"#_1、必须使用innodb存储引擎","children":[]},{"level":3,"title":"2、新库默认使用utf8mb4字符集","slug":"_2、新库默认使用utf8mb4字符集","link":"#_2、新库默认使用utf8mb4字符集","children":[]},{"level":3,"title":"3、数据表、数据字段必须加中文注释","slug":"_3、数据表、数据字段必须加中文注释","link":"#_3、数据表、数据字段必须加中文注释","children":[]},{"level":3,"title":"4、禁止使用存储过程、视图、触发器、Event","slug":"_4、禁止使用存储过程、视图、触发器、event","link":"#_4、禁止使用存储过程、视图、触发器、event","children":[]},{"level":3,"title":"5、禁止存储大文件或者大照片","slug":"_5、禁止存储大文件或者大照片","link":"#_5、禁止存储大文件或者大照片","children":[]},{"level":3,"title":"6、禁止使用应用程序配置文件内的账号手工访问线上数据库","slug":"_6、禁止使用应用程序配置文件内的账号手工访问线上数据库","link":"#_6、禁止使用应用程序配置文件内的账号手工访问线上数据库","children":[]},{"level":3,"title":"7、禁止非DBA对线上数据库进行写操作，修改线上数据需要提交工单，由DBA执行，提交的SQL语句必须经过测试","slug":"_7、禁止非dba对线上数据库进行写操作-修改线上数据需要提交工单-由dba执行-提交的sql语句必须经过测试","link":"#_7、禁止非dba对线上数据库进行写操作-修改线上数据需要提交工单-由dba执行-提交的sql语句必须经过测试","children":[]},{"level":3,"title":"8、分配非DBA以只读账号，必须通过VPN+跳板机访问授权的从库","slug":"_8、分配非dba以只读账号-必须通过vpn-跳板机访问授权的从库","link":"#_8、分配非dba以只读账号-必须通过vpn-跳板机访问授权的从库","children":[]},{"level":3,"title":"9、开发、测试、线上环境隔离","slug":"_9、开发、测试、线上环境隔离","link":"#_9、开发、测试、线上环境隔离","children":[]},{"level":3,"title":"10、不在数据库做计算，cpu计算务必移至业务层","slug":"_10、不在数据库做计算-cpu计算务必移至业务层","link":"#_10、不在数据库做计算-cpu计算务必移至业务层","children":[]},{"level":3,"title":"11、平衡范式与冗余，为提高效率可以牺牲范式设计，冗余数据","slug":"_11、平衡范式与冗余-为提高效率可以牺牲范式设计-冗余数据","link":"#_11、平衡范式与冗余-为提高效率可以牺牲范式设计-冗余数据","children":[]},{"level":3,"title":"12、拒绝3B，大SQL，大事务，大批量","slug":"_12、拒绝3b-大sql-大事务-大批量","link":"#_12、拒绝3b-大sql-大事务-大批量","children":[]}]},{"level":2,"title":"二、 命名规范","slug":"二、-命名规范","link":"#二、-命名规范","children":[{"level":3,"title":"1、只允许使用内网域名，而不是ip连接数据库","slug":"_1、只允许使用内网域名-而不是ip连接数据库","link":"#_1、只允许使用内网域名-而不是ip连接数据库","children":[]},{"level":3,"title":"2、库名、表名、字段名：小写，下划线风格，不超过32个字符，禁止拼音英文混用","slug":"_2、库名、表名、字段名-小写-下划线风格-不超过32个字符-禁止拼音英文混用","link":"#_2、库名、表名、字段名-小写-下划线风格-不超过32个字符-禁止拼音英文混用","children":[]},{"level":3,"title":"3、表名t_xxx，非唯一索引名idx_xxx，唯一索引名uniq_xxx（idx：索引文件Index file）","slug":"_3、表名t-xxx-非唯一索引名idx-xxx-唯一索引名uniq-xxx-idx-索引文件index-file","link":"#_3、表名t-xxx-非唯一索引名idx-xxx-唯一索引名uniq-xxx-idx-索引文件index-file","children":[]}]},{"level":2,"title":"三、 表设计规范","slug":"三、-表设计规范","link":"#三、-表设计规范","children":[{"level":3,"title":"1、单实例表数目必须小于500","slug":"_1、单实例表数目必须小于500","link":"#_1、单实例表数目必须小于500","children":[]},{"level":3,"title":"2、单表列数目必须小于30","slug":"_2、单表列数目必须小于30","link":"#_2、单表列数目必须小于30","children":[]},{"level":3,"title":"3、表必须有主键，例如自增主键","slug":"_3、表必须有主键-例如自增主键","link":"#_3、表必须有主键-例如自增主键","children":[]},{"level":3,"title":"4、禁止使用外键，如果有外键完整性约束，需要应用程序控制外键会导致表与表之间的耦合，update和delete操作都会涉及相关联的表，影响SQL的性能，甚至会造成死锁。高并发情况下容易造成数据库性能，大数据高并发业务场景数据库使用性能优先。","slug":"_4、禁止使用外键-如果有外键完整性约束-需要应用程序控制外键会导致表与表之间的耦合-update和delete操作都会涉及相关联的表-影响sql的性能-甚至会造成死锁。高并发情况下容易造成数据库性能-大数据高并发业务场景数据库使用性能优先。","link":"#_4、禁止使用外键-如果有外键完整性约束-需要应用程序控制外键会导致表与表之间的耦合-update和delete操作都会涉及相关联的表-影响sql的性能-甚至会造成死锁。高并发情况下容易造成数据库性能-大数据高并发业务场景数据库使用性能优先。","children":[]},{"level":3,"title":"5、控制单表数据量，单表记录控制在千万级。","slug":"_5、控制单表数据量-单表记录控制在千万级。","link":"#_5、控制单表数据量-单表记录控制在千万级。","children":[]}]},{"level":2,"title":"四、 字段设计必须规范","slug":"四、-字段设计必须规范","link":"#四、-字段设计必须规范","children":[{"level":3,"title":"1、必须把字段定义为NOT NULL并且提供默认值","slug":"_1、必须把字段定义为not-null并且提供默认值","link":"#_1、必须把字段定义为not-null并且提供默认值","children":[]},{"level":3,"title":"2、禁止使用TEXT、BLOB类型","slug":"_2、禁止使用text、blob类型","link":"#_2、禁止使用text、blob类型","children":[]},{"level":3,"title":"3、禁止使用小数存储货币","slug":"_3、禁止使用小数存储货币","link":"#_3、禁止使用小数存储货币","children":[]},{"level":3,"title":"4、必须使用varchar（20）存储手机号","slug":"_4、必须使用varchar-20-存储手机号","link":"#_4、必须使用varchar-20-存储手机号","children":[]},{"level":3,"title":"5、禁止使用ENUM，可使用TINYINT代替","slug":"_5、禁止使用enum-可使用tinyint代替","link":"#_5、禁止使用enum-可使用tinyint代替","children":[]},{"level":3,"title":"6、字段选择类型更小的通常更好：小的数据类型更快，因为它们占用更少的磁盘、内存和CPU缓存，并且处理需要的CPU周期更少。","slug":"_6、字段选择类型更小的通常更好-小的数据类型更快-因为它们占用更少的磁盘、内存和cpu缓存-并且处理需要的cpu周期更少。","link":"#_6、字段选择类型更小的通常更好-小的数据类型更快-因为它们占用更少的磁盘、内存和cpu缓存-并且处理需要的cpu周期更少。","children":[]}]},{"level":2,"title":"五、 索引设计规范","slug":"五、-索引设计规范","link":"#五、-索引设计规范","children":[{"level":3,"title":"1、单表索引建议控制在5个内","slug":"_1、单表索引建议控制在5个内","link":"#_1、单表索引建议控制在5个内","children":[]},{"level":3,"title":"2、单索引字段数不允许草超过5个","slug":"_2、单索引字段数不允许草超过5个","link":"#_2、单索引字段数不允许草超过5个","children":[]},{"level":3,"title":"3、禁止在更新十分频繁、区分度不高的属性上建立索引","slug":"_3、禁止在更新十分频繁、区分度不高的属性上建立索引","link":"#_3、禁止在更新十分频繁、区分度不高的属性上建立索引","children":[]},{"level":3,"title":"4、建立组合索引，必须把区分度高的字段放在前面","slug":"_4、建立组合索引-必须把区分度高的字段放在前面","link":"#_4、建立组合索引-必须把区分度高的字段放在前面","children":[]},{"level":3,"title":"MyISAM和INNODB的区别","slug":"myisam和innodb的区别","link":"#myisam和innodb的区别","children":[]}]},{"level":2,"title":"六、SQL语句优化","slug":"六、sql语句优化","link":"#六、sql语句优化","children":[{"level":3,"title":"1、禁止使用select *，只获取必要的字段，需要显示说明列属性","slug":"_1、禁止使用select-只获取必要的字段-需要显示说明列属性","link":"#_1、禁止使用select-只获取必要的字段-需要显示说明列属性","children":[]},{"level":3,"title":"2、禁止使用insert into t_xxx values(xxx)，必须显示执行插入的列属性","slug":"_2、禁止使用insert-into-t-xxx-values-xxx-必须显示执行插入的列属性","link":"#_2、禁止使用insert-into-t-xxx-values-xxx-必须显示执行插入的列属性","children":[]},{"level":3,"title":"3、禁止使用属性隐式转换","slug":"_3、禁止使用属性隐式转换","link":"#_3、禁止使用属性隐式转换","children":[]},{"level":3,"title":"4、禁止在where条件的属性上使用函数或者表达式，在属性上进行计算不能命中索引","slug":"_4、禁止在where条件的属性上使用函数或者表达式-在属性上进行计算不能命中索引","link":"#_4、禁止在where条件的属性上使用函数或者表达式-在属性上进行计算不能命中索引","children":[]},{"level":3,"title":"5、禁止负向查询，以及%开头的模糊查询","slug":"_5、禁止负向查询-以及-开头的模糊查询","link":"#_5、禁止负向查询-以及-开头的模糊查询","children":[]},{"level":3,"title":"6、禁止大表使用JOIN查询，禁止大表使用子查询","slug":"_6、禁止大表使用join查询-禁止大表使用子查询","link":"#_6、禁止大表使用join查询-禁止大表使用子查询","children":[]},{"level":3,"title":"7、禁止使用OR条件，必须改为IN查询","slug":"_7、禁止使用or条件-必须改为in查询","link":"#_7、禁止使用or条件-必须改为in查询","children":[]},{"level":3,"title":"8、应用程序必须捕获SQL异常，并有相应的处理","slug":"_8、应用程序必须捕获sql异常-并有相应的处理","link":"#_8、应用程序必须捕获sql异常-并有相应的处理","children":[]},{"level":3,"title":"9、负向条件查询不能使用索引","slug":"_9、负向条件查询不能使用索引","link":"#_9、负向条件查询不能使用索引","children":[]},{"level":3,"title":"10、前导模糊查询不能用索引","slug":"_10、前导模糊查询不能用索引","link":"#_10、前导模糊查询不能用索引","children":[]},{"level":3,"title":"11、数据区分度不大的字段不宜使用索引","slug":"_11、数据区分度不大的字段不宜使用索引","link":"#_11、数据区分度不大的字段不宜使用索引","children":[]},{"level":3,"title":"12、limit高效分页","slug":"_12、limit高效分页","link":"#_12、limit高效分页","children":[]},{"level":3,"title":"13、如果业务大部分是单条查询，使用Hash索引性能更好","slug":"_13、如果业务大部分是单条查询-使用hash索引性能更好","link":"#_13、如果业务大部分是单条查询-使用hash索引性能更好","children":[]},{"level":3,"title":"14、允许为null的列，查询有潜在大坑","slug":"_14、允许为null的列-查询有潜在大坑","link":"#_14、允许为null的列-查询有潜在大坑","children":[]}]}],"git":{"createdTime":1671170523000,"updatedTime":1671170523000,"contributors":[{"name":"jinfang","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":6.69,"words":2006},"filePathRelative":"java/basis/mysql-setting.md","localizedDate":"2019年8月13日","excerpt":"","autoDesc":true}');export{l as data};