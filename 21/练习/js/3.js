var str = "border-left-color";
document.write("原字符串为: " + str + "<br>");
var str2 = '';
var arr = str.split('-')
for (x in arr) {
    if (x != 0) {
        arr[x] = arr[x].substring(0, 1).toUpperCase() + arr[x].substring(1)
    }
    str2 += arr[x]
}
document.write("新字符串为: " + str2 + "<br>");