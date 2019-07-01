import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 55,
      millis: 0,
      running: false
    };
  }
  render() {
    return (
      <div className="app">
        <div className="display">
          <div className="state">'Status: Running'</div>
          <div className="numbers">
            <span className="mins">{this.state.minutes}:</span>
            <span className="secs">{this.state.seconds} </span>
            <span className="millis">.0{this.state.millis}</span>
          </div>
        </div>

        <div className="actions">
          <button className="btn start "
            onClick={() => console.log("start")}>Start</button>

          <button className="btn stop "
            onClick={() => console.log("stop")}>Stop</button>

          <button className="btn reset "
            onClick={() => console.log("reset")}>Reset</button>
        </div>
      </div>);
  }
}
