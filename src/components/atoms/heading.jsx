import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export default class heading extends Component {
	render() {
		const Tag = "h1";

		return <Tag>{this.props.text}</Tag>;
	}
}
