import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circles/Circles';

class App extends Component {
  state = {
    selected: [true, false, false, false],
    text: ['CIRCLE 1 SELECTED', 'SELECT CIRCLE 2', 'SELECT CIRCLE 3', 'SELECT CIRCLE 4']
  }

  updateState0 = () => {
    this.setState({
      selected: [true, false, false, false],
      text: ['CIRCLE 1 SELECTED', 'SELECT CIRCLE 2', 'SELECT CIRCLE 3', 'SELECT CIRCLE 4']
    })
  }
  updateState1 = () => {
    this.setState({
      selected: [false, true, false, false],
      text: ['SELECT CIRCLE 1', 'CIRCLE 2 SELECTED', 'SELECT CIRCLE 3', 'SELECT CIRCLE 4']
    })
  }
  updateState2 = () => {
    this.setState({
      selected: [false, false, true, false],
      text: ['SELECT CIRCLE 1', 'SELECTE CIRCLE 2', 'CIRCLE 3 SELECTED','SELECT CIRCLE 4']
    })
  }
  updateState3 = () => {
    this.setState({
      selected: [false, false, false, true],
      text: ['SELECT CIRCLE 1', 'SELECTE CIRCLE 2', 'SELECT CIRCLE 3','CIRCLE 4 SELECTED']
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            selected={this.state.selected}
            text={this.state.text}
            updateState0={this.updateState0}
            updateState1={this.updateState1}
            updateState2={this.updateState2}
            updateState3={this.updateState3}
          />
          <Circles 
            selected={this.state.selected} 
            updateState0={this.updateState0}
            updateState1={this.updateState1}
            updateState2={this.updateState2}
            updateState3={this.updateState3}
          />
        </main>
      </div>
    );
  }
}

export default App;