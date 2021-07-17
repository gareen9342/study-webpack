const path = require("path");
const webpack = require("webpack");
const childProcess = require("child_process"); // 노드의 명령어에 접근할 수 있다. 
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const mode = process.env.NODE_ENV || "development";
const apiMocker = require("connect-api-mocker");
module.exports = {
    mode : "development",
    entry : {
        main : "./app.js" // 상대경로로 해야함.... 
    },
    output : {
        path : path.resolve("./dist"),// resolve는 절대경로를 지정해주는 함수
        filename : "[name].js"
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [
                    mode === 'production' ? MiniCssExtractPlugin.loader 
                    : "style-loader",
                    "css-loader"
                ]
            },
            {
                test : /\.(png|jpg|gif|svg)$/,
                loader : 'url-loader',
                options : {
                    //publicPath:"./dist/", // 파일로더가 사용하는 경로, 호출하는 쪽에서는 앞에 해당 단어를 붙이고 호출하게 될 것이다. 
                    name: "[name].[ext]?[hash]",//캐시 무력화를 위해 물음표를 하고 달라지는 해시값을 입력하였다.
                    limit: 20000, // 2kb
                }
            },
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader : "babel-loader"
            }
        ]
    },
    plugins : [
        new webpack.BannerPlugin({
            banner : `
                Build Date : ${new Date().toLocaleString()}
                commit version : ${childProcess.execSync('git rev-parse --short HEAD')}
            `
        }),
        new webpack.DefinePlugin({}),
        new HtmlWebpackPlugin({
            template : "./src/index.html",
            templateParameters :{
                env : mode === "development" ? "dev" : "prod"
            },
            minify : mode === 'production' ? {
                collapseWhitespace : true,
                removeComments : true
            } : false
        }),
        new CleanWebpackPlugin(),
        ...(
            mode === 'production' ?
            new MiniCssExtractPlugin({filename:'[name].css'})
        : [])
    ],
    devServer : {
        overlay :true,
        stats : "errors-only",
        before : app => {
            app.use(apiMocker("/api", "mocks/api"))
        }
    }
}