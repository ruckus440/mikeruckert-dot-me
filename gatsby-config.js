module.exports = {
	siteMetadata: {
		title: 'mikeruckert.me',
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: 'UA-197488206-1',
			},
		},
		'gatsby-plugin-react-helmet',

		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `mikeruckert-dot-me`,
				short_name: `mikeruckert`,
				start_url: `/`,
				background_color: `#6b37bf`,
				theme_color: `#6b37bf`,
				// Enables "Add to Homescreen" prompt and disables browser UI (including back button)
				// see https://developers.google.com/web/fundamentals/web-app-manifest/#display
				display: `standalone`,

				icon: `src/images/bluer.png`,
			},
		},
	],
};