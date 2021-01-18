for (var i = 1; i <= 250; i++) {
    // 两小时后里程
    var sum = 95859 + 2 * i;
    if (sum % 10 == parseInt(sum / 10000) % 10 && parseInt(sum / 1000) % 10 == parseInt(sum / 10) % 10) {
        document.write('速度为' + i + 'km/h,里程为' + sum + '<br>')
    }
}