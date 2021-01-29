# DOM节点操作（1）
### 一、DOM节点类型
1. 标签节点
2. 文本节点
3. 属性节点
4. 其他节点
> 标签是节点，节点不一定是标签
### 二、节点关系
```js
// 选中div
var div = document.getElementById('div');
// 1.父节点(HTML)
console.log(div.parentNode.innerHTML);
// 2.子节点列表（包含回车及空格）
console.log(div.childNodes.length);
// 3.第一个子节点（回车）
console.log(div.firstChild.innerHTML);
// 4.第一个子元素节点
console.log(div.firstElementChild.innerHTML);
// 5.最后一个子节点（回车）
console.log(div.lastChild.innerHTML);
// 6.最后一个元素子节点
console.log(div.lastElementChild.innerHTML);
// 7.下一个兄弟节点
console.log(div.nextSibling.innerHTML);
// 8.下一个元素兄弟节点
console.log(div.nextElementSibling.innerHTML);
// 9.上一个兄弟节点
console.log(div.previousSibling.innerHTML);
// 10.上一个元素兄弟节点
console.log(div.previousElementSibling.innerHTML);
```
[例子](./练习/1.html) [运行例子](https://homework.zdatek.top/24/练习/1.html)(需要打开开发者工具)
### 三、节点属性
```js
// 节点名称
console.log(ol.nodeName);
console.log(ol.getAttributeNode('id').nodeName);
// 节点值
// 元素的节点值为空
// 属性的节点值为属性值
// 文本的节点值为文本自身
console.log(ol.nodeValue);
console.log(ol.getAttributeNode('id').nodeValue);
console.log(ol.firstElementChild.firstChild.nodeValue);
// 节点类型
// 元素的节点类型为1
// 属性的节点类型为2
// 文本的节点类型为3
console.log(ol.nodeType);
console.log(ol.getAttributeNode('id').nodeType);
console.log(ol.firstElementChild.firstChild.nodeType);
```
[例子](./练习/2.html) [运行例子](https://homework.zdatek.top/24/练习/2.html)(需要打开开发者工具)
### 四、控制节点属性
```js
// 选中img
var img = document.getElementById('img')

function addImg() {
    // 给img添加src属性
    img.setAttribute('src', '/23/练习/img/82514418_p0.png')
}

function getImg() {
    // 获取src属性
    alert(img.getAttribute('src'))
}

function delImg() {
    // 删除src属性
    img.removeAttribute('src')
}
```
[例子](./练习/4.html) [运行例子](https://homework.zdatek.top/24/练习/4.html)