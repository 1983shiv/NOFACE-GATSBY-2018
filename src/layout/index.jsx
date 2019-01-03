import React from "react";
import Helmet from "react-helmet";

import config from "../../data/SiteConfig";
import styles from "../styles/style.scss";
import SEO from "../components/SEO/SEO";

import Footer from "../components/organisms/footer";
import Header from "../components/organisms/header";

export default class MainLayout extends React.Component {
	render() {
		const { children } = this.props;

		return (
			<React.Fragment>
				<Helmet>
					<meta name="description" content={config.siteDescription} />
				</Helmet>
				<Helmet title={config.siteTitle} />
				<SEO />
				<Header />
				{children}
				<Footer />
			</React.Fragment>
		);
	}
}
