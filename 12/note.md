# CSS3
```css
/* 动画相关 */

/* 指定动画的运动速速曲线 */
animation-timing-function: ease;
/* 默认值：ease 开始很快，接近中间时减慢 */
/* ease-in 开始的时候快，中间开始减慢 */
/* ease-out 开始的时候慢，结束时加快 */
/* ease-in-out 开始的时候快，结束时也很快，中间较慢 */
/* linear 线性匀速运动 */
/* 英语生词：*/
/* ease 缓解、减轻、减慢 */
/* linear 线性的、直线的 */
/* 指定动画延迟时间 */
animation-delay: 2s;
/* 生词： */
/* delay：延迟 */
/* 动画播放次数，infinite为无限 */
animation-iteration-count: infinite;
animation-iteration-count: 3;
/* 动画播放方向 */
animation-direction: alternate;
/* normal：正常播放 */
/* alternate：循环播放 */
/* reverse：反向播放 */
/* alternate-reverse：反向循环播放 */
/* 生词: */
/* direction：方向、方位 */
/* normal：正常的 */
/* alternate：轮流、循环 */
/* reverse：反向、逆向 */

/* 3D旋转 */
/* X轴 */
transform: rotateX(0deg);
/* Y轴 */
transform: rotateY(0deg);
/* Z轴（默认轴） */
transform: rotateZ(0deg);

/* 弹性盒子 */
/* 指定盒子容器为flex布局 */
display: flex;
/* 指定布局方向 */
flex-direction: row;
/* row：水平布局 */
/* column：垂直布局 */
/* 注意: */
/* flex-direction为主轴 */

/* 设置主轴对齐方式 */
justify-content: center;
/* flex-start: 开始方向对齐(左对齐) */
/* flex-end: 结束方向对齐(右对齐) */
/* center: 居中 */
/* space-between: 等分 */
/* space-around: 等分不贴边 */
/* 猜测： */
/* space-between大概是让空间在每个元素之间等分的概念，around是环绕 */
/* 生词： */
/* justify：使...对齐 */
/* content：内容 上下文 */
/* between：中间 */
/* around：环绕 */

/* 设置交叉轴对齐方式 */
align-items: flex-end;
/* (和主轴对齐类似) */
/* 生词: */
/* align: 排列方式 */
/* items: 项目 */
/* 冷知识: */
/* html里有个已经被废弃的属性叫align,就是配置对齐的 */
