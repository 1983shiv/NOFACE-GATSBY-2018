import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const ParagraphElement = styled.p`
	margin: 0;

	+ p {
		margin-top: 16px;
	}
`;

export default class paragraph extends Component {
	render() {
		return <ParagraphElement>{this.props.text}</ParagraphElement>;
	}
}
