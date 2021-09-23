import { Component } from "react";
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      clockButtonName: "Start Clock",
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), [1000]);
  }
  componentDidUpdate() {
    if (this.props.toggleClock === true) {
      this.timerID = setInterval(() => this.tick(), [1000]);
    } else {
      clearInterval(this.timerID);
    }
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  toggleClock() {
    this.setState({
      clockButtonName:
        this.state.clockButtonName === "Start Clock"
          ? "Pause Clock"
          : "Start Clock",
    });
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div>
        <h3>5.State and LifeCycle: Clock Example</h3>
        <p>{this.state.date.toLocaleTimeString()}</p>
        <button onClick={() => this.toggleClock()}>
          {this.state.clockButtonName}
        </button>
      </div>
    );
  }
}

export default Clock;
