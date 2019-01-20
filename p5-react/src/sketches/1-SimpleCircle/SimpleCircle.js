import React, { Component } from 'react';
import sketch from "./sketch.js";
import p5 from 'p5';

class SimpleCircle extends Component {
  componentDidMount() {
    new p5(sketch, 'simpleCircle');
  }

  render() {
    return (
      <div>
        <div id="simpleCircle"></div>
        <h3>&nbsp;Source Code</h3>
        <pre style={{overflow: 'scroll', height: '500px', width: '800px', backgroundColor: 'white', padding: '1em', marginLeft: '1em'}}>{'' + sketch}</pre>
      </div>    );
  }
}

export default SimpleCircle;
