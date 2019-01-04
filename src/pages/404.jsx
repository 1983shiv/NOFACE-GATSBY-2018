import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import styled from "styled-components";

import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import Archive from "../components/organisms/archive";
import Hero from "../components/organisms/hero";

import Layout from "../layout/index";

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
	render() {
		return (
			<Layout>
				<React.Fragment>
					<Helmet>
						<title>404 Page</title>
					</Helmet>
					<ContentWrapper>
						<h1>Error - 404</h1>
						<h2>Sorry, We couldn't find that page</h2>
						<p>Maybe it’s out there, somewhere...</p>
						<p>
							You can always find insightful posts and case studies on our
							<Link to="/">homepage</Link>.
						</p>
						<Archive count={3} type="caseStudy" />
					</ContentWrapper>
				</React.Fragment>
			</Layout>
		);
	}
}
