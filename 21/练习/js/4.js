document.write(Math.ceil(11.4) + '<br>')
document.write(Math.ceil(11.5) + '<br>')
document.write(Math.ceil(-11.4) + '<br>')
document.write(Math.ceil(-11.5) + '<br>')

document.write(Math.floor(11.4) + '<br>')
document.write(Math.floor(11.5) + '<br>')
document.write(Math.floor(-11.4) + '<br>')
document.write(Math.floor(-11.5) + '<br>')

document.write(Math.round(11.4) + '<br>')
document.write(Math.round(11.5) + '<br>')
document.write(Math.round(-11.4) + '<br>')
document.write(Math.round(-11.5) + '<br>')

document.write(Math.random() + '<br>')

// 生成x-x之间的随机整数：
function randInt(small, big) {
    return Math.floor(Math.random() * (big - small + 1) + small)
}
// 生成2-7之间的随机整数
document.write(Math.floor(Math.random() * (7 - 2 + 1) + 2))