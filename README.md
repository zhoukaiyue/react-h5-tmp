<!--
 * @Descripttion: 项目描述文件
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-28 09:54:02
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-02 22:33:02
-->

# 简介

本工程是通过 create-react-app 创建并使用 antd-mobile 作为 UI 组件库。
另使用 craco（一个对 create-react-app 进行自定义配置的社区解决方案） 对 create-react-app 的默认配置进行自定义设置。

# 环境要求

-   node 14.17.6
-   create-react-app 5.0

# 项目目录说明

```
react-h5-tmp
├─ .env.development            // 开发环境配置文件
├─ .env.production             // 生产环境配置文件
├─ .env.test                   // 测试环境配置文件
├─ .eslintignore               //
├─ .eslintrc.js                // ESlint配置文件
├─ .prettierrc.js              // prettier配置文件
├─ craco.config.js             // craco配置文件
├─ package-lock.json           //
├─ package.json                //
├─ postcss.config.js           //
├─ public                      //
│  ├─ favicon.ico              //
│  └─ index.html               //
└─ src                         //
   ├─ assets                   //
   │  ├─ css                   //
   │  │  ├─ index.scss         //
   │  │  └─ utils              //
   │  │     └─ @util.scss      //
   │  ├─ img                   //
   │  │  └─ base               //
   │  │     └─ empty.png       //
   │  └─ js                    //
   ├─ config                   //
   │  ├─ apis                  //
   │  └─ router                //
   │     ├─ dev.js             //
   │     └─ index.js           //
   ├─ index.js                 //
   ├─ layout                   //
   │  ├─ frame-view            //
   │  │  ├─ index.js           //
   │  │  └─ index.scss         //
   │  └─ tabbar                //
   │     └─ index.js           //
   ├─ packages                 //
   │  ├─ request               //
   │  │  ├─ index.js           //
   │  │  └─ loading            //
   │  │     └─ index.js        //
   │  └─ router                //
   │     ├─ index.js           //
   │     └─ router404.js       //
   ├─ reportWebVitals.js       //
   ├─ resources                //
   ├─ utils                    //
   │  ├─ helper                //
   │  └─ tools                 //
   │     ├─ deep-clone         //
   │     └─ get-realpx         //
   │        └─ index.js        //
   └─ views                    //
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
