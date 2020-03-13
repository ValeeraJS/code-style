module.exports = {
    rules: {
        /**
         * <button> 必须有 type 属性
         * @reason button问题只出在form内如果没有type就会触发submit操作。但是现在几乎不会使用表单，增加这个限制反而正常代码写起来很繁琐。
         */
        'react/button-has-type': 'off'
    }
};
