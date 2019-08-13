# day8
## 
* nodeName 节点名称
* nodeType 节点类型 1元素，2属性，3文件。

## 子节点及兄弟节点
* Element.childNodes　获取当前节点的所有子节点
* Element.firstChild  获取当前节点的第一个子节点
* Element.lastChild   获取当前节点的最后一个子节点
* Element.nextSibling 获取当前节点的下一个兄弟节点
* Element.previousSibling 获取当前节点的上一个兄弟节点
> **注意** 以上5个属性在标准浏览器会获取空白节点（空白节点其它也是文本节点） 


* element.children   获取当前节点的所有子节点
* element.firstElementChild 获取当前节点的第一个子节点
* element.lastElementChild  获取当前节点的最后一个子节点
* element.nextElementSibling 获取当前节点的下一个兄弟节点
* element.previousElementSibling 获取当前节点的上一个兄弟节点
> 以上5个属性在使用的时候不会获取空白节点。但是要注意除了children支持所有浏览器外其属性是不支持IE5/6/7/8浏览器的。

## 元素中属性相关的操作
* element.getAttribute() 获取指定属性的属性值
* element.setAttribute() 设置指定属性的属性值
* element.removeAttribute() 删除指定的属性

## 样式
* element.style  设置或返回元素的行间样式(不建议使用)
* element.className 设置或返回元素的类名称

## 设置元素内容
* element.innerHTML 设置或返回元素的内容
* element.innerText 设置或返回元素的内容
> innerHTML会将字符串解析标签元素（字符串形式的标签），innerText只会解析为文本。


## 事件
* onmouseenter 不支持冒泡
* onmouseleave 不支持冒泡

* onmouseover 支持冒泡
* onmouseout  支持冒泡

* oninput    内容改变
* onchange  内容改变（回车按钮按下或者失去焦点）
* onblur    失去焦点
* onfocus  获取焦点时

* onkeydown 键盘按下
* onkeyup   键盘抬起

> this在事件中表示当前元素对象























