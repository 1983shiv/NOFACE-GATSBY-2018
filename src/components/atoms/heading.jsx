import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export default class heading extends Component {
	render() {
		const { level, semantic_level, text } = this.props;
		var className, Tag;

		semantic_level ? (Tag = "h" + semantic_level) : (Tag = "h2");

		level ? (className = "title--h" + level) : (className = "title");

		return <Tag className={className}>{text}</Tag>;
	}
}
