import React, { Component } from 'react';
import sketch from "./sketch3.js";
import p5 from 'p5';

class MandelbrotChords extends Component {
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

export default MandelbrotChords;
