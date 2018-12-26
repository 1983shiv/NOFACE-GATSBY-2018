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

import Hero from "../components/molecules/hero";

export default class PostTemplate extends React.Component {
	createMarkup() {
		let pageHTML = this.props.pageContext.content;

		let componentsArray = [];
		let newArrayDataOfOjbect = Object.values(pageHTML);

		for (var key in newArrayDataOfOjbect) {
			if (newArrayDataOfOjbect.hasOwnProperty(key))
				componentsArray.push(newArrayDataOfOjbect[key]);
		}

		const pageComponents = componentsArray.map(component => (
			<Hero key={component.id} title={component.data.title} />
		));

		return pageComponents;
	}

	render() {
		return (
			<Layout>
				<React.Fragment>
					<Helmet>
						<title>{`${decodeHTML(this.props.pageContext.title)}`}</title>
					</Helmet>
					<main>{this.createMarkup()}</main>
				</React.Fragment>
			</Layout>
		);
	}
}
