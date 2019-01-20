import React, { Component } from 'react';
import p5 from 'p5';
import sketch from "./sketch.js";

class PieChart extends Component {
  componentDidMount() {
    new p5(sketch, 'pieChart');
  }

  render() {
    return (
      <div id="pieChart"></div>
    );
  }
}

export default PieChart;
