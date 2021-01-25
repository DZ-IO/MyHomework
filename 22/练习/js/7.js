function f1() {
    var num = 1;

    function f2() {
        alert(num++)
    }
    return f2
}

var res = f1()
res()
res()
res()