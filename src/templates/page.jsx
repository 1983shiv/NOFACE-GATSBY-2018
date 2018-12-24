import React from "react";
import Helmet from "react-helmet";
import htmlparser from "htmlparser2";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import {
	autoParagraph,
	decodeHTML,
	httpTohttps,
	removeDimensions,
	removeOrphans,
	slugTitle
} from "../components/helpers";

export default class PostTemplate extends React.Component {
	createMarkup() {
		let pageHTML = this.props.pageContext.content;
		pageHTML = httpTohttps(pageHTML);
		pageHTML = autoParagraph(pageHTML);
		pageHTML = removeDimensions(pageHTML);

		console.log({ pageHTML });

		// const parser = new htmlparser.Parser(
		// 	{
		// 		onopentag: function(name, attribs) {
		// 			if (name === "script" && attribs.type === "text/javascript") {
		// 				console.log("JS! Hooray!");
		// 			}
		// 		},
		// 		ontext: function(text) {
		// 			console.log("-->", text);
		// 		},
		// 		onclosetag: function(tagname) {
		// 			if (tagname === "p") {
		// 				console.log("Yo WTF That's a fucking paragraph tag");
		// 			}
		// 		}
		// 	},
		// 	{ decodeEntities: true }
		// );
		// parser.write(pageHTML);
		// parser.end();

		return { __html: pageHTML };
	}

	render() {
		return (
			<Layout>
				<React.Fragment>
					<Helmet>
						<title>{`${decodeHTML(this.props.pageContext.title)}`}</title>
					</Helmet>
					<main role="main">
						<h1>{decodeHTML(this.props.pageContext.title)}</h1>
						<section>
							<article
								id=""
								className="article"
								dangerouslySetInnerHTML={this.createMarkup()}
							/>
						</section>
					</main>
				</React.Fragment>
			</Layout>
		);
	}
}
