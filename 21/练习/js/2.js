var arr = ['America', 'Greece', 'Britanr', 'Canada', 'China', 'Egypt']
var count = 0;
for (x in arr) {
    document.write(arr[x] + '<br>')
    if (arr[x].indexOf('a') >= 0 || arr[x].indexOf('A') >= 0) {
        count++
    }
}
document.write('包含a的有' + count + '个')