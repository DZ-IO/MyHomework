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