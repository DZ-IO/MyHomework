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