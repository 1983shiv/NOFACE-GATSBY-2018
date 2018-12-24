import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const HeaderComponent = styled.header`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 101;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;

	width: 100%;
	padding: $spacing-default;

	font-weight: 700;

	a {
		color: ${props => props.colour || "white"};
	}

	h5 {
		display: none;
	}

	li {
		display: inline-block;
		letter-spacing: 0.2px;
	}

	nav {
		width: 100%;
		max-width: 275px;

		@media (min-width: 768px) {
			max-width: 380px;
		}
	}

	ul {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		min-width: 50px;
		width: 50px;
		position: relative;

		&__path {
			animation-name: draw;
			animation-duration: 1s;
			animation-timing-function: linear;
			animation-timing-function: ease;
			animation-iteration-count: 1; // Run only once

			stroke-linecap: round;
			stroke-miterlimit: 10;
			fill: none;
			stroke: $color-white;
			stroke-width: 10;
			stroke-dasharray: 142.47500610351562px;
			stroke-dashoffset: 142.47500610351562px;
			animation-fill-mode: forwards; // Stay on the last frame
		}
	}

	@keyframes draw {
		to {
			stroke-dashoffset: 0;
		}
	}

	@media (min-width: 768px) {
		padding: $spacing-default $spacing-large;
		flex-direction: row;
	}
`;

export default class header extends Component {
	render() {
		return (
			<HeaderComponent>
				<div className="logo">
					<a href="https://noface.co.uk">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.4 64.4">
							<g>
								<path
									className="logo__path"
									d="M16.3 58c-5.5-5.5-8.8-13-8.8-21.4s3.4-15.9 8.8-21.4 13-8.8 21.4-8.8 15.9 3.4 21.4 8.8c5.5 5.5 8.8 13 8.8 21.4S64.5 52.5 59.1 58"
								/>
								<path
									className="logo__path"
									d="M37.7 18.1c5.1 0 9.7 2.1 13.1 5.4s5.4 8 5.4 13.1-2.1 9.7-5.4 13.1-8 5.4-13.1 5.4S28 53 24.6 49.7s-5.4-8-5.4-13.1 2.1-9.7 5.4-13.1 8-5.4 13.1-5.4z"
								/>
							</g>
						</svg>
						<h5 className="hide">NoFace Designs</h5>
					</a>
				</div>

				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/">About</Link>
						</li>
						<li>
							<Link to="/">Work</Link>
						</li>
						<li>
							<Link to="/">Insights</Link>
						</li>
						<li>
							<Link to="/">Contact</Link>
						</li>
					</ul>
				</nav>
			</HeaderComponent>
		);
	}
}
