import React, { Component } from "react";
import { graphql, Link, StaticQuery } from "gatsby";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";

import {
	autoParagraph,
	decodeHTML,
	flattenSlug,
	httpTohttps,
	removeDimensions,
	removeOrphans,
	slugTitle
} from "../helpers";

import Logo from "../atoms/logo";

const Footer = styled.footer`
	padding: 32px 16px 64px;
	color: white;
	background-color: black;

	@media (min-width: 768px) {
		padding-bottom: 128px;
	}

	h4 {
		margin-bottom: 8px;
		margin-top: 16px;
	}

	li {
		line-height: 1.5;
		margin-top: 4px;
	}

	nav {
		a {
			color: white;
			opacity: 0.8;
			text-decoration: none;
			transition: 0.2s opacity ease;

			&:active,
			&:focus,
			&:hover {
				opacity: 1;
			}
		}
	}

	p {
		margin-bottom: 0;
	}

	.footer__tagline {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.logo {
		min-width: 50px;
		width: 50px;

		&__path {
			stroke-linecap: round;
			stroke-miterlimit: 10;
			fill: none;
			stroke: white;
			stroke-width: 10;
		}
	}
`;

export default class footer extends Component {
	render() {
		return (
			<StaticQuery
				query={graphql`
					query GetSiteCases {
						allNoFaceCase(limit: 5) {
							edges {
								node {
									id
									slug
									title
								}
							}
						}
						allNoFacePage {
							edges {
								node {
									id
									slug
									title
								}
							}
						}
					}
				`}
				render={data => (
					<Footer className="footer" role="contentinfo">
						<Container>
							<Row>
								<Col sm={12}>
									<div className="footer__tagline">
										<div className="logo">
											<Link to="/">
												<Logo />
												<h5 className="hide">NoFace Designs Ltd</h5>
											</Link>
										</div>
										<h3>Providing your business with a unique identity.</h3>
									</div>
									<hr className="hr hr--white" />
								</Col>
								<Col md={6} lg={3}>
									<h4>Contact us</h4>
									<nav className="nav" role="navigation">
										<ul>
											<li>
												<a
													href="https://goo.gl/maps/xkXPEdaC8d82"
													rel="noopener"
													target="_blank"
												>
													63 St Marys Road
												</a>
											</li>
											<li>
												<a href="mailto:contact@noface.co.uk">
													contact@noface.co.uk
												</a>
											</li>
											<li>
												<a href="tel:07776812750">07776 812750</a>
											</li>
										</ul>
									</nav>
								</Col>
								<Col md={6} lg={3}>
									<h4>Pages</h4>
									<nav className="nav" role="navigation">
										<ul>
											{data.allNoFacePage.edges.map(({ node }) => (
												<li key={node.id}>
													<Link to={flattenSlug(node.slug)}>
														{decodeHTML(node.title)}
													</Link>
												</li>
											))}
										</ul>
									</nav>
								</Col>
								<Col md={6} lg={3}>
									<h4>Case Studies</h4>
									<nav className="nav" role="navigation">
										<ul>
											{data.allNoFaceCase.edges.map(({ node }) => (
												<li key={node.id}>
													<Link to={node.slug}>{decodeHTML(node.title)}</Link>
												</li>
											))}
										</ul>
									</nav>
								</Col>
								<Col md={6} lg={3}>
									<h4>Connect with us</h4>
									<nav role="navigation">
										<ul>
											<li>
												<a
													href="https://www.behance.net/nofacedesigns"
													rel="noopener"
													target="_blank"
												>
													Behance Portfolio
												</a>
											</li>
											<li>
												<a
													href="https://twitter.com/NoFaceDesigns"
													rel="noopener"
													target="_blank"
												>
													Twitter Profile
												</a>
											</li>
											<li>
												<a
													href="https://www.facebook.com/nofacedesigns/"
													rel="noopener"
													target="_blank"
												>
													Facebook Page
												</a>
											</li>
										</ul>
									</nav>
								</Col>
							</Row>
						</Container>
					</Footer>
				)}
			/>
		);
	}
}
