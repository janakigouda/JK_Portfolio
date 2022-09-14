import React, { Component } from 'react';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Projects from './components/projects';
import Experience from "./components/experience";

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
          <Experience></Experience>
          <Projects></Projects>
					<Timeline></Timeline>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
