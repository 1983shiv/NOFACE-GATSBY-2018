import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const HeroElement = styled.section`
	min-height: 300px;
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 48px;
	align-items: center;
	justify-content: center;
	background-color: ${props =>
		props.backgroundColour ? props.backgroundColour : "var(--primary)"};
	color: white;
	text-align: center;

	h2 {
		margin: 0;
	}

	& > * {
		position: relative;
		z-index: 2;
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
`;

export default class hero extends Component {
	render() {
		return (
			<HeroElement className="hero">
				<h2>{this.props.title}</h2>
				<div dangerouslySetInnerHTML={{ __html: this.props.content }} />
				<img
					className="hero__image"
					src="https://dummyimage.com/1920x1080.png"
					alt={this.props.backgroundImage}
				/>
			</HeroElement>
		);
	}
}
