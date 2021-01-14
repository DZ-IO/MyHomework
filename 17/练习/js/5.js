var score = prompt('请输入成绩')
score = parseInt(score)

// if判断
if (score >= 90) {
    // 条件为真时执行的代码
    alert('你很优秀啊')
} else if (score >= 80) {
    // 条件为真时执行的代码
    alert('真不错')
} else if (score >= 70) {
    // 条件为真时执行的代码
    alert('还行吧')
} else if (score >= 60) {
    // 条件为真时执行的代码
    alert('恭喜及格')
} else {
    // 条件为假时执行的代码
    alert('不及格')
}