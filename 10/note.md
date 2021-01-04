# CSS3
```css
/* 背景路径 */
background-image: url();
/* 背景大小 */
background-size: 100%;
/* 背景平铺方式 */
background-repeat: no-repeat;
/* 省略超出 */
text-overflow: ellipsis;
/* 不允许换行 */
white-space: nowrap;
/* 超出隐藏 */
overflow: hidden;
/* 自动添加滚动条（常用） */
overflow: auto;
/* 强制加入滚动条 */
overflow: scroll;
/* 圆角（野史：以前圆角是切的（据说甚至还有切圆角比赛），现在css3不用了） */
border-radius: 50%;
/* 线性渐变背景（角度，颜色1，颜色2，颜色x） */
background-image: linear-gradient(0deg, red, blue);
/* 径向渐变背景（颜色1 百分比，颜色2 百分比，颜色x 百分比） */
background-image: radial-gradient(red 10%, green 10%, blue 10%);
/* 加载字体 */        
@font-face {
    /* 名字 */
    font-family: "NotoSansCJK-DemiLight";
    /* 路径 */
    src: url("/font/NotoSansCJK-DemiLight.ttc");
}
/* 使用字体 */
font-family: "NotoSansCJK-DemiLight";
/* 位移 */
transform: translate(100px, 100px);
/* 旋转 */
transform: rotate(90deg);
/* 缩放（倍数） */
transform: scale(1.5);
/* 动画时间：属性 秒数 */
transition: background-color 2s;
/* 关键帧动画定义 */
@keyframes myf {
    0% {
        top: 0;
        left: 0;
    }
    25% {
        top: 100px;
        left: 0;
    }
    50% {
        top: 100px;
        left: 100px;
    }
    75% {
        top: 0;
        left: 100px;
    }
    100% {
        top: 0;
        left: 0;
    }
}
/* 关键帧动画调用 */
animation: myf 2s;
```