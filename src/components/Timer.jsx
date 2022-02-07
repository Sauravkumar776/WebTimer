import React, { Component } from "react";
import "./Timer.css";
import EasyTimer from "easytimer.js";

class Timer extends Component {
  constructor(props) {
    super(props);

    var timer = new EasyTimer();
    console.log();
    this.state = {
      timer_text: timer.getTimeValues().toString(),
      timer: timer,
      timer_state: "stopped",
    };

    //binding the functions
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.restartTimer = this.restartTimer.bind(this);

    //Add the Listeners
    timer.addEventListener("secondsUpdated", this.onTimerUpdated.bind(this));
    timer.addEventListener("secondsUpdated", this.onTimerUpdated.bind(this));
    timer.addEventListener("secondsUpdated", this.onTimerUpdated.bind(this));
  }

  onTimerUpdated(e) {
    this.setState({
      ...this.state,
      timer_text: this.state.timer.getTimeValues().toString(),
    });
  }

  startTimer() {
      this.state.timer.start();
      
      this.setState({
          ...this.state,
          timer_state: "ticking"
      })
     
  }

  stopTimer() {
    this.state.timer.stop();
    this.setState({
        ...this.state,
        timer_state: "stopped"
  })
}

  pauseTimer() {
    this.state.timer.pause();
    this.setState({
        ...this.state,
        timer_state: "paused"
  })
}

  restartTimer() {
    this.state.timer.reset();
    this.setState({
        ...this.state,
        timer_state: "ticking"
  })
  }
  render() {
    return (
      <div className="Timer">
        <div className="timer-text">
          <h2>{this.state.timer_text}</h2>
        </div>
        <div className="timer-buttons text-center">
          {this.state.timer_state !== "ticking" && (
            <button onClick= {this.startTimer} className="btn btn-success">
              <i className="fas fa-play" />
            </button>
          )}
          {this.state.timer_state === "ticking" && (
            <button onClick={this.pauseTimer} className="btn btn-warning">
              <i className="fas fa-pause" />
            </button>
          )}
          <button onClick={this.stopTimer} className="btn btn-danger">
            <i className="fas fa-stop" />
          </button>
          <button onClick={this.restartTimer} className="btn btn-primary">
            <i className="fas fa-sync-alt" />
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
