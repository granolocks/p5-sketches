import React, { Component } from 'react';
import './SketchBook.css';

import SimpleCircle  from './1-SimpleCircle/SimpleCircle'
import SimpleMouseClick  from './2-SimpleMouseClick/SimpleMouseClick'
import SimpleTrig  from './3-SimpleTrig/SimpleTrig'
import PieChart  from './4-PieChart/PieChart'
import Recaman  from './5-Recaman/Recaman'
import UnitCircle  from './6-UnitCircle/UnitCircle'

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
      "Simple Circle": <SimpleCircle />,
      "Simple Mouse Click": <SimpleMouseClick />,
      "Simple Trig": <SimpleTrig />,
      "Pie Chart": <PieChart />,
      "Recaman": <Recaman />,
      "Unit Circle": <UnitCircle />,
    }
  }

  sketchClicked(e) {
    this.setState({activeSketch: e.target.innerText})
  }

  render() {
    return (
      <div id="SketchBook">
           <ol>
            {Object.keys(this.sketches()).map((key) => {
              return(<li className={key === this.state.activeSketch ? 'active' : ''} onClick={this.sketchClicked}>{key}</li>);
            })}
           </ol>
           <div style={}>
            {this.sketches()[this.state.activeSketch]}
          </div>
      </div>
    );
  }
}

export default SketchBook;
