import tailwind from 'prettier-plugin-tailwindcss'

export default {
	plugins: [tailwind],
	arrowParens: 'avoid',
	bracketSameLine: false,
	bracketSpacing: true,
	semi: false,
	singleQuote: true,
	jsxSingleQuote: false,
	quoteProps: 'as-needed',
	trailingComma: 'none',
	singleAttributePerLine: true,
	htmlWhitespaceSensitivity: 'css',
	vueIndentScriptAndStyle: false,
	proseWrap: 'preserve',
	insertPragma: false,
	printWidth: 80,
	requirePragma: false,
	tabWidth: 4,
	useTabs: true,
	embeddedLanguageFormatting: 'auto'
}
