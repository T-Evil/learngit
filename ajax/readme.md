# day3

* ip： 用于标识网络某一台计算机（相当于计算机身分证号）
    - localhost 当前计算机
    - 127.0.0.1 当前计算机
    - ipconfig 命令可以查看当前计算机的ip地址
* 端口：计算机每个软件都有一个唯一的端口号，用来与其它软件进行通讯


* 网络通讯 ：两个软件间的数据的交互。
* http
* ajax
* 服务器（apache） 客户端（浏览器）

## jsonp
* script可以加载一个服务器端文件，虽然可以加载到该文件但文件中返回的数据并不能读取，但如果服务端返回的不是数据而一个一js语句那么，该语句是会加载完成后执行的。
* 服务器端代码，需要返回一个在客户端中存的在函数调用字符
* 客户端需要编写函数，该函数必须与服务端返回的函数同名并且形参列表要与服务端端返回函数的参数列表要一一对应
* 客户端使用 script 加载服务端文件




## 使用Promise封装 ajax
```js
const getJSON = function (url) {
    const promise = new Promise(function (resolve, reject) {
        const handler = function () {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                // 请求成功后修改promise状态为fulfilled，并且将请求结果返回。
                resolve(this.response);
            } else {
                // 请求不成功时修改状态为rejected，并且返回请求出错信息
                reject(new Error(this.statusText));
            }
        };
        
        const client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();

    });

    return promise;
};

/*
    监听请求状态的变化。
    then中两个参数：
    参数1：成功状态，
    参数2：失败状态
*/
getJSON("http://192.168.5.4/test.json").then( json=> {
    console.log(json);
}, error => {
    console.error('出错了', error);
});
```
## jquery中提供的网络请求功能
$.ajax(url,[settings])
$.get()
$.post()


## fetch es6提供的一新个的可以访问网络资源的API
*   **注意** fetch的兼容性并不好，IE全部不支持使用。
*  fetch()方法，该方法提供了一种简单，合理的方式来跨网络异步获取资源。
*  [Fetch_API](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)
*  cookies每次请求cookie都会往返回于客户端与服务器端
*  默认情况下，fetch 不会从服务端发送或接收任何 cookies,


## axios-js
* 易用、简洁且高效的http库
* [axios-js](http://www.axios-js.com/)
* `npm i axios`


## webpack
1. 新建 package.json文件内容下如
```json
{
  "name": "mybook",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "dependencies": {
    "@babel/runtime": "^7.0.0-beta.51",
    "jquery": "^3.3.1"
  },
  "devDependencies": {
    "@babel/core": "^7.0.0-beta.51",
    "@babel/plugin-transform-runtime": "^7.0.0-beta.51",
    "@babel/preset-env": "^7.0.0-beta.51",
    "babel-loader": "^8.0.0-beta.0",
    "babel-preset-env": "^1.7.0",
    "clean-webpack-plugin": "^0.1.19",
    "copy-webpack-plugin": "^4.5.1",
    "css-loader": "^0.28.11",
    "extract-text-webpack-plugin": "^4.0.0-beta.0",
    "file-loader": "^1.1.11",
    "html-webpack-plugin": "^3.2.0",
    "less": "^3.9.0",
    "less-loader": "^5.0.0",
    "node-sass": "^4.12.0",
    "sass-loader": "^7.1.0",
    "style-loader": "^0.21.0",
    "uglifyjs-webpack-plugin": "^2.1.2",
    "webpack": "^4.35.2",
    "webpack-cli": "^3.0.6",
    "webpack-dev-server": "^3.1.4",
    "webpack-merge": "^4.1.3"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config webpack.prod.js",
    "start": "webpack-dev-server --open --config webpack.dev.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

* devDependencies 开发依赖
* dependencies 项目依赖

## 创建webpack的配置文件
1. `webpack.common.js` 

```js
//webpack.common.js 通用配置
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
const ExtractTextPlugin = require("extract-text-webpack-plugin"); //将css作为单独文件
const CopyWebpackPlugin = require('copy-webpack-plugin'); //复制文件

module.exports = {
    entry: { // 入口
        index: './src/index/index.js',
        home: './src/home/home.js'
    },
    output: { //   文件输出
        path: path.resolve(__dirname, 'dist'),
        filename: 'src/[name].[chunkhash].js',
    },
    module: {
        rules: [
            
            { //配置 css-loader
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                        options: {
                            minimize: true, //压缩css
                        }
                    }]
                })
            },
            { // 配置 babel-loader
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/, //此模块中的js不转码
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        cacheDirectory: true, //缓存转换结果以提高执行效率
                        plugins: ["@babel/plugin-transform-runtime"]
                    }
                }
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },

            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [ {
                        loader: "css-loader", options: {
                            sourceMap: true,
                            // minimize: true, //压缩css
                        }
                    }, {
                        loader: "sass-loader", options: {
                            sourceMap: true
                        }
                    }]
                })
            },
        ]
    },
    // 插件
    plugins: [
        // 自动生成HTML文件,可以生成多个
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index/index.html', //指定html模板
            chunks: ['index'], //指定要包含那些打包后的js
            hash: true,
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },

        }),
        new HtmlWebpackPlugin({
            filename: 'home.html',
            template: './src/home/home.html',
            chunks: ['home'],
            hash: true,
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
        }),

        // 将js引入的css分离出然后注入到html页面中
        new ExtractTextPlugin("css/[name].[chunkhash].css"),
        //复制图片目录
        new CopyWebpackPlugin([{
            from: './img',
            to: 'img'
        }, //拷贝图片目录
            // {from: './iconfont',to: 'iconfont'}  //拷贝字体图片库
        ]),
    ],
};

```

2. `webpack.dev.js`
```js
//webpack.dev.js
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    // devtool: 'inline-source-map',
    devServer: {
        stats: "errors-only", //信息输出，只有出错时输出
        contentBase: './dist',
        // compress: true, // 一切服务都启用gzip 压缩
        port: 8090, //端口号
        // host: "192.168.1.6", //设置IP地址
    },
});
```

3. `webpack.prod.js`
```js
//webpack.prod.js
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清空目录
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'source-map', //开启生成代码映射文件功能
    plugins: [
        new UglifyJSPlugin({sourceMap: true}),
        new CleanWebpackPlugin(['dist']), //清理 dist 目录
    ]
});
```

## dos命令行进入到该webpack的根目录执行命令 ` npm install  ` 或者 `npm i`
* `npm i` 









































