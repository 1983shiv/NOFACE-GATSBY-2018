import React from "react";
import Helmet from "react-helmet";
import { graphql, StaticQuery } from "gatsby";
import { Container, Row, Col } from "react-grid-system";
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

import Section from "../components/molecules/section";
import Tease from "../components/molecules/tease";
import Testimonial from "../components/molecules/testimonial";

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
				if (component.name == "acf/section") {
					return (
						<Section
							key={component.id}
							index={index}
							backgroundColour={component.data.background_colour}
							content={component.data.content}
						/>
					);
				}
				if (component.name == "acf/testimonial") {
					return (
						<Testimonial
							key={component.id}
							index={index}
							name={component.name}
							clientName={component.data.text}
							content={component.data.content}
							image={component.data.background_image}
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

	relatedItems() {
		if (this.props.pageContext.type === "case") {
			const RelatedWrapper = styled.section`
				margin-top: 64px;

				h2 {
					margin-bottom: 32px;
				}
			`;

			let relatedPages = this.props.pageContext.related;

			relatedPages
				? console.log({
						relatedPages
				  })
				: console.log("No related pages");

			const relatedItems = relatedPages.map(node => (
				<Col sm={12} md={6} lg={4} key={node.id}>
					<Tease
						excerpt={node.excerpt}
						image={node.thumbnailDefault}
						slug={node.slug}
						title={node.title}
						type="case"
					/>
				</Col>
			));

			const relatedContainer = (
				<RelatedWrapper>
					<Container>
						<Row>
							<Col sm={12}>
								<h2>Related Case Studies</h2>
							</Col>
							{relatedItems}
						</Row>
					</Container>
				</RelatedWrapper>
			);

			return relatedContainer;
		}
	}

	render() {
		return (
			<Layout>
				<React.Fragment>
					<Helmet>
						<title>{`${decodeHTML(this.props.pageContext.title)}`}</title>
					</Helmet>
					<ContentWrapper>
						{this.createMarkup()}
						{this.relatedItems()}
					</ContentWrapper>
				</React.Fragment>
			</Layout>
		);
	}
}
