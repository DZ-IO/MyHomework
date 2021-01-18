// 求若干个学员的五门课的总分及平均分
// 外层循环学员（do-while）
var flag = 'n';
var all = 0
do {
    // 内层使用之前的代码
    var n = prompt('请输入姓名');
    var sum = 0;
    for (var i = 1; i <= 5; i++) {
        sum += parseInt(prompt('请输入' + n + '第' + i + '门课成绩'));
    }
    document.write(n + '的总分为' + sum + '&nbsp;' + n + '的平均分为' + (sum / 5) + '<br>');

    // 计算总分
    all += sum

    // 询问是否继续
    flag = prompt('是否继续？')
} while (flag == 'y')
document.write('全班总分为' + all)
alert('录入结束，感谢使用本系统')