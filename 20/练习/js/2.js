var arr = new Array();

arr[2] = 'test'
arr[5] = true
arr['abc'] = 123

for (i = 0; i < arr.length; i++) {
    document.write(i + ':' + arr[i] + '<br>')
}
document.write('<hr>')
for (i in arr) {
    document.write(i + ':' + arr[i] + '<br>')
}