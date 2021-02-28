// 用户名提示
function activeUsername() {
    var input = document.querySelector('#userName');
    var tips = document.querySelector('#userNameId');
    input.className = 'err_inputs'
    tips.style.display = 'block';
    tips.className = 'import_prompt'
    tips.innerHTML = '由字母、数字、下划线、点、减号组成<br>'
    tips.innerHTML += '只能以数字、字母开头或结尾，且长度为4-18'
}
// 用户名验证
function checkUsername() {
    var input = document.querySelector('#userName');
    var tips = document.querySelector('#userNameId');
    // 为空验证
    if (input.value == '') {
        input.className = 'err_inputs'
        tips.className = 'error_prompt'
        tips.innerHTML = '这里不能为空'
        return false
    }
    // 组成
    var reg = /[a-zA-Z0-9_\.-]/
    if (!input.value.match(reg)) {
        input.className = 'err_inputs'
        tips.className = 'error_prompt'
        tips.innerHTML = '由字母、数字、下划线、点、减号组成'
        return false
    }
    var reg = /^[a-zA-Z0-9]/
    if (!input.value.match(reg)) {
        input.className = 'err_inputs'
        tips.className = 'error_prompt'
        tips.innerHTML = '只能以数字、字母开头'
        return false
    }
    var reg = /[a-zA-Z0-9]$/
    if (!input.value.match(reg)) {
        input.className = 'err_inputs'
        tips.className = 'error_prompt'
        tips.innerHTML = '只能以数字、字母结尾'
        return false
    }
    var reg = /^.{4,18}$/
    if (!input.value.match(reg)) {
        input.className = 'err_inputs'
        tips.className = 'error_prompt'
        tips.innerHTML = '长度为4-18'
        return false
    }
    input.className = 'ok_inputs'
    tips.className = 'ok_prompt'
    tips.innerHTML = '输入正确'
    return true
}
// 密码提示
function activePwd() {
    var input = document.querySelector('#pwd');
    var tips = document.querySelector('#pwdId');
    input.className = 'err_inputs'
    tips.style.display = 'block';
    tips.className = 'import_prompt'
    tips.innerHTML = '密码应为6-16个字符'
}
// 密码验证
function checkPwd() {
    var input = document.querySelector('#pwd');
    var tips = document.querySelector('#pwdId');
    // 为空验证
    if (input.value == '') {
        input.className = 'err_inputs'
        tips.className = 'error_prompt'
        tips.innerHTML = '这里不能为空'
        return false
    }
    // 组成
    var reg = /^.{6,16}$/
    if (!input.value.match(reg)) {
        input.className = 'err_inputs'
        tips.className = 'error_prompt'
        tips.innerHTML = '密码应为6-16个字符'
        return false
    }
    input.className = 'ok_inputs'
    tips.className = 'ok_prompt'
    tips.innerHTML = '输入正确'
    return true
}
// 确认密码提示
function activerePwd() {
    var input = document.querySelector('#repwd');
    var tips = document.querySelector('#repwdId');
    input.className = 'err_inputs'
    tips.style.display = 'block';
    tips.className = 'import_prompt'
    tips.innerHTML = '和密码相同'
}
// 确认密码验证
function checkrePwd() {
    var input = document.querySelector('#repwd');
    var tips = document.querySelector('#repwdId');
    // 为空验证
    if (input.value != document.querySelector('#pwd').value) {
        input.className = 'err_inputs'
        tips.className = 'error_prompt'
        tips.innerHTML = '和密码相同'
        return false
    }
    input.className = 'ok_inputs'
    tips.className = 'ok_prompt'
    tips.innerHTML = '输入正确'
    return true
}
// 昵称提示
function activeNickname() {
    var input = document.querySelector('#nickName');
    var tips = document.querySelector('#nickNameId');
    input.className = 'err_inputs'
    tips.style.display = 'block';
    tips.className = 'import_prompt'
    tips.innerHTML = '包含汉字、字母、数字、下划线以及@!#$%&*特殊字符<br>'
    tips.innerHTML += '长度为4－20个字符'
}
// 昵称验证
function checkNickname() {
    var input = document.querySelector('#nickName');
    var tips = document.querySelector('#nickNameId');
    // 为空验证
    if (input.value == '') {
        input.className = 'err_inputs'
        tips.className = 'error_prompt'
        tips.innerHTML = '这里不能为空'
        return false
    }
    // 组成
    var reg = /[a-zA-Z0-9_@!#$%&*\u4e00-\u9fa5]/
    if (!input.value.match(reg)) {
        input.className = 'err_inputs'
        tips.className = 'error_prompt'
        tips.innerHTML = '包含汉字、字母、数字、下划线以及@!#$%&*特殊字符'
        return false
    }
    var reg = /^.{4,20}$/
    if (!input.value.match(reg)) {
        input.className = 'err_inputs'
        tips.className = 'error_prompt'
        tips.innerHTML = '长度为4－20个字符'
        return false
    }
    input.className = 'ok_inputs'
    tips.className = 'ok_prompt'
    tips.innerHTML = '输入正确'
    return true
}
// 电话提示
function activeTel() {
    var input = document.querySelector('#tel');
    var tips = document.querySelector('#telId');
    input.className = 'err_inputs'
    tips.style.display = 'block';
    tips.className = 'import_prompt'
    tips.innerHTML = '手机号码以13，15，18开头<br>'
    tips.innerHTML += '手机号码由11位数字组成'
}
// 电话验证
function checkTel() {
    var input = document.querySelector('#tel');
    var tips = document.querySelector('#telId');
    // 为空验证
    if (input.value == '') {
        input.className = 'err_inputs'
        tips.className = 'error_prompt'
        tips.innerHTML = '这里不能为空'
        return false
    }
    // 组成
    var reg = /^1[358][0-9]{9}$/
    if (!input.value.match(reg)) {
        input.className = 'err_inputs'
        tips.className = 'error_prompt'
        tips.innerHTML = '手机号码以13，15，18开头<br>'
        tips.innerHTML += '手机号码由11位数字组成'
        return false
    }
    input.className = 'ok_inputs'
    tips.className = 'ok_prompt'
    tips.innerHTML = '输入正确'
    return true
}
// 邮箱提示
function activeEmail() {
    var input = document.querySelector('#email');
    var tips = document.querySelector('#emailId');
    input.className = 'err_inputs'
    tips.style.display = 'block';
    tips.className = 'import_prompt'
    tips.innerHTML = '邮箱应包含@和.符号'
}
// 邮箱验证
function checkEmail() {
    var input = document.querySelector('#email');
    var tips = document.querySelector('#emailId');
    // 为空验证
    if (input.value == '') {
        input.className = 'err_inputs'
        tips.className = 'error_prompt'
        tips.innerHTML = '这里不能为空'
        return false
    }
    // 组成
    var reg = /[@.]/
    if (!input.value.match(reg)) {
        input.className = 'err_inputs'
        tips.className = 'error_prompt'
        tips.innerHTML = '邮箱应包含@和.符号'
        return false
    }
    input.className = 'ok_inputs'
    tips.className = 'ok_prompt'
    tips.innerHTML = '输入正确'
    return true
}
// 综合验证
function checkForm() {
    return checkUsername() && checkPwd() && checkrePwd() && checkNickname && checkTel() && checkEmail()
}