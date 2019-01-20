import React, { Component } from 'react';
import sketch from "./sketch.js";
import p5 from 'p5';

class DyingLightLoader extends Component {
  componentDidMount() {
    new p5(sketch, 'dyingLightLoader');
  }

  render() {
    return (
      <div>
        <div id="dyingLightLoader"></div>
        <h3>&nbsp;Source Code</h3>
        <pre>{'' + sketch}</pre>
      </div>
    );
  }
}

export default DyingLightLoader;
