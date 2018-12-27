import React, { Component } from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";

import Logo from "../atoms/logo";

export default class footer extends Component {
	render() {
		return (
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
										<a href="tel:07776812750">07776 812750</a>
									</li>
								</ul>
							</nav>
						</Col>
						<Col md={6} lg={3}>
							<h4>Pages</h4>
							<nav className="nav" role="navigation">
								<ul>
									<li>
										<Link to="/">Homepage</Link>
									</li>
									<li>
										<Link to="/work">Work</Link>
									</li>
									<li>
										<Link to="/insights">Insights</Link>
									</li>
									<li>
										<Link to="/about">About</Link>
									</li>
									<li>
										<Link to="/contact">Contact</Link>
									</li>
								</ul>
							</nav>
						</Col>
						<Col md={6} lg={3}>
							<h4>Case Studies</h4>
							<nav className="nav" role="navigation">
								<ul>
									<li>
										<Link to="/case-study/fibonartcci-auctions/">
											FibonARTcci Auctions
										</Link>
									</li>
									<li>
										<Link to="/case-study/vostron-gigabit-connectivity-campaign/">
											Vostron – Gigabit Connectivity City Fibre Campaign
										</Link>
									</li>
									<li>
										<Link to="/case-study/expelled-skateboarding/">
											Expelled Skateboarding
										</Link>
									</li>
									<li>
										<Link to="/case-study/vostron-blog/">
											Vostron – Hubspot Blog
										</Link>
									</li>
									<li>
										<Link to="/case-study/twics/">TWICS</Link>
									</li>
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
									<li>
										<a href="/privacy-policy/">Privacy Policy</a>
									</li>
								</ul>
							</nav>
						</Col>
					</Row>
				</Container>
			</footer>
		);
	}
}
