/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-01 21:34:48
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-02 09:49:52
 */
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ["plugin:react/recommended", "standard", "plugin:prettier/recommended"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
    },
    plugins: ["react", "prettier"],
    rules: {
        "prettier/prettier": ["error", { endOfLine: "auto" }],
        // suppress errors for missing 'import React' in files
        "react/react-in-jsx-scope": "off",
        // allow jsx syntax in js files (for next.js project)
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }], // should add ".ts" if typescript project
    },
}
