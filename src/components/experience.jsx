import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="experience">
        <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at ADIS Technologies <span>June 2020 - May 2022</span></h2>
                        <p>I have joined the Intertec Softwares Pvt Ltd as a Associate Software Engineer. My major part of the work has been into the field of developing user project using Angular JS (Continuous Integration & Continuous Development) .</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at ADIS Technologies <span>Oct 2020 - May 2021</span></h2>
                        <p>I have joined the ADIS Technologies as a Web Developer-Intern in the React js team. My major part of the work has been into the field of developing user interface (Continuous Integration & Continuous Development) .</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at Mobiezy Solutions<span>Nov 2018- Jan 2019</span></h2>
                        <p>I have joined the Mobiezy Solutions as a Application Development-Intern in the development team. My major part of the work has been into the field of developing user interface and learning the technologies.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
