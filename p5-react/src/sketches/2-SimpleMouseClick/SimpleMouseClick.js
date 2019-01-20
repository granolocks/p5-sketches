import React, { Component } from 'react';
import p5 from 'p5';
import sketch from "./sketch.js";

class SimpleMouseClick extends Component {
  componentDidMount() {
    new p5(sketch, 'simpleMouseClick');
  }

  render() {
    return (
      <div id="simpleMouseClick"></div>
    );
  }
}

export default SimpleMouseClick;
