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

	h5 {
		display: none;
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

						{data.allNoFaceMenu.edges.map((data, i) =>
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
