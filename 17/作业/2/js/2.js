var m = prompt('请输入考试成绩');
switch (true) {
    case m == 100:
        alert('买辆车');
        break
    case m >= 90:
        alert('买MP4')
        break
    case m > 90 || m >= 60:
        alert('买参考书')
        break
    case m < 60:
        alert('什么都不买')
        break
}