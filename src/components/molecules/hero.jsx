import React, { Component } from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";

export default class hero extends Component {
	render() {
		const backgroundColour = this.props.backgroundColour;
		const elementSize = this.props.elementSize;

		const HeroElement = styled.section`
			min-height: ${elementSize ? elementSize + "vh" : "400px"};
			position: relative;
			display: flex;
			flex-direction: column;
			padding: 48px;
			align-items: center;
			justify-content: center;
			background-color: ${backgroundColour
				? backgroundColour
				: "var(--primary)"};
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

		return (
			<HeroElement className="hero" data-name={this.props.name}>
				<Container>
					<Row>
						<Col sm={12}>
							<h2>{this.props.title}</h2>
							<div dangerouslySetInnerHTML={{ __html: this.props.content }} />
						</Col>
					</Row>
				</Container>
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
