# js函数
执行特定功能的代码块
## 一、分类：
系统函数和自定义函数
## 二、常用的系统函数
  1. `parseInt(字符串)`转换成整数
  ```js
  console.log(parseInt("123"))
  ```
  2. `parseFloat(字符串)`转换成浮点数
  ```js
  console.log(parseFloat("12.3"))
  ```
  3. `isNaN(字符串)`判断是不是数字
  > isNaN:is not a number
  > 所以此函数与你想象的可能相反
  ```js
  console.log(isNaN('123'))
  console.log(isNaN('abc'))
  ```
## 三、自定义函数
* 定义
```js
function 函数名([参数1,参数2,...参数n]) {
  函数体（代码块）
  [return 返回值]
}
```
* 调用
```html
<p 事件名称=函数名()></p>
```
```js
[变量 = ]函数名()
```
## 四、匿名函数：没有函数名的函数
```js
事件名称=function(){
  函数体
}
```
## 五、局部变量和全局变量
声明在所有函数外部的变量为全局变量  
声明在函数体内部的变量为局部变量，必须使用var关键字，参数也是局部变量  
例子：
```js
// 全局变量
var test = 123;
// 局部变量
function f1() {
    var test = 456
    alert(test)
    alert(this.test)
}
f1();
// 参数里的变量（局部变量）
function f2(test) {
    alert(test)
    alert(this.test)
}
f2(456);
// 覆盖全局变量
function f3() {
    test = 456
    alert(test)
    alert(this.test)
}
f3();
```
区别：
1. 声明的位置不同
2. 作用域不同
3. 生命周期不同

## 闭包
在一个完整的函数体里定义了另一个函数
此时外部函数声明的变量相当于内部函数的全局变量
此时内部函数可以读取外部函数内的局部变量
```js
function f1() {
  var num = 1
  // 这个函数就是闭包
  function f2() {
    console.log(num)
  }
  f2()
}
f1()
```
>注：闭包的内存消耗很大，所以不要滥用闭包