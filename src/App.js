import React, { Component } from 'react';

import './App.css';

import NavBar from './components/Nav';
import Services from './components/Services';
import About from './components/AboutMe';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="main-top" id="main-top">
         <NavBar />

         <div class="main-box">  
              <div class="jumbotron jumbotron-fluid" id="myjumbo">
                <div class="container">
                  <h1 class="display-4">world of photography</h1>
                  <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                  <a id="learnBtn" class="waves-effect btn" style={{height: '60px', width: '150px', paddingTop: '1%' , backgroundColor: 'rgba(89, 72, 107,0.8)', border: '2px solid white', borderStyle: 'double'}}>learn more</a>
                </div>
              </div>
          </div>
        
      </div>
       
  
        <div className="container-fluid" id="myservices">
          
                <Services  
                    
                />
         
        </div>

        <div className="container-fluid" id="mygallery">

              <Gallery /> 

        </div>

         <div className="container-fluid" id="aboutme">
    
              <About />

        </div>

        <div className="container-fluid" id="contactme">

              <Contact />

        </div>

        <div className="container-fluid">

              <Footer />

        </div>
       
        
      </div>
    );
  }
}

export default App;
