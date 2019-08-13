# day4

## 控制流语句可以省略花括号
* if while do/while for 花括号可以省略不写，如果不写花括号那么这些控制流语句的有效范围只有离它最近一条语句。
```js
var num = 0
if(0 == num)
    console.log('0')
else if(1 == num)
    console.log('1')
    // console.log('hello')
else
    console.log('不认识的数字')

num = 10 
while(num--)
    console.log(num); 
console.log('hello')

for(var i=0; i<10; i++)
    console.log(i)
console.log('for')
num = 10
do
    console.log(num)
    // console.log('num')
while(num--)
```

## 函数：
*  函数是一段可以重复调用的代码集合

1. 普通函数
```js
// 定义函数
function myFun(){
    //写代码逻辑
}
// 调用函数
myFun()
```
> 可以将函数名称赋值给一个变量，那么这个变量也会变成函数
```js
// 定义函数，这段并不会自已执行。
function myFun(){
    console.log('myFun...')
}
// 调用函数，执行函数体的代码
// myFun()
// myFun() 
// 函数名称代表函数的本身
console.log( myFun )
var fun 
// 将函数名作为值赋值给 fun
// fun被赋值就变成了函数
fun  = myFun
console.log(fun)
// 调用函数
// fun()
fun = null
// fun() // 语法错误，调用失败
```

2. 带参数的函数
```js
// 定义形参
function myFun(num1, num2){
    console.log(num1 + num2)
}
// 调用时传入实参
myFun(1,2)
```

3. 带返回值的函数
```js
function add(num1, num2){
    var value = num1 + num2
    // return 返回数据给调用者
    return value
}   

// 接收函数的返回数据
var value = add(12,23)
```

## return 
* return 作于函数中,作用是返回数据给调用者,并且结束当前函数的执行。
* return 后可以没有返回数据
* return 只可以写在函数中。
* 一个函数可以有多个return

## 匿名函数
```js
var myFun =  function () { 
    console.log('myFun...')
}
myFun()
```

## 块（代码块）
* 使用一对花括号 `{}` 包裹的代码就叫作代码块
## 作用域 
* 作用域（生命周期）：作用或是指变量或函数的有效范围。
## 全局变量：
* 当前文件中都可以访问的变量叫作全局变量。
* 所有控制流语句中声明的变量在控制流语句外部都可以被访问到（全局变量）

## 局部变量：
* 只有当前代码块中可以访问的变量叫作局部变量。
* 函数中定义的变量是局部变量，函数中参数列表的参数也是局部变量。

## 作用域链：在声明一个函数时，在函数内部又嵌套了局部作用域，局部作用域一级一级向上包起来，就是作用域链。当执行函数时，总是先从函数内部找寻局部变量，如果内部找不到（函数的局部作用域没有），则会向创建函数的作用域（声明函数的作用域）寻找，依次向上。

## 变量提升： 通俗点说函数及变量的声明都将被提升到函数的最顶部。