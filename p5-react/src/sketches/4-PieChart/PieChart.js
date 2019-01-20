import React, { Component } from 'react';
import p5 from 'p5';
import sketch from "./sketch.js";

class PieChart extends Component {
  componentDidMount() {
    console.log('' + sketch)
    new p5(sketch, 'pieChart');
  }

  render() {
    return (
      <div>
        <div id="pieChart"></div>
        <h3>&nbsp;Source Code</h3>
        <pre style={{overflow: 'scroll', height: '500px', width: '800px', backgroundColor: 'white', padding: '1em', marginLeft: '1em'}}>{'' + sketch}</pre>
      </div>
    );
  }
}

export default PieChart;
