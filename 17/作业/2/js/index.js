var m = prompt('请输入考试成绩');
if (m == 100) {
    alert('买辆车');
} else if (m >= 90) {
    alert('买MP4');
} else if (m > 90 || m >= 60) {
    alert('买参考书');
} else if (m < 60) {
    alert('什么都不买');
}