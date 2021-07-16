module.exports = function muBabelPlugin(){
    return {
        visitor : {
            // Identifier (path) {
            //     const name = path.node.name;

            //     console.log("Identifier() : ", name);
            //     // 변환작업 : 코드 문자열을 역순으로 변환한다. 
            //     path.node.name = name
            //       .split("")
            //       .reverse()
            //       .join("");
            //     /**
            //      * 현재는 지금 변환작업은 아무것도 하지 않고 콘솔만 출력
            //      * 
            //      * 
            //      * 
            //      */
            // }
            VariableDeclaration(path){
                console.log(path.node.kind);

                if(path.node.kind === "const"){
                    path.node.kind = 'var';
                }
            }
        }
    }
}