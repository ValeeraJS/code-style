module.exports = {
    rules: {
        /**
         * 使用 includes 而不是 indexOf
         * @reason includes比indexOf有更好的语义，并且不容易出bug
         */
        '@typescript-eslint/prefer-includes': 'off'
    }
};
