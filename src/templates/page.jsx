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

import Heading from "../components/atoms/heading";
import Paragraph from "../components/atoms/paragraph";

import Hero from "../components/molecules/hero";

import Archive from "../components/organisms/archive";

export default class PostTemplate extends React.Component {
	createMarkup() {
		let pageHTML = this.props.pageContext.content;

		let componentsArray = [];
		let newArrayDataOfOjbect = Object.values(pageHTML);

		for (var key in newArrayDataOfOjbect) {
			if (newArrayDataOfOjbect.hasOwnProperty(key))
				componentsArray.push(newArrayDataOfOjbect[key]);
		}

		const pageComponents = componentsArray.map(component => {
			if (component.name == "acf/archive") {
				return (
					<Archive
						key={component.id}
						name={component.name}
						count={component.data.count}
						type={component.data.content_type}
					/>
				);
			}
			if (component.name == "acf/heading") {
				return (
					<Heading
						key={component.id}
						name={component.name}
						text={component.data.text}
					/>
				);
			}
			if (component.name == "acf/hero") {
				return (
					<Hero
						key={component.id}
						alignment={component.data.alignment}
						backgroundColour={component.data.background_colour}
						backgroundImage={component.data.background_image}
						content={component.data.content}
						excerpt={component.data.excerpt}
						name={component.name}
						title={component.data.title}
						use_title={component.data.use_title}
					/>
				);
			}
			if (component.name == "acf/paragraph") {
				return (
					<Paragraph
						key={component.id}
						name={component.name}
						text={component.data.text}
					/>
				);
			}

			return;
		});

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
