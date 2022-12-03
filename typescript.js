/**
 * AlloyTeam ESLint 规则
 * https://alloyteam.github.io/eslint-config-alloy/
 *
 * 贡献者：
 *   xcatliu <xcatliu@gmail.com>
 *
 *
 * 依赖版本：
 *   eslint ^8.24.0
 *   @babel/core ^7.19.1
 *   @babel/eslint-parser ^7.19.1
 *   @babel/preset-react ^7.18.6
 *   eslint-plugin-react ^7.31.8
 *   vue-eslint-parser ^9.1.0
 *   eslint-plugin-vue ^9.5.1
 *   @typescript-eslint/parser ^5.38.1
 *   @typescript-eslint/eslint-plugin ^5.38.1
 *
 * 此文件是由脚本 scripts/build.ts 自动生成
 */
module.exports = {
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	rules: {
		"no-dupe-class-members": "off",
		"no-empty-function": "off",
		// https://github.com/typescript-eslint/typescript-eslint/issues/491
		"no-invalid-this": "off",
		"no-magic-numbers": "off",
		"no-unused-vars": "off",
		"react/sort-comp": "off",
	},
};
