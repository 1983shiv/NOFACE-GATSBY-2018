import React, { Component } from "react";
import { graphql, Link, StaticQuery } from "gatsby";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";

import Tease from "../molecules/tease";

// TODO: use this.props.count in query

export default () => (
	<StaticQuery
		query={graphql`
			query {
				allNoFaceCase(limit: 200) {
					edges {
						node {
							id
							excerpt
							image
							title
						}
					}
				}
			}
		`}
		render={data => (
			<React.Fragment>
				<Container>
					<Row>
						{data.allNoFaceCase.edges.map(({ node }) => (
							<Col sm={12} md={6} lg={4}>
								<Tease
									excerpt={node.excerpt}
									image={node.image}
									key={node.id}
									slug={node.slug}
									title={node.title}
									type="case"
								/>
							</Col>
						))}
					</Row>
				</Container>
			</React.Fragment>
		)}
	/>
);
