
# 网络编程

# day1 
## Ajax 不是一种新的编程语言，而是一种用于创建更好更快以及交互性更强的Web应用程序的技术
* Ajax 即“Asynchronous Javascript And XML”（异步 JavaScript 和 XML），是指一种创建交互式网页应用的网页开发技术。
* Ajax = 异步 JavaScript 和 XML 或者是 HTML（标准通用标记语言的子集）。
* Ajax 是一种用于创建快速动态网页的技术。
* Ajax 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。
通过在后台与服务器进行少量数据交换，Ajax 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。
* 传统的网页（不使用 Ajax）如果需要更新内容，必须重载整个网页页面。

* 网络请求，局部更新界面
## 环境搭建

* 服务器 放数据
    - XAMPP
    - apache 部署目录： `C:\xampp\htdocs`

* 浏览器 客户端 请求数据

* 所有的ajax代码都必须运行在服务器环境下。（如果使用的是高版本的谷歌浏览器本地文件方式打开html也是支持ajax的）




## 互联网中的协议：ftp、http、stmp、TCP/IP、UDP…

* 客户端： 浏览器
* 服务器端： apache tomcat


* HTTP 教程 HTTP协议(HyperText Transfer Protocol,超文本传输协议)
1. 灵活： HTTP 协议允许客户端和服务器端传输任意类型任意格式的数据对象 
2. 无连接：无连接的含义是限制每次连接只处理一个请求。
3. 无状态：无状态是指协议对于事务处理没有记忆能力，服务器不知道客户端是什么状态。
* http每次连接都是一个新的连接

* http在tcp/ip协议的基础之上
## http1.1的特点 
1. 默认持久连接节省通信量，只要客户端服务端任意一端没有明确提出断开TCP连接，就一直保持连接，可以发送多次HTTP请求 。 
2. 管线化，客户端可以同时发出多个HTTP请求，而不用一个个等待响应 。 
3. 断点续传，就是可以将一个大数据，分段传输，客户端可以慢慢显示。

## http2.0的特点 
1. HTTP/2采用二进制格式而非文本格式 
2. HTTP/2是完全多路复用的，而非有序并阻塞的——只需一个HTTP连接就可以实现多个请求响应 
3. 使用报头压缩，HTTP/2降低了开销 
4. HTTP/2让服务器可以将响应主动“推送”到客户端缓存中

## URL
* HTTP使用统一资源标识符（Uniform Resource Identifiers, URI）来传输数据和建立连接。采用URL可以用一种统一的格式来描述各种信息资源，包括文件、服务器的地址和目录等。
### URL一般由三部组成： 
1. 协议(或称为服务方式) 
2. 存有该资源的主机IP地址(有时也包括端口号) ： ip 门牌号，端口 房间号
    - ip地址全球唯一，用来标识具体的计算机。 
    - 端口号：每个计算应用都有一个端口。0-65535 其中0-1023 系统留用。1023-65535用户可以使用。商品是80的可了省略不写
3. 主机资源的具体地址。如目录和文件名等

## HTTP 请求和响应
* 客户端发超请求，服务器端接受到请求后给出响应。

## 请求方法
根据HTTP标准，HTTP请求可以使用多种请求方法。 
HTTP1.0定义了三种请求方法： GET, POST 和 HEAD方法。 
HTTP1.1新增了五种请求方法：OPTIONS, PUT, DELETE, TRACE 和 CONNECT 方法。 
GET： 用于请求访问已经被URL（统一资源标识符）识别的资源，可以通过URL传参给服务器。 
POST：用于传输信息给服务器，主要功能与GET方法类似，但一般推荐使用POST方式。 
PUT： 传输文件，报文主体中包含文件内容，保存到对应URL位置。 
HEAD： 获得报文首部，与GET方法类似，只是不返回报文主体，一般用于验证URL是否有效。 
DELETE：删除文件，与PUT方法相反，删除对应URL位置的文件。 
OPTIONS：查询相应URL支持的HTTP方法。


## GET与POST使用时的区别
* GET:特定浏览器和服务器对URL长度有限制，例如 IE对URL长度的限制是2083字节(2K+35)。对于其他浏览器，如Netscape、FireFox等，理论上没有长度限制，其限制取决于操作系统的支持。 
因此对于GET提交时，传输数据就会受到URL长度的 限制。 
* POST:由于不是通过URL传值，理论上数据不受 限。但实际各个WEB服务器会规定对post提交数据大小进行限制，Apache、IIS6都有各自的配置。

* Get传输的数据量小，因为受URL长度限制，但效率较高； 
* Post可以传输大量数据，所以上传文件时只能用Post方式；
* get是不安全的，因为URL是可见的，可能会泄露私密信息，如密码等，post较get安全性较高；






## HTTP状态码
* 1xx：指示信息–表示请求已接收，继续处理 
* 2xx：成功–表示请求已被成功接收、理解、接受 
* 3xx：重定向–要完成请求必须进行更进一步的操作 
* 4xx：客户端错误–请求有语法错误或请求无法实现 
* 5xx：服务器端错误–服务器未能实现合法的请求
 
* 200 OK

# 跨域
* 正常情况下，客户端代码和服务器代码需要部署到  **同域名同端口号** 下。

## 解决跨域
* 使用代理服务器
* 服务器端设置白名单 (php header('Access-Control-Allow-Origin:*'); //设置可跨域)
* 浏览器设置：右键点击属性设置 **目录**为 "C:\Users\Administrator\AppData\Local\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir=C:\MyChromeDevUserData
* JSONP




## HTTPS
* HTTPS就是安全的HTTP，在http与传输层之间加上了一个SSL对称加密与非对称加密。HTTPS = HTTP+ 加密 + 认证 + 完整性保护。

## 浏览器中输入一个URL后是怎么请求到一个页面的。
1、输入URL：http://www.baidu.com 
2、DNS 域名解析，获取对应的IP地址以及端口号 
3、建立TCP连接（Socket）：三次握手,确保这个一定是一个有效的请求和响应，这个三次握手在业界相信大多数人都不陌生，虽然它是提高了传输的有效性，但是这个导致的直接问题就是整个传输过程是很耗时的，也就是说每次http请求都会经历三次握手这个过程，消耗的时间也是不言而喻，并且传统的http协议规定一次请求只能请求一个文件，所以一些顶级网站千方百计的采取一些减少http请求的策略，大多数就是采取一次http请求能够请求多个文件这样的实现，欣喜的是，http2.0已经支持能够一次http能够请求多个文件，这个还是值得期待全部推行开来的，只不过肯定需要过上一段时间，慢慢去等待推行吧。 
4、将用户输入URL地址封装成HTTP Request请求报文发送到服务器。 
5、后台服务器接收到用户HTTP Request请求报文之后，经过相应的处理，然后将相应结果封装到HTTP Response响应报文中发送给客户端。 
6、用户浏览器接收到响应数据后开始渲染html、css，解析和执行JavaScript等代码。




```js
 // 1. 创建 ajax 请求对象。
var xhr = null;
if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
} else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP")
}
// 2. 设置请求参数。
xhr.open("get", "/ajax/server.php?name=小明&age=19", true);
//  3. 将请求提交给服务器
xhr.send();
// 4. 等待服务器响应。
xhr.onreadystatechange = function () {
    if (4 == xhr.readyState && 　200 == xhr.status) {
        alert(xhr.responseText);
    }
}
```















