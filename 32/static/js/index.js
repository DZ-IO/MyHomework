/**
 * 手风琴特效
 * @param {*} id 标签id
 * @param {*} option 特效参数
 */
function xyGallery(id, option) {
    // 选中相关标签
    var target = document.getElementById(id);
    // 处理类样式
    if (target.className.indexOf('imgs') < 0) {
        target.className += ' imgs'
    }
    // option处理
    Object.assign(option, {
        defaultWidth: 130,
        defaultHeight: 40,
        activeWidth: 340,
        activeHeight: 400,
        // transition值
        transition: 500
    });
    // 合法性检验
    if (option.height == undefined || option.width == undefined || (option.height * option.width != target.children.length)) {
        throw 'Missing Option'
    }
    // 处理div
    target.style.width = (option.width - 1) * option.defaultWidth + option.activeWidth + 'px';
    target.style.height = (option.height - 1) * option.defaultHeight + option.activeHeight + 'px';
    // 过度未完成前置处理
    lastTrigTime = new Date(0);
    // 上一次触发时间
    // 这个值绝对能代表上一次触发时间
    pulseFunc = null;
    // 暂停函数
    // 动画函数
    function activeE(index) {
        // 处理过度未完成
        clearTimeout(pulseFunc)
        var thisTrigTime = new Date()
        if (thisTrigTime - lastTrigTime < option.transition) {
            pulseFunc = setTimeout(function() {
                activeE(index)
            }, option.transition)
            return
        }
        lastTrigTime = thisTrigTime;
        // index转坐标
        var cx = index % option.width;
        var cy = Math.floor(index / option.width);
        // 循环每一个div
        for (let x = 0; x < option.width; x++) {
            for (let y = 0; y < option.height; y++) {
                // 选中目标元素
                var item = target.children[y * option.width + x];
                item.className = ''
                if (x == cx && y == cy) {
                    // 目标
                    item.className = 'hover'
                    item.style.width = option.activeWidth + 'px'
                    item.style.height = option.activeHeight + 'px'
                } else if (x == cx && y != cy) {
                    // 同一列的x相同
                    item.style.width = option.activeWidth + 'px'
                    item.style.height = option.defaultHeight + 'px'
                } else if (x != cx && y == cy) {
                    // 同一行的y相同
                    item.style.width = option.defaultWidth + 'px'
                    item.style.height = option.activeHeight + 'px'
                } else {
                    // 其他
                    item.style.width = option.defaultWidth + 'px'
                    item.style.height = option.defaultHeight + 'px'
                }
            }
        }
    }
    // 让第一个图片激活
    activeE(0);
    // 鼠标移入
    // 替换Array原型的forEach方法，实现给每个元素增加mouseover事件
    Array.prototype.forEach.call(target.children, function(o, i) {
        // o是每一个元素
        o.addEventListener('mouseover', function() {
            // i是下标
            activeE(i)
        })
    })
}