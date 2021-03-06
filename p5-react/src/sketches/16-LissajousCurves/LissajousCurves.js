import React, { Component } from 'react';
import sketch from "./sketch.js";
import p5 from 'p5';

class LissajousCurves extends Component {
  componentDidMount() {
    new p5(sketch, 'lissajous');
  }

  render() {
    return (
      <div>
        <div id="lissajous"></div>
        <h3>&nbsp;Source Code</h3>
        <pre>{'' + sketch}</pre>
      </div>
    );
  }
}

export default LissajousCurves;
