# veu-resume

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 项目名称 Veu-resume(vue在简历编辑器)；（第一版本）

## 项目功能：

1.添加简历内容，包括个人信息、工作经历、学习经历、获奖情况、项目经历和联系方式。

2.更新简历内容

3.预览简历

# 技术栈：vue/webpack/npm/sass/es6/normalize.css

## 技术细节：

1.页面分为3个模块：

a.顶栏：包含 logo 和一些按钮；

b.编辑区：包含一组按钮和一些表单;

c.预览区：展示 HTML，可切换模板;

2.实现更新简历功能：讲数据抽离出来，把 resume 的数据独立出来，专门供 ResumeEditor、ResumePreview 等他组件来使用；

3.显现预览，当点击预览时，把编辑和顶栏隐藏；




