const fetch = require("node-fetch");
const queryString = require("query-string");
const crypto = require("crypto");
const path = require("path");

exports.sourceNodes = async (
	{ actions: { createNode }, createNodeId },
	{ plugins, ...options }
) => {
	const nofacePagesURL = `https://wp.noface.app/wp-json/pages/v2/all`;
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

	const nofaceCasesURL = `https://wp.noface.app/wp-json/cases/v2/all`;
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
									excerpt
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
						}
					}
				}
				allNoFaceCase {
					edges {
						node {
							slug
							title
							excerpt
							id
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
			resolve();
		});
	});
};
