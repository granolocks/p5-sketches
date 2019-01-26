import React, { Component } from 'react';
import sketch from "./sketch.js";
import p5 from 'p5';

class Drawingtrig extends Component {
  componentDidMount() {
    new p5(sketch, 'simpleCircle');
  }

  render() {
    return (
      <div>
        <div id="simpleCircle"></div>
        <h3>&nbsp;Source Code</h3>
        <pre>{'' + sketch}</pre>
      </div>
    );
  }
}

export default Drawingtrig;
