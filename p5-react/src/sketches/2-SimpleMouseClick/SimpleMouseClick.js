import React, { Component } from 'react';
import p5 from 'p5';
import 'p5/lib/addons/p5.dom';
import sketch from "./sketch.js";

class SimpleMouseClick extends Component {
  componentDidMount() {
    new p5(sketch, 'simpleMouseClick');
  }

  render() {
    return (
      <div>
        <div id="simpleMouseClick"></div>
        <h3>&nbsp;Source Code</h3>
        <pre>{'' + sketch}</pre>
      </div>
    );
  }
}

export default SimpleMouseClick;
