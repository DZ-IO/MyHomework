# JavaScript基础
1. js的引入
```html
<!-- 外部js -->
<script src="./js/2.js"></script>
<!-- <script>标签 -->
<script>
    // js代码
</script>
<!-- 直接写在HTML标签中 -->
<input type="button" value="1" onclick="console.log(alert('test'))">
```
2. 变量
变量是用来存储数据的
```JavaScript
// 声明变量
var userName;
// 赋值
userName = 'daze';
// 使用变量
document.write(userName);
// 声明的同时赋值
sex = 1;
document.write(sex);
```
3. 数据类型
```javascript
var a = 'test', //  字符串
    b = 13, // 数字
    c = false, // 布尔
    d = null, // 空
    e; // 未定义

// typeof输出
document.write('<br> a: ' + a + ' typeof: ' + typeof(a))
document.write('<br> b: ' + b + ' typeof: ' + typeof(b))
document.write('<br> c: ' + c + ' typeof: ' + typeof(c))
document.write('<br> d: ' + d + ' typeof: ' + typeof(d))
document.write('<br> e: ' + e + ' typeof: ' + typeof(e))
```
4. 运算符
```js
// 算数运算符
document.write('1+1=' + (1 + 1))
document.write('<br>')
document.write('1-1=' + (1 - 1))
document.write('<br>')
document.write('10*3=' + (10 * 3))
document.write('<br>')
document.write('10/3=' + (10 / 3))
document.write('<br>')
document.write('10%3=' + (10 % 3))
document.write('<br>')

a = 1
document.write('++a=' + ++a)
document.write('<br>')
document.write('--a=' + --a)
document.write('<br>')
document.write('a++=' + a++)
document.write('<br>')
document.write('a--=' + a--)
document.write('<br>')

// 逻辑运算符
var x = 10
var y = 100
var z = '100'
document.write('x>y:' + x > y)
document.write('<br>')
document.write('x>y:' + x > y)
document.write('<br>')
document.write('x<=y:' + x <= y)
document.write('<br>')
document.write('x>=y:' + x >= y)
document.write('<br>')
document.write('x!=y:' + x != y)
document.write('<br>')
document.write('x==y:' + x == y)
document.write('<br>')
document.write('z==y:' + z == y)
document.write('<br>')
document.write('z===y:' + z === y)
document.write('<br>')
document.write('z!=y:' + z != y)
document.write('<br>')
document.write('z!==y:' + z !== y)
document.write('<br>')

document.write('true&&true:' + true && true)
document.write('<br>')
document.write('true&&false:' + true && false)
document.write('<br>')
document.write('false&&false:' + false && false)
document.write('<br>')

document.write('true||true:' + true || true)
document.write('<br>')
document.write('true||false:' + true || false)
document.write('<br>')
document.write('false||false:' + false || false)
document.write('<br>')

document.write('!true:' + !true)
document.write('<br>')
document.write('!false:' + !false)
document.write('<br>')
```