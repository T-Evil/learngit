
// getTime().timeStr
// var time = getTime()
// time.timeStr
// console.log(time.timeStr)

setInterval(function () {
    var time = getTime()
    time.timeStr
    console.clear()
    console.log(time.timeStr)
}, 1000);



// 获取时间
function getTime() {
    var date = new Date()

    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    var hours = date.getHours()
    var minutes = date.getMinutes()
    if(10 > minutes){
        minutes  = '0'+ minutes
    }
    var seconds = date.getSeconds()
    if(10 > seconds){
        seconds  = '0'+ seconds
    }

    var time = {
        year: year,
        month: month,
        day: day,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        timeStr: `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
    }


    return time
}



