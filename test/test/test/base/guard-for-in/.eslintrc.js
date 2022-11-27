module.exports = {
    rules: {
        /**
         * for in 内部可以不使用 hasOwnProperty，有时候确实会需要遍历到对象继承过来的属性
         */
        'guard-for-in': 'off'
    }
};
