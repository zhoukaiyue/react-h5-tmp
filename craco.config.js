/*
 * @Author: zhoukaiyue 1301524439@qq.com
 * @Date: 2022-07-28 10:00:57
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-01 17:55:10
 * @FilePath: \react-h5\craco.config.js
 * @Description: 默认配置重置文件
 */

const path = require("path");

module.exports = {
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      "@": path.resolve(__dirname, "src"),
    },
    //配置cdn外部资源不打包
    externals: {},
    configure: (webpackConfig, { env, paths }) => {
      console.log("环境：\n", env, __dirname);

      //输出(output) 配置
      webpackConfig.output = {
        ...webpackConfig.output,
        publicPath: "/", // 设置静态资源公共路径
        assetModuleFilename: "static/img/[name].[hash:7][ext]", //静态资源
      };
      //开发环境开启source-map
      webpackConfig.devtool =
        env === "development" ? "cheap-module-source-map" : false;

      //分包
      if (env === "production") {
        webpackConfig.optimization.splitChunks = {
          ...webpackConfig.optimization.splitChunks,
          // 指明要分割的插件类型, async:异步插件(动态导入),inital:同步插件,all：全部类型
          chunks: "all",
          // 入口文件加载时最大同时请求数不得超过30个
          maxInitialRequests: 30,
          // 异步加载代码时同时进行的最大请求数不得超过30个
          maxAsyncRequests: 30,
          // 文件最小大小,单位bite;即超过minSize有可能被分割；
          minSize: 2048,
          // webpack5新属性，防止0size的chunk
          minRemainingSize: 0,
          cacheGroups: {
            //reatc相关,都打包到vendors/react下面
            "vendors/react": {
              name: "vendors/react",
              test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|react-scripts)[\\/]/,
              priority: 10,
            },
            //组件库,都打包到vendors/ui下面
            "vendors/ui": {
              name: "vendors/ui",
              test: /[\\/]node_modules[\\/](vant|element-ui|antd-mobile|antd)[\\/]/,
              priority: 9,
            },
            // 默认缓存组 当一个文件被引入超过四次的时候 也分包成一个文件
            default: {
              name: "common",
              chunks: "initial",
              minChunks: 4,
              reuseExistingChunk: true,
            },
          },
        };
      }
      return webpackConfig;
    },
  },
  //postCss
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
  //代理设置
  devServer: {
    hot: true,
    open: false,
    host: "0.0.0.0",
    port: 20000,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
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
