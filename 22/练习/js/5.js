// 全局变量
var test = 123;
// 局部变量
function f1() {
    var test = 456
    alert(test)
    alert(this.test)
}
f1();
// 参数里的变量（局部变量）
function f2(test) {
    alert(test)
    alert(this.test)
}
f2(456);
// 覆盖全局变量
function f3() {
    test = 456
    alert(test)
    alert(this.test)
}
f3();