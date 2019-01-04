import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from "styled-components";

import {
	autoParagraph,
	decodeHTML,
	httpTohttps,
	removeDimensions,
	removeOrphans,
	slugTitle
} from "../components/helpers";

import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import Archive from "../components/organisms/archive";
import Hero from "../components/organisms/hero";

import Layout from "../layout";

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
						<title>{`${decodeHTML(this.props.pageContext.title)}`}</title>
					</Helmet>
					<ContentWrapper>
						<Hero />
					</ContentWrapper>
				</React.Fragment>
			</Layout>
		);
	}
}
