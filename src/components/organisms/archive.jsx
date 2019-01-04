import React, { Component } from "react";
import { graphql, Link, StaticQuery } from "gatsby";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";

import Tease from "../molecules/tease";

const ArchiveElement = styled.section`
	margin-top: 32px;
`;

export default class archive extends Component {
	render() {
		const queryCount = this.props.count;
		const type = this.props.type;

		const TeaseQuery = graphql`
			query TeaseQuery {
				allNoFaceCase(sort: { fields: [date], order: DESC }) {
					edges {
						node {
							date
							excerpt
							id
							slug
							thumbnailDefault
							title
						}
					}
				}

				allNoFaceInsight(sort: { fields: [date], order: DESC }) {
					edges {
						node {
							date
							excerpt
							id
							slug
							thumbnailDefault
							title
						}
					}
				}
			}
		`;
		return (
			<StaticQuery
				query={TeaseQuery}
				render={data => (
					<ArchiveElement className="ignore">
						<Container>
							<Row>
								{(() => {
									switch (this.props.type) {
										case "post":
											return data.allNoFaceInsight.edges
												.slice(0, queryCount)
												.map(({ node }) => (
													<Col sm={12} md={6} lg={4} key={node.id}>
														<Tease
															excerpt={node.excerpt}
															image={node.thumbnailDefault}
															slug={node.slug}
															title={node.title}
															type="post"
														/>
													</Col>
												));
										case "caseStudy":
											return data.allNoFaceCase.edges
												.slice(0, queryCount)
												.map(({ node }) => (
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
										default:
											return null;
									}
								})()}
								{}
							</Row>
						</Container>
					</ArchiveElement>
				)}
			/>
		);
	}
}
