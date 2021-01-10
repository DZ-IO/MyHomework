# js
```js
    // var 变量修饰符 告诉编译器马上声明变量

    // 基本数据类型
    // 整型（数字）
    var num = 1;
    // 浮点型
    var num = 3.14;
    // 字符类型
    var str = "字符";
    // 布尔类型 true真/false假
    var bool = true;
    // undefined = 未声明
    var un;
    // null 空值
    var n = null;

    // 运算符
    // + - * / 加减乘除
    var num1 = 10;
    var num2 = 10;
    var num3 = num1 + num2;

    // 逻辑运算符
    // && || ! 经典与或非
    // == != <= >= 等于全家桶（等于、不等于、大于等于、小于等于）
    // < > 两只"于"（大于和小于）
    // === 绝对等于 !== 绝对不等于
    // = 等于、赋值 += 加上x ++ 加上1

    // 获取输入框输入的分数，然后赋值给person1
    var person1 = prompt('请输入分数');

    // if-else
    if (person1 < 60) {
        // 条件成立后运行的程序
        console.log('不及格')
    } else if (person1 >= 60 && person1 < 70) {
    //     console.log('及格')
    } else if (person1 >= 70 && person1 < 80) {
        console.log('良好')
    } else {
        // 条件不成立运行的程序
        console.log('优秀')
    }

    // switch-case
    switch (person1) {
        case "60":
            console.log('不及格')
            break; //结束
        default:
            console.log('条件不成立')
            break;
    }
    // 吐槽：隔壁python没switch-case，让你用if-else实现。。。。

    // 判断数据类型
    console.log(typeof num1)

    // 转换整型
    num1 = parseInt(num1)
    // 转换浮点型
    num1 = parseFloat(num1)
```