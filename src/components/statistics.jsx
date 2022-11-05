import React, { Component } from "react";
import GitHubCalendar from "react-github-calendar";

export default class Statistics extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="statistics">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading animate-box">Statistics</h2>
              </div>
            </div>
            <div id="statistics">
              <div
                className="individualStat animate-box main-card"
                data-animate-effect="fadeInLeft"
              >
                <div>1200+</div>
                <div>
                  <h3>Hours</h3> of Full Stack Coding
                </div>
              </div>

              <div
                className="individualStat animate-box main-card"
                data-animate-effect="fadeInLeft"
              >
                <div style={{ border: "10px solid #7e2cde" }}>100+</div>
                <div>
                  <h3>Hackerrank</h3>Problems
                </div>
              </div>

              <div
                className="individualStat animate-box main-card"
                data-animate-effect="fadeInLeft"
              >
                <div>200+</div>
                <div>
                  <h3>Git</h3>Commits
                </div>
              </div>

              <div
                className="individualStat animate-box main-card"
                data-animate-effect="fadeInLeft"
              >
                <div style={{ border: "10px solid #7e2cde" }}>15+</div>
                <div>
                  <h3>Projects</h3>Done
                </div>
              </div>

              <div
                className="individualStat animate-box main-card"
                data-animate-effect="fadeInLeft"
              >
                <div>90+</div>
                <div>
                  <h3>Hours</h3> of Soft Skills Sessions
                </div>
              </div>
            </div>
            <div className="row git-calender">
              <div className="animate-box" data-animate-effect="fadeInLeft">
                <div className="cal">
                  <img
                    align="center"
                    width="100%"
                    src="https://activity-graph.herokuapp.com/graph?username=janakigouda&theme=github"
                    height="250"
                    alt="janakigouda"
                  />
                </div>
                <div className="cal2">
                  <div>
                    <img
                      // align="left"
                      width="50%"
                      src="https://github-readme-stats.vercel.app/api?username=janakigouda&show_icons=true&theme=radical"
                      alt="janakigouda"
                    />
                    <img
                      // align="right"
                      width="50%"
                      src="https://github-readme-streak-stats.herokuapp.com/?user=janakigouda&theme=radical"
                      alt="janakigouda"
                    />
                  </div>
                  <div className="cal">
                    <GitHubCalendar
                      username="janakigouda"
                      year={new Date().getFullYear()}
                      className="gitCal"
                    />
                  </div>
                  <div className="lang">
                  <img
                      src="https://github-readme-stats.vercel.app/api/top-langs/?username=janakigouda&layout=compact&text_color=daf7dc&bg_color=151515"
                      alt="janakigouda"
                    />
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
