import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { Container, Row, Col } from "react-grid-system";

export default class footer extends Component {
	render() {
		return (
			<footer className="footer" role="contentinfo">
				<Container>
					<Row>
						<Col>
							<div className="flex flex--wrap flex--justify-between">
								<div className="logo">
									<a href="http://local-noface.co.uk">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 75.4 64.4"
										>
											<g>
												<path
													className="logo__path"
													d="M16.3 58c-5.5-5.5-8.8-13-8.8-21.4s3.4-15.9 8.8-21.4 13-8.8 21.4-8.8 15.9 3.4 21.4 8.8c5.5 5.5 8.8 13 8.8 21.4S64.5 52.5 59.1 58"
												/>
												<path
													className="logo__path"
													d="M37.7 18.1c5.1 0 9.7 2.1 13.1 5.4s5.4 8 5.4 13.1-2.1 9.7-5.4 13.1-8 5.4-13.1 5.4S28 53 24.6 49.7s-5.4-8-5.4-13.1 2.1-9.7 5.4-13.1 8-5.4 13.1-5.4z"
												/>
											</g>
										</svg>
										<h5 className="hide">NoFace Designs Ltd</h5>
									</a>
								</div>
								<h3>Providing your business with a unique identity.</h3>
							</div>
							<hr className="hr hr--white" />
							<Row>
								<Col md={6} lg={3}>
									<h4>Contact us</h4>
									<nav className="nav" role="navigation">
										<ul>
											<li>
												<a href="https://goo.gl/maps/xkXPEdaC8d82">
													63 St Marys Road
												</a>
											</li>
											<li>
												<a href="mailto:contact@noface.co.uk">
													contact@noface.co.uk
												</a>
											</li>
											<li>
												<a href="tel:07393357520">07393 357520</a>
											</li>
										</ul>
									</nav>
								</Col>
								<Col md={6} lg={3}>
									<h4>Pages</h4>
									<nav className="nav" role="navigation">
										<ul>
											<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-30">
												<a href="http://local-noface.co.uk/">Homepage</a>
											</li>
											<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-29">
												<a href="http://local-noface.co.uk/work/">Work</a>
											</li>
											<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-28">
												<a href="http://local-noface.co.uk/insights/">
													Insights
												</a>
											</li>
											<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26">
												<a href="http://local-noface.co.uk/about/">About</a>
											</li>
											<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27">
												<a href="http://local-noface.co.uk/contact/">Contact</a>
											</li>
										</ul>
									</nav>
								</Col>
								<Col md={6} lg={3}>
									<h4>Case Studies</h4>
									<nav className="nav" role="navigation">
										<ul>
											<li>
												<a href="http://local-noface.co.uk/case-study/fibonartcci-auctions/">
													FibonARTcci Auctions
												</a>
											</li>
											<li>
												<a href="http://local-noface.co.uk/case-study/vostron-gigabit-connectivity-campaign/">
													Vostron – Gigabit Connectivity City Fibre Campaign
												</a>
											</li>
											<li>
												<a href="http://local-noface.co.uk/case-study/expelled-skateboarding/">
													Expelled Skateboarding
												</a>
											</li>
											<li>
												<a href="http://local-noface.co.uk/case-study/vostron-blog/">
													Vostron – Hubspot Blog
												</a>
											</li>
											<li>
												<a href="http://local-noface.co.uk/case-study/twics/">
													TWICS
												</a>
											</li>
										</ul>
									</nav>
								</Col>
								<Col md={6} lg={3}>
									<h4>Connect with us</h4>
									<nav className="nav" role="navigation">
										<ul>
											<li
												id="menu-item-41"
												className="menu-item menu-item-type-custom menu-item-object-custom menu-item-41"
											>
												<a href="https://www.behance.net/nofacedesigns">
													Behance Portfolio
												</a>
											</li>
											<li
												id="menu-item-43"
												className="menu-item menu-item-type-custom menu-item-object-custom menu-item-43"
											>
												<a href="https://twitter.com/NoFaceDesigns">
													Twitter Profile
												</a>
											</li>
											<li
												id="menu-item-44"
												className="menu-item menu-item-type-custom menu-item-object-custom menu-item-44"
											>
												<a href="https://www.facebook.com/nofacedesigns/">
													Facebook Page
												</a>
											</li>
											<li
												id="menu-item-1055"
												className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1055"
											>
												<a href="http://local-noface.co.uk/privacy-policy/">
													Privacy Policy
												</a>
											</li>
										</ul>
									</nav>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</footer>
		);
	}
}
