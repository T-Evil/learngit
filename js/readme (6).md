# day10

* appendChild
* insertBefore
> 添加节点到指定的元素节点，操作如果已经存在的元素那么就剪切操作。


* document.createElement() 创建元素节点。
* document.createAttribute() 创建一个属性节点
* document.createTextNode() 创建文本节点。
* document.createComment() 方法可创建注释节点。
* element.appendChild() 为子元素列表之后添加一个新的子元素
* element.insertBefore() 现有的子元素之前插入一个新的子元素
* element.removeChild()删除一个子元素
* element.replaceChild()替换一个子元素
* Element.setAttributeNode() 添加指定的属性节点
* element.removeAttribute()从元素中删除指定的属性
* element.setAttribute()设置或者改变指定属性并指定值。


## 父节点与祖先节点
* Element.parentNode 当前节点的父节点。
* Element.offsetParent 获取当前节点的祖先节点。
> 标准浏览器在获取祖先节点时有两种情况：1. 如果所有父级节点都没有定位，那么获取到的祖先节点就是<body>。2. 如果父级节点中有定位(固定、相对、绝对)，那么获取的的节点就是离他最近的定位节点。


* element.offsetLeft 返回当前元素距离左侧的距离
* element.offsetTop 返回当前元素距离左侧的距离
> 需要注意的是 offsetLeft 同offsetParen一样会受到父级节点中定位的影响，如果父级中有定位的，那么获取的距离是该元素到定位元素的距离。


## 
```js
// 获取滚动距离
 function getScrollY() {
    return window.pageYOffset || document.documentElement.scrollTop;
}
function getScrollX() {
    return window.pageXOffset || document.documentElement.scrollLeft;
}

// 设置滚动距离
function setScrollX(num){
    document.documentElement.scrollLeft = document.body.scrollLeft = num;
}
function setScrollY(num){
    document.documentElement.scrollTop = document.body.scrollTop = num;
}

```

```js
// 计算元素距离左侧距离
function getLeft(element) {
    var result = 0;
    while (element) {
        result += element.offsetLeft;
        element = element.offsetParent;
    }
    return result;
}

// 计算元素距离顶侧距离
function getTop(element) {
    var result = 0;
    while (element) {
        result += element.offsetTop;
        element = element.offsetParent;
    }
    return result;
}

```

* var DOMRect = getBoundingClientRect()
* DOMRect 对象包含了一组用于描述边框的只读属性——left、top、right和bottom，单位为像素。除了 width 和 height 外的属性都是相对于视口的左上角位置而言的。
> top left right bottom返回距离都是相对于可视区的距离。