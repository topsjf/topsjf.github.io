const e=JSON.parse('{"key":"v-2b5fbedc","path":"/java/new-features/java8-tutorial-translate.html","title":"Java8 指南中文翻译","lang":"zh-CN","frontmatter":{"icon":"edit","title":"Java8 指南中文翻译","category":["Java"],"tag":["Java新特性"],"description":"随着 Java 8 的普及度越来越高，很多人都提到面试中关于Java 8 也是非常常问的知识点。应各位要求和需要，我打算对这部分知识做一个总结。本来准备自己总结的，后面看到Github 上有一个相关的仓库，地址： https://github.com/winterbe/java8-tutorial (https://github.com/winterb...","head":[["meta",{"property":"og:url","content":"https://topjf.github.io/java/new-features/java8-tutorial-translate.html"}],["meta",{"property":"og:site_name","content":"topjf"}],["meta",{"property":"og:title","content":"Java8 指南中文翻译"}],["meta",{"property":"og:description","content":"随着 Java 8 的普及度越来越高，很多人都提到面试中关于Java 8 也是非常常问的知识点。应各位要求和需要，我打算对这部分知识做一个总结。本来准备自己总结的，后面看到Github 上有一个相关的仓库，地址： https://github.com/winterbe/java8-tutorial (https://github.com/winterb..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-24T03:26:15.000Z"}],["meta",{"property":"article:tag","content":"Java新特性"}],["meta",{"property":"article:modified_time","content":"2022-12-24T03:26:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java8 指南中文翻译\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-24T03:26:15.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"接口的默认方法(Default Methods for Interfaces)","slug":"接口的默认方法-default-methods-for-interfaces","link":"#接口的默认方法-default-methods-for-interfaces","children":[]},{"level":3,"title":"Lambda表达式(Lambda expressions)","slug":"lambda表达式-lambda-expressions","link":"#lambda表达式-lambda-expressions","children":[]},{"level":3,"title":"函数式接口(Functional Interfaces)","slug":"函数式接口-functional-interfaces","link":"#函数式接口-functional-interfaces","children":[]},{"level":3,"title":"方法和构造函数引用(Method and Constructor References)","slug":"方法和构造函数引用-method-and-constructor-references","link":"#方法和构造函数引用-method-and-constructor-references","children":[]},{"level":3,"title":"Lambda 表达式作用域(Lambda Scopes)","slug":"lambda-表达式作用域-lambda-scopes","link":"#lambda-表达式作用域-lambda-scopes","children":[{"level":4,"title":"访问局部变量","slug":"访问局部变量","link":"#访问局部变量","children":[]},{"level":4,"title":"访问字段和静态变量","slug":"访问字段和静态变量","link":"#访问字段和静态变量","children":[]},{"level":4,"title":"访问默认接口方法","slug":"访问默认接口方法","link":"#访问默认接口方法","children":[]}]},{"level":3,"title":"内置函数式接口(Built-in Functional Interfaces)","slug":"内置函数式接口-built-in-functional-interfaces","link":"#内置函数式接口-built-in-functional-interfaces","children":[{"level":4,"title":"Predicate","slug":"predicate","link":"#predicate","children":[]},{"level":4,"title":"Function","slug":"function","link":"#function","children":[]},{"level":4,"title":"Supplier","slug":"supplier","link":"#supplier","children":[]},{"level":4,"title":"Consumer","slug":"consumer","link":"#consumer","children":[]},{"level":4,"title":"Comparator","slug":"comparator","link":"#comparator","children":[]}]},{"level":2,"title":"Optional","slug":"optional","link":"#optional","children":[]},{"level":2,"title":"Streams(流)","slug":"streams-流","link":"#streams-流","children":[{"level":3,"title":"Filter(过滤)","slug":"filter-过滤","link":"#filter-过滤","children":[]},{"level":3,"title":"Sorted(排序)","slug":"sorted-排序","link":"#sorted-排序","children":[]},{"level":3,"title":"Map(映射)","slug":"map-映射","link":"#map-映射","children":[]},{"level":3,"title":"Match(匹配)","slug":"match-匹配","link":"#match-匹配","children":[]},{"level":3,"title":"Count(计数)","slug":"count-计数","link":"#count-计数","children":[]},{"level":3,"title":"Reduce(规约)","slug":"reduce-规约","link":"#reduce-规约","children":[]}]},{"level":2,"title":"Parallel Streams(并行流)","slug":"parallel-streams-并行流","link":"#parallel-streams-并行流","children":[{"level":3,"title":"Sequential Sort(串行排序)","slug":"sequential-sort-串行排序","link":"#sequential-sort-串行排序","children":[]},{"level":3,"title":"Parallel Sort(并行排序)","slug":"parallel-sort-并行排序","link":"#parallel-sort-并行排序","children":[]}]},{"level":2,"title":"Maps","slug":"maps","link":"#maps","children":[]},{"level":2,"title":"Date API(日期相关API)","slug":"date-api-日期相关api","link":"#date-api-日期相关api","children":[{"level":3,"title":"Clock","slug":"clock","link":"#clock","children":[]},{"level":3,"title":"Timezones(时区)","slug":"timezones-时区","link":"#timezones-时区","children":[]},{"level":3,"title":"LocalTime(本地时间)","slug":"localtime-本地时间","link":"#localtime-本地时间","children":[]},{"level":3,"title":"LocalDate(本地日期)","slug":"localdate-本地日期","link":"#localdate-本地日期","children":[]},{"level":3,"title":"LocalDateTime(本地日期时间)","slug":"localdatetime-本地日期时间","link":"#localdatetime-本地日期时间","children":[]}]},{"level":2,"title":"Annotations(注解)","slug":"annotations-注解","link":"#annotations-注解","children":[]},{"level":2,"title":"Where to go from here?","slug":"where-to-go-from-here","link":"#where-to-go-from-here","children":[]}],"git":{"createdTime":1671170523000,"updatedTime":1671852375000,"contributors":[{"name":"jinfang","email":"topjfk@163.com","commits":2}]},"readingTime":{"minutes":22.08,"words":6624},"filePathRelative":"java/new-features/java8-tutorial-translate.md","localizedDate":"2022年12月16日","excerpt":"","autoDesc":true}');export{e as data};