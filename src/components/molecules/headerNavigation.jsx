import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const HeaderNav = styled.nav`
	max-width: 380px;
	width: 100%;

	font-size: 1.6rem;
	line-height: 1.45;

	a {
		display: inline-block;
		position: relative;

		color: white;
		text-decoration: none;
		transition: color 0.3s;
		vertical-align: middle;

		&:hover {
			&:after {
				transform: scaleX(1);
				transition: transform 0.51s cubic-bezier(0.165, 0.84, 0.44, 1);
			}
		}

		&:after {
			content: "";
			display: block;
			height: 1px;
			width: 100%;

			background: white;
			transform: scaleX(0);
			transform-origin: left center;
			transition: transform 0.31s cubic-bezier(0.165, 0.84, 0.44, 1);
		}
	}

	li {
		display: inline-block;

		letter-spacing: 0.2px;

		&:first-of-type {
			display: none;

			@media (min-width: 400px) {
				display: inherit;
			}
		}
	}

	ul {
		align-items: center;
		display: flex;
		justify-content: space-between;
		margin: 0;
		padding-left: 0;

		list-style: none;
	}
`;

export default class headerNavigation extends Component {
	render() {
		const { content } = this.props.data;

		return (
			<HeaderNav>
				<ul>
					{content.map(item => (
						<li key={item.item_id}>
							<Link to={item.url}>{item.title}</Link>
						</li>
					))}
				</ul>
			</HeaderNav>
		);
	}
}
