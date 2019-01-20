import React, { Component } from 'react';
import sketch from "./sketch.js";
import p5 from 'p5';

class SimpleCircle extends Component {
  componentDidMount() {
    new p5(sketch, 'simpleCircle');
  }

  render() {
    return (
      <div id="simpleCircle"></div>
    );
  }
}

export default SimpleCircle;
