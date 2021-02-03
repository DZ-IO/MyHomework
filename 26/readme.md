# JS事件
事件是用来触发函数的
* 绑定事件的三种方式
1. 匿名函数
```js
document.getElementById('id').onclick = function() {
    alert('test')
}
```
2. 标签
```html
<button onclick="test()" id="id"></button>
<script>
function test() {
    alert('test')
}
</script>
```
3. 绑定函数addEventListener
```js
document.getElementById('id').addEventListener('click', function() {
    alert('test')
}, false)
```

* 鼠标事件
```html
    <ul>
        <li onclick="this.style.color='red'">单击试试</li>
        <li ondblclick="this.style.color='red'">双击试试</li>
        <li onmouseover="this.style.color='red'" onmouseout="this.style.color='black'">划过试试</li>
        <li onmousedown="this.style.color='yellow'" onmouseup="this.style.color='blue'">按下试试</li>
        <li onmousemove="this.style.color='green'">移动试试</li>
    </ul>
```
例子
><ul>
>    <li onclick="this.style.color='red'">单击试试</li>
>    <li ondblclick="this.style.color='red'">双击试试</li>
>    <li onmouseover="this.style.color='red'" onmouseout="this.style.color='black'">划过试试</li>
>    <li onmousedown="this.style.color='yellow'" onmouseup="this.style.color='blue'">按下试试</li>
>    <li onmousemove="this.style.color='green'">移动试试</li>
></ul>
* 表单事件
```html
    <form action="" onreset="alert('重置')" onsubmit="alert('提交')">
        <label for="">用户名</label>
        <input type="text" onfocus="alert('选中')" name="" id=""><br>
        <label for="">密码</label>
        <input type="password" name="" id="" onblur="alert('焦点丢失')"><br>
        <label for="">性别</label>
        <select onchange="alert('改变')" name="" id="">
            <option value="">男</option>
            <option value="">女</option>
        </select><br>
        <input type="submit" name="" id=""><input type="reset" name="" id="">
    </form>
```
> blur：模糊（丢了focus（焦点）就模糊了）
> 注意分清哪里重置了
* 键盘事件
```html
<input type="text" onkeydown="console.log('down')" onkeypress="console.log('press')" onkeyup="console.log('up')">
```
例子(记得打开开发者工具)
><input type="text" onkeydown="console.log('down')" onkeypress="console.log('press')" onkeyup="console.log('up')">

* UI事件