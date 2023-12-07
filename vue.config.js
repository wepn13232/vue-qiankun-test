const { name } = require('./package');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    // 将构建好的文件输出到哪里
    outputDir: 'ApprOneThingH5',
    // 请求代理
    devServer: {
        port:8088,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    // 生产环境下的sourceMap
    productionSourceMap: false,
    lintOnSave: false, // 关闭eslint检查
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.externals({
                'vue': 'Vue',
                'vue-router': 'VueRouter'
            });
        } else {
            // 为开发环境修改配置...
        }
    },
    css: {
        loaderOptions: {}
    },
    // 全局less变量
    pluginOptions: {},
    configureWebpack: {
        output: {
            // 把子应用打包成 umd 库格式
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`,
        },
    },

};
