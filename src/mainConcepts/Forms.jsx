const { Component } = require("react");

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Default",
      biography: "Default biography",
      nickname: "Jeeva",
      hobbies: true,
      played: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
    console.log("handleChange ::::::::::", this.state.username);
  }
  handleSubmit(event) {
    console.log("handleSubmit ::::::::::", this.state.username);
    alert(
      "Username: " +
        this.state.username +
        " Biography: " +
        this.state.biography +
        " Nickname: " +
        this.state.nickname +
        " Hobbies: " +
        this.state.hobbies +
        " Played: " +
        this.state.played
    );
    event.PreventDefault();
  }
  render() {
    return (
      <div>
        <h3>9. Forms</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />

          <br />
          <label htmlFor="biography">Biography</label>
          <textarea
            id="biography"
            name="biography"
            value={this.state.biography}
            onChange={this.handleChange}
          />

          <br />
          <label htmlFor="nickname">Nickname </label>
          <select
            id="nickname"
            name="nickname"
            value={this.state.nickname}
            onChange={this.handleChange}
          >
            <option value="Jeevanath">Jeevanath</option>
            <option value="Jeeva">Jeeva</option>
            <option value="Jeeves">Jeeves</option>
            <option value="Jeevan">Jeevan</option>
          </select>

          <br />
          <label htmlFor="hobbies">Hobbies</label>
          <input
            id="hobbies"
            name="hobbies"
            type="checkbox"
            checked={this.state.hobbies}
            onChange={this.handleChange}
          />

          <br />
          <label htmlFor="played">Played</label>
          <input
            id="played"
            name="played"
            type="number"
            value={this.state.played}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Forms;
