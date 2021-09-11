import { Component } from "react";
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), [1000]);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div>
        <hr />
        <h3>4.State and LifeCycle: Clock Example</h3>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Clock;
