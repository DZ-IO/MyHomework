l = 1;
dest = "12";
i = 1;
// document.write('<a href="https://github.com/daze456/MyHomework/blob/main/' + dest + '/homework.md">作业列表</a>&nbsp;');
document.write('<a href="https://github.com/daze456/MyHomework/tree/main/' + dest + '">代码列表</a>');
document.write('<ul style="list-style: none;">');
while (i <= l) {
    document.write('<li><a href="/' + dest + '/作业/' + i + '/index.html"><img height=450px src="/' + dest + '/%E9%9C%80%E6%B1%82/' + i + '.bmp" alt=""></a></li>');
    i++;
}
document.write("</ul>");