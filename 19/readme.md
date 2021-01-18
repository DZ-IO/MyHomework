# for循环和多重循环
### 一、for循环
1. 基本结构
```js
for (var i = 1; i <= 100; i++) {
    res += i;
}
```
>特点
>1. for循环一般执行明确知道次数的循环
>2. for循环只需要专心考虑循环操作就可以了，其他的都有固定位置
2. for循环的参数可以不全
```js
var i = 1;
for (; i <= 5;) {
    document.write('test');
    i++;
}
```
3. 死循环
```js
for (;;) {
    console.log('test');
}
```
### 二、多重循环
在一个循环体中加入另一个完整的循环体  
所有的循环语法可以任意嵌套  
内层循环变量变化一遍，外层循环变量变化一次  
例子：
```js
for (i = 0; i <= 10; i++) {
    for (j = 0; j <= 10; j++) {
        document.write('i:' + i + '&nbsp;j:' + j + '&nbsp;')
    }
    document.write('<br>')
}
```
>经典项目：[打印图形](./练习/js/img.js) [演示](https://homework.zdatek.top/19/练习/img.html)
### 三、break和continue
1. `break` : 跳出循环，不执行了
```js
for (i = 1; i <= 10; i++) {
    if (i % 10 == 2) {
        break;
    }
    document.write(i + '&nbsp;')
}
```
2. `continue` : 加速循环，这次不执行了
```js
for (i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    document.write(i + '&nbsp;')
}
```
