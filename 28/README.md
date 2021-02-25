# 正则表达式&表单验证
### 一、表单验证
1. 作用
   1. 减轻服务器压力
   2. 确保提交的数据无误
2. 方法
   其实就是条件判断，具体可以查看代码中的例子
### 二、正则表达式
1. 正则表达式需要用`//`包裹
2. 常用的正则表达式
    1. `[a-z]` 查找任何从小写a到小写z的字符
    2. `[A-Z]` 查找任何从大写A到大写Z的字符
    3. `[0-9]` 查找从0到9的数字
    4. `[abc]` 查找abc内的任意一个字符
    5. `[^abc]` 查找除abc内的任意一个字符
    6. `*` 匹配前面的表达式的0次或多次
    7. `+` 匹配前面的表达式的一次或多次
    8. `？` 匹配前面的表达式的一次或0次
    9. `{n}` 匹配n次
    10. `{n,}` 至少匹配n次
    11. `{n,m}` 至少匹配n次，最多匹配m次
    12. `\w` 匹配数字、字母及下划线
    13. `\W` 匹配非数字、字母及下划线
    14. `\d` 匹配数字
    15. `\D` 匹配非数字
    16. `\s` 匹配空字符
    17. `\S` 匹配非空字符
    18. `\n` 匹配换行符
    19. `^` 在括号里为除了，否则为起始
    20. `$` 从末尾开始验证
    21. `|` 表示或者
3. 常用实例
   1. 匹配Email`/^\w+@\w+(\.[a-zA-Z]{2,4}){1,2}$/`
   2. 匹配手机号`/^1[3456789]\d{9}$/`
> 这三条B站弹幕屏蔽常用
> 1. 匹配23333一类弹幕：`/^2(3)+$/`
> 2. 匹配66666一类弹幕：`/^6+$/`
> 3. 互动视频防剧透：`/[abcd]/`
4. 正则表达式后也可以加这些东西
    1. i 不区分大小写
    2. g 全局匹配
### 三、js里的正则表达式
```js 
var str = 'hello word';
// 定义正则表达式
var reg = /[abcde]/;
// 匹配
console.log(reg.test(str))
var arr = reg.exec(str)
for (x in arr) {
    console.log(x)
}
```
> 注：
> 1. 正则表达式无需引号
> 2. 匹配是否存在只需使用test方法，exec还会返回一些扩展属性，详见[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)
另外js里的search、match、replace和split也支持正则表达式
```js
var str = "abcdefg26136abcdefg1327hijk";
console.log("原字符串：" + str);
console.log(str.search(/def/));
console.log(str.match(/\d/));
console.log(str.match(/\d/g));
console.log(str.replace(/[def]/, "hello"));
console.log(str.replace(/[def]/g, "hello"));
var arr = str.split(/\d+/);
for (var x in arr) {
    console.log(arr[x]);
}
```
> 注：不加g默认匹配第一个，加g就匹配全局