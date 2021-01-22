# js内置对象2
## 一、字符串
* 定义一个字符串（两种方法）
>示例声明一个叫`str`的字符串
```js
var str = 'abcdefg';
var str = new String('abcdefg');
```
* 使用
>其实字符串好多方法和数组很像
1. 展示
```js
document.write('字符串为' + str + '<br>')
```
2. `length`获取长度
```js
document.write('长度：' + str.length + '<br>')
```
>和数组长度的获取方法一样
3. `charAt(x)`获取第x个字符所在的位置
```js
document.write('第四个字符为' + str.charAt(3) + '<br>')
```
>注意 括号里那是下标（要-1）
4. 字符串拼接（`concat('目标字符串')`）
```js
str = str.concat('abcabc')
document.write('新字符串为' + str + '<br>')
```
>注：
>1. 字符串属于不可变对象，所以处理的时候需要在声明一次
>2. +=和+可能更好用
>3. 数组也能这么干
5. 替换第一个字符串(`replace('查找', '替换')`)
```js
str = str.replace('b', 'x')
document.write('字符串为' + str + '<br>')
```
>注：该功能只能替换第一个字符串
6. 查找  
 * 首次出现
 ```js
 document.write('c首次出现' + str.indexOf('c') + '<br>')
 document.write('c在第四个字符后首次出现' + str.indexOf('c', 3) + '<br>')
 document.write('h首次出现' + str.indexOf('h') + '<br>')
 ```
  * 最后出现
 ```js
 document.write('c最后出现在' + str.lastIndexOf('c') + '<br>')
 document.write('h最后出现在' + str.lastIndexOf('h') + '<br>')
 ```
 >注：下标仍然从左到右

  * 是否存在
 ```js
 document.write('字符ab是否存在' + str.match('ab') + '<br>')
 document.write('字符h是否存在' + str.match('h') + '<br>')
 ```
7. 字符串拆分（`split(分隔符)`)
```js
var arr = str.split('c')
for (x in arr) {
    document.write(arr[x] + '<br>')
}
```
>注:此功能会把字符串拆分成数组
8. 大小写转换
```js
document.write('转成大写：' + str.toUpperCase() + '<br>')
document.write('转成小写：' + str.toLowerCase() + '<br>')
```
9. 截取
```js
document.write('从下标3开始一共截取四个：' + str.substr(3, 4) + '<br>')
document.write('从下标3截到下标4，包前不包后：' + str.substring(3, 4) + '<br>')
document.write('从下标3一直截到末尾：' + str.substring(3) + '<br>')
document.write('反过来截要用slice：' + str.slice(-3, -1) + '<br>')
```
>注：
>1. slice:片、切片
>2. 截取遵循包前不包后原则。即包含第一个下标，不包含最后一个下标
>3. 不推荐使用`substr()`

## 二、Math 数学
1. 向上取整：
```js
document.write(Math.ceil(11.4) + '<br>')
document.write(Math.ceil(11.5) + '<br>')
document.write(Math.ceil(-11.4) + '<br>')
document.write(Math.ceil(-11.5) + '<br>')
```
> ceil：天花板
2. 向下取整
```js
document.write(Math.floor(11.4) + '<br>')
document.write(Math.floor(11.5) + '<br>')
document.write(Math.floor(-11.4) + '<br>')
document.write(Math.floor(-11.5) + '<br>')
```
>floor：地板
>其实这个说法已经很形象了
3. 四舍五入
```js
document.write(Math.round(11.4) + '<br>')
document.write(Math.round(11.5) + '<br>')
document.write(Math.round(-11.4) + '<br>')
document.write(Math.round(-11.5) + '<br>')
```
4. 随机
* 生成0-1之间的随机数
```js
document.write(Math.random() + '<br>')
```
>注意：可以取到0，取不到1
* 生成x-x之间的随机整数：
```js
function randInt(small, big) {
    return Math.floor(Math.random() * (big - small + 1) + small)
}
```
> 示例生成2-7之间的随机整数
> ```js
> document.write(Math.floor(Math.random() * (7 - 2 + 1) + 2))
> ```