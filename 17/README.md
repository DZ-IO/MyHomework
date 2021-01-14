# JS选择结构
1. 简单if判断
```js
if (score >= 60) {
    // 条件为真时执行的代码
    alert('恭喜及格')
}
```
> TIPS 可以通过与或非实现更复杂的判断
>```js
>if (score1 > 80 && score2 > 90 || score1 > 60 && score2 == 100) {
>    alert('给予奖励')
>}
>```
2. else否则功能
```js
if (score >= 60) {
    // 条件为真时执行的代码
    alert('恭喜及格')
} else {
    // 条件为假时执行的代码
    alert('不及格')
}
```
>练习：输入年份判断闰年  
>条件：
>1. 能被4整除不能被100整除
>2. 能被400整除  
>[答案](.\练习\js\4.js)(做完再看)
3. 多重if判断
```js
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
```
>TIPS 撰写多重if时记得范围从小到大  
> 思考：不这么做会发生什么？
4. switch
```js
switch (week) {
    case 1:
        // 条件等于1时执行
        alert('新的一周')
        break
    case 7:
        // 条件等于7时执行
        alert('歇一天吧')
        break
    default:
        // 条件全部不足时执行
        alert('???')
}
```
>练习：写个计算器    
>[答案](.\练习\js\9.js)(做完再看)

>TIPS 选择结构可以互相嵌套，如
>```js
>if (score >= 11) {
>    alert('恭喜进入决赛')
>    var sex = prompt('输入性别')
>    if (sex == '男') {
>        alert('进入男子组')
>    } else if (sex == '女') {
>        alert('进入女子组')
>    }
>} else {
>    alert('恭喜出局')
>}
>```