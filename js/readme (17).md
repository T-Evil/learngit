
## HTML5 中引用画布标签`<canvas></canvas>`，配合JS绘制图形。这里需要注意具有绘制功能的是JS而`<canvas></canvas>`承载绘画的画布。

`<canvas>` 标签对IE8及以下低版本浏览器不支持，不能正常显示。通常情况下在 `<canvas>` 标签内部添加提示增加用户体验。当前支持 `<canvas>` 的浏览器并不会显示 `<canvas>` 标签内部的提示。
```html
<canvas id="can" width="400" height="400" >
<span>不支持canvas组件</span>
</canvas>
```
`<canvas>` 组件默认宽 300px 高 150px 。如果要设置宽高通常使用标签本身的 width、height 属性而不用 CSS 样式。
## 原点


## 通过 canvas.getContext('2d') 获取上下文对象，这个上下文对象可以理解为画笔，当然这个画笔只能在特定的画布上绘画。
```js
var canvas = document.getElementById('can');
var paint = canvas.getContext('2d');
```
![坐标](http://timeitself.cn/image/canvas/rect.png)
## 画笔设置。
- paint.fillStyle = 'red'; 画笔绘制实心图案时颜色。
- paint.strokeStyle = 'blue'; 画笔绘制空心图案时颜色。
- paint.lineWidth = 10; 画笔宽度。
- paint.lineJoin = 'round'; 多边形端点样式： 
* round 圆角
* bevel 斜角
* miter 默认
- paint.lineCap = 'round'; 直线端点样式: 
* butt 默认
* round 圆角
* square 高度多出宽度的 1/2 值

- paint.fillRect(x,y,width,height); 实心方块。
- paint.rotate(45*Math.PI/180); 围绕 0 点旋转，参数为弧度。
- paint.scale(1,2); 根据宽度的缩放比进行缩放。
- paint.strokeRect(x,y,width,height); 空心方块。
- paint.translate(x,y); X,Y 0点偏移。
- paint.drawImage(imgObj,x,y,imgWidth,imgHeight); 绘制图片。

    ```js
    var mImg = new Image();
    mImg.src = './img/gg.png';
    mImg.onload = function(){
    paint.drawImage(this,0,0);
    }
    ```

- paint.strokeText('text',x,y); 绘制空心文本。
- paint.fillText('text',x,y); 绘制实心文本。
- paint.font = '30px impact'; 文字大小,类型。
- paint.textAlign = 'left'; 文字左右对齐
- paint.textBaseline = 'bottom'; 文字上下对齐方式，top middle bottom。
- paint.shadowOffsetX = 10; 文字阴影 X 偏移。
- paint.shadowOffsetY = 10; 文字阴影 Y 偏移。
- paint.shadowColor='red'; 文字阴影颜色。
- paint.shadowBlur = 2; 文字阴影模糊。


### 绘制路径相关设置
- paint.beginPath(); 开始路径： 
- paint.moveTo(x,y); 路径第一个点： 
- paint.lineTo(200,200); 移动到下一个点： 
- paint.closePath(); 闭合路径： 
- paint.stroke(); 以线的方式绘制：
- paint.fill(); 以填充的方式绘制：
- paint.rect(100,100,100,100); 绘制矩形： 
- paint.clearRect(0,0,canvas.width,canvas.height); **清除画布**：
- paint.arc(100,100,15,0,90*Math.PI/180,false); 绘制圆形
    * 参数1: X坐标。
    * 参数2: Y坐标。
    * 参数3：半径。
    * 参数4: 起始弧度。（角度 * Math.PI / 180）
    * 参数5：结束弧度。
    * 参数6：方向,true逆时针，false顺时针。
- 路径绘制时画笔的设置与恢复： 
- paint.save();
- paint.restore();



### 实例：

- 鼠标画线：

```js
var canvas = document.getElementById('can');
var paint = canvas.getContext('2d');
canvas.onmousedown = function(ev){
var ev = ev || window.event;
paint.beginPath();
paint.moveTo(ev.clientX-canvas.offsetLeft,ev.clientY - canvas.offsetTop);

document.onmousemove = function(ev){
    var ev = ev || window.event;
    paint.lineTo(ev.clientX-canvas.offsetLeft,ev.clientY - canvas.offsetTop);

    paint.stroke();
}
document.onmouseup = function(){
document.onmousemove = null;
document.onmouseup = null;
}
}
```


## 移动端
* 混合开发 ， h5页面开发 ， 移动端原生开发
* ios android
* h5一次到处运行。跨平台，需要网络使用了HTTP 无状态的连接 请求和响应
* 原生不同的平台就要编写不同代码
* hybrid混合开发：

## 移动开发，
* 屏幕的适配

* vscode安装 **cssrem**

```html
<head>
    <meta charset="UTF-8">
    <!-- 第一步：视口 width=device-width 初始化比例为1 不缩放 禁止用户缩放  -->
    <!-- viewport-fit=cover" iphoneX 前刘海的适配问题 -->
    <!-- name="format-detection" -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no,viewport-fit=cover">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- 在苹果手机设备上 会把一些电话号码自动识别 可拨打的手机号，会有链接 设为no 取消 -->
    <meta name="format-detection" content="telephone=no" />
    <!-- yes显示 苹果手机的工具栏和菜单栏 -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <!-- 设置苹果手机设备的状态栏 为黑色 .默认值为default（白色），可以定为black（黑色）和black-translucent（灰色半透明） -->
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
</head>

<script>
    // 先获取 可视区域的宽高 
    var iw = document.documentElement.clientWidth;
    var iH = document.documentElement.clientHeight;
    // 对于小于320px的逻辑像素宽 则 卡住 不缩放啦不适配啦
    iw = iw < 320 ? 320 : iw;
    //获取 html元素
    // cssrem 插件  比如 以ihone4 / 5为基准开发  320逻辑像素宽/20  16px
    document.querySelector('html').style.fontSize = iw / 20 + 'px';
    // 把 body的高度撑开
    document.querySelector('body').style.height = iH + 'px';
</script>
```