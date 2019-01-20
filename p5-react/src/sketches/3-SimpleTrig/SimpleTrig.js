import React, { Component } from 'react';
import p5 from 'p5';
import sketch from "./sketch.js";

class SimpleTrig extends Component {
  componentDidMount() {
    new p5(sketch, 'simpleTrig');
  }

  render() {
    return (
      <div>
        <div id="simpleTrig"></div>
        <h3>&nbsp;Source Code</h3>
        <pre>{'' + sketch}</pre>
      </div>
    );
  }
}

export default SimpleTrig;
