import React, { Component } from "react";
import { Link, withPrefix } from "gatsby";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";

import {
	autoParagraph,
	decodeHTML,
	httpTohttps,
	removeDimensions,
	removeOrphans,
	slugTitle
} from "../helpers";

export default class hero extends Component {
	render() {
		const props = this.props;
		const alignment = props.alignment;
		const backgroundColour = props.backgroundColour;
		const elementSize = props.elementSize;
		const overlay = "0." + props.overlay;

		var heroAlign, TitleElement, SectionContent;

		const backgroundRAW = props.backgroundImage;

		var background_01 = backgroundRAW + `?ssl=1&w=320`,
			background_02 = backgroundRAW + `?ssl=1&w=360`,
			background_03 = backgroundRAW + `?ssl=1&w=375`,
			background_04 = backgroundRAW + `?ssl=1&w=414`,
			background_05 = backgroundRAW + `?ssl=1&w=720`,
			background_06 = backgroundRAW + `?ssl=1&w=768`,
			background_07 = backgroundRAW + `?ssl=1&w=1024`,
			background_08 = backgroundRAW + `?ssl=1&w=1280`,
			background_09 = backgroundRAW + `?ssl=1&w=1366`,
			background_10 = backgroundRAW + `?ssl=1&w=1440`,
			background_11 = backgroundRAW + `?ssl=1&w=1536`,
			background_12 = backgroundRAW + `?ssl=1&w=1600`,
			background_13 = backgroundRAW + `?ssl=1&w=1680`,
			background_14 = backgroundRAW + `?ssl=1&w=1920`;

		if (this.props.index === 0) {
			TitleElement = "h1";
			SectionContent = "90ch";
		} else {
			TitleElement = "h2";
			SectionContent = "70ch";
		}

		if (alignment === "right") {
			heroAlign = "flex-end";
		} else if (alignment === "left") {
			heroAlign = "flex-start";
		}

		const HeroElement = styled.section`
			align-items: ${heroAlign ? heroAlign : "center"};
			display: flex;
			flex-direction: column;
			justify-content: center;
			min-height: ${elementSize ? elementSize + "vh" : "400px"};
			overflow: hidden;
			padding: 48px;
			position: relative;

			background-color: ${backgroundColour
				? backgroundColour
				: "var(--primary)"};
			color: white;
			text-align: ${heroAlign ? "left" : "center"};

			&:before {
				content: "";
				display: block;
				height: 100%;
				left: 0;
				position: absolute;
				top: 0;
				width: 100%;
				z-index: 2;

				background: rgba(20, 18, 19, ${overlay ? overlay : "0.8"});
			}

			& > * {
				position: static;
				z-index: 2;
			}

			.hero__content {
				max-width: ${SectionContent};
				padding: 32px;
			}

			.hero__image,
			.hero__image > * {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 1;

				object-fit: cover;
			}

			& + *:not(.hero):not(.ignore) {
				margin-top: 64px;
			}

			& + .hero {
				margin-top: 0;
			}

			.section--description {
				&__before,
				&__after {
					height: 300px;
					position: absolute;
					width: 300px;

					background-image: url(${withPrefix("images/logo--white.png")});
					background-repeat: no-repeat;
					background-size: 300px;
					animation-duration: 60s;
					animation-name: rotate360;
					animation-iteration-count: infinite;
					transform-origin: center center;
					animation-timing-function: linear;
				}

				&__before {
					left: -150px;
					top: -150px;
				}

				&__after {
					bottom: -150px;
					right: -150px;
				}
			}

			@keyframes rotate360 {
				from {
					transform: rotate(0deg);
				}

				to {
					transform: rotate(360deg);
				}
			}
		`;

		return (
			<HeroElement className="hero" data-name={props.name}>
				<div className="hero__content">
					<TitleElement>{props.title}</TitleElement>
					<div
						dangerouslySetInnerHTML={{
							__html: removeOrphans(autoParagraph(props.content))
						}}
					/>
				</div>
				{props.backgroundImage ? (
					<picture className="hero__image">
						<source
							media="(min-width: 1920px)"
							srcSet={props.backgroundImage}
						/>
						<source media="(min-width: 1680px)" srcSet={background_14} />
						<source media="(min-width: 1600px)" srcSet={background_13} />
						<source media="(min-width: 1536px)" srcSet={background_12} />
						<source media="(min-width: 1440px)" srcSet={background_11} />
						<source media="(min-width: 1366px)" srcSet={background_10} />
						<source media="(min-width: 1280px)" srcSet={background_09} />
						<source media="(min-width: 1024px)" srcSet={background_08} />
						<source media="(min-width: 768px)" srcSet={background_07} />
						<source media="(min-width: 720px)" srcSet={background_06} />
						<source media="(min-width: 414px)" srcSet={background_05} />
						<source media="(min-width: 375px)" srcSet={background_04} />
						<source media="(min-width: 360px)" srcSet={background_03} />
						<source media="(min-width: 320px)" srcSet={background_02} />
						<source media="(min-width: 300px)" srcSet={background_01} />
						<img src={props.backgroundImage} alt={props.title} />
					</picture>
				) : null}
			</HeroElement>
		);
	}
}
