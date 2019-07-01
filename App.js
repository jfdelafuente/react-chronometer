import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0,
      millis: 0,
      running: false
    };
    this._handleStartClick = this._handleStartClick.bind(this);
  }

  _handleStartClick(event) {
    if (!this.state.running) {
      this.interval = setInterval(() => {
        this.tick();
      }, 100);
      this.setState({ running: true });
    }
  }
  tick() {
    let millis = this.state.millis + 1;
    let seconds = this.state.seconds;
    let minutes = this.state.minutes;

    if (millis === 10) {
      millis = 0;
      seconds = seconds + 1;
    }
    if (seconds === 60) {
      millis = 0;
      seconds = 0;
      minutes = minutes + 1;
    }
    this.setState({
      millis: millis,
      seconds: seconds,
      minutes: minutes
    });
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
            onClick={this._handleStartClick}>Start</button>

          <button className="btn stop "
            onClick={() => console.log("stop")}>Stop</button>

          <button className="btn reset "
            onClick={() => console.log("reset")}>Reset</button>
        </div>
      </div>);
  }
}
