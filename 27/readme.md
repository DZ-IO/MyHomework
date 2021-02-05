# js事件2
### 一、获取鼠标坐标
```js
document.onclick = function(e) {
    // event.clientX 鼠标指针水平坐标
    // event.clientY 鼠标指针垂直坐标
    alert(event.clientX + "," + event.clientY)
    alert(e.clientX + "," + e.clientY)
}
```
[例子](./练习/1.html) [运行例子](https://homework.zdatek.top/27/练习/1.html)
### 二、JS事件流
冒泡：从子元素到父元素  
捕获：从父元素到子元素  
默认就是冒泡  
使用捕获：
```js
document.getElementsByTagName('body')[0].addEventListener('click', function() {
    alert('body被点')
}, true)
```
[冒泡例子](./练习/2.html) [运行例子](https://homework.zdatek.top/27/练习/2.html)  
[捕获例子](./练习/3.html) [运行例子](https://homework.zdatek.top/27/练习/3.html)
### 三、阻止事件冒泡
```js
oEvent.stopPropagation();
```
>注：
>1. Propagation 扩散
>2. 如需兼容IE：
>    ```js
>    oEvent.cancelBubble = true
>    ```
[例子](./练习/4.html) [运行例子](https://homework.zdatek.top/27/练习/4.html)  
[生产环境实例：弹出菜单](./练习/5.html) [运行](https://homework.zdatek.top/27/练习/5.html)  
### 四、去除默认功能
返回false即可
```js
document.oncontextmenu = function(e) {
    return false
}
```
[例子](./练习/6.html) [运行例子](https://homework.zdatek.top/27/练习/6.html)  
[生产环境实例：右键菜单](./练习/7.html) [运行](https://homework.zdatek.top/27/练习/6.html)  
[生产环境实例：拖拽盒子](./练习/8.html) [运行](https://homework.zdatek.top/27/练习/7.html)  
