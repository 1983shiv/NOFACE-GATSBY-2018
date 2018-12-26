import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Logo from "../atoms/logo";

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
	padding: 16px;

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
			animation-iteration-count: 1;

			stroke-linecap: round;
			stroke-miterlimit: 10;
			fill: none;
			stroke: white;
			stroke-width: 10;
			stroke-dasharray: 142.47500610351562px;
			stroke-dashoffset: 142.47500610351562px;
			animation-fill-mode: forwards;
		}
	}

	@keyframes draw {
		to {
			stroke-dashoffset: 0;
		}
	}

	@media (min-width: 768px) {
		padding: 16px 32px;
		flex-direction: row;
	}
`;

export default class header extends Component {
	render() {
		return (
			<HeaderComponent>
				<div className="logo">
					<Link to="/">
						<Logo />
						<h5 className="hide">NoFace Designs</h5>
					</Link>
				</div>

				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/work">Work</Link>
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
