l = 1;
dest = "11";
i = 1;
document.write('<a href="https://github.com/daze456/MyHomework/tree/main/' + dest + '">代码列表</a>');
document.write("<ol>");
while (i <= l) {
    document.write('<li><a href="/' + dest + '/homework/' + i + '/index.html">作业' + i + '</a></li>');
    i++;
}
document.write("</ol>");