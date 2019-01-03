import React, { Component } from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";

export default class hero extends Component {
	render() {
		const props = this.props;
		const alignment = props.alignment;
		const backgroundColour = props.backgroundColour;
		const elementSize = props.elementSize;
		const overlay = "0." + props.overlay;

		var heroAlign;
		var TitleElement;
		var SectionContent;

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
				position: relative;
				z-index: 2;
			}

			.hero__content {
				max-width: ${SectionContent};
				padding: 32px;
			}

			.hero__image {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 1;

				object-fit: cover;
			}

			& + * {
				margin-top: 64px;
			}

			& + .hero {
				margin-top: 0;
			}
		`;

		return (
			<HeroElement className="hero" data-name={this.props.name}>
				<div className="hero__content">
					<TitleElement>{this.props.title}</TitleElement>
					<div dangerouslySetInnerHTML={{ __html: this.props.content }} />
				</div>
				{this.props.backgroundImage ? (
					<img
						className="hero__image"
						src={this.props.backgroundImage}
						alt={this.props.title}
					/>
				) : null}
			</HeroElement>
		);
	}
}
