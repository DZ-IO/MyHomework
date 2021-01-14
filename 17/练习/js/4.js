// 练习：输入年份判断闰年
// 条件：
// 1.能被4整除不能被100整除
// 2.能被400整除

var year = prompt('输入年份')
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    alert(year + '年是闰年')
} else {
    alert(year + '年是平年')
}