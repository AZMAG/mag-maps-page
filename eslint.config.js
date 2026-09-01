import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import checkFile from "eslint-plugin-check-file";
import prettierConfig from "eslint-config-prettier";

export default [
    {
        ignores: ["dist/**", "node_modules/**"],
    },
    js.configs.recommended,
    {
        files: ["**/*.{js,jsx}"],
        plugins: {
            react,
            "react-hooks": reactHooks,
        },
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
            globals: {
                window: "readonly",
                document: "readonly",
                console: "readonly",
                process: "readonly",
                import: "readonly",
            },
        },
        settings: {
            react: { version: "detect" },
        },
        rules: {
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
        },
    },
    {
        files: ["src/**/*.{js,jsx}"],
        ignores: ["src/main.jsx"],
        plugins: {
            "check-file": checkFile,
        },
        rules: {
            "check-file/filename-naming-convention": [
                "error",
                {
                    // component files export a PascalCase component, matching the filename
                    "**/*.jsx": "PASCAL_CASE",
                    // non-component files (utils, config, hooks, constants) use camelCase
                    "**/*.js": "CAMEL_CASE",
                },
                {
                    ignoreMiddleExtensions: true,
                },
            ],
            "check-file/folder-naming-convention": [
                "error",
                {
                    "src/**/!(__tests__)": "KEBAB_CASE",
                },
            ],
        },
    },
    prettierConfig,
];
