import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { decodeHTML } from "../helpers";

const TestimonialElement = styled.div`
	margin: 64px auto;

	img {
		border-radius: 50%;
		margin-right: 32px;
		max-width: 128px;
	}

	.testimonial {
		align-items: center;
		display: flex;
		justify-content: space-around;

		p:last-of-type {
			margin-bottom: 0;

			font-style: italic;
		}
	}
`;

export default class testimonial extends Component {
	render() {
		return (
			<React.Fragment>
				<TestimonialElement>
					<h2>Testimonial</h2>
					<div className="testimonial">
						<img
							src={this.props.image}
							className=""
							alt={"Photograph of " + this.props.clientName}
						/>
						<div>
							<p>"{this.props.content}"</p>
							<p>- {this.props.clientName}</p>
						</div>
					</div>
				</TestimonialElement>
			</React.Fragment>
		);
	}
}
