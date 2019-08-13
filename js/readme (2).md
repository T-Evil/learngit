# day 6

## 面向对象 万物皆对象
## 类 事物的特征进行抽象汇总。
* 静态特征
* 动态特征

## 对象 就是一类事物的具体的一个。

```js
// 方式一
var xiaoMing = new　Object()
xiaoMing.name = '小明'
xiaoMing.age = 19
xiaoMing.job = function(){
    console.log('学生')
}

// 方式二：
var xiaoHong = {}
xiaoHong.name = '小红'
xiaoHong.age = 18
xiaoHong.job = function(){
    console.log('工人')
}

// 方式三
 var dog = {
            'name': '二狗子',
            "age": 2,
            color: '黄',
            run: function () {
                console.log('run...')
            }
        }
console.log( dog )
console.log(dog.name);
console.log(dog.age);
console.log(dog.color);
dog.run()
```
## 对象数组
```js
 // 对象数组
var arr = [
    {name:'小明',age:191,sex:'女'},
    {name:'小明',age:192,sex:'女'},
    {name:'小明',age:193,sex:'女'},
    {name:'小明',age:194,sex:'女'},
    {name:'小明',age:195,sex:'女'},
    {name:'小明',age:196,sex:'女'},
    {name:'小明',age:197,sex:'女'},
    {name:'小明',age:198,sex:'女'}
]
for(var i=0; i<arr.length; i++ ){
    console.log(arr[i].age)
}
```


> 要访问对象中的成员属性和方法，使用 . 点运算符。

## this
* 在对象中 this 表示当前对象
* 在主程序中 this 表示window对象
* 在普通函数中 this 表示window对象
* this在定时器中 代表 window对象

## 定义好对象中还可以向对象中添加属性和方法
```js
var p1 = {
    name:'小明'
}
// 向对象添加新的属性
p1.age = 19
// 向对象中添加新的方法
p1.run = function(){
    console.log(this.name + "run。。。")
}
console.log(p1)
p1.run()
```

## 删除对象中的属性 delete
```js
var man = {
    name:'小明',
    age:19,
    sex:'男',
    run: function() {
        console.log(this.name + " run....")
    }
}
// man.run()
// console.log(man)

delete man.run  // 删除方法
delete man.sex //删除属性
```


# 定时器
```js
// 参数1：要执行的延时任务，函数。
// 参数2：延时时间 毫秒
setTimeout( function(){
    console.log('hello setTimeout...')
}, 1000 );


var i = 1
var t1 = setInterval( function(){
    console.log(i++)
    if(5 ==  i ){
        // 清除定时器
        clearInterval(t1)
    }
}, 1000 )
```
* 定时器不会阻塞主程序执行
* 任务队列
> 定时器会被放入到任务队列中执行，任务队列只有当主程序执行完毕后才执行。
