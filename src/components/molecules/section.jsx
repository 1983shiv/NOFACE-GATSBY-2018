import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { decodeHTML } from "../helpers";

export default class section extends Component {
	constructor(props) {
		super(props);
		this.state = { colour: "FFF" };
	}

	componentDidMount() {
		// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
		function hexToRgb(hex) {
			var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
			hex = hex.replace(shorthandRegex, function(m, r, g, b) {
				return r + r + g + g + b + b;
			});

			var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
			return result
				? {
						r: parseInt(result[1], 16),
						g: parseInt(result[2], 16),
						b: parseInt(result[3], 16)
				  }
				: null;
		}

		var bg = hexToRgb(this.props.backgroundColour);

		var red = bg["r"];
		var green = bg["g"];
		var blue = bg["b"];

		var o = Math.round(
			(parseInt(red) * 299 + parseInt(green) * 587 + parseInt(blue) * 114) /
				1000
		);

		o > 125
			? this.setState({
					colour: "#141213"
			  })
			: this.setState({ colour: "#FFF" });
	}

	createMarkup() {
		return { __html: this.props.content };
	}

	render() {
		const SectionElement = styled.section`
			padding: 64px 16px;

			background-color: ${this.props.backgroundColour
				? this.props.backgroundColour
				: "var(--black)"};
			color: ${props => props.textColour};

			.section__content {
				margin: 0 auto;
				max-width: 900px;
				padding: 0 32px;
			}
		`;

		return (
			<SectionElement className="ignore" textColour={this.state.colour}>
				<div
					className="section__content"
					dangerouslySetInnerHTML={this.createMarkup()}
				/>
			</SectionElement>
		);
	}
}
