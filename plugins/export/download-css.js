const fs = require('fs')
const path = require('path')
const GoogleFontsWebpackPlugin = require(`google-fonts-plugin`)
const mkdirp = require('mkdirp')

const outputDir = `.cache/google-fonts`

module.exports = async ({
	fonts,
	formats = [
		//`eot`,
		`woff2`,
		`woff`,
		//`ttf`,
		//`svg`,
	],
}) => {
	const googleFontsPlugin = new GoogleFontsWebpackPlugin({
		fonts,
		formats,
		encode: false,
		minify: false,
		verbose: true,
	})

	mkdirp.sync(outputDir)

	for (const format of Object.values(googleFontsPlugin.options.formats)) {
		let css = await this.requestFontsCSS(format);
		fs.writeFileSync(path.join(outputDir, format + '.css'), css)
	}
}
