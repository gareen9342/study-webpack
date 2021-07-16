class MyWebpackPlugin {
    // apply (compiler){
    //     compiler.hooks.done.tap('My Plogin', stats => {
    //         console.log("My Plugin : done");
    //     });
    // }
    apply(compiler) {
        compiler.plugin("emit", (compilation, callback) => {
            const source = compilation.assets['main.js'].source();

            compilation.assets['main.js'].source = () => {
                const banner = "/** 이것은 Banner Plugin이 처리한 결과입니다. \n\n*/";
                return banner + "\n\n" + source;
            }
            console.log(source);
            callback();
        });
    }
}

module.exports = MyWebpackPlugin;