# day3
* 怪异盒解析
* box-sizing content-box | border-box




* 径向渐变
```css
/* 径向渐变: 参数1 ： 半径 at  渐变中心点  参数2 颜色  参数3 颜色 .... */
#box {
    width: 300px;
    height: 300px;
    background-image: radial-gradient( 100px at center, red, yellow);
} 
```

* 线性渐变
```css
nav a:hover {
    background: linear-gradient( rgb(223, 145, 0), rgb(248, 227, 131));
}
```

*
```css
#box {
    width: 1000px;
    height: 600px;
    border: 1px solid black;
    background: url(1-big.jpg) no-repeat;
    /* 要设置背景图的尺寸大小： background-size: */
    /* 可以设置固定值 像素  100px 100px  可能会导致图片比例变形  不会随着盒子的宽高变化而变化*/
    /* 背景的宽高 为100px 100px */
    /* background-size: 400px 300px; */
    /* 可以设置百分比 会随着盒子的宽高变化而变化 但是比例有可能 变形 */
    /* background-size: 100% 100%; */
    /* 可以设置 cover 保证图片比例不变形 可以让图片尽可能覆盖 盒子全部区域 但是有可能 图片部分区域看不到*/
    background-size: cover;
    /* 可以设置 contain 保证图片比例不变形 尽可能让图片全部显示在盒子区域 但是有可能让盒子出现空白区域 */
    /* background-size: contain; */
    /* 背景裁切  content-box  padding-box  border-box默认 */
    background-clip: content-box;
}
```
* 过渡
```css
 /* transition: 过渡属性  类似于动画软件中 补间动画  给定一个初始状态 和 终止状态  它会自动过渡过去 */
/* transition-perporty 过渡属性 */
/* transition-duration 过渡时间 单位是秒 s */
/* transition-timing-function 过度速度形式： linear  ease-in  eas-out */
/* transition-delay:过渡延迟 秒 */
```

## transform 2D变换

* 位移： translate(x平移量，y平移量) 可以接收负值  x方向 正值 向右 负值向左  y方向 正值向下 负值向上
* 旋转： rotate(角度deg) 顺时针方向为正值  逆时针为负值  可以支持负数 
* 缩放：scale(x缩放比例，y的缩放比例) 不支持负数 现在也支持

## 3d
* 以x轴为轴心 进行旋转 rotateX()
* 以y轴为轴心 进行旋转 rotateY()
* 以Z轴为轴心 进行旋转 rotateZ()


* tranform 各种变换  + transition 来实现动画  类似于传统动画 的补间动画  初始状态 ---  结束状态

* @keyframes  + animation 来实现动画  类似于传统动画  的关键帧动画  你来定义每一个变化的动作

* [animate.css](https://daneden.github.io/animate.css/)
* cdn `https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css`
## 弹性盒子































