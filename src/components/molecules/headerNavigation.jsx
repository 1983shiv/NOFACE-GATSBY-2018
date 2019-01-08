import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import v from "../../styles/_vars.scss";

const HeaderNav = styled.nav`
	flex: 1;

	font-size: 1.8rem;
	line-height: 1.45;

	a {
		display: inline-block;
		position: relative;

		color: ${props => props.theme.black};
		opacity: 0.8;
		text-decoration: none;
		text-transform: uppercase;
		transition: opacity 0.3s;
		vertical-align: middle;

		&[aria-current="page"] {
			opacity: 1;
		}

		&:active,
		&:focus,
		&:hover {
			opacity: 1;
		}
	}

	li {
		display: inline-block;
		margin-left: 24px;

		letter-spacing: 0.2px;

		&:first-of-type {
			display: none;
			margin-left: auto;

			@media (min-width: 400px) {
				display: inherit;
			}
		}

		&:last-of-type {
			margin-left: auto;
			a {
				opacity: 1;
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
	constructor(props) {
		super(props);
	}

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
