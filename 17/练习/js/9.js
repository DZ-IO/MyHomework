var num1 = prompt('请输入第一个数字')
num1 = parseInt(num1)
var num2 = prompt('请输入第二个数字')
num2 = parseInt(num2)
var f = prompt('请输入运算符（+-*/%）')
var res

switch (f) {
    case '+':
        res = num1 + num2
        break
    case '-':
        res = num1 - num2
        break
    case '*':
        res = num1 * num2
        break
    case '/':
        res = num1 / num2
        break
    case '%':
        res = num1 % num2
        break
}
alert(num1 + f + num2 + '=' + res)