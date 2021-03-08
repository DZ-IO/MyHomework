//定义父类的构造方法
function Animal(name) {
    this.name = name || "动物";
    this.sleep = function() {
        return this.name + "在睡觉";
    }
}

//定义父类的原型方法
Animal.prototype.eat = function(food) {
    return this.name + "爱吃" + food;
}

console.log("原型链继承");

function Dog() {

}
//使用父类对象覆盖了子类的原型
Dog.prototype = new Animal();
//需要手动将子类原型的构造方法重新指向子类
Dog.prototype.constructor = Dog;

var dog = new Dog();
//dog.name = "旺财";
console.log(dog.name);
console.log(dog.sleep());
console.log(dog.eat("骨头"));
console.log(dog instanceof Animal);
console.log(dog instanceof Dog);

console.log("构造继承（call继承）");

function Pig(name) {
    Animal.call(this);
    this.name = name || "八戒";
}

var pig = new Pig("佩奇");
//验证代码重用
console.log(pig.name);
console.log(pig.sleep());
// console.log(pig.eat("胡萝卜"));
//验证is a的关系
console.log(pig instanceof Animal);
console.log(pig instanceof Pig);

console.log("实例继承");

function Cat(name) {
    var animal = new Animal();
    animal.name = name || "TOM";
    return animal;
}

var cat = Cat();
//验证代码重用
console.log(cat.name);
console.log(cat.sleep());
console.log(cat.eat("小鱼"));
//验证is a的关系
console.log(cat instanceof Animal);
console.log(cat instanceof Cat);

console.log("拷贝继承");

function Monkey(name) {
    var animal = new Animal();
    for (var i in animal) {
        Monkey.prototype[i] = animal[i];
    }
    this.name = name || "悟空";
}

var monkey = new Monkey();

//验证代码重用
console.log(monkey.name);
console.log(monkey.sleep());
console.log(monkey.eat("桃儿"));
//验证is a的关系
console.log(monkey instanceof Animal);
console.log(monkey instanceof Monkey);

console.log("组合继承");

function Tiger(name) {
    Animal.call(this);
    this.name = name || "虎力大仙";
}

Tiger.prototype = new Animal();
Tiger.prototype.constructor = Tiger;

var tiger = new Tiger();

//验证代码重用
console.log(tiger.name);
console.log(tiger.sleep());
console.log(tiger.eat("肉"));
//验证is a的关系
console.log(tiger instanceof Animal);
console.log(tiger instanceof Tiger);

console.log("寄生组合继承");

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

var lion = new Lion();

//验证代码重用
console.log(lion.name);
console.log(lion.sleep());
console.log(lion.eat("肉"));
//验证is a的关系
console.log(lion instanceof Animal);
console.log(lion instanceof Lion);