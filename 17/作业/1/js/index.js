var cost = prompt('输入金额')
cost = parseInt(cost)
var q = '是否参加优惠换购活动:\n'
if (cost >= 50) {
    q += '1:满50元,加2元换购百事可乐饮料1瓶\n'
}
if (cost >= 100) {
    q += '2:满100元,加3元换购500m1可乐一瓶\n'
    q += '3:满100元,加10元换购5公斤面粉\n'
}
if (cost >= 200) {
    q += '4:满200元,加10元可换购1个苏波尔炒菜锅\n'
    q += '5:满200元,加20元可换购欧莱雅爽肤水一瓶\n'
}
q += '0.不换购'
c = prompt(q)
c = parseInt(c)
var res
switch (c) {
    case 1:
        if (cost >= 50) {
            cost += 2
            res = '成功换购:百事可乐饮料1瓶。'
        }
        break
    case 2:
        if (cost >= 100) {
            cost += 3
            res = '成功换购:500m1可乐一瓶。'
        }
        break
    case 3:
        if (cost >= 100) {
            cost += 10
            res = '成功换购:5公斤面粉。'
        }
        break
    case 4:
        if (cost >= 200) {
            cost += 10
            res = '成功换购:1个苏波尔炒菜锅。'
        }
        break
    case 5:
        if (cost >= 200) {
            cost += 20
            res = '成功换购:欧莱雅爽肤水一瓶。'
        }
        break
}
if (res == undefined) {
    res = '不换购。'
}
alert('共消费:' + cost)
alert(res)