# js内置对象1
## 一、数组
* 定义：在内存中划出一块连续的区域存储多个数据
* 声明
>示例声明一个叫arr的数组
1. 直接声明
```js
var arr = ["小强", "旺财", "来福", "如花"];
var arr = new Array("小强", "旺财", "来福", "如花");
```
2. 先声明长度再赋值
```js
var arr = new Array(4);
var arr = new Array();

// 赋值
arr[0] = "小强"
arr[1] = "旺财"
arr[2] = "来福"
arr[3] = "如花"
```
> 长度可以省略  
> 数组内可以存储很多值（不止4个）
* 使用
1. 使用下标展示数组中的值:
```js
document.write(arr[0] + '<br>')
```
>下标从0开始，使用数组名称[下标]获取指定下标的值
2. 用for循环获取数组中的值:
```js
for (i = 0; i < arr.length; i++) {
    document.write(arr[i] + '<br>')
}
```
>arr.length可以获数组的长度，长度减1才是最大下标
3. 使用for-in循环遍历数组
```js
for (x in arr) {
    document.write(arr[x] + '<br>')
}
```
>PS：js很随意，甚至这种数组都可以出来
>```js
>var arr = new Array();
>
>arr[2] = 'test'
>arr[5] = true
>arr['abc'] = 123
>
>for (i = 0; i < arr.length; i++) {
>    document.write(i + ':' + arr[i] + '<br>')
>}
>document.write('<hr>')
>for (i in arr) {
>    document.write(i + ':' + arr[i] + '<br>')
>}
>```
4. `arr.length`输出长度
> 其实我们已经用过了，在用for循环获取数组中的值里
```js
document.write('数组的长度:' + arr.length + '<br>')
```
5. `arr.join()`拼接内容
```js
document.write('数组的内容:' + arr.join() + '<br>')
document.write('数组的内容:' + arr.join('=') + '<br>')
```
>括号内定义分隔符
6. `arr.push('内容')`在数组末尾加入内容
```js
arr.push('李四')
arr.push('张三')
document.write('数组的长度:' + arr.length + '<br>')
document.write('数组的内容:' + arr.join() + '<br>')
```
7. `arr.concat(另一数组)`拼接数组
```js
var arr2 = ['罗翔']
var arr = arr.concat(arr2)
document.write('数组的长度:' + arr.length + '<br>')
document.write('数组的内容:' + arr.join() + '<br>')
```
8. `arr.sort()`排序
```js
var arr = ["jack", "rose", "appLe", "banana"];
// var arr = [10, 20, 73, 84, -100, 34, 99, 30000, -10000];
document.write("排序前: " + arr.join() + "<br>");
arr.sort()
document.write("排序后: " + arr.join() + "<br>");
```
> 注：该函数会将数组里的值转换成字符串然后按首字母排序  
> 如需实现整数和浮点数排序要用下面的方法
>1. 升序排序
>```js
>var arr = [10, 20, 73, 84, -100, 34, 99, 30000, -10000];
>document.write("排序前: " + arr.join() + "<br>");
>arr.sort(function(a, b) { return a - b })
>document.write("排序后: " + arr.join() + "<br>");
>```
>2. 降序排序
>```js
>var arr = [10, 20, 73, 84, -100, 34, 99, 30000, -10000];
>document.write("排序前: " + arr.join() + "<br>");
>arr.sort(function(a, b) { return b - a })
>document.write("排序后: " + arr.join() + "<br>");
>```
9. `indexOf(值)`:获得值在数组中首次出现的下标
```js
var arr = [73, 84, 100, -1000, 84, 100, 200, 3000, 73];
document.write(arr.indexOf(73));
document.write(arr.indexOf(44));
```
>如果没有则返回一个小于0的数

## 二、时间
1. 获取浏览器时间
```js
var now = new Date();
var nowa = new Array();
// 获取年份
nowa['year'] = now.getFullYear();
// 获取月份(0-11,使用前需加1)(date里最奇怪的就是它)
nowa['month'] = now.getMonth();
// 获取日期
nowa['date'] = now.getDate();
// 获取星期（0-6）
nowa['day'] = now.getDay();
// 小时
nowa['hh'] = now.getHours();
// 分钟
nowa['mm'] = now.getMinutes();
// 秒钟
nowa['ss'] = now.getSeconds();

// 输出
for (i in nowa) {
    document.write(i + ':' + nowa[i] + '<br>')
}
```
2. 格式化输出时间和日期
```js
// 处理月份
nowa['month']++;
// 星期的处理有点麻烦
nowa['day'] = ["日", "一", "二", "三", "四", "五", "六"][nowa['day']];
// 简单点说就是准备一个语言包数组进行转换

// 输出
document.write(nowa['year'] + '年' + nowa['month'] + '月' + nowa['date'] + '日,星期' + nowa['day'] + ',' + nowa['hh'] + ':' + nowa['mm'] + ':' + nowa['ss'])
```