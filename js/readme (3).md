# day7

## arguments
* 接收函数参数列表
* arguments同数组一样使用
* 使用arguments对象函数可以不定义形参
* **arguments** 不推荐使用
## ... 可变参数
*　... 也叫展开运算符
*  ...用在函数中的时候，放在形参列表中最后，并且只能有一个。
*  ...配合数组名称使用时表示，将数组展开。


## 错误处理
```js
try{
    var obj =  JSON.parse('{"hello":hello"}')
    console.log(obj)
}catch( error ){
    console.log(error)
}finally{
    console.log('finally')
}
```
* try 块中如果运行时出错，那么catch就会捕获到这个错误
* try 块中如果没有运行出错，那么 catch块将不执行
* finally 块是可选的，无论是否出错都会执行
* throw 可以主动抛出错误

> 程序在运行时出错，如果没有try/catch那么浏览器内核会处理出错，如果程序人员添加了try、catch尝试捕获错误那么发生错误，try、catch块就会处理出错。

## Error 错误对象
* error.message 出错信息
* error.name 错误名
```js
var num1 = 10
var num2 = 0
try {
    if (0 == num2) {
        // throw '除数不能为0'
        throw new Error('除数不能为0')
    }
} catch (error) {
    console.log(error.message)
}
```


# dom

* getElementById()	返回对拥有指定 id 的第一个对象的引用。
* getElementsByClassName 返回带有指定类名的对象集合
* getElementsByName()	返回带有指定名称(name属性)的对象集合。
* getElementsByTagName()	返回带有指定标签名的对象集合。
* querySelector()		返回文档中匹配指定的CSS选择器的第一元素
* querySelectorAll()	回文档中匹配的CSS选择器的所有元素节点列表



# 除数不能为0
被除数÷除数=商