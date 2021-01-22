var str = new String('abcdefG');

document.write('字符串为' + str + '<br>')

document.write('长度：' + str.length + '<br>')

document.write('第四个字符为' + str.charAt(3) + '<br>')

str = str.concat('abcabc')

document.write('字符串为' + str + '<br>')

str = str.replace('b', 'x')

document.write('字符串为' + str + '<br>')

var arr = str.split('c')
for (x in arr) {
    document.write(arr[x] + '<br>')
}

document.write('c首次出现' + str.indexOf('c') + '<br>')

document.write('c在第四个字符后首次出现' + str.indexOf('c', 3) + '<br>')

document.write('c最后出现在' + str.lastIndexOf('c') + '<br>')

document.write('字符ab是否存在' + str.match('ab') + '<br>')

document.write('字符h是否存在' + str.match('h') + '<br>')
document.write('<hr>')
document.write('转成大写：' + str.toUpperCase() + '<br>')
document.write('转成小写：' + str.toLowerCase() + '<br>')
document.write('从下标3开始一共截取四个：' + str.substr(3, 4) + '<br>')
document.write('从下标3截到下标4，包前不包后：' + str.substring(3, 4) + '<br>')
document.write('从下标3一直截到末尾：' + str.substring(3) + '<br>')
document.write('反过来截要用slice：' + str.slice(-3, -1) + '<br>')