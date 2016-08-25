# vue-location

vue-router 全局的前置钩子函数 beforeEach 中要外链 ,
window.location.href 在 beforeEach 应用会失效,
插件 vue-location 能解决外链跳转

### 1.下载
把vue-location.js 下载放到你的自己的 js 项目目录中 如果/service

### 2.导入
```
var Location = require('./service/vue-location.js')
```
####es6
```
import Location from './service/vue-location-es6.js'
```

### 3.安装
```
Vue.use(Location)
```
### 3.用法
```
var url = '你要跳转的地址'
Vue.locationHref(url)
```

