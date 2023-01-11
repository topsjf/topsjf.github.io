import{_ as p,V as i,W as c,a0 as o,X as a,Y as n,Z as e,$ as t,G as l}from"./framework-ed4f969a.js";const r="/assets/true-image-20211004222533328-d791ff77.png",d="/assets/true-image-20211004223125542-811d1322.png",u="/assets/true-image-20211006181356435-addee0b3.png",v="/assets/true-solution-6137ccab.png",k="/assets/true-image-20211010191739943-f281d642.png",m={},h=t('<h1>分布式事物<a name="分布式事物"></a></h1><p><img src="'+r+'" alt="image-20211004222533328"></p><p><img src="'+d+`" alt="image-20211004223125542"></p><h2 id="_1、事物本质-原子性、一致性、隔离性、持久性" tabindex="-1"><a class="header-anchor" href="#_1、事物本质-原子性、一致性、隔离性、持久性" aria-hidden="true">#</a> 1、事物本质：原子性、一致性、隔离性、持久性</h2><p>数据库事务的几个特性：原子性(Atomicity )、一致性( Consistency )、隔离性或独立性( Isolation) 和持久性(Durabilily),简称就是ACID; ●<strong>原子性</strong>：一系列的操作整体不可拆分，要么同时成功，要么同时失败 ●<strong>一致性</strong>：数据在事务的前后，业务整体一致。 ■转账。A:1000; B:1000;转200事务成功;A: 800B: 1200 ●<strong>隔离性</strong>：事务之间互相隔离。 ●<strong>持久性</strong>:一旦事务成功，数据一定会落盘在数据库。</p><h2 id="_2、隔离级别-isolation-读未提交-读已提交-可重复读-mysql默认-序列化" tabindex="-1"><a class="header-anchor" href="#_2、隔离级别-isolation-读未提交-读已提交-可重复读-mysql默认-序列化" aria-hidden="true">#</a> 2、隔离级别 Isolation：读未提交 &lt; 读已提交 &lt; 可重复读（MySQL默认） &lt; 序列化</h2><p>级别越大，并发性越低。</p><h3 id="脏读" tabindex="-1"><a class="header-anchor" href="#脏读" aria-hidden="true">#</a> 脏读</h3><p>一个事务可以读取另一个事务未提交的数据</p><h3 id="不可重复读" tabindex="-1"><a class="header-anchor" href="#不可重复读" aria-hidden="true">#</a> 不可重复读</h3><p>一个事务可以读取另一个事务已提交的数据 单条记录前后不匹配</p><h3 id="虚读-幻读" tabindex="-1"><a class="header-anchor" href="#虚读-幻读" aria-hidden="true">#</a> 虚读（幻读）</h3><p>一个事务可以读取另一个事务已提交的数据 读取的数据前后多了点或者少了点</p><h3 id="read-uncomttted-读未提交" tabindex="-1"><a class="header-anchor" href="#read-uncomttted-读未提交" aria-hidden="true">#</a> READ UNCOMTTTED (读未提交)</h3><p>​ 该隔离级别的事务会读到其它未提交事务的数据，此现象也称之为<code>**脏读**</code>。</p><h3 id="read-committed-读已提交" tabindex="-1"><a class="header-anchor" href="#read-committed-读已提交" aria-hidden="true">#</a> READ COMMITTED (读已提交)</h3><p>​ 一个事务可以读取另一个已提交的事务，多次读取会造成不一样的结果，此现象称为<code>**不可重复读问题**</code>，Oracle和SQL Server的默认隔离级别。</p><h3 id="repeatable-read-可重复读" tabindex="-1"><a class="header-anchor" href="#repeatable-read-可重复读" aria-hidden="true">#</a> REPEATABLE READ (可重复读)</h3><p>​ 该隔离级别是MySQL默认的隔离级别，在同一个事务里，select 的结果是事务开始时时间点的状态，因此，同样的select操作读到的结果会是一致的， 但是，会有<strong>幻读现象</strong>。MySQL的InnoDB引擎可以通过next-keylocks 机制(参考下文行锁的算法&quot;一节)来避免幻读。</p><h3 id="serializable-序列化" tabindex="-1"><a class="header-anchor" href="#serializable-序列化" aria-hidden="true">#</a> SERIALIZABLE (序列化)</h3><p>​ 在该隔离级别下事务都是串行顺序执行的，MySQL数据库的InnoDB 引擎会给读操作隐式加一把读共享锁，从而避免了脏读、不可重读复读和幻读问题。</p><table><thead><tr><th style="text-align:center;">隔离级别</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">DEFAULT</td><td style="text-align:left;">使用底层数据存储的默认隔离级别。 所有其他级别对应于 JDBC 隔离级别。</td></tr><tr><td style="text-align:center;">READ_UNCOMMITTED</td><td style="text-align:left;">指示可能发生脏读、不可重复读和幻读的常量。 此级别允许由一个事务更改的行在提交该行中的任何更改之前被另一个事务读取（“脏读”）。 如果任何更改被回滚，则第二个事务将检索到无效行。</td></tr><tr><td style="text-align:center;">READ_COMMITTED</td><td style="text-align:left;">指示可能发生脏读、不可重复读和幻读的常量。 此级别允许由一个事务更改的行在提交该行中的任何更改之前被另一个事务读取（“脏读”）。 如果任何更改被回滚，则第二个事务将检索到无效行。</td></tr><tr><td style="text-align:center;"><strong>REPEATABLE_READ</strong></td><td style="text-align:left;">表示防止脏读的常量； 可能会发生不可重复读和幻读。 此级别仅禁止事务读取其中包含未提交更改的行。<em>MySQL 默认的隔离级别</em></td></tr><tr><td style="text-align:center;">SERIALIZABLE</td><td style="text-align:left;">指示防止脏读、不可重复读和幻读的常量。 该级别包括ISOLATION_REPEATABLE_READ的禁止，并进一步禁止这样一种情况，即一个事务读取满足WHERE条件的所有行，第二个事务插入满足WHERE条件的行，第一个事务为相同条件重新读取，检索额外的“第二次阅读中的幻影”行。</td></tr></tbody></table><h3 id="相关命令" tabindex="-1"><a class="header-anchor" href="#相关命令" aria-hidden="true">#</a> 相关命令</h3><p>查看全局事务隔离级别：SELECT @@global.tx_isolation</p><p>设置全局事务隔离级别：set global transaction isolation level read committed;</p><p><strong>查看当前会话事务隔离级别：SELECT @@tx_isolation</strong></p><p><strong>设置当前会话事务隔离级别：set session transaction isolation level read committed;</strong></p><p>查看mysql默认自动提交状态：select @@autocommit</p><p>设置mysql默认自动提交状态：set autocommit = 0;【不自动提交】</p><p><strong>开启一个事务：start transaction;</strong></p><p><strong>提交事务：commit</strong></p><p><strong>回滚事务： rollback</strong></p><p>在事务中创建一个保存点：savepoint tx1</p><p>回滚到保存点：rollback to tx1</p><h2 id="_3、7种传播行为-propagation-常用-required、required-new" tabindex="-1"><a class="header-anchor" href="#_3、7种传播行为-propagation-常用-required、required-new" aria-hidden="true">#</a> 3、7种传播行为 Propagation：常用（required、required_new）</h2><table><thead><tr><th style="text-align:center;">传播行为</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>REQUIRED（常用）</strong></td><td style="text-align:left;">支持当前事务，如果不存在则创建一个新事务。<br>这是事务注释的默认设置。</td></tr><tr><td style="text-align:center;">SUPPORTS</td><td style="text-align:left;">支持当前事务，如果不存在则以非事务方式执行。</td></tr><tr><td style="text-align:center;">MANDATORY</td><td style="text-align:left;">支持当前事务，如果不存在则抛出异常。</td></tr><tr><td style="text-align:center;"><strong>REQUIRES_NEW（常用）</strong></td><td style="text-align:left;">创建一个新事务，存不存在都创建新的事物。</td></tr><tr><td style="text-align:center;">NOT_SUPPORTED</td><td style="text-align:left;">以非事务方式执行，如果存在则暂停当前事务。</td></tr><tr><td style="text-align:center;">NEVER</td><td style="text-align:left;">以非事务方式执行，如果存在事务则抛出异常。</td></tr><tr><td style="text-align:center;">NESTED</td><td style="text-align:left;">如果当前事务存在，则在嵌套事务中执行，否则行为类似于REQUIRED 。</td></tr></tbody></table><h3 id="_1-4-1-伪代码练习" tabindex="-1"><a class="header-anchor" href="#_1-4-1-伪代码练习" aria-hidden="true">#</a> 1.4.1. 伪代码练习</h3><p>传播行为伪代码模拟：有a,b,c,d,e等5个方法，a中调用b,c,d,e方法的传播行为在小括号中标出</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token function">a</span><span class="token punctuation">(</span>required<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">b</span><span class="token punctuation">(</span>required<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">c</span><span class="token punctuation">(</span>requires_new<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">d</span><span class="token punctuation">(</span>required<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">e</span><span class="token punctuation">(</span>requires_new<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// a方法的业务</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问题：</p><ol><li>a方法的业务出现异常，会怎样？a,b,d回滚 c,e不回滚</li><li>d方法出现异常，会怎样？a,b,d回滚 c,e不回滚</li><li>e方法出现异常，会怎样？a,b,d,e回滚 c不回滚，e方法出异常会上抛影响到上级方法</li><li>b方法出现异常，会怎样？a,b回滚 c,d,e未执行</li></ol><p>加点难度：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a(required){
	b(required){
		f(requires_new);
		g(required)
	}
	c(requires_new){
		h(requires_new)
		i(required)
	}
	d(required);
	e(requires_new);
	// a方法的业务
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问题：</p><ol><li>a方法业务出异常</li><li>e方法出异常</li><li>d方法出异常</li><li>h,i方法分别出异常</li><li>i方法出异常</li><li>f,g方法分别出异常</li></ol><h3 id="_1-4-2-改造商品新增代码" tabindex="-1"><a class="header-anchor" href="#_1-4-2-改造商品新增代码" aria-hidden="true">#</a> 1.4.2. 改造商品新增代码</h3><p>现在商品保存的方法结构如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bigSave</span><span class="token punctuation">(</span><span class="token class-name">SpuVo</span> spuVo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/// 1.保存spu相关</span>
        <span class="token comment">// 1.1. 保存spu基本信息 spu_info</span>
        <span class="token class-name">Long</span> spuId <span class="token operator">=</span> <span class="token function">saveSpu</span><span class="token punctuation">(</span>spuVo<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 1.2. 保存spu的描述信息 spu_info_desc</span>
        <span class="token function">saveSpuDesc</span><span class="token punctuation">(</span>spuVo<span class="token punctuation">,</span> spuId<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 1.3. 保存spu的规格参数信息</span>
        <span class="token function">saveBaseAttr</span><span class="token punctuation">(</span>spuVo<span class="token punctuation">,</span> spuId<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">/// 2. 保存sku相关信息</span>
        <span class="token function">saveSku</span><span class="token punctuation">(</span>spuVo<span class="token punctuation">,</span> spuId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 保存sku相关信息及营销信息
     * <span class="token keyword">@param</span> <span class="token parameter">spuInfoVO</span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">saveSku</span><span class="token punctuation">(</span><span class="token class-name">SpuVo</span> spuVo<span class="token punctuation">,</span> <span class="token class-name">Long</span> spuId<span class="token punctuation">)</span> <span class="token punctuation">{</span> 。。。 <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 保存spu基本属性信息
     * <span class="token keyword">@param</span> <span class="token parameter">spuInfoVO</span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">saveBaseAttr</span><span class="token punctuation">(</span><span class="token class-name">SpuVo</span> spuVo<span class="token punctuation">,</span> <span class="token class-name">Long</span> spuId<span class="token punctuation">)</span> <span class="token punctuation">{</span> 。。。 <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 保存spu描述信息（图片）
     * <span class="token keyword">@param</span> <span class="token parameter">spuInfoVO</span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">saveSpuDesc</span><span class="token punctuation">(</span><span class="token class-name">SpuVo</span> spuVo<span class="token punctuation">,</span> <span class="token class-name">Long</span> spuId<span class="token punctuation">)</span> <span class="token punctuation">{</span> 。。。 <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 保存spu基本信息
     * <span class="token keyword">@param</span> <span class="token parameter">spuInfoVO</span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">saveSpu</span><span class="token punctuation">(</span><span class="token class-name">SpuVo</span> spuVo<span class="token punctuation">)</span> <span class="token punctuation">{</span>  。。。 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了测试事务传播行为，我们在SpuInfoService接口中把saveSkuInfoWithSaleInfo、saveBaseAttrs、saveSpuDesc、saveSpuInfo声明为service接口方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">SpuInfoService</span> <span class="token keyword">extends</span> <span class="token class-name">IService</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SpuInfoEntity</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token class-name">PageVo</span> <span class="token function">queryPage</span><span class="token punctuation">(</span><span class="token class-name">QueryCondition</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">PageVo</span> <span class="token function">querySpuInfo</span><span class="token punctuation">(</span><span class="token class-name">QueryCondition</span> condition<span class="token punctuation">,</span> <span class="token class-name">Long</span> catId<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">saveSpuInfoVO</span><span class="token punctuation">(</span><span class="token class-name">SpuInfoVO</span> spuInfoVO<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">saveSku</span><span class="token punctuation">(</span><span class="token class-name">SpuVo</span> spuVo<span class="token punctuation">,</span> <span class="token class-name">Long</span> spuId<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">saveBaseAttr</span><span class="token punctuation">(</span><span class="token class-name">SpuVo</span> spuVo<span class="token punctuation">,</span> <span class="token class-name">Long</span> spuId<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">saveSpuDesc</span><span class="token punctuation">(</span><span class="token class-name">SpuVo</span> spuVo<span class="token punctuation">,</span> <span class="token class-name">Long</span> spuId<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Long</span> <span class="token function">saveSpu</span><span class="token punctuation">(</span><span class="token class-name">SpuVo</span> spuVo<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再把SpuInfoServiceImpl实现类的对应方法改成public：</p><h3 id="_1-4-3-测试1-同一-service-requires-new" tabindex="-1"><a class="header-anchor" href="#_1-4-3-测试1-同一-service-requires-new" aria-hidden="true">#</a> 1.4.3. 测试1：同一 service + requires_new</h3><blockquote><p>springboot 1.x 使用事务需要在引导类上添加 @EnableTransactionManagement 注解开启事务支持</p><p>springboot 2.x 可直接使用 @Transactional 玩事务，传播行为默认是REQUIRED</p></blockquote><p>添加事务：</p><blockquote><p>这时，在保存商品的主方法中制造异常：</p><p>由于保存商品描述方法使用的是requires_new，spu应该会回滚，spu_desc应该保存成功。</p><p>清空pms_spu_desc表，再添加一个spu保存。</p><p>结果pms_spu_desc表中依然没有数据。</p><p>但是控制台打印了新增pms_spu_desc表的sql语句：</p><p>说明saveSpuDesc方法的事务回滚了，也就是说该方法配置的事务传播机制没有生效。</p></blockquote><p>解决方案：</p><ol><li>把service方法放到不同的service中</li><li>使用动态代理对象调用该方法</li></ol><h3 id="_1-4-4-测试2-不同service-requires-new" tabindex="-1"><a class="header-anchor" href="#_1-4-4-测试2-不同service-requires-new" aria-hidden="true">#</a> 1.4.4. 测试2：不同service + requires_new</h3><p>把saveSpuDesc方法放到SpuDescService中：</p><p>在实现类中实现该方法，可以把之前的实现copy过来：</p><p>改造SpuServiceImpl中保存商品的方法，调用SpuDescServiceImpl的saveSpuDesc方法：</p><p>再次重启gmall-pms，虽然控制台依然报错，但是数据可以保存成功，说明没有在一个事务中。</p><p>为什么测试1的事务传播行为没有生效，而测试2的事务传播行为生效了？</p><p>spring的事务是声明式事务，而声明式事务的本质是Spring AOP，SpringAOP的本质是动态代理。</p><h3 id="事务要生效必须是代理对象在调用。" tabindex="-1"><a class="header-anchor" href="#事务要生效必须是代理对象在调用。" aria-hidden="true">#</a> <strong>事务要生效必须是代理对象在调用。</strong></h3><p>测试1：通过this调用同一个service中的方法，this是指service实现类对象本身，不是代理对象，就相当于方法中的代码粘到了大方法里面，相当于还是一个方法。</p><p>测试2：通过其他service对象（spuDescService）调用，这个service对象本质是动态代理对象</p><p>接下来debug，打个断点看看：</p><ol><li><p>spuDescService：</p></li><li><p>this:</p></li></ol><h3 id="_1-4-5-在同一个service中使用传播行为" tabindex="-1"><a class="header-anchor" href="#_1-4-5-在同一个service中使用传播行为" aria-hidden="true">#</a> 1.4.5. 在同一个service中使用传播行为</h3><p>只需要把测试1中的<code>this.方法名()</code>替换成<code>this代理对象.方法名()</code>即可。</p><p>问题是怎么在service中获取当前类的代理对象？</p><h4 id="在类中获取代理对象分三个步骤" tabindex="-1"><a class="header-anchor" href="#在类中获取代理对象分三个步骤" aria-hidden="true">#</a> 在类中获取代理对象分三个步骤：</h4><ol><li>导入aop的场景依赖：<code>spring-boot-starter-aop</code></li><li>开启AspectJ的自动代理，同时要暴露代理对象：<code>@EnableAspectJAutoProxy(exposeProxy=true)</code></li><li>获取代理对象：<code>SpuInfoService proxy = (SpuInfoService) AopContext.currentProxy();</code></li></ol><p>具体如下：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-aop<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启后测试：先清空pms_spu_info_desc表中数据</p><p>表中数据新增成功，说明saveSpuDesc方法走的是自己的事务，传播行为生效了。</p><p>debug可以看到，spuInfoService是一个代理对象。</p><h2 id="_4、本地事务失效问题" tabindex="-1"><a class="header-anchor" href="#_4、本地事务失效问题" aria-hidden="true">#</a> 4、本地事务失效问题</h2><p>同一个对象内事务方法互调默认失效，原因绕过了代理对象，事务使用代理对象来控制的</p><p>解决：使用代理对象调用事物方法</p><p>​ 引入starter-aop代理模式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-aop&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 开启@EnableAspectJAutoProxy(exposeProxy = true)，不使用jdk的代理，exposeProxy对外暴露代理对象</p><p>​ <img src="`+u+'" alt="image-20211006181356435"></p><h2 id="_5、cap定理、raft" tabindex="-1"><a class="header-anchor" href="#_5、cap定理、raft" aria-hidden="true">#</a> 5、CAP定理、RAFT</h2><h3 id="cap" tabindex="-1"><a class="header-anchor" href="#cap" aria-hidden="true">#</a> CAP</h3><p>● 一致性(Consistency) : ■在分布式系统中 的所有数据备份，在同一时刻是否同样的值。(等同于所有节点访问同一份最新的数据副本) ●可用性(Avilbility) ■在集群中一部分节点故障后，集群整体是否还能响应客户端的读写请求。(对数据更新具备高可用性) ●分区容错性(Partition tolerance) ■大多 数分布式系统都分布在多个子网络。每个子网络就叫做一一个区(partition) 。分区容错的意思是，区间通信可能失败。比如，一台服务器放在中国，另一台服务器放在美国，这就是两个区，它们之间可能无法通信。</p><p>CAP原则指的是，这三个要素最多只能同时实现两点，不可能三者兼顾。</p><p><strong>注意：CP、AP，不可能CA</strong></p><h3 id="raft" tabindex="-1"><a class="header-anchor" href="#raft" aria-hidden="true">#</a> RAFT</h3>',92),b={href:"http://thesecretlivesofdata.com/raft/",target:"_blank",rel:"noopener noreferrer"},g=t('<h3 id="base-基本使用、软状态、最终一致性" tabindex="-1"><a class="header-anchor" href="#base-基本使用、软状态、最终一致性" aria-hidden="true">#</a> BASE：基本使用、软状态、最终一致性</h3><p>对CA的延伸</p><h2 id="_6、解决方案" tabindex="-1"><a class="header-anchor" href="#_6、解决方案" aria-hidden="true">#</a> 6、解决方案</h2><h3 id="_2pc模式" tabindex="-1"><a class="header-anchor" href="#_2pc模式" aria-hidden="true">#</a> 2PC模式</h3><h3 id="tcc" tabindex="-1"><a class="header-anchor" href="#tcc" aria-hidden="true">#</a> TCC</h3><h3 id="最大努力通知方案" tabindex="-1"><a class="header-anchor" href="#最大努力通知方案" aria-hidden="true">#</a> 最大努力通知方案</h3><h3 id="可靠消息-最终一致性-异步确保型" tabindex="-1"><a class="header-anchor" href="#可靠消息-最终一致性-异步确保型" aria-hidden="true">#</a> 可靠消息+最终一致性（异步确保型）</h3><h2 id="_7、seata-控制分布式事物-at模式介-2pc-绍与安装" tabindex="-1"><a class="header-anchor" href="#_7、seata-控制分布式事物-at模式介-2pc-绍与安装" aria-hidden="true">#</a> 7、seata 控制分布式事物 AT模式介（2PC）绍与安装</h2><h3 id="_7-1-介绍" tabindex="-1"><a class="header-anchor" href="#_7-1-介绍" aria-hidden="true">#</a> 7.1 介绍</h3>',9),f={href:"http://seata.io/zh-cn/docs/user/quickstart.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/seata/seata/releases%EF%BC%88https://github.com/seata/seata/releases/download/v1.3.0/seata-server-1.3.0.tar.gz%EF%BC%89",target:"_blank",rel:"noopener noreferrer"},_=t('<p><img src="'+v+`" alt="img"></p><p>seata-server相当于<strong>TC</strong></p><h3 id="_7-2-创建-undo-log-表" tabindex="-1"><a class="header-anchor" href="#_7-2-创建-undo-log-表" aria-hidden="true">#</a> 7.2 创建 UNDO_LOG 表</h3><h3 id="_7-3-安装seata-server1-3-0-注意版本关系" tabindex="-1"><a class="header-anchor" href="#_7-3-安装seata-server1-3-0-注意版本关系" aria-hidden="true">#</a> 7.3 安装seata-server1.3.0 注意版本关系</h3><p>springboot-2.1.13 &lt;-&gt; spring cloud alibaba-2.1.4 &lt;-&gt; seata-server-1.3.0.tar.gz</p><p>docker</p><h4 id="指定自定义配置文件启动" tabindex="-1"><a class="header-anchor" href="#指定自定义配置文件启动" aria-hidden="true">#</a> 指定自定义配置文件启动</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> seata <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">8091</span>:8091 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token assign-left variable">SEATA_PORT</span><span class="token operator">=</span><span class="token number">8091</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token assign-left variable">STORE_MODE</span><span class="token operator">=</span>file <span class="token punctuation">\\</span>
    <span class="token parameter variable">--network</span><span class="token operator">=</span>host <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token assign-left variable">SEATA_CONFIG_NAME</span><span class="token operator">=</span>file:/root/seata-config/registry <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> /data/home/kong/data/docker/seata/config:/root/seata-config <span class="token punctuation">\\</span>
    <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
    seataio/seata-server:1.3.0
    
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> seata <span class="token function">sh</span>
<span class="token function">docker</span> update seata <span class="token parameter variable">--restart</span><span class="token operator">=</span>always
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-alibaba-seata<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="registry-conf-注册中心" tabindex="-1"><a class="header-anchor" href="#registry-conf-注册中心" aria-hidden="true">#</a> registry.conf 注册中心</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>registry <span class="token punctuation">{</span>
  <span class="token comment"># file 、nacos 、eureka、redis、zk、consul、etcd3、sofa 注册中心</span>
  <span class="token builtin class-name">type</span> <span class="token operator">=</span> <span class="token string">&quot;nacos&quot;</span>
<span class="token comment">###################################################################</span>
config <span class="token punctuation">{</span>
  <span class="token comment"># file、nacos 、apollo、zk、consul、etcd3，</span>
  <span class="token comment"># 如果使用file，会在file.conf文件里做配置，nacos则会在nacos里做配置</span>
  <span class="token builtin class-name">type</span> <span class="token operator">=</span> <span class="token string">&quot;file&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="file-conf-配置中心-事务日志存储到哪里" tabindex="-1"><a class="header-anchor" href="#file-conf-配置中心-事务日志存储到哪里" aria-hidden="true">#</a> file.conf 配置中心，事务日志存储到哪里</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## transaction log store, only used in seata-server 事务日志存储到哪里，仅用于 seata-server</span>
store <span class="token punctuation">{</span>
  <span class="token comment">## store mode: file、db、redis</span>
  mode <span class="token operator">=</span> <span class="token string">&quot;file&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先启动nacos、再启动seata</p><p>查看 nacos 服务列表：服务名（seata-server）</p><h3 id="_7-4-使用-globaltransactional" tabindex="-1"><a class="header-anchor" href="#_7-4-使用-globaltransactional" aria-hidden="true">#</a> 7.4 使用 @GlobalTransactional</h3><p>5、启动测试分布式事务 6、给分布式大事务的入口标注@GlobalTransactional,高并发的接口不适用 7、每一个远程的小事务用@Transactional</p><h3 id="_7-5-使用-seata-代理各个服务的数据源-注入-datasourceproxy" tabindex="-1"><a class="header-anchor" href="#_7-5-使用-seata-代理各个服务的数据源-注入-datasourceproxy" aria-hidden="true">#</a> 7.5 使用 seata 代理各个服务的数据源 注入 DataSourceProxy</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MySeataConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">DataSourceProperties</span> dataSourceProperties<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">dataSource</span><span class="token punctuation">(</span><span class="token class-name">DataSourceProperties</span> dataSourceProperties<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">HikariDataSource</span> dataSource <span class="token operator">=</span> dataSourceProperties<span class="token punctuation">.</span><span class="token function">initializeDataSourceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token class-name">HikariDataSource</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">hasText</span><span class="token punctuation">(</span>dataSourceProperties<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            dataSource<span class="token punctuation">.</span><span class="token function">setPoolName</span><span class="token punctuation">(</span>dataSourceProperties<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DataSourceProxy</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-6-各个服务导入-registry-conf、file-conf-到-resources" tabindex="-1"><a class="header-anchor" href="#_7-6-各个服务导入-registry-conf、file-conf-到-resources" aria-hidden="true">#</a> 7.6 各个服务导入 registry.conf、file.conf 到 resources</h3><h3 id="_7-7-在高并发情况下-seata-at模式-globaltransactional就不适用了-为了保证高并发-不推荐使用seata-因为是加锁-并行化-提升不了效率-可以发消息给库存服务" tabindex="-1"><a class="header-anchor" href="#_7-7-在高并发情况下-seata-at模式-globaltransactional就不适用了-为了保证高并发-不推荐使用seata-因为是加锁-并行化-提升不了效率-可以发消息给库存服务" aria-hidden="true">#</a> 7.7 在高并发情况下，seata（AT模式）GlobalTransactional就不适用了，为了保证高并发，不推荐使用seata，因为是加锁，并行化，提升不了效率,可以发消息给库存服务</h3><p><img src="`+k+'" alt="image-20211010191739943"></p><h2 id="_8、数据最终一致性-mq-mq延迟队列" tabindex="-1"><a class="header-anchor" href="#_8、数据最终一致性-mq-mq延迟队列" aria-hidden="true">#</a> 8、数据最终一致性，MQ+MQ延迟队列</h2><p><a href="#MQ%E5%BB%B6%E8%BF%9F%E9%98%9F%E5%88%97">前去MQ延迟队列</a></p><h2 id="_9、如何保证消息可靠性" tabindex="-1"><a class="header-anchor" href="#_9、如何保证消息可靠性" aria-hidden="true">#</a> 9、如何保证消息可靠性</h2><h3 id="a-、消息丢失" tabindex="-1"><a class="header-anchor" href="#a-、消息丢失" aria-hidden="true">#</a> a）、消息丢失</h3><p>– <strong>消息发送出去</strong>，由于网络问题没有抵达服务器</p><p>​ <code>做好容错方法(try-catch)，发送消息可能会网络失败，失败后要有重试机制，可记录到数据库，采用定期扫描重发的方式</code></p><p>​ <code> 做好日志记录，每个消息状态是否都被服务器收到都应该记录</code></p><p>​ <code> 做好定期重发，如果消息没有发送成功，定期去数据库扫描未成功的消息进行重发</code></p><p>– <strong>消息抵达Broker</strong>，Broker要将消息写入磁盘（(持久化)才算成功。此时Broker尚未持久化完成，宕机。</p><p>​ <code>publisher也必须加入确认回调机制，确认成功的消息，修改数据库消息状态。</code></p><p>– <strong>自动ACK的状态下</strong>。消费者收到消息，但没来得及消息然后宕机 <code>定开启手动ACK，消费成功才移除，失败或者没来得及处理就noAck并重新入队</code></p><h3 id="b-、消息重复" tabindex="-1"><a class="header-anchor" href="#b-、消息重复" aria-hidden="true">#</a> b）、消息重复</h3><p>– <strong>消息消费成功</strong>，事务已经提交，ack时，机器宕机。导致没有ack成功，Broker的消息重新由unack变为ready，并发送给其他消费者</p><p>– <strong>消息消费失败</strong>，由于重试机制，自动又将消息发送出去</p><p>– <strong>成功消费</strong>，ack时宕机，消息由unack变为ready，Broker又重新发送</p><p>​ <code>消费者的业务消费接口应该设计为幂等性的。比如扣库存有工作单的状态标志</code></p><p>​ <code>使用防重表(redis/mysql)，发送消息每一个都有业务的唯一标识，处理过就不用处理</code></p><p>​ <code>rabbitMQ的每一个消息都有redelivered字段，可以获取是否是被重新投递过来的，而不是第一次投递过来的</code></p><h3 id="c-、消息积压" tabindex="-1"><a class="header-anchor" href="#c-、消息积压" aria-hidden="true">#</a> c）、消息积压</h3><p>– <strong>消费者宕机积压</strong></p><p>– <strong>消费者消费能力不足积压</strong></p><p>– <strong>发送者发送流量太大</strong><code>上线更多的消费者，进行正常消费</code><code>上线专门的队列消费服务，将消息先批量取出来，记录数据库，离线慢慢处理</code></p>',44);function y(S,E){const s=l("ExternalLinkIcon");return i(),c("div",null,[o(" more "),h,a("p",null,[n("演示："),a("a",b,[n("http://thesecretlivesofdata.com/raft/"),e(s)])]),g,a("p",null,[n("文档："),a("a",f,[n("http://seata.io/zh-cn/docs/user/quickstart.html"),e(s)])]),a("p",null,[n("服务器下载："),a("a",x,[n("https://github.com/seata/seata/releases（https://github.com/seata/seata/releases/download/v1.3.0/seata-server-1.3.0.tar.gz）"),e(s)])]),_])}const A=p(m,[["render",y],["__file","local-cloud-affairs-seata.html.vue"]]);export{A as default};
