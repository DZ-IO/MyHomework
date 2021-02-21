// 处理页面
window.onload = function() {
    var keys = document.querySelectorAll('#counter_content>ul>li')
    for (x = 0; x < keys.length; x++) {
        keys[x].onmouseover = function() {
            this.className = "active"
        }
        keys[x].onmouseout = function() {
            this.className = ""
        }
        keys[x].onclick = keyFunction
    }
}

// 全局变量
input1 = 0;
inp = true
use = '';

// 处理按键按下函数
function keyFunction() {
    // 选中元素
    var input = document.getElementById('input1');
    switch (this.innerHTML) {
        // 清除
        case 'C':
            input1 = 0;
            inp = true;
            use = '';
            input.value = 0;
            break;
            // +-x\
        case '+':
        case '-':
        case '÷':
        case 'x':
            inp = true
            use = this.innerHTML
            input1 = input.value
            break;
            // 等于
        case '=':
            switch (use) {
                case '+':
                    input.value = parseInt(input1) + parseInt(input.value)
                    break;
                case '-':
                    input.value = parseInt(input1) - parseInt(input.value)
                    break;
                case 'x':
                    input.value = parseInt(input1) * parseInt(input.value)
                    break;
                case '÷':
                    input.value = parseInt(input1) / parseInt(input.value)
                    break;
            }
            input1 = 0;
            use = ''
            flag = true
            break;
            // 数字处理
        default:
            if (inp) { //重新输入新的数字
                input.value = parseInt(this.innerHTML, 10); //十进制
                inp = false;
            } else {
                //在已有数字后面加上新的数字
                input.value = parseInt(input1.value + this.innerHTML, 10);
            }
            break;
    }
}