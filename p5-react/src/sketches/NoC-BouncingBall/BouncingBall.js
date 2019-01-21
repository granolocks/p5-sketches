import React, { Component } from 'react';
import sketch from "./sketch.js";
import p5 from 'p5';

class BouncingBall extends Component {
  componentDidMount() {
    new p5(sketch, 'ball');
  }

  render() {
    return (
      <div>
        <div id="ball"></div>
        <h3>&nbsp;Source Code</h3>
        <pre>{'' + sketch}</pre>
      </div>
    );
  }
}

export default BouncingBall;
