import React from "react";
import Helmet from "react-helmet";
import { withPrefix } from "gatsby";
import { ThemeProvider } from "styled-components";

import config from "../../data/SiteConfig";
import styles from "../styles/style.scss";

import Footer from "../components/organisms/footer";
import Header from "../components/organisms/header";

export default class MainLayout extends React.Component {
	render() {
		const { children } = this.props;

		const theme = {
			black: "#141213",
			greyLightest: "#dddddd",
			greyLight: "#595959",
			grey: "#202c39",
			offWhite: "#f6f7f9",
			primary: "0652dd",
			white: "#ffffff",
			shadowColour: "rgba(20, 18, 19, 0.1)"
		};

		return (
			<React.Fragment>
				<Helmet>
					<meta name="description" content={config.siteDescription} />
					<link
						rel="apple-touch-icon"
						sizes="76x76"
						href={withPrefix("/favicons/apple-touch-icon.png")}
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href={withPrefix("/favicons/favicon-32x32.png")}
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href={withPrefix("/favicons/favicon-16x16.png")}
					/>
					<link
						rel="mask-icon"
						href={withPrefix("/favicons/safari-pinned-tab.svg")}
						color="#00a300"
					/>
					<meta name="msapplication-TileColor" content="#00a300" />
					<meta name="theme-color" content="#ffffff" />
				</Helmet>
				<Helmet title={config.siteTitle} />
				<ThemeProvider theme={theme}>
					<React.Fragment>
						<Header />
						{children}
						<Footer />
					</React.Fragment>
				</ThemeProvider>
			</React.Fragment>
		);
	}
}
