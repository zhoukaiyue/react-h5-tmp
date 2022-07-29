/*
 * @Author: zhoukaiyue 1301524439@qq.com
 * @Date: 2022-07-28 10:00:57
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-07-29 15:09:34
 * @FilePath: \react-h5\craco.config.js
 * @Description: 默认配置重置文件
 */
/* craco.config.js */

const path = require("path");
module.exports = {
  // webpack 配置
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // 设置项目的上下文目录
      // 设置静态资源公共路径
      webpackConfig.output.publicPath = "/";
      return webpackConfig;
    },
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      "@": path.resolve(__dirname, "src"),
    },
  },

  style: {
    postcss: {
      loaderOptions: () => {
        const obj = {
          postcssOptions: {
            ident: "postcss",
          },
        };
        return obj;
      },
    },
  },

  // 配置开发选项
  devServer: {
    hot: true,
    open: false,
    host: "0.0.0.0",
    port: 20000,
    // 代理接口
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
    // proxy: {
    //     "/proxy_url": {
    //         target: "",
    //         changeOrigin: true,
    //         secure: false,
    //         ws: true,
    //         pathRewrite: {
    //             "^/proxy_url": ""
    //         }
    //     }
    // }
  },
};
