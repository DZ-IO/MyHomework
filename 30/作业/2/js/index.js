Array.prototype.upSort = function() {
    this.sort(function(a, b) { return a - b })
}

Array.prototype.downSort = function() {
    this.sort(function(a, b) { return b - a })
}

var arr = [1, 5, 13, 17, 22, 15, 8, 6];
arr.upSort()
console.log(arr)
arr.downSort()
console.log(arr)