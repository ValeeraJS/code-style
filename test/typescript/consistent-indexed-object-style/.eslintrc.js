module.exports = {
  rules: {
    /**
     * 必须使用内置的 Record<K, T> 来描述仅包含可索引成员的接口
     * @reason 没必要
     */
    '@typescript-eslint/consistent-indexed-object-style': 'off',
  },
};
