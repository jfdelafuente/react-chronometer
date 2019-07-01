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
    this._handleResetClick = this._handleResetClick.bind(this);
    this._handleStopClick = this._handleStopClick.bind(this);
  }

  _handleStartClick(event) {
    if (!this.state.running) {
      this.interval = setInterval(() => {
        this.tick();
      }, 100);
      this.setState({ running: true });
    }
  }

  _handleStopClick(event) {
    if (this.state.running) {
      clearInterval(this.interval);
      this.setState({ running: false });
    }

  }

  _handleResetClick(event) {
    this._handleStopClick();
    this.setState({
      millis: 0,
      seconds: 0,
      minutes: 0
    });

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
    let run = this.state.running === true;
    return (
      <div className="app">
        <div className="display">
          <div className="state">{run ? 'Status: Running' : 'Status: Stopped'}</div>
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
            onClick={this._handleStopClick}>Stop</button>

          <button className="btn reset "
            onClick={this._handleResetClick}>Reset</button>
        </div>
      </div>);
  }
}
