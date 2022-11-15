import React, { Component } from "react";
import cows from "../images/cowoncloud.png";
import apple from "../images/apple.png";
import desi from "../images/desistores.png";
import magic from "../images/magic.png";
import big from "../images/big.png";
import bitrix from "../images/bitrix.png";

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
                        <img src={bitrix} alt="img" />
                      </div>
                      <h3>
                        <a href="https://super-cool-site-by-janaki-kangalgouda-56eac.netlify.app/">
                          Bitrix24 - Clonning
                        </a>
                      </h3>
                      <span>MERN Application</span>
                      <br></br>
                      <h4>
                        <p>Tech Stack</p> <p>:ReactJS | Redux | NodeJS | ExpressJS | MongoDB | Chakra-UI</p>
                      </h4>
                      <p>
                      Bitrix24 is a united workspace that handles many aspects of daily operations and tasks .                      </p>
                      <p className="icon">
                        <span>
                          <a href="https://github.com/Hashal890/Bitrix24-Clone" target="_blank" rel="noopener noreferrer">
                            <i className="icon-github" />
                          </a>
                        </span>
                        <span>
                          <a
                            href="https://betrix24-clone.vercel.app/"
                            rel="noreferrer"
                            target="_blank"
                          >
                            <i className="icon-link2" /> Go To Website
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
                        <p>Tech Stack</p><p>: React JS (React routers) | CSS | Owl
                        carousel</p>
                      </h4>
                      <p>
                        A web application is about the Adis (animal digital
                        information systems) technologies main application, with
                        the informaton about that technologies.
                      </p>
                      <p className="icon">
                        <span>
                          <a href="https://github.com/janakigouda/cows-on-cloud-website" target="_blank" rel="noopener noreferrer">
                            <i className="icon-github" />
                          </a>
                        </span>
                        <span>
                          <a
                            href="https://super-cool-site-by-janaki-kangalgouda-56eac.netlify.app/"
                            rel="noreferrer"
                            target="_blank"
                          >
                            <i className="icon-link2" /> Go To Website
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
                        <p>Tech Stack</p><p>: HTML | CSS | JS | Owl Carousel | Local
                        storage</p>
                      </h4>
                      <p>
                        Apple TV+ web application is a streaming service
                        featuring Apple Originals —award-winning series,
                        compelling dramas, kids' entertainment, comedies, and
                        more
                      </p>
                      <p className="icon">
                        <span>
                          <a href="https://github.com/arnab9593/appletv" target="_blank" rel="noopener noreferrer">
                            <i className="icon-github" />
                          </a>
                        </span>
                        <span>
                          <a href="https://lucent-parfait-62c9f0.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <i className="icon-link2" /> Go To Website
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
                        <p>Tech Stack</p><p>: HTML | CSS | JS | Owl Carousel | Local
                        storage</p>
                      </h4>
                      <p>
                        E-commerce Website. Designed a small e-commerce
                        application for groceries.
                      </p>
                      <p className="icon">
                        <span>
                          <a href="https://github.com/janakigouda/spotless-wing-656" target="_blank" rel="noopener noreferrer">
                            <i className="icon-github" />
                          </a>
                        </span>
                        <span>
                          <a href="https://taupe-sopapillas-55edd5.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <i className="icon-link2" /> Go To Website
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
                      <h4><p>Tech Stack</p><p>: HTML | CSS | JS | Owl Carousel</p>  </h4>
                      <p>
                        E-commerce Website. Designed a small e-commerce
                        application for organic products.
                      </p>
                      <p className="icon">
                        <span>
                          <a href="https://janakigouda.github.io/desistores-web/" target="_blank" rel="noopener noreferrer">
                            <i className="icon-github" />
                          </a>
                        </span>
                        <span>
                          <a href="https://github.com/janakigouda/desistores-web" target="_blank" rel="noopener noreferrer">
                            <i className="icon-link2" /> Go To Website
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
