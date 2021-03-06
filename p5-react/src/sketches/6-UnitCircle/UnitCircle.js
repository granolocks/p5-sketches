import React, { Component } from 'react';
import sketch from "./sketch.js";
import p5 from 'p5';

class UnitCircle extends Component {
  componentDidMount() {
    new p5(sketch, 'unitCircle');
  }

  render() {
    return (
      <div>
        <div id="unitCircle"></div>
        <h3>&nbsp;Source Code</h3>
        <pre>{'' + sketch}</pre>
      </div>
    );
  }
}

export default UnitCircle;
