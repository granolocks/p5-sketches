import React, { Component } from 'react';
import sketch from "./sketch.js";
import p5 from 'p5';

class VectorSubtractionToMouse extends Component {
  componentDidMount() {
    new p5(sketch, 'vmouse');
  }

  render() {
    return (
      <div>
        <div id="vmouse"></div>
        <h3>&nbsp;Source Code</h3>
        <pre>{'' + sketch}</pre>
      </div>
    );
  }
}

export default VectorSubtractionToMouse;
