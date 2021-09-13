import { Component } from "react";
import Greeting from "./components/Greetings";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LoginButton";
import Warning from "./components/Warning";

const messages = ["Mokshitha", "Rithvika", "Jeevanath", "Brindha"];

class ContionalRendering extends Component {
  constructor() {
    super();
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleToggleWarningClick = this.handleToggleWarningClick.bind(this);
    this.state = {
      isLoggedIn: false,
      showWarning: true,
    };
  }

  handleLogoutClick() {
    this.setState({
      isLoggedIn: true,
    });
  }

  handleLoginClick() {
    this.setState({
      isLoggedIn: false,
    });
  }
  handleToggleWarningClick() {
    this.setState({
      showWarning: !this.state.showWarning,
    });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        <hr />
        <h3>7. Contional Rendering</h3>
        <Greeting isLoggedIn={isLoggedIn} />
        {isLoggedIn ? (
          <>
            <Warning unreadMessages={messages} warn={this.state.showWarning} />
            <LoginButton onClick={this.handleLoginClick} />
            {messages.length && (
              <button onClick={this.handleToggleWarningClick}>
                {this.state.showWarning ? "Hide" : "Show"}
              </button>
            )}
          </>
        ) : (
          <LogoutButton onClick={this.handleLogoutClick} />
        )}
      </div>
    );
  }
}

export default ContionalRendering;
