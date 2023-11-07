/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-01 21:34:48
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-12 17:34:18
 */
module.exports = {
    root: true,
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
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
        'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }]
    }
};
