# js
```js
// do-while循环
while (false) {
    console.log("while：进入了循环")
}
do {
    console.log("do while：进入了循环")
} while (false)

// 函数
// 命名方式 驼峰命名 第一个单词字母小写，后续的字母大写 如userRun
// 函数的修饰符，告知计算机即将定义一个函数
function userRun() {
    console.log('运行')
}
var userRun = function() {

}

// 函数的返回值
function jiafa() {
    // 当前函数停止， 并返回变量
    return 10
}

// 调用函数
var res = jiafa()

// 传入参数
// 形参 形式上的参数
function jiafa(num1, num2) {
    console.log(num1 + num2)
}

// 调用
jiafa(99, 1)
```