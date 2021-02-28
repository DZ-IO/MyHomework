// 设置Cookie
function setCookie(name, value, time = null) {
    // name 名字
    // value 值
    // time 过期时间
    // 初始化cookie设置字符串
    var cookieStr = name + '=' + value;
    // 判断时间变量
    if (time) {
        // 初始化时间
        var now = new Date();
        now.setTime(now.getTime() + time * 24 * 60 * 60 * 1000);
        // 设置过期
        cookieStr += ';expires=' + now.toUTCString();
    }
    // 设置Cookie
    document.cookie = cookieStr
}

// 获取Cookie
function getCookie(name) {
    // 拆分字符串
    cookieArr = document.cookie.split('; ');
    // 循环Cookie列表
    for (let x = 0; x < cookieArr.length; x++) {
        // 拆分单个Cookie项目
        arr = cookieArr[x].split('=');
        // 查询Cookie
        if (arr[0] == name) {
            return arr[1]
        } else {
            return ''
        }
    }
}
// 删除Cookie
function removeCookie(name) {
    if (getCookie(name) != '') {
        // 让Cookie过期
        setCookie(name, getCookie(name), -1);
        // Cookie过期以后会发生什么？
        // 答案：被删除
    }
}