// 矩形
function s1() {
    // 初始化空字符串
    var str = '';
    for (i = 1; i <= 7; i++) {
        // 行
        for (j = 1; j <= 7; j++) {
            // 列
            str += 0;
        }
        // 换行
        str += '<br>'
    }
    document.getElementById('box').innerHTML = str
}
// 三角形
function t1() {
    // 初始化空字符串
    var str = '';
    for (i = 1; i <= 7; i++) {
        // 行
        for (j = 1; j <= i; j++) {
            // 列
            str += 0;
        }
        // 换行
        str += '<br>'
    }
    document.getElementById('box').innerHTML = str
}
// 平行四边形
function s2() {
    // 初始化空字符串
    var str = '';
    // 行
    for (i = 1; i <= 7; i++) {
        // 列
        for (j = 1; j <= 7 - i; j++) {
            str += '&nbsp;';
        }
        // 列
        for (j = 1; j <= 7; j++) {
            str += 0;
        }
        // 换行
        str += '<br>'
    }
    document.getElementById('box').innerHTML = str
}
// 等腰三角形
function t2() {
    // 初始化空字符串
    var str = '';
    // 行
    for (i = 1; i <= 7; i++) {
        // 列
        for (j = 1; j <= 7 - i; j++) {
            str += '&nbsp;&nbsp;';
        }
        // 列
        for (j = 1; j <= 2 * i - 1; j++) {
            str += 0;
        }
        // 换行
        str += '<br>'
    }
    document.getElementById('box').innerHTML = str
}
// 菱形
function l1() {
    // 初始化空字符串
    var str = '';
    // 行
    for (i = 1; i <= 7; i++) {
        // 列
        for (j = 1; j <= 7 - i; j++) {
            str += '&nbsp;&nbsp;';
        }
        // 列
        for (j = 1; j <= 2 * i - 1; j++) {
            str += 0;
        }
        // 换行
        str += '<br>'
    }
    // 第二部分
    // 行
    for (i = 6; i >= 1; i--) {
        // 列
        for (j = 1; j <= 7 - i; j++) {
            str += '&nbsp;&nbsp;';
        }
        // 列
        for (j = 1; j <= 2 * i - 1; j++) {
            str += 0;
        }
        // 换行
        str += '<br>'
    }
    document.getElementById('box').innerHTML = str
}