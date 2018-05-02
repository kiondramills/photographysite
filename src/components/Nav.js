import React, { Component } from 'react';


class NavBar extends Component {
	render(){
		return (

			<div className="row navbar-fixed">
				<nav>
				    <div className="nav-wrapper">
				    	<div className="col s4">
				    		 <a href="#main-top" class="mylogo">nina rose photography</a>
				    	</div>
				     	<div className="col s8">
				     		<ul id="nav-mobile" class="right hide-on-med-and-down">
					        <li><a href="#main-top" class="navy">home</a></li>
					        <li><a href="#myservices" class="navy">services</a></li>
					        <li><a href="#mygallery" class="navy">gallery</a></li>
					        <li><a href="#aboutme" class="navy">about</a></li>
					        <li><a class="navy" href="#contactme">contact me</a></li>
					        <li><a href="#" class="navy"><i class="fas fa-sign-in-alt"></i></a></li>
					      	
					      </ul>
				     	</div>
					      
				    </div>
				</nav>
        		
			</div>
		)
	}

};

export default NavBar;