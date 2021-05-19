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
	],
};
