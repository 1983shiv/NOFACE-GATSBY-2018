import React, { Component } from "react";
import { graphql, Link, StaticQuery } from "gatsby";
import styled from "styled-components";

import {
	autoParagraph,
	decodeHTML,
	flattenSlug,
	httpTohttps,
	removeDimensions,
	removeOrphans,
	slugTitle
} from "../helpers";

import Logo from "../atoms/logo";

import HeaderNavigation from "../molecules/headerNavigation";

const HeaderComponent = styled.header`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	left: 0;
	padding: 16px;
	position: absolute;
	top: 0;
	width: 100%;
	z-index: 101;

	font-weight: 700;

	h5 {
		display: none;
	}

	.logo {
		min-width: 50px;
		position: relative;
		width: 50px;

		&__path {
			animation-duration: 1s;
			animation-iteration-count: 1;
			animation-name: draw;
			animation-timing-function: linear;
			animation-timing-function: ease;

			animation-fill-mode: forwards;
			fill: none;
			stroke: white;
			stroke-dasharray: 142.47500610351562px;
			stroke-dashoffset: 142.47500610351562px;
			stroke-linecap: round;
			stroke-miterlimit: 10;
			stroke-width: 10;
		}
	}

	@keyframes draw {
		to {
			stroke-dashoffset: 0;
		}
	}

	@media (min-width: 768px) {
		flex-direction: row;
		padding: 16px 32px;
	}
`;

export default class header extends Component {
	render() {
		return (
			<StaticQuery
				query={graphql`
					query GetHeaderContent {
						allNoFaceMenu {
							edges {
								node {
									id
									slug
									content {
										item_id
										title
										url
									}
								}
							}
						}
					}
				`}
				render={data => (
					<HeaderComponent>
						<div className="logo">
							<Link to="/">
								<Logo />
								<h5 className="hide">NoFace Designs</h5>
							</Link>
						</div>

						{data.allNoFaceMenu.edges.map(
							(data, i) =>
								data.node.slug == "header-menu" ? (
									<HeaderNavigation key={i} data={data.node} />
								) : null
						)}
					</HeaderComponent>
				)}
			/>
		);
	}
}
