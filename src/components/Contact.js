import React, { Component } from 'react';

class Contact extends Component {
	render(){
		return(

			<div className="container-fluid" id="contact">
				<div className="row">

					<div className="col-md-4" >
						<h1 style={{paddingTop: '30%'}}>contact me :-)</h1>
						<div>
							<a href="#" className="info"><i class="fas fa-phone-square"></i> 720.523.5555</a>
							<br/>
						</div>
						<div>
							<a href="#" className="info"><i class="fas fa-map-marker-alt"></i> 123 Main St.                      <br/> Denver, CO 80249</a>
							<br/>
						</div>
						<div>
							<a href="#" className="info"> </a>
						</div>
						<div>
							<a href="#" className="info"><i class="fas fa-envelope-open"></i> hello@ninarose.com </a>
							<br/>
						</div>
					</div>

					<div className="col-md-2">
						
					</div>

					<div className="col-md-6">
						<div className="container">
							<h5>share your info.</h5>
							<div class="row">
						    <form class="col s12" action="mailto:someone@example.com" method="post" enctype="text/plain">
						      <div class="row">
						        <div class="input-field">
						          <i class="material-icons prefix">account_circle</i>
						          <input id="icon_prefix" type="text" class="validate" />
						          <label for="icon_prefix">Full Name</label>
						        </div>
						      </div>
						      <div class="row">
						        <div class="input-field">
						          <i class="material-icons prefix">email</i>
						          <input id="icon_telephone" type="tel" class="validate" />
						          <label for="icon_telephone">Email</label>
						        </div>
						      </div>
						      <div class="row">
						        <div class="input-field">
						          <i class="material-icons prefix">phone</i>
						          <input id="icon_telephone" type="tel" class="validate" />
						          <label for="icon_telephone">Telephone</label>
						        </div>
						      </div>
						      <div class="row">
						        <div class="input-field">
						          <i class="material-icons prefix">message</i>
						          <textarea id="textarea1" class="materialize-textarea"></textarea>
						          <label for="icon_telephone">Message</label>
						        </div>
						      </div>
						      	<button class="btn waves-effect waves-light" type="submit" name="action">Submit
								   <i class="material-icons right">send</i>
								</button>

						    </form>
					  </div>
						</div>
					</div>


				</div>
			</div>

		)
			
		
	}

};

export default Contact;