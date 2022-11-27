module.exports = {
    rules: {
        /**
         * 导出的函数或类中的 public 方法必须定义输入输出参数的类型
         * @reason 对于一个复杂函数或者返回不同类型的函数来说，可以更容易知道函数的返回类型而不需要看完整的代码。
         */
        '@typescript-eslint/explicit-module-boundary-types': 'error'
    }
};
