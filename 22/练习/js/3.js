function addZero(i) {
    if (i >= 10) {
        return i
    } else {
        return "0" + i
    }
}

var now = new Date()

document.write(addZero(now.getHours()) + ":" + addZero(now.getMinutes()) + ":" + addZero(now.getSeconds()))