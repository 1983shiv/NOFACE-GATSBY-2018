import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export default class heading extends Component {
	render() {
		var className, Tag;

		this.props.semantic_level
			? (Tag = "h" + this.props.semantic_level)
			: (Tag = "h2");

		this.props.level
			? (className = "title--h" + this.props.level)
			: (className = "title");

		return <Tag className={className}>{this.props.text}</Tag>;
	}
}
