import React, { Component } from "react";
import { graphql, Link, StaticQuery } from "gatsby";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";

import Tease from "../molecules/tease";

export default class related extends Component {
	render() {
		const RelatedWrapper = styled.section`
			margin-top: 64px;

			h2 {
				margin-bottom: 32px;
			}
		`;

		const relatedPages = this.props.relatedItems;
		var relatedItems;

		if (relatedPages) {
			relatedItems = relatedPages.map(node => (
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
		} else {
			relatedItems = "";
		}

		return (
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
	}
}
