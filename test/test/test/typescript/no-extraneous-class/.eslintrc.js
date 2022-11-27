module.exports = {
    rules: {
        /**
         * 禁止定义没必要的类。
         * @reason 只有静态方法的类完全可以用json表示。空的类也没有意义。但是允许被装饰器修饰的类以及写构造函数进行相关操作的类。
         */
        '@typescript-eslint/no-extraneous-class': ['error', {
            allowConstructorOnly: true,
            allowEmpty: false,
            allowStaticOnly: false,
            allowWithDecorator: true,
        }]
    }
};
