import React, { Component } from 'react';
import p5 from 'p5';
import sketch from "./sketch.js";

class SimpleTrig extends Component {
  componentDidMount() {
    new p5(sketch, 'simpleTrig');
  }

  render() {
    return (
      <div id="simpleTrig"></div>
    );
  }
}

export default SimpleTrig;
