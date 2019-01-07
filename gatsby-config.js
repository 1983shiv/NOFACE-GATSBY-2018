const config = require("./data/SiteConfig");
const urljoin = require("url-join");

module.exports = {
	pathPrefix: config.pathPrefix,
	siteMetadata: {
		siteUrl: `https://noface.co.uk`
	},
	plugins: [
		"gatsby-plugin-catch-links",
		"gatsby-plugin-lodash",
		"gatsby-plugin-offline",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sass",
		"gatsby-plugin-sharp",
		"gatsby-plugin-sitemap",
		"gatsby-plugin-styled-components",
		"gatsby-plugin-twitter",
		"gatsby-source-wordpress",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "assets",
				path: `${__dirname}/static/`
			}
		},
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					{
						resolve: "gatsby-remark-images",
						options: {
							maxWidth: 690
						}
					},
					{
						resolve: "gatsby-remark-responsive-iframe"
					},
					"gatsby-remark-autolink-headers",
					"gatsby-remark-copy-linked-files",
					"gatsby-remark-prismjs"
				]
			}
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: config.siteTitle,
				short_name: config.siteTitleShort,
				description: config.siteDescription,
				start_url: config.pathPrefix,
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: "minimal-ui",
				icons: [
					{
						src: "/favicons/android-chrome-192x192.png",
						sizes: "192x192",
						type: "image/png"
					},
					{
						src: "/favicons/android-chrome-384x384.png",
						sizes: "384x384",
						type: "image/png"
					},
					{
						src: "/favicons/android-chrome-512x512.png",
						sizes: "512x512",
						type: "image/png"
					}
				]
			}
		}
	]
};
