## day16
* **插件**： 增强原生功能的

## 滑动插件
* [swiper](https://www.swiper.com.cn/)

* [zeptojs](https://zeptojs.bootcss.com/)


## 自执行函数
```js
 // 自执行函数
(function(num){
    console.log(num)
})(123)  
```

## 
* 弱类型
* 动态类型
* js核心 dom bom
* 标识符，包含关键字与保留字
* 变量 var let 
    - var 可以先使用，再声明（变量提升）
    - let 作用范围就是当前所在的块中
    - let 先声明再使用
    - let num , num1 =1, num3
    - let n=b=a=19
* 块 {}
* 常量 const
    - 声明时同时赋值
    - const NUM = 199
* 算术 返回结果是数字
    - + - * / % ++ --
    -  num++ 只有在同一表达式才考虑先加还是后加的问题
    - + 两边的操作数如果有一方是字符串那么就是字符串连接符
* 比较 返回结果是boolean
    - > < == === != !== >= <=
* 逻辑
    - && || !
    - 与 全1出1，有0出0
    - 或 有1出1 全0为0
    - 数字非0为真，0为假
    - 字符串非空为真，空('')为假
```js
console.log( 0 && 1) //0
console.log( 1000 && 20001) //20001
console.log( 'sdf' && 'sdfdff') //sdfdff
console.log( 'sdf'|| 'sdfdff') //sdf
```
* 三目
    - var num =  true ? '' : ''
* 赋值
    - = += -= *= /= %=
    - num +=8  num = num+8
* 位 将操作数转换成二进制每一位都进行运算
    - & | ~

* 强制类型转换与自动类型转换。
```js
parseInt('123)
String(123)
Number('123')
Boolean(null)
let str = ''
str +=123
'123' -1239
'123'* 998
```

## 控制流
* 条件判断
    - if elseif else
    - switch
    ```js
    switch(num){
        case '':
        case '':
            break
        default:
    }
    ```
* 循环控制
    - for
    - while
    ```js
    while(){

    }
    ```
    - do/while 先执行再判断最少执行一次
    ```js
    do{

    }while()
    ```
    - for/in 可以遍历数组或对象 迭代出的数组为对象中的属性或数组中的下标
    - for/of 可以迭代数组或对象（ Array，Map，Set，String，TypedArray，arguments），迭代数组时为数组中的元素，迭代对象为对象中的属性值。

## in 对象中使用 检测该对象中是否有该属性
* continue与break
* number string boolean undefined null object array 

## 函数
* arguments
* 箭头函数
```js
let fun = ev=> ev.target
fun()
```
* rest参数,在参数列表中只能有一个并且只能放在参数列表的最后，使用同数组
```js
function fun(...args){

}
```
* ... 数组 表示展开运算

## 数组
* 下标 从0开始
* 元素
* length 从1
```js
let arr = [1,2,2,56]
// 浅拷贝
let arr1 = arr
// 深拷贝
// JSON 序列化与反序列化
//JSON.stringify()
//JSON.parse()
// concat()
//...
let arr2= [...arr]
```
*　多维数组，数组中嵌套数组
```js
let arr = [[3,3,2] ,[2,3,3] , [1,2,2]]
for(let i=0; i<arr.length; i++){
    for(let j=0;j<arr[i].lenght; j++){
        console.log(arr[i][j])
    }
}
```

## 正则
* new RegExp()
* let re = //i
* 元字符
* 量词 + *
* 范围[]

* DOM 文档对象模型
```js
document.getElementById()
document.querySelector()
document.getElementsByName()
document.getElementsByClassName()
document.getElementsByTagName()
document.querySelectorAll()
```
* element 
* nodeName
* nodeType 1 2 3
* childNodes
Element.childNodes 获取子节点。
Element.firstChild 获取第一个子节点。
Element.lastChild 获取最后一个子节点。
Element.nextSibling 获取当前节点的下一个兄弟节点。
Element.previousSibling 获取当前节点的上一个兄弟节点。

Element.children 获取子节点。
Element.firstElementChild 获取第一个子节点。
Element.lastElementChild 获取最后一个子节点。
Element.nextElementSibling 获取当前节点的下一个兄弟节点。
Element.previousElementSibling 获取当前节点的上一个兄弟节点。

Element.parentNode当前节点的父节点
Element.offsetParent 获取当前节点的祖先节点。会受当前父级的定位。

Element.offsetLeft
Element.offsetTop

* 生成DOM对象
* createE.....
* innerHTML字符串 模板字符串
* element.appendChild()
* element.insertBefore()
* element.cloneNode()
* element.className
* element.style
* innerHTML
* innerText


* 事件
* 鼠标事件
* 键盘事件
```js
xxxx.onclick =function(){

}
xxxx.onclick =null
```
* 绑定事件 
* 事件冒泡 从内向外
* 事件捕获 从外向内
* 冒泡与捕获只能两选一

* 事件对象
```js
function(ev){
    ev = ev || window.event
}
```
## BOM 浏览器对象模型

es6
let const
class constructor extends
super() =>
this 表示当前
变量解构

.call(this)
.apply(this)
.bind(this,1,2,3)







