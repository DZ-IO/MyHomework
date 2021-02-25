function check() {
    return checkName() && checkPsw() && checkPsw2() && checkEmail()
}

function checkName() {
    var input = document.querySelector('#userName').value;
    var msg = document.querySelector('#userNameMsg');
    // 非空
    if (input == '') {
        msg.innerHTML = '这里不能为空'
        msg.className = 'errStyle'
        return false
    }
    // 要求
    if (/^\W$/.test(input)) {
        msg.innerHTML = '用户名不合法'
        msg.className = 'errStyle'
        return false
    }
    msg.innerHTML = ''
    return true
}

function checkPsw() {
    var input = new String(document.querySelector('#psw').value);
    var msg = document.querySelector('#pswMsg');
    // 非空
    if (input == '') {
        msg.innerHTML = '这里不能为空'
        msg.className = 'errStyle'
        return false
    }
    // 长度
    if (input.length < 5) {
        msg.innerHTML = '长度不合法'
        msg.className = 'errStyle'
        return false
    }
    msg.innerHTML = ''
    return true
}

function checkPsw2() {
    var input = new String(document.querySelector('#psw2').value);
    var msg = document.querySelector('#psw2Msg');
    // 一致
    if (input != document.querySelector('#psw').value) {
        msg.innerHTML = '两次密码不一致'
        msg.className = 'errStyle'
        return false
    }
    msg.innerHTML = ''
    return true
}

function checkEmail() {
    var input = new String(document.querySelector('#email').value);
    var msg = document.querySelector('#emailMsg');
    // 非空
    if (input == '') {
        msg.innerHTML = '这里不能为空'
        msg.className = 'errStyle'
        return false
    }
    // 格式
    var emailregexp = /^\w+@\w+(\.[a-zA-Z]{2,4}){1,2}$/
    if (!emailregexp.test(input)) {
        msg.innerHTML = '格式不合法'
        msg.className = 'errStyle'
        return false
    }
    msg.innerHTML = ''
    return true
}