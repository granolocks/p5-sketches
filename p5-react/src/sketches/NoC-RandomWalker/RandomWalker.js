import React, { Component } from 'react';
import sketch from "./sketch.js";
import p5 from 'p5';

class RandomWalker extends Component {
  componentDidMount() {
    new p5(sketch, 'randomWalker');
  }

  render() {
    return (
      <div>
        <div id="randomWalker"></div>
        <h3>&nbsp;Source Code</h3>
        <pre>{'' + sketch}</pre>
      </div>
    );
  }
}

export default RandomWalker;
