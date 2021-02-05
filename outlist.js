c = 26
for (i = 1; i <= c; i++) {
    document.write('<li>')
    document.write('<a name=' + i + '>day' + i + '<a/>')
    document.write('<script src="./' + i + '/outlist.js"></script>')
}