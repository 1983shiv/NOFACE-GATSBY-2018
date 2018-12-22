import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export default class cases extends Component {
	render() {
		return (
			<div className="col-12 col-md-6 col-lg-4 case-study">
				<div className="case-study__thumbnail">
					<Link to="/">
						<img
							src="https://s3-eu-west-2.amazonaws.com/noface.co.uk/wp-content/uploads/2018/07/17180036/FibonARTcci-Auctions-Featured-Image-406x261.png"
							className=""
							alt=""
						/>
					</Link>
				</div>
				<div className="case-study__information">
					<Link to="/">
						<h3>FibonARTcci Auctions</h3>
					</Link>
					<p>
						FibonARTcci Auctions approached NoFace with a challenge to design
						and develop a fully responsive website that gave showcased their
						local art show.
					</p>
				</div>
				<Link to="/">Learn more about this case study</Link>
			</div>
		);
	}
}
