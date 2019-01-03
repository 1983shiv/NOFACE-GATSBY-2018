import React, { Component } from "react";
import { Link } from "gatsby";

export default class HTML extends Component {
	createMarkup() {
		return { __html: this.props.html };
	}

	render() {
		return (
			<React.Fragment>
				<article dangerouslySetInnerHTML={this.createMarkup()} />
			</React.Fragment>
		);
	}
}
