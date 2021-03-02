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