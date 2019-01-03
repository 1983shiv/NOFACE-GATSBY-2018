import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export default class heading extends Component {
	render() {
		const Tag = "h" + this.props.semantic_level;
		const className = "title--h" + this.props.level;

		return <Tag className={className}>{this.props.text}</Tag>;
	}
}
