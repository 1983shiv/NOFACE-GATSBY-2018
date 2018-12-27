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
		const TeaseQuery = graphql`
			query TeaseQuery {
				allNoFaceCase(limit: 200) {
					edges {
						node {
							id
							excerpt
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
								{data.allNoFaceCase.edges.map(({ node }) => (
									<Col sm={12} md={6} lg={4} key={node.id}>
										<Tease
											excerpt={node.excerpt}
											image={node.thumbnailDefault}
											slug={node.slug}
											title={node.title}
											type="case"
										/>
									</Col>
								))}
							</Row>
						</Container>
					</ArchiveElement>
				)}
			/>
		);
	}
}
