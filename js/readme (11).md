# day15


* jquery中的属性和方法都必须使用jquery对象调用。
* jquery选择器可以返回一个jquery对象（数组）
* jquery选择器匹配到元素后返回的数组，这个数组中元素其实就原生js DOM对象
* 如果在jquery中要使用原生js Dom操作，那么需要将 DOM对象jquery选择器返回的数组中使用下标的方式取出来
```js
console.log(  $('.box')[0]  ) // 原生DOM
console.log(  $('#box')   )   // jquery
```

## 事件传参
```js
$('.btn').click([1,2,3,'hello'], function( ev){
    console.log(ev.data)
})
```

## 文档就绪函数
```js
$(document).ready(function(){
    console.log($('.box'))
})
$(()=>{
    console.log('文档就绪')
})
$(function (){
    console.log('文档就绪')
})
```