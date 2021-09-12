import { Component } from "react";
import Clock from "./StateAndProps";

class HandlingEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleClock: true,
    };
  }
  toggleClock() {
    this.setState({
      toggleClock: !this.state.toggleClock,
    });
  }
  render() {
    return (
      <div>
        <Clock />
      </div>
    );
  }
}

export default HandlingEvents;
