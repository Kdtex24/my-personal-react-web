import React, { Component } from 'react'
export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpeg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Kedeayei Okoi</a></h1>
              <span className="email"><i className="icon-mail"></i> Kedeayeiokoi@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#education" data-nav-section="education">Education</a></li>
                  {/*
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  <li><a href="#blog" data-nav-section="blog">Blog</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                  */}
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/Kedeayei" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /> Facebook</a></li>
                <li><a href="https://twitter.com/kdtex" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /> Twitter</a></li>
                <li><a href="https://www.instagram.com/kdtex/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /> Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/Kedeayei OKoi/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /> Linkedin</a></li>
                <li><a href="https://github.com/Kdtex24" target="_blank" rel="noopener noreferrer"><i className="icon-github"> Github</i></a></li>
                <li><a href="https://medium.com/@Kedeayei" target="_blank" rel="noopener noreferrer"><i className="icon-blogger"> Medium</i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Designed By <a href="https://facebook.com/kedeayei" target="_blank" rel="noopener noreferrer"><strong>Kedeayei Okoi</strong></a> 
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
