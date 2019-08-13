# day9
* [timeitself](http://timeitself.cn)


* event对象
* 以下写法可兼容IE5678和火狐的低版本
```js
xxxx.onclick = function(ev){
    ev = ev || window.event
}
```

## 键盘事件
* 通常情况下键盘事件要只能给可以编辑的元素的添加（可以获取焦点），但是document 和body是可以添加键盘事件的。

* 注意： 在所有浏览器中 onkeypress 事件不是适用于所有按键(如： ALT, CTRL, SHIFT, ESC)。监听一个用户是否按下按键请使用 onkeydown 事件,所有浏览器都支持 onkeydown 事件。

* 阻止默认事件
```js
ta.onkeydown = function(ev){
    ev = ev || window.event

    // 阻止默认事件
    ev.preventDefault() 
    return false
}
```