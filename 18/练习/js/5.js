// 猜数程序 1-32767随机整数

var random = Math.floor(Math.random() * 32767) + 1;
var num = 1;
console.log(random);
// 循环初始化
var ui = prompt('请输入1-32767之间的任意整数');
// 循环条件 ui!=random
while (ui != random) {
    // 操作
    if (ui > random) {
        alert('您猜大了')
    } else {
        alert('您猜小了')
    }
    num++;
    // 循环迭代：再问一遍不
    ui = prompt('请输入1-32767之间的任意整数');
}

if (num == 1) {
    alert('真不错')
} else if (num == 1) {
    alert('真不错')
} else if (num == 1) {
    alert('真不错')
} else {
    alert('运气真差')
}