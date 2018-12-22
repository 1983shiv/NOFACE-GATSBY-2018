import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const HeroElement = styled.section`
	align-items: center;
	display: flex;
	justify-content: center;
	min-height: calc(90vh - 110px);
	overflow: hidden;
	// padding: $spacing-default;
	padding: 16px;
	position: relative;

	color: white;
	line-height: 1.45;
	text-align: center;

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		text-shadow: 0px 4px 7px rgba($color-black, 0.6);
	}

	p {
		text-shadow: 0px 4px 7px rgba($color-black, 0.2);
	}

	> * {
		position: relative;
		z-index: 50;
	}

	> .video--full-container {
		z-index: 48;
	}

	.section__background {
		top: 0;
		left: 0;
		position: absolute;
		height: 100%;
		width: 100%;
		z-index: 0;

		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;

		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
			object-position: center;
		}

		picture {
			position: relative;
		}
	}

	.section--dark {
		&:before {
			content: "";
			display: block;
			top: 0;
			left: 0;
			position: absolute;
			height: 100%;
			width: 100%;
			background-color: rgba(20, 18, 19, 0.8);
		}
	}
`;

export default class hero extends Component {
	render() {
		const darkOverlay = this.props.darkOverlay;

		let backgroundClasses;

		if (!darkOverlay) {
			backgroundClasses = "section__background";
		} else {
			backgroundClasses = "section__background section--dark";
		}

		return (
			<HeroElement className="section section--image">
				<div className="width--content">
					<div>
						<h1>Providing Your Business With A Unique Identity</h1>
						<div className="scroll-downs">
							<div className="mousey">
								<div className="scroller" />
							</div>
						</div>
					</div>
				</div>

				<div className={backgroundClasses} />
			</HeroElement>
		);
	}
}
