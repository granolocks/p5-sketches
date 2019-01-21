import React, { Component } from 'react';
import sketch from "./sketch.js";
import p5 from 'p5';

class Accelerators extends Component {
  componentDidMount() {
    new p5(sketch, 'vectors');
  }

  render() {
    return (
      <div>
        <div id="vectors"></div>
        <h3>&nbsp;Source Code</h3>
        <pre>{'' + sketch}</pre>
      </div>
    );
  }
}

export default Accelerators;
