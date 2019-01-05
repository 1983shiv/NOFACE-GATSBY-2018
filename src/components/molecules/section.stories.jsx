import React, { Component } from "react";
import { Link } from "gatsby";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { decodeHTML } from "../helpers";

const SectionElement = styled.section`
	padding: 64px 16px;

	.section__content {
		margin: 0 auto;
		max-width: 900px;
		padding: 0 32px;
	}
`;

// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
function hexToRgb(hex) {
	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(shorthandRegex, function(m, r, g, b) {
		return r + r + g + g + b + b;
	});

	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16)
		  }
		: null;
}

var bg = hexToRgb("#000"),
	colour;

var red = bg["r"];
var green = bg["g"];
var blue = bg["b"];

var o = Math.round(
	(parseInt(red) * 299 + parseInt(green) * 587 + parseInt(blue) * 114) / 1000
);

o > 125 ? (colour = "#141213") : (colour = "#FFF");

storiesOf(`Molecules`, module).add(`Section`, () => (
	<SectionElement className="ignore" textColour={colour}>
		<div className="section__content">
			<p>yo</p>
		</div>
	</SectionElement>
));
