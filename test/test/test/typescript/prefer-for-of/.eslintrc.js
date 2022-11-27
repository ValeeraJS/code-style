module.exports = {
    rules: {
        /**
         * 使用 for 循环遍历数组时，如果索引仅用于获取成员，则必须使用 for of 循环替代 for 循环
         * @reason 没必要，因为写数学库需要的是高性能优先。for语句比for-of语句执行效率更高。
         */
        '@typescript-eslint/prefer-for-of': 'off'
    }
};
