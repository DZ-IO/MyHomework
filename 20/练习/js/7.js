// 获取浏览器时间
var now = new Date();
var nowa = new Array();
// 获取年份
nowa['year'] = now.getFullYear();
// 获取月份(0-11,使用前需加1)(date里最奇怪的就是它)
nowa['month'] = now.getMonth();
// 获取日期
nowa['date'] = now.getDate();
// 获取星期（0-6）
nowa['day'] = now.getDay();
// 小时
nowa['hh'] = now.getHours();
// 分钟
nowa['mm'] = now.getMinutes();
// 秒钟
nowa['ss'] = now.getSeconds();

// 输出
for (i in nowa) {
    document.write(i + ':' + nowa[i] + '<br>')
}
document.write('<hr>')

// 格式化输出时间和日期
// 处理月份
nowa['month']++;
// 星期的处理有点麻烦
nowa['day'] = ["日", "一", "二", "三", "四", "五", "六"][nowa['day']];
// 简单点说就是准备一个语言包数组进行转换

// 输出
document.write(nowa['year'] + '年' + nowa['month'] + '月' + nowa['date'] + '日,星期' + nowa['day'] + ',' + nowa['hh'] + ':' + nowa['mm'] + ':' + nowa['ss'])