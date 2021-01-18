for (i = 1; i <= 10; i++) {
    if (i % 10 == 2) {
        break;
    }
    document.write(i + '&nbsp;')
}
document.write('<br>')
for (i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    document.write(i + '&nbsp;')
}