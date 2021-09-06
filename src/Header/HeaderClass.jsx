import { Component } from "react";

class HeaderClass extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    return (
      <p>
        Header From <u>{this.props.classComp}</u>
      </p>
    );
  }
}

export default HeaderClass;
