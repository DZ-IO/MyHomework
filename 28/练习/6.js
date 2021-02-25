var str = 'abc123def';
console.log('原字符串为' + str);
var arr = str.split('');
var reg = /\d/;
for (x in arr) {
    if (reg.test(arr[x])) {
        arr[x] = '[' + arr[x] + ']'
    }
}
str = arr.join('')
console.log('新字符串为' + str)