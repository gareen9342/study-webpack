module.export= {
    // extends : [
    //     //https://eslint.org/docs/rules/
    //     "eslint:recommended" // 해당 옵션을 붙여서 추천하는 옵션을 적용시킨다. 
    // ]
    // rules : {
    //     "no-unexpected-multiline" : "error",
    //     "no-extra-semi" : "error"
    // }
    env: {
        browser: true,
        es6: true,
        node: true
      },
      extends: "eslint:recommended",
      globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
      },
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
      },
      plugins: ["prettier"], // prettier옵션 추가.
      rules: {
        "prettier/prettier": "error"
      }
}