# day 12

## []方括号在对象中的使用
```js
var obj =  { }
obj["hello"] = "123"
obj.hello
obj["hello"]
```

## 遍历对象
```js
var color = { red:"red" }
for (var key in color) {
    console.log( color[key] )
}
```
## cookie
* 如果没有给cookie设置时间会话结束
* 如果设置时间，时间到cookie就结束

> cookie必须在服务器环境下运行

* document.cookie
* document.cookie = 'name="小明"'
* document.cookie = 'age=19;expires='+ date.toUTCString() //添加一个有过期时间的cookie

## 删除cookie
* 给要删除的COOKIE设置一个已经过去的时间。
```js
// 删除cookie
var date = new Date( new Date().getTime() - 1)
document.cookie = 'age=20;expires='+ date.toUTCString()
```

## cookie封装
```js
/**
* 设置cookie
* @param {String} name  cookie名称
* @param {String} value cookie值
* @param {Number} time 过期时间 分钟
*/
function setCookie(name, value, minute){
    let va = escape(value)
    let data = new Date()
    if (minute) {
        data.setTime(data.getTime() + 1000 * 60 * minute)
        document.cookie = `${name}=${va};expires=${data.toUTCString()}`
    } else {
        document.cookie = `${name}=${va}` //当前会话关闭就超时
    }
}

/**
 * 删除指定cookie
 * @param {String} name 要删除的cookie名称
 */
function clearCookieByName(name){
    setCookie(name, '', -1)
}


/**
 * 获取所有cookie
 * return 包含当前cookie值的对象 
 */
function getCookieAll(){
    let coo = document.cookie
    if (coo == '') {
        return null
    }
    //清除空格
    coo = coo.replace(/\s+/g, '')
    let cArr = coo.split(';')
    let cookies = {}
    cArr.forEach((coo) => {
        let c = coo.split('=')
        cookies[c[0]] = unescape(c[1])
    })
    return cookies
}

/**
 * 获取指定名称的cookie
 * 参数name: cookie名称
 * return :如果有返回cookie值，否则返回为null
 */
function getCookieByName(name){
    let cs =  getCookieAll()
    
    if(cs.hasOwnProperty(name)){
        return cs[name]
    }else {
        return null
    }
}
```

## 普通事件
```js
// 普通事件
btn1.onclick = function () {
    console.log('.1.')
}
```
* 同一标签元素同一类型的事件只能有一个，如果多次赋值后面覆盖前面。
* 绑定事件可以让同一元素拥有一个及以上的同一事件类型的事件。
## 事件绑定的兼容性封装
```js
/*
* 参数1：要绑定事件的元素。
* 参数2：要绑定的事件名称。
* 参数3：要绑定事件回调。
*/
function bindEvent(obj,eventName,callback){
    if(obj.addEventListener){
        obj.addEventListener(eventName,callback,false);
    }else{
        obj.attachEvent("on"+eventName,callback);
    }
}
```

## 取消绑定的兼容性封装
```js
 function delEvent(obj,eventName,callback){
    if(obj.removeEventListener){
        obj.removeEventListener(eventName,callback,false);
    }else{
        obj.detachEvent('on'+eventName,callback);
    }
}
```

## 事件冒泡与捕获
* 事件冒泡：事件发生后，事件从内层向外层传播的现象叫就叫事件冒泡
> 普通事件只能冒泡。

* 事件捕获：与事件冒泡相反事件发生后，事件从外层向内层传播叫作事件捕获
> 事件冒泡与事件捕获只能选一个，
## 阻止事件冒泡与捕获
```js
event.cancelBubble = true;
event.stopPropagation();注意：IE5/6/7/8不支持这种写法
```

## 事件委托其实就是利用事件冒泡现象实现的，这样作有两个好处
1. 效率高：如果有大量的元素需要添加相同的事件时不必为每一个元素单独添加事件。 
2. 后续加入的元素也可以直接拥有事件，不需要再为新元素添加事件。而普通事件就不可以，必须为新元素再次指定事件。

## 面向对象
* 万物皆对象
* 类 一类具有相同特征的事物的集合
* 对象（实例）


* 
```js
// 工厂方式
function createPerson(name, age, sex) {
    var p = new Object()
    // var p = {}
    p.name = name
    p.age = age
    p.sex = sex
    p.say = function () {
        console.log(`大家好我叫${this.name},今年${this.age}岁,我是${this.sex}生`)
    }
    return p
}
// 构造函数方式
 function Perosn(name,age,sex){
    this.name = name
    this.age = age
    this.sex = sex  
    this.run = function(){
        console.log(this.name + 'run...')
    }
}

// ES6
// 类语法
class Person{
    // 构造函数
    constructor(name,age,sex){
        this.name = name
        this.age = age
        this.sex = sex
    }
    say(){
        console.log(this.name+","+this.age)
    }
    run(){
        console.log(this.name+" run...")
    }
}
```

## es6对象

##检查对象中是否有该属性
* in 检查对象中是否有该属性或方法。如果该属性是通过继承得来的也会输出为true
* hasOwnProperty方法判断的是对象是否自身拥有的，而不是继承得到的

```js
// 构造函数方式
function Person(name,age,sex){
    this.name = name
    this.age = age
    this.sex = sex  
    this.run = function(){
        console.log(this.name + 'run...')
    }
}

var p1 =  new Person('asdf',19,'nan')
console.log( "toString"  in  p1) //如果父类中有的属性那么也会检查为true
console.log( p1.hasOwnProperty("toString")) //只检查当前对象中是否为该方法
```




























