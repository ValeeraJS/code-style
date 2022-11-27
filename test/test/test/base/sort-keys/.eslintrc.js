module.exports = {
    rules: {
        /**
         * 对象字面量的键名必须排好序
         * @reason 有利于寻找ey
         */
        'sort-keys': ["error", "asc", {"caseSensitive": true, "natural": false}]
    }
};
