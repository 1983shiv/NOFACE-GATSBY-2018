import React, { Component } from "react";
import { Link } from "gatsby";
import LazyLoad from "react-lazyload";
import styled from "styled-components";

import {
	autoParagraph,
	decodeHTML,
	httpTohttps,
	removeDimensions,
	removeOrphans,
	slugTitle
} from "../helpers";

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
	}

	.testimonial__client {
		margin-bottom: 0;

		font-style: italic;
	}
`;

export default class testimonial extends Component {
	render() {
		const { content, clientName, image } = this.props;

		return (
			<React.Fragment>
				<TestimonialElement>
					<h2>Testimonial</h2>
					<div className="testimonial">
						<LazyLoad offset={400}>
							<img
								src={this.props.image}
								className=""
								alt={"Photograph of " + this.props.clientName}
							/>
						</LazyLoad>
						<div className="testimonial__content">
							<div
								dangerouslySetInnerHTML={{
									__html: autoParagraph(this.props.content)
								}}
							/>
							<p className="testimonial__client">- {this.props.clientName}</p>
						</div>
					</div>
				</TestimonialElement>
			</React.Fragment>
		);
	}
}
