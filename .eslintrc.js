module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "semi": 2,
        "@typescript-eslint/explicit-member-accessibility": 2,
        "@typescript-eslint/no-explicit-any": 2,
        "@typescript-eslint/no-unused-vars": 2,
        "@typescript-eslint/interface-name-prefix": 0,
    }
};