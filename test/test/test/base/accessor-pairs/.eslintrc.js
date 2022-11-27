module.exports = {
    rules: {
        /**
         * setter 可以没有对应的 getter，类似于Go的只写变量。
         * getter 可以没有对应的 setter
         */
        'accessor-pairs': [
            'error',
            {
                setWithoutGet: false,
                getWithoutSet: false
            }
        ]
    }
};
