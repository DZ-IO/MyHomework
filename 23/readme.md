# js BOM&DOM
## 一、DOM
DOM 文档对象模型，用于和文档树交互
1. 选择方式
```js
// 按标签名选择
document.getElementsByTagName('标签名')
// 按name标签选择
document.getElementsByName('值')
// 按类名选择
document.getElementsByClassName('类名')
// 按id选择
document.getElementById('id')
```
[例子](./练习/1.html) [运行例子](https://homework.zdatek.top/23/练习/1.html)
>思考：为什么只有id是Element(单数)  
>坑注意：不能用for-in，因为会出现奇怪的东西(自行测试或查看例子)
2. 操作方式
* innerHTML向标签里插入html
```js
document.getElementById('msg').innerHTML = msg
```
* style插入样式
```js
document.getElementById('msg').style.backgroundColor = '#6cf'
```
>带`-`的样式需转换为驼峰命名
* 插入/修改属性
```js
document.getElementById("id1").src = '/1/img/wish01.jpg'
document.getElementById("msg").align = 'center'
```
>理论上所有属性都可以这样改
## 二、BOM
BOM 浏览器对象模型，用于和浏览器交互(控制浏览器)  
现阶段常用的:  
* 修改地址栏的`location`
```js
// 展示当前URL
document.write(location.href + '<br>');
// 展示当前URL路径
document.write(location.pathname);
// 修改地址栏
location.href = location.href + '?c=1';
```
* 定时事件
```js
// 定时执行,常用于电子表、倒计时
setInterval("函数名()",时间)
// Interval:时间间隔
// 延时执行,常用于开屏广告、广告对话框
setTimeout("函数名()",时间)
```
[例子:电子表](./练习/3.html) [例子:倒计时（可能失效）](./练习/5.html)   
[运行电子表](https://homework.zdatek.top/23/练习/3.html) [运行倒计时](https://homework.zdatek.top/23/练习/5.html)
* 开启或结束定时函数
关闭一个定时函数之前必须确保你能找到它（赋值给一个变量）
```js
// 定义全局变量auto
var auto = null;

function start() {
    // 把定时函数赋值给一个全局变量方便处理
    auto = setInterval('timeUpdate()', 1000)
}

function stop() {
    // 利用全局变量结束定时函数
    clearInterval(auto)
    document.getElementById('time').innerHTML = ""
}
```
[这个例子](./练习/4.html) [运行](https://homework.zdatek.top/23/练习/4.html)
