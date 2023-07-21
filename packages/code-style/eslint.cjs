const { existsSync } = require('fs')
const { resolve } = require('path')
const { cwd } = require('process')

const baseConfig = {
	extends: ['eslint:recommended'],
	plugins: ['prettier', 'import'],
	parserOptions: {
		ecmaVersion: 'latest'
	},
	env: {
		node: true,
		browser: true,
		es2024: true
	},
	overrides: []
}

const isTurbo = existsSync(resolve(cwd(), 'turbo.json'))
if (isTurbo) baseConfig.extends.push('turbo')

const isTypescript = existsSync(resolve(cwd(), 'tsconfig.json'))
if (isTypescript) {
	baseConfig.overrides.push({
		files: ['*.ts', '*.tsx'],
		extends: [
			'plugin:@typescript-eslint/recommended',
			'plugin:@typescript-eslint/stylistic'
		],
		plugins: ['@typescript-eslint'],
		parser: '@typescript-eslint/parser'
	})
}

const isNext = existsSync(resolve(cwd(), 'next.config.js'))
if (isNext) baseConfig.extends.push('next')

baseConfig.extends.push('plugin:import/recommended', 'prettier')

module.exports = { ...baseConfig }
