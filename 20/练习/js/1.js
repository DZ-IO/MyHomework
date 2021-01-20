// 数组：在内存中划出一块连续的区域存储多个数据
// 声明数组
var arr = ["小强", "旺财", "来福", "如花"];
// var arr = new Array([长度]);
var arr = new Array("小强", "旺财", "来福", "如花");
// 数组内可以存储很多值（不止4个）
//使用下标展示数组中的值:下标从0开始，使用数组名称[下标]获取指定下标的值

// 用for获取数组中的值
for (i = 0; i < arr.length; i++) {
    document.write(arr[i] + '<br>')
}

document.write('<hr>');
// 用for-in循环遍历数组
for (x in arr) {
    document.write(arr[x] + '<br>')
}