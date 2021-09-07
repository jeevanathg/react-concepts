import { Component } from "react";

class HeaderClass extends Component {
  render() {
    return (
      <p>
        Header From <u>{this.props.classComp}</u>
      </p>
    );
  }
}

export default HeaderClass;
