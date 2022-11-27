module.exports = {
    rules: {
        /**
         * 导入必须按规则排序
         * @reason 在写库的时候会有大量API和引用。按照字母排序更容易找到相应API
         */
        'sort-imports': ["error", {
            "ignoreCase": true,
            "ignoreMemberSort": false,
            "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
        }]
    }
};
