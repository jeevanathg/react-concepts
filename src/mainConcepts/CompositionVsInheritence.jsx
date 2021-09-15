import { Component } from "react";

function FancyBorder(props) {
  return (
    <div className={"fancy fancy-border-" + props.color}>{props.children}</div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h4 className="dialog-title">{props.title}</h4>
      <p className="dialog-message">{props.message}</p>
      <p className="dialog-message">{props.children}</p>
    </FancyBorder>
  );
}

function WelcomeDialog(props) {
  return (
    <Dialog title="Welcome Dialog" message="Thanks for visiting the Website" />
  );
}

class SignUpDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: "",
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnChange(event) {
    this.setState({
      signIn: event.target.value,
    });
  }

  handleOnClick() {
    alert(`Welcome Space ${this.state.signIn}`);
  }

  render() {
    return (
      <Dialog title="Exploration Program" message="How should we refer to you">
        <input
          type="text"
          value={this.state.signIn}
          onChange={this.handleOnChange}
        />
        <button onClick={this.handleOnClick}>Sign Up</button>
      </Dialog>
    );
  }
}

function CompositionVsInheritence(props) {
  return (
    <div>
      <hr />
      <h3>11. Compostion Vs Inheritence</h3>
      <SignUpDialog />
      <WelcomeDialog />
    </div>
  );
}

export default CompositionVsInheritence;
