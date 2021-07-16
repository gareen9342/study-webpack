const path = require("path");
const MyWebpackPlugin = require("./my-webpack-plugin");
module.exports = {
    mode : "development",
    entry : {
        main : "./src/app.js" // 상대경로로 해야함.... 
    },
    output : {
        path : path.resolve("./dist"),// resolve는 절대경로를 지정해주는 함수
        filename : "[name].js"
    },
    module : {
        rules : [
            {
                test:/\.js$/,//모든 js 파일에 대해서 
                use : [
                    path.resolve("./my-webpack-loader.js") // 해당 로더를 동작 시킬 것이다 
                ],
            },
            {
                test : /\.css$/,
                use : [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test : /\.(png|jpg|gif|svg)$/,
                loader : 'url-loader',
                options : {
                    publicPath:"./dist/", // 파일로더가 사용하는 경로, 호출하는 쪽에서는 앞에 해당 단어를 붙이고 호출하게 될 것이다. 
                    name: "[name].[ext]?[hash]",//캐시 무력화를 위해 물음표를 하고 달라지는 해시값을 입력하였다.
                    limit: 20000, // 2kb
                }
            }
        ]
    },
    plugins : [
        new MyWebpackPlugin()
    ]
}