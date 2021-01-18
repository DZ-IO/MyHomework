# js循环结构
重复的做一件事，就叫循环
1. 循环四要素
循环初始化、循环条件、循环操作、循环迭代（循环变量的改变）
2. while循环
```js
// 循环初始化
var i = 1;
// 循环条件
while (i <= 10) {
    // 循环操作
    document.write('<h1>测试</h1>');
    // 循环迭代
    i++;
}
```
>while循环特点：
>1. 先判断，再执行
>2. 可能执行也可能不执行
3. do-while循环
```js
var flag;
do {
    // 操作
    alert('进行练习');
    // 初始化及迭代
    flag = prompt('合格了吗');
} while (flag == 'n'); // 条件
alert('练习结束');
```
>do-while循环特点：
>1. 先执行，再判断
>2. 一定会执行一次
4. 死循环
```js
while (true) {
    // 操作
    alert('进行练习');
    // 初始化及迭代
    flag = prompt('合格了吗');
    // 条件
    if (flag == 'y') {
        break; //跳出循环
    }
}
```