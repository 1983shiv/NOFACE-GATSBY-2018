import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

export default class PostTemplate extends React.Component {
	render() {
		return (
			<Layout>
				<React.Fragment>
					<Helmet>
						<title>{`${decodeHTML(this.props.pageContext.title)}`}</title>
					</Helmet>
					<main role="main">
						<h1>{decodeHTML(this.props.pageContext.title)}</h1>
						<section>
							<article
								id=""
								className="article"
								dangerouslySetInnerHTML={this.createMarkup()}
							/>
						</section>
					</main>
				</React.Fragment>
			</Layout>
		);
	}
}
