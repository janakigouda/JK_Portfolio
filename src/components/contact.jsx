import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <section id="contact-page" className="colorlib-work" data-section="contact">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">
                  How you can reach out to me?
                </span>
                <h2 className="colorlib-heading animate-box">Contact</h2>
              </div>
            </div>
            <div className="row">
              <div className="contact-footer animate-box">
                <h3>Let's Connect</h3>
                <p>
                  <small>
                    <span className="email">
                      <a className="social" href="mailto:janugouda1008@gmail.com">
                        <i className="icon-mail"></i>{" "}
                      </a>
                    </span>
                    <span className="email">
                      <a
                        className="social"
                        href="https://github.com/janakigouda"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="icon-github"></i>{" "}
                      </a>
                    </span>
                    <span className="email">
                      <a
                        className="social"
                        href="https://www.linkedin.com/in/janaki-kangalgouda-809936169"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="icon-linkedin2"></i>{" "}
                      </a>
                    </span>
                  </small>
                </p>
              </div>
              <p className="end animate-box">
                <h4>
                  Made with <i className="icon-heart" aria-hidden="true" /> and{" "}
                  <i className="icon-beer" aria-hidden="true"></i>
                </h4>
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
