var socre = prompt('输入成绩')

if (score >= 11) {
    alert('恭喜进入决赛')
    var sex = prompt('输入性别')
    if (sex == '男') {
        alert('进入男子组')
    } else if (sex == '女') {
        alert('进入女子组')
    }
} else {
    alert('恭喜出局')
}