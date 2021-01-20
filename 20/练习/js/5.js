// 取出一个数组内一个字符串重复出现的次数
var arr = ["b", "a", "c", "d", "e", "a", "f", "a"];
var count = 0;

for (x in arr) {
    if (arr[x] == 'a') {
        count++
    }
}

document.write(count);