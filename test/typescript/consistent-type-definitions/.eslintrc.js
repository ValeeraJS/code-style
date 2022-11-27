module.exports = {
    rules: {
        /**
         * 优先使用 interface 而不是 type
         * @reason 认为interface优先使用在oo场景和细节描述。type优先使用在整体描述而非细节。
         */
        '@typescript-eslint/consistent-type-definitions': ['off', 'interface']
    }
};
