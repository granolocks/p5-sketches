import React, { Component } from 'react';
import './SketchBook.css';

import SimpleCircle from './1-SimpleCircle/SimpleCircle'
import SimpleMouseClick from './2-SimpleMouseClick/SimpleMouseClick'
import SimpleTrig from './3-SimpleTrig/SimpleTrig'
import PieChart from './4-PieChart/PieChart'
import Recaman from './5-Recaman/Recaman'
import UnitCircle from './6-UnitCircle/UnitCircle'
import DyingLightLoader from './7-DyingLightLoader/DyingLightLoader'
import AnimatedLogo from './8-AnimatedLogo/AnimatedLogo'
import Spiral from './9-Spiral/Spiral'
import OverlappingCircles from './10-OverlappingCircles/OverlappingCircles'
import Drawingtrig from './11-Drawingtrig/Drawingtrig'
import MandelbrotChords from './12-MandelbrotChords/MandelbrotChords'

import RandomWalker from './NoC-RandomWalker/RandomWalker'
import PerlinNoiseGraph from './NoC-PerlinNoiseGraph/PerlinNoiseGraph'
import BouncingBall from './NoC-BouncingBall/BouncingBall'
import VectorSubtractionToMouse  from './NoC-VectorSubtractionToMouse/VectorSubtractionToMouse'
import Vectors from './NoC-Vectors/Vectors'
import Accelerators from './NoC-Accelerators/Accelerators'

class SketchBook extends Component {

  constructor(props){
    super(props);

    this.sketches = this.sketches.bind(this);
    this.sketchClicked = this.sketchClicked.bind(this);

    let sketchKeys = Object.keys(this.sketches());
    this.state = {
      activeSketch: sketchKeys[sketchKeys.length - 1]
    }
  }

  sketches() {
    return {
      "Simple Circle": <SimpleCircle />,
      "Simple Mouse Click": <SimpleMouseClick />,
      "Simple Trig": <SimpleTrig />,
      "Pie Chart": <PieChart />,
      "Recaman": <Recaman />,
      "Dying Light Loader": <DyingLightLoader />,
      "Perlin Noise Graph (slow)": <PerlinNoiseGraph />,
      "Unit Circle": <UnitCircle />,
      "NoC Random Walkers": <RandomWalker />,
      "NoC Bouncing Ball": <BouncingBall />,
      "Vector Subtraction to Mouse": <VectorSubtractionToMouse />,
      "Vectors": <Vectors />,
      "AnimatedLogo": <AnimatedLogo />,
      "Accelerators": <Accelerators />,
      "Spiral": <Spiral />,
      "Overlapping Circles": <OverlappingCircles />,
      "Drawingtrig": <Drawingtrig />,
      "MandelbrotChords": <MandelbrotChords />
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
              return(<li key={key} className={key === this.state.activeSketch ? 'active' : ''} onClick={this.sketchClicked}>{key}</li>);
            })}
           </ol>
           <div className="sketchWrapper">
            {this.sketches()[this.state.activeSketch]}
          </div>
      </div>
    );
  }
}

export default SketchBook;
