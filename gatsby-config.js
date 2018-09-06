module.exports = {
	plugins: [
		// Build plugins
		{
			resolve: `gatsby-plugin-emotion`,
			options: {
				hoist: true,
				sourceMap: true,
			},
		},

		{
			resolve: `dist`,
			options: {
				fonts: [
					{
						family: `Oswald`,
						subsets: [ `latin` ],
					},
					{
						family: `Open Sans`,
						subsets: [ `latin` ],
					},
				],
			},
		},
	],
}
