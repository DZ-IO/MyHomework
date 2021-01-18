// 循环初始化
var i = 100;
// 循环条件
while (i <= 999) {
    // 操作：求每一位
    var gw = i % 10;
    var sw = parseInt(i / 10) % 10;
    var bw = parseInt(i / 100);
    // 操作：水仙花数计算
    if (gw * gw * gw + sw * sw * sw + bw * bw * bw == i) {
        document.write(i + '<br>')
    }
    // 迭代
    i++;
}