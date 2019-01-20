import React, { Component } from 'react';

import SimpleCircle  from './1-SimpleCircle/SimpleCircle'
import SimpleMouseClick  from './2-SimpleMouseClick/SimpleMouseClick'
import SimpleTrig  from './3-SimpleTrig/SimpleTrig'
import PieChart  from './4-PieChart/PieChart'

class SketchBook extends Component {

  constructor(props){
    super(props);

    this.sketches = this.sketches.bind(this);
    this.sketchClicked = this.sketchClicked.bind(this);

    this.state = {
      activeSketch: Object.keys(this.sketches())[0]
    }
  }

  sketches() {
    return {
      "1 Simple Circle": <SimpleCircle />,
      "2 Simple Mouse Click": <SimpleMouseClick />,
      "3 Simple Trig": <SimpleTrig />,
      "4 Pie Chart": <PieChart />
    }
  }

  sketchClicked(e) {
    this.setState({activeSketch: e.target.innerText})
  }

  render() {
    return (
      <div id="SketchBook">
           <ul style={{position: 'fixed', top: 0, left: 0, height: '100%', textAlign: 'left', width: '250px'}}>
            {Object.keys(this.sketches()).map((key) => {
              return(<li onClick={this.sketchClicked}>{key}</li>);
            })}
           </ul>
           <div style={{backgroundColor: 'lightblue', position: 'fixed', top: 0, left: 250, width: '100%', height: '100%', textAlign: 'left'}}>
           {this.sketches()[this.state.activeSketch]}
          </div>
      </div>
    );
  }
}

export default SketchBook;
