const { Component } = require("react");

function Boilingverdict(props) {
  if (props.celcious >= 100) {
    return <p>The water would boil.</p>;
  } else {
    return <p>The water would not boil.</p>;
  }
}

function toCelcious(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFarenhit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, covert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "Not a Number";
  }
  const output = covert(input);
  const rounded = Math.round((output * 1000) / 1000);
  return rounded.toString();
}

const scaleNames = {
  c: "Celcious",
  f: "Farenhit",
};

class TemperatureInput extends Component {
  constructor(props) {
    super();
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(event) {
    this.props.onTemperatureChange(event.target.value);
  }
  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]} </legend>
        <input
          name="temperature"
          type="text"
          value={temperature}
          onChange={this.handleOnChange}
        />
      </fieldset>
    );
  }
}

class LiftingStateUp extends Component {
  constructor() {
    super();
    this.state = {
      temperature: "",
      scale: "c",
    };
    this.handleCelciousChange = this.handleCelciousChange.bind(this);
    this.handleFarenhitChange = this.handleCelciousChange.bind(this);
  }
  handleCelciousChange(temperature) {
    this.setState({
      temperature,
      scale: "c",
    });
  }
  handleFarenhitChange(temperature) {
    this.setState({
      temperature,
      scale: "f",
    });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celcious =
      scale === "f" ? tryConvert(temperature, toCelcious) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFarenhit) : temperature;
    return (
      <div>
        <hr />
        <h3>10. Lifting Components Up</h3>
        <TemperatureInput
          scale="c"
          onTemperatureChange={this.handleCelciousChange}
          temperature={celcious}
        />
        <TemperatureInput
          scale="f"
          onTemperatureChange={this.handleFarenhitChange}
          temperature={fahrenheit}
        />
        <Boilingverdict celcious={celcious} />
      </div>
    );
  }
}

export default LiftingStateUp;
