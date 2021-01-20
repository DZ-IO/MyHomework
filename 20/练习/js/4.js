var arr = [10, 20, 73, 84, -100, 34, 99, 30000, -10000];
document.write("排序前: " + arr.join() + "<br>");
arr.sort(function(a, b) { return a - b })
document.write("排序后: " + arr.join() + "<br>");