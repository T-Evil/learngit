# day1

* npm镜像源： [taobao镜像源](https://npm.taobao.org/)
* 更改淘宝镜像源： `npm config set registry http://registry.npm.taobao.org`


## vue
* 框架：mvvm , 单页面 应用程序
* mvc Model View Controller，是模型(model)－视图(view)－控制器(controller)的缩写
* mvvm model view view model
* 双向数据绑定
* 网站有很多页面，用户体验（用户友好度），把多页面整合一个页面
* 一个页面整体体积变大，首次加载慢。将一些必须的页面先加载出来，其它页面等待用户点击或其它操作时再进行加载（加载一次后将页面缓存不需要再次再次加载。）

## 使用vue
* [vue中文官网](https://cn.vuejs.org/)
* [cdn](<script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>)
* `>npm i vue --save`

* 插值 {{}}
## 指令
* v-text 向标签中插入数据。（如果标签中有值会被覆盖，相当于dom innerText）
* v-html 向标签中插入数据。如果该数据是一个可以构成标签的字符串那么会解析为标签将插入当前标签对中。
* v-show 显示或隐藏元素（display:none）
* v-if 添加或删除元素
    - 如果频繁显示或隐藏的元素那么优先选用 v-show反之使用v-if






