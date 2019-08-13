
var array = [12,2,56,7,8,9]
console.log( array )
var result =  myPop( array )
console.log( result )
console.log( array )


console.log( array )
var result =  myPop( array )
console.log( result )
console.log( array )

// 
function myPop(array){
    // 检查数组中是否有数据
    if(0 >=  array.length){
        return
    }
    // 接收要删除的数据
    var value = array[array.length-1]
    // 删除数组中最后一个元素
    // array.length = array.length - 1
    array.length -= 1


    return value
}









