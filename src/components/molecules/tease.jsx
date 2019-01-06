import React, { Component } from "react";
import { Link } from "gatsby";
import LazyLoad from "react-lazyload";
import styled from "styled-components";

import { decodeHTML } from "../helpers";

const TeaseElement = styled.div`
	margin-bottom: 32px;

	@media (min-width: 768px) {
		margin-bottom: 64px;
	}

	&:active,
	&:focus,
	&:hover {
		.tease__thumbnail {
			transform: scale(1.05);
		}
	}

	.tease__information {
		a {
			color: inherit;
			text-decoration: none;
		}
	}

	.tease__link {
		margin-top: auto;
		padding-bottom: 4px;

		border-bottom: 1px solid rgba(0, 0, 255, 0);
		text-decoration: none;
		transition: 0.2s border-bottom ease;

		&:active,
		&:focus,
		&:hover {
			border-bottom: 1px solid rgba(0, 0, 255, 1);
		}
	}

	.tease__thumbnail {
		transform: scale(1);
		transition: 0.2s transform ease;
	}
`;

export default class tease extends Component {
	render() {
		const { excerpt, image, slug, title, type } = this.props;
		let className = "tease tease--" + type;

		return (
			<TeaseElement className={className}>
				<div className="tease__thumbnail">
					<Link to={slug}>
						<LazyLoad offset={200}>
							<img
								src={image}
								className=""
								alt={decodeHTML(title) + " Featured Image"}
							/>
						</LazyLoad>
					</Link>
				</div>
				<div className="tease__information">
					<Link to={slug}>
						<h3>{decodeHTML(title)}</h3>
					</Link>
					<p>{excerpt}</p>
				</div>
				{type === "case" ? (
					<Link to={slug} className="tease__link">
						Learn more about this case study
					</Link>
				) : (
					<Link to={slug} className="tease__link">
						Continue reading this insight
					</Link>
				)}
			</TeaseElement>
		);
	}
}
