var str = ' abc def ggg '
console.log('原字符串：' + str);
// 去除前面的空格
String.prototype.rfb = function() {
    var reg = /^\s+/
    return this.replace(reg, '')
};
console.log('去掉前面的空格：' + str.rfb());
// 去除末尾空格
String.prototype.rrb = function() {
    var reg = /\s+$/
    return this.replace(reg, '')
}
console.log('去除末尾空格：' + str.rrb());
// 去除前后空格
String.prototype.rfrb = function() {
    var reg = /^\s|\s+$/g
    return this.replace(reg, '')
}
console.log('去除前后空格：' + str.rfrb());
// 去除全部空格
String.prototype.rab = function() {
    var reg = /\s+/g
    return this.replace(reg, '')
}
console.log('去除全部空格：' + str.rab());