module.exports = {
    rules: {
        /**
         * 限制语句之间的空行规则，比如变量定义完之后必须要空行
         * return还有定义变量之后需要空格。使代码更加清晰
         */
        'padding-line-between-statements': [
            "error",
            { blankLine: "always", prev: "*", next: "return" },
            { blankLine: "always", prev: ["const", "let", "var"], next: "*"},
            { blankLine: "any",    prev: ["const", "let", "var"], next: ["const", "let", "var"]}
        ]
    }
};
