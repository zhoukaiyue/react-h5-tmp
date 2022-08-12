<!--
 * @Descripttion: 项目描述文件
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-28 09:54:02
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-12 17:21:26
-->

# 简介

react-h5-tmp 是基于 create-react-app(v5) 创建并使用 antd-mobile 作为 UI 组件库的一个移动端脚手架，开箱即用。
另使用 craco（一个对 create-react-app 进行自定义配置的社区解决方案） 对 create-react-app 的默认配置进行自定义设置。

## 环境要求

-   node 14+

## 编辑器以及对应扩展

-   Visual Studio 69+
-   Vetur v0.35.0
-   Eslint v2.2.6
-   Prettier - Code formatter v9.5.0

## 快速开发

```
#安装项目依赖
npm install
#开发环境启动
npm run start
#打包 test 环境代码
npm run build:test
#打包生产环境代码
npm run build or npm run build:prod
#执行 js 类型检查
npm run lint:fix
#执行 prettier 批量格式化代码
npm run lint:prettier

##注：详细请阅读package.json 以及对应的配置文件！
```

## 开发规范

### 基础组件名。 【注：src/components 目录。】

> 应该全部以一个特定的前缀 Base 开头。

```
例子：
src
└─ resources
   └─ components
      |- BaseButton.vue
      |- BaseTable.vue
      |- BaseIcon.vue
```

### 业务组件名。 【注：src/views/components 目录。】

> 应该全部以一个特定的前缀 The 开头。

```
例子：
src
└─ views
   └─ components
      |- TheButton.vue
      |- TheTable.vue
      |- TheIcon.vue
```

### 路由文件创建与命名。 【注：src/config/router 目录。】

为了方便维护与开发，建议路由文件命名与对应的页面文件命名保持一致，尽量简洁明了。

```
例子：
src
└─ config
   └─ router
      |- index.js
      |- dev.js
      |- home.js
```

### 接口文件创建与命名。 【注：src/config/apis 目录。】

为了方便维护与开发，建议接口文件命名与对应的页面文件命名保持一致，尽量简洁明了。

```
例子：
src
└─ config
   └─ apis
      |- index.js
      |- home.js
```

### 状态切片文件创建与命名。 【注：src/config/store 目录。】

为了方便维护与开发，建议以当前对应模块或者功能命名文件夹，尽量简洁明了。

```
例子：
src
└─ config
   └─ store
      └─ dev
         |- index.js
      └─ home
         |- index.js
```

### 图片资源。 【注：src/assets/img 目录。】

建议图片文件夹命名与对应的页面文件命名保持一致，公共图片资源放置到 src/assets/img/base 目录下即可。

```
例子：
src
└─ assets
   └─ img
      |- index
      |- dev
      |- base
```

## 项目目录说明

```
react-h5-tmp
├─ .env.development            // 开发环境配置文件
├─ .env.production             // 生产环境配置文件
├─ .env.test                   // 灰度 or 测试 or or uat环境配置文件
├─ .eslintignore               //
├─ .eslintrc.js                // ESlint配置文件
├─ .prettierrc.js              // prettier配置文件
├─ craco.config.js             // 构建脚本（webpack配置）
├─ package-lock.json           //
├─ package.json                // 项目描述文件
├─ postcss.config.js           //
├─ public                      //
│  ├─ favicon.ico              //
│  └─ index.html               //
└─ src                         // 源码目录
   ├─ assets                   // 静态资源
   │  ├─ css                   // css
   │  │  ├─ index.scss         //
   │  │  └─ utils              //
   │  │     └─ @util.scss      //
   │  ├─ img                   // img
   │  │  └─ base               //
   │  │     └─ empty.png       //
   │  └─ js                    // js
   ├─ config                   // 项目配套的第三方包配置
   │  ├─ apis                  // 业务模块接口配置
   │  └─ router                // 业务模块router配置
   │     ├─ dev.js             //
   │     └─ index.js           //
   ├─ index.js                 // 入口js文件
   ├─ layout                   // 布局组件
   │  ├─ frame-view            //
   │  │  ├─ index.js           //
   │  │  └─ index.scss         //
   │  └─ tabbar                //
   │     └─ index.js           //
   ├─ packages                 // 项目配套的第三方包
   │  ├─ request               // axios
   │  │  ├─ index.js           //
   │  │  └─ loading            //
   │  │     └─ index.js        //
   │  └─ router                // router
   │     ├─ index.js           //
   │     └─ router404.js       //
   ├─ reportWebVitals.js       //
   ├─ resources                // 全局基础资源如基础组件、全局插件等
   │  ├─ components            // 基础组件
   │  │  ├─ base-list          //
   │  │  │  ├─ index.vue       //
   │  │  │  └─ README.md       //
   │  │  └─ tab                //
   │  └─ plugin                // 全局插件
   ├─ utils                    // 工具类
   │  ├─ helper                // 帮助类
   │  └─ tools                 // 其他工具类
   │     ├─ deep-clone         //
   │     └─ get-realpx         //
   │        └─ index.js        //
   └─ views                    //  页面级资源
      ├─ app                   //
      │  └─ App.js             //
      ├─ dev                   //
      │  ├─ components         //
      │  │  ├─ layOut          //
      │  │  │  └─ index.js     //
      │  │  └─ list            //
      │  └─ index.js           //
      ├─ err404                //
      │  ├─ index.js           //
      │  └─ index.scss         //
      └─ index                 //
         ├─ index.js           //
         └─ index.scss         //

```
