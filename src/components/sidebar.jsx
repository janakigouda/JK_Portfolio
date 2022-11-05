import React, { Component } from "react";
import img from "../images/about2.jpg";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{ backgroundImage: `url(${img})` }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">Janaki Kangalgouda</a>
              </h1>
              {/* <span className="email"><i className="icon-mail"></i> janakikangalgouda@gmail.com</span> */}
              {/* <span className="email"><i className="icon-phone"></i> +91-7619142199</span> */}
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#home" data-nav-section="home">
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#skills" data-nav-section="skills">
                      Proficiencies
                    </a>
                  </li>
                  <li>
                    <a href="#experience" data-nav-section="experience">
                      Experience
                    </a>
                  </li>
                  <li>
                    <a href="#projects" data-nav-section="projects">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#timeline" data-nav-section="timeline">
                      Timeline
                    </a>
                  </li>
                  <li>
                    <a href="#statistics" data-nav-section="statistics">
                      Statistics
                    </a>
                  </li>
                  <li>
                    <a href="#contact" data-nav-section="contact">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/file/d/1QYnZzvWgHSURglhnAWdl3cT-ArKvWClm/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      Resume
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <div className="contact">
                {/* <ul> */}
                {/* <li> */}
                <a
                  href="https://www.linkedin.com/in/janakikangalgouda/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-linkedin2" />
                </a>
                {/* </li> */}
                {/* <li> */}
                <a
                  href="https://github.com/janakigouda"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-github"></i>
                </a>
                {/* </li> */}
                {/* <li> */}
                <a
                  href="https://www.hackerrank.com/janakikangalgou1?hr_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-hackerrank"></i>
                </a>
                {/* </li> */}
                {/* </ul> */}
              </div>
            </nav>
            <div className="colorlib-footer">
              <p>
                <small>
                  <span className="email">
                    <i className="icon-mail"></i> janakikangalgouda@gmail.com
                  </span>
                  <span className="email">
                    <i className="icon-phone"></i> +91-7619142199
                  </span>
                </small>
              </p>
              <p>
                <small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and{" "}
                  <i className="icon-beer" aria-hidden="true"></i>
                </small>
              </p>
              {/* <p><small>
                                Something coming soon !!
                            </small></p> */}
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
