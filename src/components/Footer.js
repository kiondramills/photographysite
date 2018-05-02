import React, { Component } from 'react';

class Footer extends Component {
	render(){
		return(

        <footer class="page-footer" id="footer1">
          <div class="container" id="footer2">
            <div class="row">
              <div class="col l4 s12">
                <h5 class="white-text">nina rose photography</h5>
                <p class="grey-text text-lighten-4">Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.</p>
              </div>
              <div class="col l6 offset-l2 s12">
                <h5 class="white-text">connect with me.</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!"><i class="fab fa-facebook"></i> facebook</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!"><i class="fab fa-instagram"></i> instagram</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!"><i class="fab fa-twitter"></i> twitter</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!"><i class="fab fa-linkedin"></i> linkedin</a></li>

                </ul>
              </div>
            </div>
          </div>
          <div className="row">
          <div class="footer-copyright" id="footer3">
            <div class="container">
            © 2018 Copyright. All rights reserved. <span> <a class="grey-text text-lighten-4 center" href="#!">Website developed by <strong>Techjoy Unlimited.</strong></a></span>
           
            </div>
          </div>
          </div>
          
        </footer>
		)
	}
};

export default Footer;