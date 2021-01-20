var arr = ["小强", "旺财", "来福", "如花"];

document.write('数组的长度:' + arr.length + '<br>')
document.write('数组的内容:' + arr.join() + '<br>')
arr.push('李四')
arr.push('张三')
document.write('<hr>')
document.write('数组的长度:' + arr.length + '<br>')
document.write('数组的内容:' + arr.join() + '<br>')
var arr2 = ['罗翔']
var arr = arr.concat(arr2)
document.write('<hr>')
document.write('数组的长度:' + arr.length + '<br>')
document.write('数组的内容:' + arr.join() + '<br>')