import React, { Component } from 'react';

class Services extends Component {


	render(){
		return(
			<div className="container-fluid" id="services">
				<div className="row">
						

			

						<h2>my services.</h2>
					<div className="col-md-4">
						<div className="icon">
							<img src={require('../img/camera.png')} />
						</div>
						<div>
							<h4> studio photos</h4>
							<p>
								Lorem ipsum dolor sit amet, at delicata recteque vel. Et ludus antiopam mei, id nam dicant scripta propriae, summo verear sed et. 
							</p>
						</div>

					</div>

					<div className="col-md-4">
						<div className="icon">
							<img src={require('../img/employee.png')}/>
						</div>
						<div>
							<h4> professional photos</h4>
							<p>
								Lorem ipsum dolor sit amet, at delicata recteque vel. Et ludus antiopam mei, id nam dicant scripta propriae, summo verear sed et. 
							</p>
						</div>
					</div>

						<div className="col-md-4">
						<div className="icon">
							<img src={require('../img/newlyweds.png')} />
						</div>
						<div>
							<h4> wedding photos</h4>
							<p>
								Lorem ipsum dolor sit amet, at delicata recteque vel. Et ludus antiopam mei, id nam dicant scripta propriae, summo verear sed et. 
							</p>
						</div>
					</div>

				</div>


				<div className="row">

					<div className="col-md-4">
						<div className="icon">
							<img src={require('../img/family.png')}/>
						</div>
						<div>
							<h4> family photos</h4>
							<p>
								Lorem ipsum dolor sit amet, at delicata recteque vel. Et ludus antiopam mei, id nam dicant scripta propriae, summo verear sed et. 
							</p>
						</div>

					</div>

					<div className="col-md-4">
						<div className="icon">
							<img src={require('../img/baby1.png')} />
						</div>
						<div>
							<h4> newborn photos</h4>
							<p>
								Lorem ipsum dolor sit amet, at delicata recteque vel. Et ludus antiopam mei, id nam dicant scripta propriae, summo verear sed et. 
							</p>
						</div>
					</div>

						<div className="col-md-4">
						<div className="icon">
							<img src={require('../img/smiling-girl.png')} />
						</div>
						<div>
							<h4> senior pictures</h4>
							<p>
								Lorem ipsum dolor sit amet, at delicata recteque vel. Et ludus antiopam mei, id nam dicant scripta propriae, summo verear sed et. 
							</p>
						</div>
					</div>

				</div>

			</div>
		)
	}

};

export default Services;