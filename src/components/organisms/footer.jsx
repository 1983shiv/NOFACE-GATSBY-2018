import React, { Component } from "react";
import { graphql, Link, StaticQuery } from "gatsby";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";

import {
	autoParagraph,
	decodeHTML,
	httpTohttps,
	removeDimensions,
	removeOrphans,
	slugTitle
} from "../helpers";

import Logo from "../atoms/logo";

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
					<footer className="footer" role="contentinfo">
						<Container>
							<Row>
								<Col sm={12}>
									<div className="flex flex--wrap flex--justify-between">
										<div className="logo">
											<a href="">
												<Logo />
												<h5 className="hide">NoFace Designs Ltd</h5>
											</a>
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
													<Link to={node.slug}>{decodeHTML(node.title)}</Link>
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
												<a href="https://www.behance.net/nofacedesigns">
													Behance Portfolio
												</a>
											</li>
											<li>
												<a href="https://twitter.com/NoFaceDesigns">
													Twitter Profile
												</a>
											</li>
											<li>
												<a href="https://www.facebook.com/nofacedesigns/">
													Facebook Page
												</a>
											</li>
										</ul>
									</nav>
								</Col>
							</Row>
						</Container>
					</footer>
				)}
			/>
		);
	}
}
