var nameList = [
    { "name": "黄海丽" }, { "name": "张小波" }, { "name": "张琦" }, { "name": "明尊通" }
    , { "name": "王照翔" }, { "name": "刘玮航" }, { "name": "丁义" }, { "name": "曾滏" }, { "name": "廖焕军" }
    , { "name": "刘龙光" }, { "name": "唐英海" }, { "name": "陈轩玮" }, { "name": "伍开朗" }, { "name": "陈曦" }
    , { "name": "裴宇欣" }, { "name": "陈雅强" }, { "name": "朱中兴" }, { "name": "何泽鑫" }, { "name": "黄经桐" }
    , { "name": "周清" }, { "name": "李佼骏" }, { "name": "谢华辉" }, { "name": "胡维妮" }, { "name": "孙露先" }
    , { "name": "李亮" }, { "name": "郑曙洋" }, { "name": "林家豪" }, { "name": "于尧" }, { "name": "刘梓川" }
    , { "name": "奉鑫" }, { "name": "但宇村" }, { "name": "王森" }, { "name": "毛朋" }, { "name": "冯章俭" }
    , { "name": "宋一凡" }, { "name": "谭燕燕" }, { "name": "江松满" }, { "name": "陈棉灏" }, { "name": "肖金辛" }
    , { "name": "杨杰腾" }, { "name": "汤金超" }, { "name": "巩靖宇" }, { "name": "李欣原" }, { "name": "杨永帅" }
    , { "name": "李培鹏" }, { "name": "石娟" }, { "name": "刘硕" }, { "name": "钱骏" }, { "name": "蒋贤" }, { "name": "李杨" }
    , { "name": "黄中憬" }, { "name": "胡憬航" }, { "name": "李思思" }, { "name": "雷杰" }, { "name": "孙泽州" }
    , { "name": "谢贤堂" }, { "name": "王梦阳" }];

// console.log(nameList.length )
    
// for(var i=0; i<100; i++){
//     var num =  Math.random() * 57
//     num = Math.floor(num)
//     // console.log( num ) 
//     if(57 <= num){
//         console.log('i : '+ i+" ,num:" + num)
//     }
// }


// 测试

// for(var i=100; i>0; i--){
//     var user =  getRandomName( nameList )
//     console.log( user )
// }


function getRandomName(list){
    if(0 >= list.length){
        return null
    }
    var length =  list.length
    // 取0 - 数组长度减1之间的随机数
    var randomNum =  Math.random() * (length -1)
    // 对数字进行取整
    randomNum =  Math.floor( randomNum )
    return list[randomNum]
}

