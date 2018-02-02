---
title: Webpack学习
date: 2017-04-04 16:26:57
tags: Tools
---

## 前言
初学前端时还未意识到前端需要打包工具，甚么对打包这个动词都不明觉厉，不过我也算赶上了前端快速发展这个大浪潮，跟随学习了很多前端最新的东西，webpack便是其中之一
 
### 介绍
webpack在前端的定位是工具类，再考究点为打包工具，等等，先来说说目前我所听过的前端工具包吧，yeoman、browserify、bower、grunt、glup、r.js、webpack等，这仅是其中一部分，顺手查了对这些玩意有更恰当的名词，自动化工具，其分类也是很多，再此也不做过多描述

其实我也只是用过webpack，其他一些还没怎么用过就过时了，对于webpack个人觉得有上手起来点难度，用其他人来说是反人类？哈哈，有点过了，不过虽然目前仅对其理解了一点，但感受是这玩意确实好用

## 正文

### webpack配置
对于记录学习webpack还真没什么好写的，不如写个实现方式上代码来

首先说下webpack的机制，其实是将入口文件作为开始然后对其分析生成一颗树状依赖，加载分析入口文件的依赖及其依赖的依赖，直至加载所有相关依赖，加载时会对依赖文件调用配置里写的加载器去加载解析，还有很多实现细节也是根据所写配置去分析打包，最后打包的文件实为用匿名函数包起来的一个函数，通过传参来解决输入输出项

所以对于学习webpack，不深究的话也不过如同css一样去写配置项而已
对于最佳直观理解还是直接上代码
```
var webpack = reuqire('Webpack');
var path = require('path');

// 独立打包样式文件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// 生成HTML的插件
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    // 输入文件，支持字符串，对象，数组形式
    // 数组形式将加载数组中的所有模块，但以最后一个模块作为输出
    // ['webpack-dev-server/client?http://localhost:8080/', './index.js'],
    entry: {
        main: './main.js',
        // 添加要打包在vendors里面的库
        vendors: ['vue'],
        // 非入口文件的命名规则，如按需加载(异步)模块的时候，这样的文件是没有被列在entry中
        chunkFilename: '[name].chunk.js',
    },
    // 对应输出项配置，即入口文件最终要生成什么名字的文件、存放到哪里
    output: {
        // 打包后的文件存放的路径
        path: path.join(__dirname, './dist'),
        // 每个页面对应的主js的生成配置，以入口文件的名字作为输出名[name]
        filename: '[name].js',
        // 静态资源发布后的前缀地址，模板、样式、脚本、图片等资源对应的server上的路径
        publicPath: '/dist/'
    },
    devtool: 'eval-source-map',
    // 初始用对应的加载器加工代码，加载器来告诉webpack对应文件都需要如何处理
    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel?presets=es2015',
                exclude: /node_modules/
            },{
                test: /\.css$/,
                loader: 'style!css!postcss?modules'
                // 查询参数modules，表示打开CSS Modules功能
                // ?modules&localIdentName=[path][name]---[local]---[hash:base64:5]"
            },{
                test: /\.(png|jpg|gif)$/,
                // 小于8kb的图片转成base64码
                loader: 'url-loader?limit=8192&name=./img/.[ext]'
            },{
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!less?sourceMap'),
                // 生成唯一类名
                loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
            },
            // "-loader"可以省略不写的，多个loader之间用“!”连接起来
            // 多个loaders的处理顺序是从右到左执行处理的，前一个的输出是后一个的输入
            // {
            //     test: /\.css$/,
            //     loaders: ['style', 'css'],
            //     include: APP_PATH
            // }
        ]
    },
    resolve: {
        // 绝对路径，查找module的话从这里开始查找
        root: 'E:/github/flux-example/src',
        // 自动扩展文件后缀名，require模块可以省略不写后缀名
        extensions: ['', '.js', '.json','.vue', '.scss', 'less'],
        // 模块别名定义，方便后续直接引用别名，无须多写长长的地址
        // 后续直接 require('AppStore') 即可
        alias: {
            // Vue v2.x之后NPM Package安装的vue为runtime-only版本，若要使用standalone功能则需下列设置
            vue: 'vue/dist/vue.js',
            components: path.join(__dirname, './src/components')
        }
    },
    // 插件处理层
    plugins: [
        // 单独使用link标签加载[name].css并设置路径，相对于output配置中的publickPath
        new ExtractTextPlugin("[name].css", {
            allChunks: true,
            disable: false
        }),
        //这个使用uglifyJs压缩你的js代码
        new webpack.optimize.UglifyJsPlugin({
            // minimize: true
            //排除关键字
            except: ['$super', '$', 'exports', 'require']
        }),
        // 把入口文件里面的数组打包成verdors.js
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        // HtmlWebpackPlugin，模板生成相关的配置，每个对于一个页面的配置，有几个写几个
        new HtmlwebpackPlugin({
            title: 'My name',                 // 设置网页title
            favicon: './favicon.ico',         // 网页图标设置
            filename: 'index.html',           // 生成网页的路径，相对于path
            template: './src/index.html',     // 生成网页模版路径
            // 把所有产出文件注入到给定的 template 或templateContent。当传入 true或者 ‘body’时所有javascript资源将被放置在body元素的底部，“head”则会放在head元素内。
            inject: true,                     // 允许插件修改哪些内容
            chunks: ['main', 'vendors'],      // 引用的js文件，入口文件js
            hash: true,                       // 为静态资源生成hash值
            minify: {// 压缩HTML文件
                removeComments: true,         // 移除HTML中的注释
                collapseWhitespace: true      // 删除空白符与换行符
            }
        }),
        // 使用ProvidePlugin加载使用频率高的模块设置为全局模块
        new webpack.ProvidePlugin({
            $: 'jquery',
            // $: "webpack-zepto",
        }),
        // 接收字符串插入到代码当中，所以你需要的话可以写上JS的字符串
        // 可以直接在代码中使用配置的标识
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        // 热加载
        new webpack.HotModuleReplacementPlugin()
    ],
    resolveLoader: {
        root: path.join(__dirname, 'node_modules'),
    },
    // vue配置项
    vue: {
        autoprefixer: {
            browsers: ['last 3 versions', '> 1%', 'ie_mob 11']
        },
        loaders: {
            // css: 'style!css!autoprefixer',
            css: ExtractTextPlugin.extract("vue-style!css"),
            less: ExtractTextPlugin.extract("vue-style!css!less"),
            // less: ExtractTextPlugin.extract('style-loader', 'css!autoprefixer!less'),
            js: 'babel'
        }
    },
    // babel配置项
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    // postcss配置
    postcss: [
        values
        // 需要安装postcss-modules-values
    ]
    // 使用webpack-dev-server，提高开发效率
    devServer: {
        // 本地服务器所加载的页面所在的目录，默认根文件夹提供本地服务器
        contentBase: "./dist",
        // 单页应用时有用，依赖HTML5historyAPI，为true时所有的跳转将指向index.html
        historyApiFallback: true,
        // 静态资源的地址，index.html和打包文件不在同一目录可设置
        publicPath: "/dist/",
        // 设置host
        host: '0.0.0.0',
        // 热替换模式，同需要设置入口及其他
        hot: false,
        // 当源文件改变时是否自动刷新页面，可以通过命令行启动更方便
        inline: true,
        // 设置默认监听端口，默认为”8080“
        port: 9090,
        //终端中输出结果为彩色
        stats: { colors: true },
        // 显示编译进度，不能写在配置中需要在命令行下启动
        --progress: true,
        // 使用gzip压缩
        compress: true,
        // 在默认浏览器中打开
        open: true,
        // 默认打开的页面，即路由
        openPage: '/different/page'
    }
};

```

### webpack参数
- webpack                                   
    最基本的启动webpack命令，执行一次开发时的编译
- 配置选项
    + --config XXX.js
        配置文件的路径
        字符串，默认值：webpack.config.js或webpackfile.js
    + --env
        传递环境配置
- 基本选项
    + --context
        用于解析入口点和统计信息的根目录
        字符串，默认值：当前目录
    + --entry
        入口文件
        字符串
    + --watch，-w
        监听文件变动自动打包
    + --debug
        打开调试模式
    + --devtool
        配置devtool
        字符串
    + -d
        快捷方式
        --debug --devtool eval-cheap-module-source-map --output-pathinfo
    + -p 
        快捷方式
        --optimize-minimize --define process.env.NODE_ENV =“production”
    + --progress
        百分比打印编译进度
- 其他选项
    + --color，--colors
        显示静态资源的颜色，如会用红色显示耗时较长的步骤
                                 
### devtool配置
- source-map
> 在一个单独的文件中产生一个完整且功能完全的文件。这个文件具有最好的SourceMap，但是它会减慢打包文件的构建速度

- cheap-module-source-map
> 在一个单独的文件中生成一个不带列映射的map，不带列映射提高项目构建速度，但是也使得浏览器开发者工具只能对应到具体的行，不能对应到具体的列（符号），会对调试造成不便

- eval-source-map
> 使用eval打包源文件模块，在同一个文件中生成干净的完整的SourceMap，这个选项可以在不影响构建速度的前提下生成完整的SourceMap，但是对打包后输出的JS文件的执行具有性能和安全的隐患。不过在开发阶段这是一个非常好的选项，但是在生产阶段一定不要用这个选项

- cheap-module-eval-source-map
> 这是在打包文件时最快的生成SourceMap的方法，生成的SourceMap会和打包后的JavaScript文件同行显示，没有列映射，和eval-source-map选项具有相似的缺点

### loaders配置
- test 
    一个匹配loaders所处理的文件的拓展名的正则表达式（必须）
- loader/use
    loader的名称(必须)，use可以写成数组形式
    "-loader"可以省略不写的，多个loader之间用“!”连接起来
- include
    手动添加必须处理的文件(文件夹)(可选)
- exclude
    或屏蔽不需要处理的文件(文件夹)(可选)
- query
    为loaders提供额外的设置选项(可选)可用?代替

- loader主要有3种使用方式：
    1. 在页面里面引用资源使用
        `require("url-loader?mimetype=image/png!./file.png");`
    2. 在webpack.config.js文件夹中使用
        `{ test: /.png$/, loader: "url?mimetype=image/png" };`
    3. 在命令行中编译使用
        `webpack --module-bind "png=url-loader?mimetype=image/png";`

### plugins配置
- webpack自带的插件
    + webpack.ProvidePlugin
    + webpack.optimize.CommonsChunkPlugin
    + webpack.optimize.UglifyJsPlugin
    + webpack.optimize.DedupePlugin
    + webpack.NoErrorsPlugin
    + webpack.DefinePlugin
    + webpack.DllPlugin
    + webpack.DllReferencePlugin
    + webpack.BundleAnalyzerPlugin
- 通过npm安装的 
    + extract-text-webpack-plugin
    + webpack-visualizer-plugin
    + webpack-bundle-analyzer
    + html-webpack-plugin
    + copy-webpack-plugin
    + happyPack

#### CommonsChunkPlugin
用于提取多个入口文件的公共脚本部分，然后生成一个common.js来方便多页面之间进行复用
```
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
    entry: {
        p1: "./page1",
        p2: "./page2",
        p3: "./page3",
        ap1: "./admin/page1",
        ap2: "./admin/page2"
    },
    output: {
        filename: "[name].js"
    },
    plugins: [
        new CommonsChunkPlugin("admin-commons.js", ["ap1", "ap2"]),
        new CommonsChunkPlugin("commons.js", ["p1", "p2", "admin-commons.js"])
    ]
};

// <scripts> required:
// page1.html: commons.js, p1.js
// page2.html: commons.js, p2.js
// page3.html: p3.js
// admin-page1.html: commons.js, admin-commons.js, ap1.js
// admin-page2.html: commons.js, admin-commons.js, ap2.js

// p1.js,p2.js,p3.js,ap1.js,ap2.js,admin-commons.js(admin-commons.js),commons.js(commons.js + runtime)

```

### webpack-dev-server配置
两种模式自动刷新

1. iframe模式和inline模式
    - iframe模式 
        页面嵌套在一个iframe下的，在代码发生改动的时候，这个iframe会重新加载
        使用iframe模式无需额外的配置，只需在浏览器输入对应地址即可
        如：http://localhost:8080/webpack-dev-server/index.html
    - inline模式
        一个小型的webpack-dev-server客户端作为入口文件打包，这个客户端会在后端代码改变的时候刷新页面
        使用inline模式有两种方式
        + 命令行方式
            只需加入--line选项即可，如：webpack-dev-server --inline
            使用--inline选项会自动把webpack-dev-server客户端加到webpack的入口文件配置中
            使用webpack-dev-server命令行的时候，会自动查找名为webpack.config.js的配置文件
        + Node.js API
            需要手动把webpack-dev-server/client?http://localhost:8080 加到配置文件的入口文件配置处，因为webpack-dev-server没有inline:true这个配置项

2. webpac-dev-server支持HotModuleReplacement即模块热替换，会在前端代码变动的时候无需整个刷新页面，只把变化的部分替换掉。
    使用HMR功能也有两种方式
    - 命令行方式
        只需加入--line --hot选项，
        --hot这个选项干了一件事情，它把webpack/hot/dev-server入口点加入到了webpack配置文件中
        这时访问浏览器，你会看见控制台的log信息
        HMR前缀的信息由webpack/hot/dev-server模块产生
        WDS前缀的信息由webpack-dev-server客户端产生
    - Node.js API
        在webpack.config.js的entry选项中添加:webpack/hot/dev-server
        在webpack.config.js的plugins选项中添加:new webpack.HotModuleReplacementPlugin()
        在webpack-dev-server的配置中添加：hot:true
    - 要使HMR功能生效，还需要做一件事情，就是要在应用热替换的模块或者根模块里面加入允许热替换的代码。否则，热替换不会生效，还是会重刷整个页面

#### 相关代码
```
// Node.js API代码
// 引入相应模块
var webpack = require('webpack');
var config = require('./webpack.config.js');
var WebpackDevServer = require('webpack-dev-server');

// 配置代码自动编译和热替换插件
config.entry.unshift('webpack-dev-server/client?http://localhost:9090', "webpack/hot/dev-server");
config.plugins.push(new webpack.HotModuleReplacementPlugin());

// 这里配置：请求http://localhost:9090/index.php
// 相当于通过本地node服务代理请求到了http://testapi.uhouzz.com/index.php
var proxy = [{
    path: "/index.php/*",
    target: "http://pc.uhouzz.com",
    host: "pc.uhouzz.com"
}]

//启动服务
var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    // contentBase: 'dist/',
    hot: true,
    historyApiFallback: true,
    proxy: proxy
});
server.listen(9090);

```


## 参考资料
https://segmentfault.com/q/1010000009070061/a-1020000009073036
http://www.jianshu.com/p/2b81262898a4
http://foio.github.io/wepack-code-spliting/

### React+Webpack
https://segmentfault.com/a/1190000007373555
