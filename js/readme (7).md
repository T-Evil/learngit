# day11

* element.appendChild()/element.insertBefore() 如果该对象是html页面中已经存在的对象（元素）那么就剪切该对象。
* element.cloneNode() 复制当前元素，
    - 参数为布尔值，true 复制当前元素及内部所有子级元素。false或不写只复制当前元素。
    - 返回值是一个新的元素对象



## html对象
* img
    - src 
    - 
* a    
    - href
    - target
* input
    - text/number/password
    - value
    - focus()

    - checkbox/radio
    - 单选或复选都在一个组中， 通常情况下获取值时需要遍历这个组中的每一个成员的checked属性
* select
    - value

# bom
> window 最顶层对象
      Window :
window 对象。它代表浏览器的窗口。
所有全局 JavaScript 对象，函数和变量自动成为 window 对象的成员。
全局变量是 window 对象的属性。
全局函数是 window 对象的方法。

Navigator
Navigator 对象包含有关浏览器的信息。
    - cookieEnabled 检查cookie是否启动
    - userAgent 浏览器相关信息

Screen
Screen 对象包含有关客户端显示屏幕的信息。

History
History 对象包含用户（在浏览器窗口中）访问过的 URL

Location 
Location 对象包含有关当前 URL 的信息。


* URL（Uniform Resource Locator,统一资源定位符(表示一个地址)

## web存储
window.localStorage 用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去除。
window.sessionStorage 用于临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据。


key(n) 返回存储对象中第 n 个键的名称
getItem(keyname)返回指定键的值
setItem(keyname, value)添加键和值，如果对应的值存在，则更新该键对应的值。
    > key值要唯一，否则会覆盖上一个的值
removeItem(keyname)移除键
clear()清除存储对象中所有的键

