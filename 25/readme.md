# DOM节点操作（2）
增删改查这玩意对于DOM来说也适用
> 其实编程本身，乃至用电脑本身都离不开增删改查
查咱们已经说过了，这回就说说增删改
### 一、增
1. 先确定在哪增加
   ```js
   var app = document.getElementById('app');
   ```
2. 创建
    ```js
    var img = document.createElement('img')
    ```
2. 加入属性
   ```js
   img.setAttribute('style', 'width:100px;')
   img.setAttribute('src', '/23/练习/img/82514418_p' + x + '.png')
   ```
3. 插入文档
   ```js
   // 两种方法
   app.insertBefore(img, app.firstChild) //插在元素前面
   app.appendChild(img) //作为子元素插入
   ```
[例子](./练习/1.html) [运行例子](https://homework.zdatek.top/25/练习/1.html)
### 二、删
注意：不能删除自己（哪有自己把自己删了的玩法），只能让元素他爹把他删了
```js
// 先选中
var img = document.getElementById('st');
// 通知他爹把他删了
img.parentNode.removeChild(img)
```
### 三、改
改属性[之前](../24/readme.md#四、控制节点属性)已经说过了
这次研究下怎么改标签
1. 准备工作一样的
    ```js
    var img = document.getElementById('nd');
    var nc = document.createElement('img')
    nc.setAttribute('src', '/23/练习/img/82514418_p1.png')
    nc.setAttribute('style', 'height:480px;')
    ```
2. 改
   ```js
   img.parentNode.replaceChild(nc, img)
   ```
[删与改的例子](./练习/2.html) [运行例子](https://homework.zdatek.top/25/练习/2.html)
### 四、查
这次再讲两种查
* 查style
  分两种情况：
  1. IE
     ```js
     元素.currentStyle.样式
     ```
  2. 其他
     ```js
     document.defaultView.getComputedStyle(元素,null).样式
     ```
  > 这次我站IE这边

  因为这点，实际我们通常用这招
  ```js
  //判断浏览器类型
  if(adv.currentStyle){
    advTop = parseInt(adv.currentStyle.top);
    advLeft = parseInt(adv.currentStyle.left);
  }else{
    advTop = parseInt(document.defaultView.getComputedStyle(adv,null).top);
    advLeft = parseInt(document.defaultView.getComputedStyle(adv,null).left);
  }
  ```
* 查滚动条
  > 这次又有浏览器搞特殊
  ```js
  // Chrome
  document.body.scrollTop
  document.body.scrollLeft
  //其他
  document.documentElement.scrollTop
  document.documentElement.scrollLeft
  ```
所以咱通常这么搞
```js
var top = parseInt(document.documentElement.scrollTop||document.body.scrollTop);
var left = parseInt(document.documentElement.scrollLeft||document.body.scrollLeft);
```
[例子](./练习/5/index.html) [运行例子](https://homework.zdatek.top/25/练习/5/index.html)