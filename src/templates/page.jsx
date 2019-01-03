import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from "styled-components";

import {
	autoParagraph,
	decodeHTML,
	httpTohttps,
	removeDimensions,
	removeOrphans,
	slugTitle
} from "../components/helpers";

import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import Heading from "../components/atoms/heading";
import Paragraph from "../components/atoms/paragraph";

import Archive from "../components/organisms/archive";
import Hero from "../components/organisms/hero";

import HTML from "../components/particles/HTML";

import Layout from "../layout";

const ContentWrapper = styled.main`
	> *:not(.hero):not(.ignore) {
		margin-left: auto;
		margin-right: auto;
		max-width: 1110px;
	}

	> *:last-child:not(.hero) {
		margin-bottom: 64px;
	}
`;

export default class PostTemplate extends React.Component {
	createMarkup() {
		let pageHTML = this.props.pageContext.content;

		if (
			pageHTML &&
			pageHTML[0] &&
			pageHTML[0].hasOwnProperty("data") &&
			pageHTML[0].data !== null
		) {
			console.log({ pageHTML });
			let componentsArray = [];
			let newArrayDataOfOjbect = Object.values(pageHTML);

			for (var key in newArrayDataOfOjbect) {
				if (newArrayDataOfOjbect.hasOwnProperty(key))
					componentsArray.push(newArrayDataOfOjbect[key]);
			}

			const pageComponents = componentsArray.map((component, index) => {
				if (component.name == "acf/archive") {
					return (
						<Archive
							key={component.id}
							index={index}
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
							index={index}
							level={component.data.level}
							name={component.name}
							text={component.data.text}
							semantic_level={component.data.semantic_level}
						/>
					);
				}
				if (component.name == "acf/hero") {
					return (
						<Hero
							key={component.id}
							index={index}
							alignment={component.data.alignment}
							backgroundColour={component.data.background_colour}
							backgroundImage={component.data.background_image}
							content={component.data.content}
							elementSize={component.data.size}
							excerpt={component.data.excerpt}
							overlay={component.data.overlay}
							name={component.name}
							title={component.data.title}
						/>
					);
				}
				if (component.name == "acf/html") {
					return (
						<HTML key={component.id} index={index} html={component.data.html} />
					);
				}
				if (component.name == "acf/paragraph") {
					return (
						<Paragraph
							key={component.id}
							index={index}
							name={component.name}
							text={component.data.text}
						/>
					);
				}

				return;
			});

			if (pageComponents) {
				return pageComponents;
			}
		}
	}

	render() {
		return (
			<Layout>
				<React.Fragment>
					<Helmet>
						<title>{`${decodeHTML(this.props.pageContext.title)}`}</title>
					</Helmet>
					<ContentWrapper>{this.createMarkup()}</ContentWrapper>
				</React.Fragment>
			</Layout>
		);
	}
}
