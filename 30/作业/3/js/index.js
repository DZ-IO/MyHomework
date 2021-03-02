Array.prototype.removeR = function() {
    var arr = new Array()
    for (let index = 0; index < this.length; index++) {
        if (arr.indexOf(this[index]) < 0) {
            arr.push(this[index])
        }
    }
    return arr
}

var arr = [5, 4, 26, 9, 4, 8, 5, 14];
console.log(arr.removeR())