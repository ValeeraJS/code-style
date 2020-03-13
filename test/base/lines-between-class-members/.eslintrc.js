module.exports = {
    rules: {
        /**
         * 类的成员函数之间是否需要空行，但是属性之间可以不需要。通常属性都是在一行。而函数是多行
         * @reason 为了可读性需要空一行
         */
        'lines-between-class-members': ['error', 'always', {
            exceptAfterSingleLine: true
        }]
    }
};
