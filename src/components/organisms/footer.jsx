import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Container, Row, Col } from "react-grid-system";

import Logo from "../atoms/logo";

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
										<Logo />
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
