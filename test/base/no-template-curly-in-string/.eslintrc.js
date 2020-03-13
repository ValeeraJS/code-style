module.exports = {
    rules: {
        /**
         * 禁止在普通字符串中出现模版字符串里的变量形式
         * @reason 在语法高亮的情况下一眼就能知道是不是模板字符串。而且确实有情况文本本身内容就带${}
         */
        'no-template-curly-in-string': 'off'
    }
};
