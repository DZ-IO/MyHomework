//数组去重
var arr = [73, 84, 100, -1000, 84, 100, 200, 3000, 73];
document.write("去重之前: " + arr.toString() + "<br/>");

var arr2 = new Array()

for (x in arr) {
    if (arr2.indexOf(arr[x]) < 0) {
        arr2.push(arr[x])
    }
}

document.write("新数组: " + arr2.toString())