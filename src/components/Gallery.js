import React, { Component } from 'react';

class Gallery extends Component {
	render(){
		return(
			<div className="container-fluid">
				<div class="row">
					<h2 class="animated pulse" id="mywork">my work.</h2>
				</div>
				<div className="row box">
					<div className="col-sm-4">
						<div class="box1 materialboxed"> </div>
								
					</div>
					<div className="col-sm-4">
						<div class="box2 materialboxed"> </div>
					</div>

					<div className="col-sm-4">
						<div class="box3 materialboxed"></div>

					</div>

				</div>
				<div className="row box">
					<div className="col-sm-4">
						<div class="box4 materialboxed"></div>
						
					</div>
					<div className="col-sm-4">
						<div class="box5 materialboxed"></div>

					</div>
					<div className="col-sm-4">
						<div class="box6 materialboxed"></div>

					</div>
				</div>

			</div>
		)
	}

};

export default Gallery;