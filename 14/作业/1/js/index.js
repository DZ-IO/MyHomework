// 大概效果
//   *
//  ***
// *****
// 关键：
// 两步走：
// *
// *** 
// *****
// ↓
//   *
//  ***
// *****
// 公式：行x2+1
// 行从0开始
// 前面的空格等于用户输入数字-行
var num = prompt('请输入数字')
var num = parseInt(num)
for (i = 0; i < num; i++) {
    var n2 = i * 2 + 1
    var l2 = ""
    for (j = 0; j < n2; j++) {
        l2 += '*'
    }
    n2 = num - i
    l3 = ""
    for (j = 0; j < n2; j++) {
        l3 += " "
    }
    console.log(l3 + l2)
}