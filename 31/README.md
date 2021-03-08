# JS继承
> 现实中的继承：父亲去世后的资产可以归儿子使用
是代码重用的重要手段，将父类的代码提供给子类使用；同时是一种规范，防止子类返回的内容不统一
关系：子类 is a 父类
js只关心如何创建子类
> 讲继承之前我们先定义一个父类
```js
function Animal(nam) {
    this.nam = nam || '动物'
    this.sleep = function() {
        return this.name + '在睡觉'
    }
}
Animal.prototype.eat = function(food) {
    return this.nam + '爱吃' + food
}
```
### 一、原型链继承
核心：将父类的实例作为子类的原型，在子类父类之间添加原型链接
```js
function Dog() {

}
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog
```
特点：
1. 纯粹的继承关系
2. 父类新增原型方法或属性，子类都可以直接访问
3. 简单，易于实现

缺点：
1. 无法实现多继承
2. 来自原型对象的所有属性都被实例共享
3. 创建子类对象时，无法使用构造方法传参
### 二、构造继承（call继承）
核心：使用父类的构造方法来增强子类实例，相当于复制父类的实例属性给子类（没用到原型）
```js
function Pig(name) {
    Animal.call(this);
    this.name = name || "八戒";
}
```
特点：
1. 解决了1中子类实例共享父类引用属性的问题
2. 创建子类对象时可以通过构造方法传参
3. 可以实现多继承（call多个父类对象）

缺点：
1. 实例只是子类的实例，不是父类的实例（没有is a的关系）
2. 只能继承父类的实例属性和方法，不能继承父类的原型属性和方法
3. 无法实现函数的复用，每个子类都有父类实例函数的副本，影响性能

三、实例继承
核心：为父类实例添加新的特性，作为子类实例返回
```js
function Cat(name) {
    var animal = new Animal();
    animal.name = name || "TOM";
    return animal;
}
```
特点：
1. 不限制调用方法，不管是new 子类()还是子类()，返回的对象具有相同的效果

缺点：
2. 实例为父类的实例，不是子类的实例
3. 无法实现多继承

四、拷贝继承
核心：使用父类的构造函数增强子类实例（将父类私有的共有的通通复制一份一样的给子类）
```js
function Monkey(name) {
    var animal = new Animal();
    for (var i in animal) {
        Monkey.prototype[i] = animal[i];
    }
    this.name = name || "悟空";
}
```
特点：
1. 支持多继承

缺点：
1. 实例只是子类的实例，不是父类的实例（没有is a的关系）
2. 效率偏低，内存占用高

五、组合继承
核心：通过调用父类构造，继承父类的属性并保存传参的功能，然后通过父类实例作为子类的原型，实现函数的复用（将1和2组合使用）
```js
function Tiger(name) {
    Animal.call(this);
    this.name = name || "虎力大仙";
}

Tiger.prototype = new Animal();
Tiger.prototype.constructor = Tiger;
```
特点：
1. 弥补了方法2的缺陷，既可以继承实例的属性和方法，又可以继承原型的属性和方法
2. 即使子类的实例，又是父类的实例
3. 不存在引用属性共享的问题
4. 可以使用构造传参
5. 函数可以复用

缺点：
1. 调用了两次父类构造函数，生成了两次实例


六、寄生组合继承
核心：通过寄生的方式，砍掉父类的实例属性，在调用两次父类构造时，就不会初始化两次实例属性和方法，避免了方式5的部分缺点
```js
function Lion(name) {
    Animal.call(this);
    this.name = name || "辛巴";
}

//创建一个没有实例属性及方法的类
var Super = function() {

    }
    //将父类的原型复制给这个类
Super.prototype = Animal.prototype;
//将这个类的实例作为子类的原型
Lion.prototype = new Super();
Lion.prototype.constructor = Lion;
```
特点：
1. 堪称完美

缺点：
1. 较为复杂