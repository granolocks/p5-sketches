import React, { Component } from 'react';
import './App.css';

import SketchBook  from './sketches/SketchBook'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SketchBook />
      </div>
    );
  }
}

export default App;
