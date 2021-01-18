// 循环初始化：年份
var i = 1;
// 循环条件：100年以内
while (i <= 100) {
    // 循环操作：计算100年之内小红和父亲的年龄
    var hong = 12 + i;
    var father = 32 + i;
    // 找出他爹是小红年龄2倍的年份
    if (2 * hong == father) {
        document.write(i);
    }
    // 迭代
    i++;
}