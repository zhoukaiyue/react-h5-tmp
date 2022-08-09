/*
 * @Author: zhoukaiyue 1301524439@qq.com
 * @Date: 2022-07-28 10:00:57
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-09 23:10:55
 * @FilePath: \react-h5\craco.config.js
 * @Description: 默认配置重置文件
 */

const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// 开发模式
const isEnvDevelopment = process.env.REACT_APP_MODE === 'development';
// 测试环境
// eslint-disable-next-line no-unused-vars
const isEnvTest = process.env.REACT_APP_MODE === 'test';
// 生产模式
const isEnvProduction = process.env.REACT_APP_MODE === 'production';
// Source maps are resource heavy and can cause out of memory issue for large source files.
const shouldUseSourceMap = process.env.REACT_APP_GENERATE_SOURCEMAP === 'true';

module.exports = {
    // webpack 配置
    webpack: {
        // 将 lint 错误输出为编译警告,并且输出到命令行，注意不会使得编译失败。
        lintOnSave: 'warning',
        // 配置别名
        alias: {
            // 约定：使用 @ 表示 src 文件所在路径
            '@': path.resolve(__dirname, 'src')
        },
        // 配置cdn外部资源不打包
        externals: {},
        // eslint-disable-next-line no-unused-vars
        configure: (webpackConfig, { env, paths }) => {
            // 开发环境开启 devtool，方便开发人员快速定位错误
            webpackConfig.devtool = shouldUseSourceMap
                ? 'source-map'
                : isEnvDevelopment
                ? 'cheap-module-source-map'
                : false;

            // 分包
            if (!isEnvDevelopment) {
                // webpack5 新属性
                // 不将注释提取到单独的文件中
                webpackConfig.optimization.minimize = true;
                webpackConfig.optimization.minimizer = [
                    new CssMinimizerPlugin(),
                    new TerserPlugin({
                        parallel: 6,
                        extractComments: false, // 不将注释提取到单独的文件中
                        terserOptions: {
                            ecma: undefined,
                            warnings: false,
                            parse: {},
                            format: {
                                comments: false
                            },
                            compress: {
                                drop_console: isEnvProduction, // 生产环境下移除控制台所有的内容
                                drop_debugger: false, // 移除断点
                                pure_funcs: isEnvProduction ? ['console.log'] : '' // 生产环境下移除console
                            }
                        }
                    })
                ];

                webpackConfig.optimization.splitChunks = {
                    ...webpackConfig.optimization.splitChunks,
                    // 指明要分割的插件类型, async:异步插件(动态导入),inital:同步插件,all：全部类型
                    chunks: 'all',
                    // 入口文件加载时最大同时请求数不得超过30个
                    maxInitialRequests: 30,
                    // 异步加载代码时同时进行的最大请求数不得超过30个
                    maxAsyncRequests: 30,
                    // 文件最小大小,单位bite;即超过minSize有可能被分割；
                    minSize: 2048,
                    // webpack5新属性，防止0size的chunk
                    minRemainingSize: 0,
                    cacheGroups: {
                        // reatc相关,都打包到vendors/react下面
                        'vendors/react-bucket': {
                            name: 'vendors/react-bucket',
                            test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|react-scripts)[\\/]/,
                            priority: 6
                        },
                        // 组件库,都打包到vendors/ui下面
                        'vendors/ui': {
                            name: 'vendors/ui',
                            test: /[\\/]node_modules[\\/](vant|element-ui|antd-mobile|antd)[\\/]/,
                            priority: 5
                        },
                        // 默认缓存组 当一个文件被引入超过四次的时候 也分包成一个文件
                        default: {
                            name: 'common',
                            chunks: 'initial',
                            minChunks: 2,
                            reuseExistingChunk: true
                        }
                    }
                };
            }
            return webpackConfig;
        }
    },
    // postCss
    style: {
        postcss: {
            loaderOptions: () => {
                const obj = {
                    postcssOptions: {
                        ident: 'postcss'
                    }
                };
                return obj;
            }
        }
    },

    // 配置开发选项
    // 代理设置
    devServer: {
        hot: true,
        open: false,
        host: '0.0.0.0',
        port: 20000,
        client: {
            overlay: {
                errors: true,
                warnings: false
            }
        },
        // 代理接口
        // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
        proxy: {
            '/proxy_url': {
                target: process.env.VUE_APP_PROXY_URL,
                changeOrigin: true,
                secure: false,
                ws: true,
                pathRewrite: {
                    '^/proxy_url': ''
                }
            }
        }
    }
};
