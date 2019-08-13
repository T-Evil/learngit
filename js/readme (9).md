# day13

## 面向对象三大特征
* 封装  继承  多态

* 继承为了代码的复用
```js
// es5
// 父类
function Person(name,age,sex){
    this.name = name
    this.age = age
    this.sex = sex
    this.say = function(){
        console.log('大家好我叫'+this.name)
    }
}

// 子类
function Man(name,age,job){
    // 构造函数的伪装
    Person.call(this, name,age,'男')
    this.name = name
    this.age = age
    this.job = job
    this.work =function (){
        console.log("大家好，我的工作是"+ this.job)
    }
}

Person.prototype.color = '白'
// 继承父类中原型中属性与方法
Man.prototype = Person.prototype

// 实例化
// var p1 = new Person('白人',19,'男')
var xm = new Man('xiaoming',18, '学生')
xm.say()
```

## 检查对象是否指定类的子类
```js
console.log( xm1 instanceof Person ) 
```

## 修改this指向

* call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。
* apply() 方法调用一个具有给定this值的函数，以及作为一个数组提供的参数。
```js
var box = document.querySelector('.box')
function myFun( num1, num2 ){
    console.log(this)
    return num1 + num2
}
var value =  myFun.call(document.body,1,2)
value =  myFun.apply(box, [1,2])

var newFun = myFun.bind(document.body, num, num2)
newFun()
```
> 改变this指向的同时，调用了这个函数。

* bind()方法创建一个新的函数，在bind()被调用时，这个新函数的this被bind的第一个参数指定，其余的参数将作为新函数的参数供调用时使用。

## 正则
```
 // 简写正则表达式
var re = /e/i
console.log(re.test(str))
```


* [http://es6.ruanyifeng.com/](http://es6.ruanyifeng.com/)

* let 声明变量，必须要先声明再使用（无作用域的提升），let 声明的变量就只在当前的代码块中使用。
* const 声明一个常量值，必须在声明时初始化。声明好的常量不允许修改值
* 模块字符串:可以换行，在字符串内部可以使用变量
```js
let str = `
            你好${num + num1}
        `
```

* 变量解构
```js
let [a,b,c] = [1,2222,1,2,2,56]
console.log(a)
console.log(b)
console.log(c)

let obj = {num1:1999,num2:887}
let {num1,num2}=obj
console.log(num1)
console.log(num2)
```

* rest参数 ...可变参数，用在形参列表中必须放在参数列表的最后，并且只能有一个rest使用时同数组一样。
* ...可以在数组中使用。在数组中表示展开运算
```js
let arr = [12,2,,5,6,8]
let arr2 = [12,2,,5,6,8]
console.log(...arr)
let arr1  = [...arr,...arr2]
```
* 给形参设置一个默认值，哪果当实参没有指定时就会使用默认值。
```js
myFun(1,7)
// myFun()
// 给形参指定默认值
function myFun(num=1, num1=19) {
    console.log(num + num1)
}
```

* 函数的name属性，返回该函数的函数名
* 箭头函数
```js
// 箭头函数
let myFun1 = (num1,num2)=>{
    return num1 + num2
}

let value =  myFun1(1,3)
console.log(value)
```
* 箭头函数中如果只一个参数，形参列表的圆括号可以省略。函数体中如果只有一条返回语句，那么花括号和return都可以省略
```js
//如果只有一个参数，形参列表的圆括号可以省略
let myFun2 = num1 =>
    // 如果只有一条返回语句，那么花括号和return都可以省略
    num1 + "hello"

console.log(myFun2(999))
```

* 箭头函数中的this,this会指向箭头函数所在的那个对象

## this
1. 在函数中，this 表示，this 表示全局对象。
2. 在方法中，this 该方法所属的对象。
3. 如果单独使用表示全局对象。
4. 在事件中，this 表示接收事件的元素。
5. setTimeout时this 指向全局对象使用
6. 箭头函数时this可以指向程序的上下文，（就是定义时所在的对象，而不是使用时所在的对象）


### class 关键字定义类
- constructor定义类中的构造方法
- 类成员间不能使用逗号分隔，否则报错
- 通过new命令可以生成对象实例
- static修饰的方法叫作静态方法。静态方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
- 类内部只有静态方法没有静态属性。

> 在实例化子类前父类需要先实例化

```js
// 父类
class Human {
    constructor(name, age, sex) {
        this.name = name
        this.age = age
        this.sex = sex
        console.log('human')
    }
}
// 子类
class Man extends Human{
    constructor(name, age, job) {
        // super表示父类构造方法
        super(name, age,'男')
        
        this.job = job
    } 
}
```



## Promise
* Promise 是异步编程的一种解决方案,ES6 将其写进了语言标准.
* Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果.
### promise三种状态
1. pending（进行中）
2. fulfilled（已成功）
3. rejected（已失败）

> 只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态.
> promise对象的状态改变，只有两种可能：从**pending**变为**fulfilled**和从**pending**变为**rejected**。

### 基本用法：
```js
const promise = new Promise(function(resolve, reject) {
  // ... some code
  if (/* 异步操作成功 */){
    resolve(value); //触发成功状态
  } else {
    reject(error); //触发失败状态
  }
});
//监听状态发生变化
promise.then(function(value) {
  // success 成功
}, function(error) {
  // failure 失败
});
```

### **then**方法链式用法
* **then**方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例。
* 上一个**then**函数中的返回值会作为参数传入到下一个**then**函数中


### **catch**
* Promise.prototype.catch方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数。
* 使用**catch**方法就可以不再指定**then**中第二个参数，这样代码会更加易读
> 不要在改变状态后再抛出错误，状态已经确定将不能更改， 所以抛出错误也不会被捕获。


























