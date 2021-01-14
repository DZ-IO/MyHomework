// 输入年份和月份，展示该年该月多少天
var year = prompt('输入年份')
var m = prompt('输入月份')
year = parseInt(year)
m = parseInt(m)

switch (m) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert('31天')
        break;
    case 2:
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
            alert('29天')
        } else {
            alert('28天')
        }
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        alert('30天')
        break;
    default:
        alert('???')
}