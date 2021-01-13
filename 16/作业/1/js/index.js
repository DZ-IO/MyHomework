var days = prompt('请输入天数')
days = parseInt(days)

var week = parseInt(days / 7)
var day = parseInt(days % 7)

alert(week + '周零' + day + '天')