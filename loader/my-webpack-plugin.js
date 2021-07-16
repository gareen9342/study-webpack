class MyWebpackPlugin {
    // apply (compiler){
    //     compiler.hooks.done.tap('My Plogin', stats => {
    //         console.log("My Plugin : done");
    //     });
    // }
    apply(compiler) {
        compiler.plugin("emit", (compilation, callback) => {
            const source = compilation['main.js'].source();
            console.log(source);

        });
        callback();
    }
}

module.exports = MyWebpackPlugin;