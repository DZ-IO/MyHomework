var scorecomp = 0;
var scoreuser = 0;
var flag = 'y';

while (flag == 'y') {
    var usern = prompt('1.剪刀2 .石头 3.布\n请输入你的选择');
    usern = parseInt(usern);
    switch (usern) {
        case 1:
            alert('您出的是剪刀');
            break;
        case 2:
            alert('您出的是石头');
            break;
        case 3:
            alert('您出的是布');
            break;
    }
    var compn = Math.floor(Math.random() * 3) + 1;
    switch (compn) {
        case 1:
            alert('电脑出的是剪刀');
            break;
        case 2:
            alert('电脑出的是石头');
            break;
        case 3:
            alert('电脑出的是布');
            break;
    }
    if (usern == compn) {
        alert('双方平手')
    } else if (usern == 1 && compn == 3 || usern == 2 && compn == 1 || usern == 3 && compn == 2) {
        alert('您赢了')
        scoreuser += 1
    } else {
        alert('电脑赢了')
        scorecomp += 1
    }
    flag = prompt('继续吗？继续请输入y')
}
if (scoreuser == scorecomp) {
    alert('双方平手，再接再厉')
} else if (scoreuser > scorecomp) {
    alert('您赢了，不错')
} else {
    alert('电脑赢了，下次一定')
}