import React, { Component } from "react";
import cows from "../images/cowoncloud.png";
import apple from "../images/apple.png";
import desi from "../images/desistores.png";
import magic from "../images/magic.png";
import big from "../images/big.png";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading animate-box">
                  Recent Projects
                </h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="project">
                  <div className="desc">
                    <div className="con">
                      <div className="project_img">
                        <img src={cows} alt="img" />
                      </div>
                      <h3>
                        <a href="https://super-cool-site-by-janaki-kangalgouda-56eac.netlify.app/">
                          Cows On Cloud
                        </a>
                      </h3>
                      <span>React Application</span>
                      <br></br>
                      <h4>
                        Tech Stack: React JS (React routers) | CSS | Owl
                        carousel{" "}
                      </h4>
                      <p>
                        A web application is about the Adis (animal digital
                        information systems) technologies main application, with
                        the informaton about that technologies.
                      </p>
                      <p className="icon">
                        <span>
                          <a href="https://github.com/janakigouda/cows-on-cloud-website">
                            <i className="icon-share3" />
                          </a>
                        </span>
                        <span>
                          <a
                            href="https://super-cool-site-by-janaki-kangalgouda-56eac.netlify.app/"
                            rel="noreferrer"
                            target="_blank"
                          >
                            <i className="icon-github" /> Go To Website
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="project">
                  <div className="desc">
                    <div className="con">
                      <div className="project_img">
                        <img src={apple} alt="img" />
                      </div>
                      <h3>
                        <a
                          href="https://lucent-parfait-62c9f0.netlify.app/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Apple Tv - Clonning
                        </a>
                      </h3>
                      <span>Web Application </span>
                      <br></br>
                      <h4>
                        Tech Stack: HTML | CSS | JS | Owl Carousel | Local
                        storage
                      </h4>
                      <p>
                        Apple TV+ web application is a streaming service
                        featuring Apple Originals —award-winning series,
                        compelling dramas, kids' entertainment, comedies, and
                        more
                      </p>
                      <p className="icon">
                        <span>
                          <a href="https://github.com/arnab9593/appletv">
                            <i className="icon-share3" />
                          </a>
                        </span>
                        <span>
                          <a href="https://lucent-parfait-62c9f0.netlify.app/">
                            <i className="icon-github" /> Go To Website
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="project">
                  <div className="desc">
                    <div className="con">
                      <div className="project_img">
                        <img src={big} alt="img" />
                      </div>
                      <h3>
                        <a
                          href="https://taupe-sopapillas-55edd5.netlify.app/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Big Basket - Clonning
                        </a>
                      </h3>
                      <span>E-Commerce website</span>
                      <br></br>
                      <h4>
                        Tech Stack: HTML | CSS | JS | Owl Carousel | Local
                        storage
                      </h4>
                      <p>
                        E-commerce Website. Designed a small e-commerce
                        application for groceries.
                      </p>
                      <p className="icon">
                        <span>
                          <a href="https://github.com/janakigouda/spotless-wing-656">
                            <i className="icon-share3" />
                          </a>
                        </span>
                        <span>
                          <a href="https://taupe-sopapillas-55edd5.netlify.app/">
                            <i className="icon-github" /> Go To Website
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="project">
                  <div className="desc">
                    <div className="con">
                      <div className="project_img">
                        <img src={desi} alt="img" />
                      </div>
                      <h3>
                        <a
                          href="https://janakigouda.github.io/desistores-web/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Organic Store
                        </a>
                      </h3>
                      <span>E-Commerce website</span>
                      <br></br>
                      <h4>Tech Stack: HTML | CSS | JS | Owl Carousel | </h4>
                      <p>
                        E-commerce Website. Designed a small e-commerce
                        application for organic products.
                      </p>
                      <p className="icon">
                        <span>
                          <a href="https://github.com/janakigouda/desistores-web">
                            <i className="icon-share3" />
                          </a>
                        </span>
                        <span>
                          <a href="https://janakigouda.github.io/desistores-web/">
                            <i className="icon-github" /> Go To Website
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInBottom"
              >
                <div className="project">
                  <div className="desc">
                    <div className="con">
                      <div className="project_img">
                        <img src={magic} alt="img" />
                      </div>
                      <h3>
                        <a href="https://janakigouda.github.io/phpGame/">
                          Magic Game
                        </a>
                      </h3>
                      <span>Game</span>
                      <br></br>
                      <h4>Tech Stack : HTML | CSS | PHP</h4>
                      <p>
                        Magic Game for Fun. Developed to gain knowledge and
                        improve technical skills using PHP.
                      </p>
                      <p className="icon">
                        <span>
                          <a href="https://github.com/janakigouda/phpGame">
                            <i className="icon-share3" />
                          </a>
                        </span>
                        <span>
                          <a
                            href="https://janakigouda.github.io/phpGame/"
                            rel="noreferrer"
                            target="_blank"
                          >
                            <i className="icon-github" /> Go To Website
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 animate-box">
                <p>
                  <a
                    href="https://github.com/janakigouda"
                    className="btn btn-primary btn-lg btn-load-more"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Load more <i className="icon-reload" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
