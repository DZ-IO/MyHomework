# Cookie、ajax和JSON
### Cookie
Cookie是保存在客户端的简单的文本文件,包括一系列的可选属性
1. Name/Value
2. expires：生存期，包括会话性和持久性
3. 其他：Path Domain Secure HTTPOnly
> 一个关于Cookie的段子  
> 有个人去HTTP公司办业务，走的时候呢业务员送他几袋免费饼干，并告诉他下次来的时候记得带着饼干的编号来，能加快你办业务的进度  
> （[原版](https://linux.cn/article-8644-1.html)是关于Apache Tomcat的漫画，这里大致概括下Cookie部分）
#### 特性
1. 同一个网站中的所有页面共享一套cookie
2. 大小、数量有限，最大4kb
3. 有过期时间，可以是会话（关闭浏览器后过期），也可以有确切的过期时间（比如7天后过期）
#### 用途
1. 七天内免登陆、十五天免登陆
2. 下次不再提示
3. 部分页游的存档功能
> 某些培训机构会跟你说用户名密码保存是cookie实现的  
> 清过浏览器历史记录的都知道密码存在‘保存的密码’里，只清除cookie不影响密码  
> （这点存疑，有可能他们存在一个文件里）
#### 简单访问Cookie
`document.cookie`用于操作cookie  
至于操作，js基本操作了（直接赋值==设置，读取==读取）
1. 设置
    ```js
    document.cookie = 'uid=1';
    ```
2. 设置生存期
    ```js
    var now = new Date();
    now.setTime(now.getTime() + 60 * 1000);
    document.cookie = 'token=divsdvfd;expires=' + now.toUTCString();
    ```
3. 读取
    ```js
    document.write(document.cookie)
    ```
#### 封装cookie
这里我只提一个需求，其他的你们来搞  
写三个函数，setCookie、getCookie、removeCookie，作用就是设置、获取和删除Cookie
>提示：Cookie过期以后会发生什么？  

[答案](./练习/cookieFunction.js)
### ajax
Ajax 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术
#### 用法（四步）
1. 创建ajax对象
    ```js
    // IE6及以下浏览器不支持Ajax，要上ActiveX
    if (window.XMLHttpRequest) {
        var ajax = new XMLHttpRequest()
    } else {
        var ajax = new ActiveXObject('Microsoft.XMLHTTP')
    }
    ```
    > 话说这年头还有人用ActiveX了吗？
2. 连接服务器
    ```js
    ajax.open('GET', 'cookieFunction.js', true)
    ```
    其中  
    * `ajax`:ajax对象  
    * `GET`:方法，当然也可以用POST等方法  
    * `cookieFunction.js`:地址  
    * `true`:启用异步  
    >* 同步：指发送一个请求，需要等待返回，然后才能够发送下一个请求，有个等待过程
    >* 异步：指发送一个请求，不需要等待返回，随时可以再发送下一个请求，即不需要等待  
    >
    >如果真的说类比的话，部队吃饭==同步（大家必须一块吃），路边烧烤摊==异步（啥时候吃都行）
3. 发送请求
    ```js
    ajax.send()
    ```
    > 就这么简单
4. 接收返回值
    ```js
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
        document.write(ajax.responseText)
        } else {
            document.write(ajax.status)
        }
    }
    ```
    解释一下 
    1. `onreadystatechange`:on开头是一个事件，readyState改变
    2. `readyState`:直译过来是准备状态，就是请求状态码  
        0.请求未初始化（还没有调用到open方法）  
        1.服务器连接已建立（已调用send方法，正在发生请求）  
        2.请求已接收（send方法完成，已接收到全部响应内容）  
        3.请求处理中（解析响应内容）  
        4.请求已完成，且响应已就绪
    3. `status`:状态的意思,这里指状态码
        >PS：http状态码中
        >* 最广为人知的莫过于 404 Not Found  
        >* 最不为人知的莫过于 200 OK  
        >* 最有意思的莫过于 418 I'm a teapot  
        >* 还有个争议蛮大的 451 Unavailable For Legal Reasons  
        >
        >其他的，[百度百科](https://baike.baidu.com/item/HTTP%E7%8A%B6%E6%80%81%E7%A0%81)可查  
        >（还有个萌物：[HTTP Cats](http://http.cat)）
    4. `responseText`:响应文本
        >response n. 响应；回答  
    >所以说人话就是：当请求状态码改变的时候：如果请求状态码是已完成且状态为200就把响应输出到文档上
### JSON
JSON是一种轻量级的数据交换格式
>所以json**不适合**用于配置文件，虽然它也可以存储在一个文件内（.json）
#### 语法规则
1. 数据在名称/值对中
2. 数据由逗号分隔
3. 大括号保存对象
4. 中括号保存数组
```json
{
    "整数":1,
    "浮点数":3.14,
    "字符串":"这是个字符串",
    "数组":["这是个","数组"],
    "对象":{"这":"是个","对":"象"},
    "逻辑值":true,
    "null":null
}
