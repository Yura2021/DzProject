import React from "react";
class Comp01 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSabmit = this.handleSabmit.bind(this);
  }
  handleChange(event) {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  }
  handleSabmit(event) {
    alert("Отправленое имя: " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSabmit}>
        <label>
          Имя:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}
export default Comp01;
