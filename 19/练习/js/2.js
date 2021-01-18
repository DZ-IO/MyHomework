// 计算一个学生5门课的平均成绩

var n = prompt('请输入姓名');
var sum = 0;
for (var i = 1; i <= 5; i++) {
    sum += parseInt(prompt('请输入第' + i + '门课成绩'));
}
document.write(n + '的总分为' + sum + '<br>');
document.write(n + '的平均分为' + (sum / 5));