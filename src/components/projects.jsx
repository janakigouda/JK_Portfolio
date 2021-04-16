import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project">
									<div className="desc">
										<div className="con">
											<h3><a href="https://www.bharateshbca.com/alumni/">College Alumni</a></h3>
											<span>Web Development</span>
											<br></br>
											<h4>Gathering Alumni Information for College </h4>
											<p>Developed a simple website using php to collect the pass out  student’s information</p>
											<p className="icon">
												{/* <span><a href="/"><i className="icon-share3" /></a></span> */}
												<span><a href="https://www.bharateshbca.com/alumni/" rel="noreferrer" target="_blank"><i className="icon-eye" /> Go TO Website</a></span>
												{/* <span><a href="/"><i className="icon-heart" /> 49</a></span> */}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-2.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="Http://eternus.bharateshbca.com">ETERNUS </a></h3>
											<span>Web Development</span>
											<br></br>
											<h4>Registration Application for our college  </h4>
											<p>Developed a small application which describes our college fest  and tells about the games and its rules and also there is  registration for students.</p>
											<p className="icon">
												{/* <span><a href="/"><i className="icon-share3" /></a></span> */}
												<span><a href="Http://eternus.bharateshbca.com " rel="noreferrer" target="_blank"><i className="icon-eye" /> Go TO Website</a></span>
												{/* <span><a href="/"><i className="icon-heart" /> 49</a></span> */}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="http://www.lingayatkranti.com/subscribe ">LINGAYAT KRANTI</a></h3>
											<span>Payment Integration</span>
											<br></br>
											<h4>Payment Gateway Integration</h4>
											<p>Developed with my classmate to integrate PayTM payment  gateway for Lingayat Kranti newspaper Subscription. </p>
											<p className="icon">
												{/* <span><a href="/"><i className="icon-share3" /></a></span> */}
												<span><a href="http://www.lingayatkranti.com/subscribe " rel="noreferrer" target="_blank"><i className="icon-eye" /> Go TO Website</a></span>
												{/* <span><a href="/"><i className="icon-heart" /> 49</a></span> */}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://janakigouda.github.io/phpGame/">Magic Game</a></h3>
											<span>Game</span>
											<br></br>
											<h4>Magic Game for Fun</h4>
											<p>Developed to gain knowledge and improve technical skills using PHP.</p>
											<p className="icon">
												{/* <span><a href="/"><i className="icon-share3" /></a></span> */}
												<span><a href="https://janakigouda.github.io/phpGame/" rel="noreferrer" target="_blank"><i className="icon-eye" /> Go TO Website</a></span>
												{/* <span><a href="/"><i className="icon-heart" /> 49</a></span> */}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://janakigouda.github.io/desistores-web/" rel="noreferrer" target="_blank">Organic Store</a></h3>
											<span>Website</span>
											<br></br>
											<h4>E-commerce Website</h4>
											<p>Designed a small e-commerce application for organic products.</p>
											<p className="icon">
												{/* <span><a href="/"><i className="icon-share3" /></a></span> */}
												<span><a href="https://janakigouda.github.io/desistores-web/"><i className="icon-eye" /> Go TO Website</a></span>
												{/* <span><a href="/"><i className="icon-heart" /> 49</a></span> */}
											</p>
										</div>
									</div>
								</div>
							</div>
							{/* <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project">
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 06</a></h3>
											<span>Web Design</span>
											<br></br>
											<h4>Payment Gateway Integration</h4>
											<p></p>
											<p className="icon">
												<span><a href="/"><i className="icon-share3" /></a></span> 
												<span><a href="/" rel="noreferrer" target="_blank"><i className="icon-eye" /> Go TO Website</a></span>
												<span><a href="/"><i className="icon-heart" /> 49</a></span> 
											</p>
										</div>
									</div>
								</div>
							</div> */}
						</div>
						{/* <div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="/" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div> */}
					</div>
				</section>
      </div>
    )
  }
}
