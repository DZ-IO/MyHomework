l = 4;
dest = "10";
i = 1;
// document.write('<a href="https://github.com/daze456/MyHomework/blob/main/' + dest + '/homework.md">作业列表</a>&nbsp;');
// document.write('<a href="https://github.com/daze456/MyHomework/tree/main/' + dest + '">代码列表</a>');
document.write("<ol>");
while (i <= l) {
    document.write('<li><a href="./' + dest + '/html/' + i + '.html">作业' + i + '</a></li>');
    i++;
}
document.write("</ol>");