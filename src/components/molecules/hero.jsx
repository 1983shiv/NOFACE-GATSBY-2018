import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const HeroElement = styled.section`
	height: 300px;
	display: flex;
	padding: 48px;
	align-items: center;
	justify-content: center;
	background: blue;
	color: white;
	text-align: center;

	h2 {
		margin: 0;
	}
`;

export default class hero extends Component {
	render() {
		return (
			<HeroElement className="hero">
				<h2>{this.props.title}</h2>
			</HeroElement>
		);
	}
}
