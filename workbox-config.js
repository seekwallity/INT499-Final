module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{js,css,jsx,svg}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};