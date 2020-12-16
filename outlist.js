c = 1
for (i = 1; i <= c; i++) {
    document.write('<li>')
    document.write('<p id=' + i + '>day' + i + '<p/>')
    document.write('<script src="./' + i + '/outlist.js"></script>')
}