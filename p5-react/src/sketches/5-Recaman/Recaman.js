import React, { Component } from 'react';
import p5 from 'p5';
import sketch from "./sketch.js";

class Recaman extends Component {
  componentDidMount() {
    new p5(sketch, 'recaman');
  }

  render() {
    return (
      <div>
        <div id="recaman"></div>
        <h3>&nbsp;Source Code</h3>
        <pre style={{overflow: 'scroll', height: '500px', width: '800px', backgroundColor: 'white', padding: '1em', marginLeft: '1em'}}>{'' + sketch}</pre>
      </div>
    );
  }
}

export default Recaman;
