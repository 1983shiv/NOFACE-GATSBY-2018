import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import {
	autoParagraph,
	decodeHTML,
	httpTohttps,
	removeDimensions,
	removeOrphans,
	slugTitle
} from "../helpers";

export default class section extends Component {
	constructor(props) {
		super(props);
		this.state = { anchorColour: "#FFF", colour: "FFF" };
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
					anchorColour: "#0652dd",
					colour: "#141213"
			  })
			: this.setState({ anchorColour: "#FFF", colour: "#FFF" });
	}

	createMarkup() {
		return { __html: removeDimensions(this.props.content) };
	}

	render() {
		const SectionElement = styled.section`
			padding: 64px 16px;

			background-color: ${this.props.backgroundColour
				? this.props.backgroundColour
				: "var(--black)"};
			color: ${props => props.textColour};

			a:not(.link--cta) {
				color: ${props =>
					props.anchorColour ? props => props.anchorColour : "var(--primary)"};
			}

			.section__content {
				margin: 0 auto;
				max-width: 900px;
				padding: 0 32px;

				> h2,
				> h3,
				> h4,
				> h5 {
					margin-bottom: 16px;
					font-weight: 700;
				}
				/* Advanced vertical rhythym based off of https://medium.com/@sebastian.eberlein/advanced-vertical-margins-4ac69f032f79 */
				> * + * {
					margin-top: 16px;
				}
				> h2 + * {
					margin-top: 24px;
				}
				> img + *,
				> figure + * {
					margin-top: 32px;
				}
				> * + h2 {
					margin-top: 64px;
				}
				> * + h3 {
					margin-top: 48px;
				}
				> * + img {
					margin-top: 32px;
				}
				> * + h4 {
					margin-top: 48px;
				}
				> img + img,
				> figure + figure {
					margin-top: 32px;
				}
				> h2 + h3 {
					margin-top: 32px;
				}
				> h3 + h4 {
					margin-top: 32px;
				}
			}
		`;

		return (
			<SectionElement
				className="ignore"
				anchorColour={this.state.anchorColour}
				textColour={this.state.colour}
			>
				<div
					className="section__content"
					dangerouslySetInnerHTML={this.createMarkup()}
				/>
			</SectionElement>
		);
	}
}
