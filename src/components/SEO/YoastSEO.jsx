import React, { Component } from "react";
import Helmet from "react-helmet";
import urljoin from "url-join";

class SEO extends Component {
	getURL(url) {
		if (url !== "homepage" && url !== "home") {
			url = "https://noface.co.uk/" + url;
		} else {
			url = "https://noface.co.uk";
		}
		return url;
	}

	renameTwitterImage(filename) {
		filename = filename.replace(/(\.[\w\d_-]+)$/i, "-1024x576$1");
		return filename;
	}

	seoTitleSeperators(title) {
		title = title.replace("", "&bull;");
		return title;
	}

	render() {
		const { description, image, slug, title } = this.props;

		return (
			<Helmet>
				<title>{title}</title>
				<meta name="description" content={description} />
				<link rel="canonical" href={`${this.getURL(slug)}`} />
				<meta property="og:locale" content="en_GB" />
				<meta property="og:type" content="article" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:url" content={`${this.getURL(slug)}`} />
				<meta property="og:site_name" content="NoFace" />
				<meta
					property="article:publisher"
					content="https://www.facebook.com/nofacedesigns/"
				/>
				<meta property="article:section" content="Case Study" />
				<meta
					property="og:image"
					content={`${this.renameTwitterImage(image)}`}
				/>
				<meta
					property="og:image:secure_url"
					content={`${this.renameTwitterImage(image)}`}
				/>
				<meta property="og:image:width" content="1024" />
				<meta property="og:image:height" content="576" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:site" content="@NoFaceDesigns" />
				<meta name="twitter:image" content={image} />
				<meta name="twitter:creator" content="@NoFaceDesigns" />
			</Helmet>
		);
	}
}

export default SEO;
