import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
    // Base JS rules
    js.configs.recommended,

    // Vue 3 recommended (flat config)
    ...vue.configs['flat/recommended'],

    // Show Prettier issues as ESLint errors
    prettierRecommended,

    {
        files: ['**/*.{js,vue}'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
        },
        rules: {
            // Your custom rules here
            'vue/multi-word-component-names': 'off',
        },
    },
]
