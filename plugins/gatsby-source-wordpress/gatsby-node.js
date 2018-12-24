const fetch = require("node-fetch");
const queryString = require("query-string");
const crypto = require("crypto");
const path = require("path");

exports.sourceNodes = async (
	{ actions: { createNode }, createNodeId },
	{ plugins, ...options }
) => {
	const nofacePagesURL = `https://noface.co.uk/wp-json/pages/v2/all`;
	const nofacePagesResponse = await fetch(nofacePagesURL);
	const nofacePagesData = await nofacePagesResponse.json();

	nofacePagesData.forEach(page => {
		createNode({
			...page,
			id: createNodeId(`noface-page-${page.id}`),
			parent: null,
			children: [],
			internal: {
				type: "NoFacePage",
				content: JSON.stringify(page),
				contentDigest: crypto
					.createHash("md5")
					.update(JSON.stringify(page))
					.digest("hex")
			}
		});
	});
};

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	return new Promise((resolve, reject) => {
		graphql(`
			{
				allNoFacePage {
					edges {
						node {
							slug
							title
							content
							excerpt
							id
						}
					}
				}
			}
		`).then(result => {
			result.data.allNoFacePage.edges.forEach(({ node }) => {
				createPage({
					path: node.slug,
					component: path.resolve(`./src/templates/page.jsx`),
					context: {
						slug: node.slug,
						title: node.title,
						content: node.content,
						excerpt: node.excerpt
					}
				});
			});
			resolve();
		});
	});
};
