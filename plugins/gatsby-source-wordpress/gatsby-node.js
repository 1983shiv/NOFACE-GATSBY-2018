const fetch = require("node-fetch");
const queryString = require("query-string");
const crypto = require("crypto");
const path = require("path");

const siteName = "wp.noface.app";

exports.sourceNodes = async (
	{ actions: { createNode }, createNodeId },
	{ plugins, ...options }
) => {
	const nofaceCasesURL = `https://${siteName}/wp-json/cases/v2/all`;
	const nofaceCasesResponse = await fetch(nofaceCasesURL);
	const nofaceCasesData = await nofaceCasesResponse.json();

	nofaceCasesData.forEach(page => {
		createNode({
			...page,
			id: createNodeId(`noface-case-${page.id}`),
			parent: null,
			children: [],
			internal: {
				type: "NoFaceCase",
				content: JSON.stringify(page),
				contentDigest: crypto
					.createHash("md5")
					.update(JSON.stringify(page))
					.digest("hex")
			}
		});
	});

	const nofaceInsightsURL = `https://${siteName}/wp-json/insights/v2/all`;
	const nofaceInsightsResponse = await fetch(nofaceInsightsURL);
	const nofaceInsightsData = await nofaceInsightsResponse.json();

	nofaceInsightsData.forEach(page => {
		createNode({
			...page,
			id: createNodeId(`noface-insight-${page.id}`),
			parent: null,
			children: [],
			internal: {
				type: "NoFaceInsight",
				content: JSON.stringify(page),
				contentDigest: crypto
					.createHash("md5")
					.update(JSON.stringify(page))
					.digest("hex")
			}
		});
	});

	const nofacePagesURL = `https://${siteName}/wp-json/pages/v2/all`;
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

	const nofaceMenusURL = `https://${siteName}/wp-json/menus/v2/all`;
	const nofaceMenusResponse = await fetch(nofaceMenusURL);
	const nofaceMenusData = await nofaceMenusResponse.json();

	nofaceMenusData.forEach(menu => {
		createNode({
			...menu,
			id: createNodeId(`noface-menu-${menu.id}`),
			parent: null,
			children: [],
			internal: {
				type: "NoFaceMenu",
				content: JSON.stringify(menu),
				contentDigest: crypto
					.createHash("md5")
					.update(JSON.stringify(menu))
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
							content {
								id
								name
								data {
									alignment
									background_colour
									background_image
									content
									content_type
									count
									html
									level
									overlay
									semantic_level
									size
									text
									title
								}
							}
							excerpt
							id
							slug
							title
						}
					}
				}
				allNoFaceCase {
					edges {
						node {
							content {
								id
								name
								data {
									alignment
									background_colour
									background_image
									content
									overlay
									size
									text
									title
								}
							}
							excerpt
							id
							slug
							title
						}
					}
				}
				allNoFaceInsight {
					edges {
						node {
							content {
								id
								name
								data {
									alignment
									background_colour
									background_image
									content
									html
									overlay
									size
									title
								}
							}
							excerpt
							id
							slug
							title
						}
					}
				}
			}
		`).then(result => {
			result.data.allNoFacePage.edges.forEach(({ node }) => {
				let slug = node.slug;
				if (slug === "homepage" || slug === "home") {
					slug = "/";
				}
				createPage({
					path: slug,
					component: path.resolve(`./src/templates/page.jsx`),
					context: {
						content: node.content,
						excerpt: node.excerpt,
						title: node.title,
						slug: node.slug
					}
				});
			});
			result.data.allNoFaceCase.edges.forEach(({ node }) => {
				createPage({
					path: node.slug,
					component: path.resolve(`./src/templates/page.jsx`),
					context: {
						content: node.content,
						excerpt: node.excerpt,
						title: node.title,
						slug: node.slug
					}
				});
			});
			result.data.allNoFaceInsight.edges.forEach(({ node }) => {
				createPage({
					path: node.slug,
					component: path.resolve(`./src/templates/page.jsx`),
					context: {
						content: node.content,
						excerpt: node.excerpt,
						title: node.title,
						slug: node.slug
					}
				});
			});
			resolve();
		});
	});
};
