const path = require("path");//이 노드 모듈이 있어야 한다. 

module.exports = {
    mode: "development",
    entry: {
        main :"./src/app.js"
        // main2 :"./src/app2.js", 이렇게 두 개를 쓸 수도 있다. 
    },
    output: {
        path : path.resolve("./dist"), // output 경로
        filename: "[name].js"// 번들링된 파일의 이름 
    }
}