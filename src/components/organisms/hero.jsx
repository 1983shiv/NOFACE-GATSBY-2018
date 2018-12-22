import React, { Component } from "react";

export default class hero extends Component {
	render() {
		return (
			<section className="section section--image height--large flex flex--align-center flex--justify-center text-color--white text-align--center">
				<div className="width--content">
					<div>
						<h1>Providing Your Business With A Unique Identity</h1>
						<div className="scroll-downs">
							<div className="mousey">
								<div className="scroller" />
							</div>
						</div>
					</div>
				</div>
				<div className="section__background background--cover background-overlay--dark" />
			</section>
		);
	}
}
