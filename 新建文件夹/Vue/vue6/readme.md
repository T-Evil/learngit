# day6
## vue-router
vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。

### 引入工程
* `https://unpkg.com/vue-router/dist/vue-router.js`
* `npm install vue-router --save`

*  `routes`
*  `VueRouter`
*  `<router-view>`
*  `<router-link>`
路由规则在匹配时自上而下匹配如果匹配成功那么后续的规则将不再匹配。
*  `redirect` 重定向
    - 通常情况下放在规则的结尾，* 表示通配符，可以匹配所有字符
* `alias` 别名

## 嵌套路由
* 规则设置 ：`children`

## 编程式导航
* $router.push(location, onComplete?, onAbort?)
* $router.replace(location, onComplete?, onAbort?)
* $router.go(n)
* $router.back()
* $router.forward()


