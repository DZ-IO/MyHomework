# js面向对象
### 一、编程的两种思想：面向过程和面向对象
> 毕竟这东西上升到了思想，所以会有人说这玩应难
> 不过，难者不会会者不难对吧
1. 面向过程  
    按照需求的执行步骤写出代码就是面向过程
    > 就是我们一直在做的  
    > 不过问题就是弱化了“类”这个概念
    > 比如我们需要保存一个学生信息，面向过程就需要创建一堆变量
2. 面向对象
    对需求进行归类，然后按照“类”进行处理就是面向对象
    > 马上我们就会提到类和对象  

PS：这个“对象”的英文是object
### 二、类和对象
1. 类：  
    类就是种类的意思  
    比如：学生、43班的学生、学web前端的学生  
    再比如：B站UP主、B站虚拟UP主
2. 对象：  
    详细描述一个类就是对象  
    比如：B站UID是324267043的，昵称大泽的UP主
### 三、创建对象
js下创建对象还是老规矩，只是创建的是Object
```js
// 创建对象
var obj1 = new Object();
// 设置属性
obj1.value1 = 'test1';
obj1.value2 = 'test2';
// 设置方法
obj1.func1 = function() {
    console.log('value1:' + this.value1)
    console.log('value2:' + this.value2)
}
obj1.func1()
```
当然，就像String可以`var str1="hello world"`一样，对象也可以直接创建（包在{}里）
```js
// 创建对象（字面量赋值）
var obj1 = {
    // 设置属性
    value1: 'test1',
    value2: 'test2',
    // 设置方法
    func1: func1 = function() {
        console.log('value1:' + this.value1)
        console.log('value2:' + this.value2)
    }
};
obj1.func1()
```
如果需要反复创建对象，可以使用函数进行封装  
专业术语叫工厂模式
```js
// 工厂模式创建对象
function cobj(value1, value2) {
    // 创建对象
    var obj = new Object();
    // 设置属性
    obj.value1 = value1;
    obj.value2 = value2;
    // 设置方法
    obj.func1 = function() {
        console.log('value1:' + this.value1)
        console.log('value2:' + this.value2)
    }
    return obj
}

var obj1 = cobj(1, 2)
var obj2 = cobj(1, 2)
console.log(obj2)
obj1.func1()
obj2.func1()
```
但，请注意两点：
1. 这样创建的还是object对象，或者说我们没法确定对象类型
2. 每创建一个对象就需要执行一遍这些代码，很耗资源的
所以我们可以这么干
```js
// 构造方法
function Obj(value1, value2) {
    // 设置属性
    this.value1 = value1;
    this.value2 = value2;
    // 设置方法
    this.func1 = function() {
        console.log('value1:' + this.value1)
        console.log('value2:' + this.value2)
    }
}

var obj1 = new Obj(1, 2)
var obj2 = new Obj(1, 2)
console.log(obj2)
obj1.func1()
obj2.func1()
```
这种方式叫构造方法  
可是耗资源的问题还没解决。。。  
我们可以这么干
```js
// 构造方法
function Obj(value1, value2) {
    // 设置属性
    this.value1 = value1;
    this.value2 = value2;
}
// 设置方法
Obj.prototype.func1 = function() {
    console.log('value1:' + this.value1)
    console.log('value2:' + this.value2)
}

var obj1 = new Obj(1, 2)
var obj2 = new Obj(1, 2)
console.log(obj2)
obj1.func1()
obj2.func1()
```
没错，这样设置func1的部分也只需执行一次，问题解决  
这种方式叫函数原型
> 原型的时候就把他定义好，量产的时候就不用再定义了
### 四、关于函数原型
记住，什么对象都有prototype，所以试着给String定义一些原型吧：  
要求：给String定义一些原型，实现去除前面、后面、前后、全部空格功能  
[答案](./练习/使用原型去空格.js)