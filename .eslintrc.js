/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-01 21:34:48
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-04 14:40:51
 */
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ['plugin:react/recommended', 'standard', 'plugin:prettier/recommended'],
    parserOptions: {
        // ecmaFeatures: {
        //     jsx: true
        // },
        // ecmaVersion: 'latest'
    },
    plugins: ['react', 'prettier'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
        'prettier/prettier': ['error', { singleQuote: true }]
    }
};
