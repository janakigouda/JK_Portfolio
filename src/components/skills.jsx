import React, { Component } from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import bootstrap from "../images/bootstrap.png";
import angular from "../images/angular.png";
import git from "../images/git.png";
import mongo from "../images/mongo.png";
import mysql from "../images/mysql.png";
import node from "../images/node.png";
import php from "../images/php.png";
import react from "../images/react.png";
import ts from "../images/ts.png";

export default class Skills extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="skills">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Skills</span>
                <h2 className="colorlib-heading animate-box">PROFICIENCIES</h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-2 col-sm-3 animate-box main-card"
                data-animate-effect="fadeInLeft"
              >
                <div className="card">
                  <div className="card1">
                    <div className="con">
                      <div className="images">
                        <img src={html} alt="html" className="skil-img" />
                      </div>
                      <p>HTML 5</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-2 col-sm-3 animate-box main-card"
                data-animate-effect="fadeInLeft"
              >
                <div className="card">
                  <div className="card1">
                    <div className="con">
                      <div className="images">
                        <img src={css} alt="html" className="skil-img" />
                      </div>
                      <p>CSS 3</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-2 col-sm-3 animate-box main-card"
                data-animate-effect="fadeInLeft"
              >
                <div className="card">
                  <div className="card1">
                    <div className="con">
                      <div className="images">
                        <img src={js} alt="html" className="skil-img" />
                      </div>
                      <p>JAVASCRIPT</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-2 col-sm-3 animate-box main-card"
                data-animate-effect="fadeInLeft"
              >
                <div className="card">
                  <div className="card1">
                    <div className="con">
                      <div className="images">
                        <img src={react} alt="html" className="skil-img" />
                      </div>
                      <p>REACT JS</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-2 col-sm-3  animate-box main-card"
                data-animate-effect="fadeInLeft"
              >
                <div className="card">
                  <div className="card1">
                    <div className="con">
                      <div className="images">
                        <img src={ts} alt="html" className="skil-img" />
                      </div>
                      <p>TypeScript</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-2 col-sm-3 animate-box main-card"
                data-animate-effect="fadeInLeft"
              >
                <div className="card">
                  <div className="card1">
                    <div className="con">
                      <div className="images">
                        <img src={angular} alt="html" className="skil-img" />
                      </div>
                      <p>ANGULAR JS</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-2 col-sm-3 animate-box main-card"
                data-animate-effect="fadeInLeft"
              >
                <div className="card">
                  <div className="card1">
                    <div className="con">
                      <div className="images">
                        <img src={mongo} alt="html" className="skil-img" />
                      </div>
                      <p>MONGO DB</p>
                    </div>
                  </div>
                </div>
              </div>
            {/* </div>
            <div className="row"> */}
              <div
                className="col-md-2 col-sm-3 animate-box main-card"
                data-animate-effect="fadeInLeft"
              >
                <div className="card">
                  <div className="card1">
                    <div className="con">
                      <div className="images">
                        <img src={mysql} alt="html" className="skil-img" />
                      </div>
                      <p>MYSQL</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-2 col-sm-3 animate-box main-card"
                data-animate-effect="fadeInLeft"
              >
                <div className="card">
                  <div className="card1">
                    <div className="con">
                      <div className="images">
                        <img src={node} alt="html" className="skil-img" />
                      </div>
                      <p>NODE JS</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-2 col-sm-3 animate-box main-card"
                data-animate-effect="fadeInLeft"
              >
                <div className="card">
                  <div className="card1">
                    <div className="con">
                      <div className="images">
                        <img src={git} alt="html" className="skil-img" />
                      </div>
                      <p>GIT</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-2 col-sm-3 animate-box main-card"
                data-animate-effect="fadeInLeft"
              >
                <div className="card">
                  <div className="card1">
                    <div className="con">
                      <div className="images">
                        <img src={php} alt="html" className="skil-img" />
                      </div>
                      <p>PHP</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-2 col-sm-3 animate-box main-card"
                data-animate-effect="fadeInLeft"
              >
                <div className="card">
                  <div className="card1">
                    <div className="con">
                      <div className="images">
                        <img src={bootstrap} alt="html" className="skil-img" />
                      </div>
                      <p>BOOTSTRAP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
