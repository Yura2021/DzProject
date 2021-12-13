import React, { Component } from "react";
class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello",
    };
    this.chMethod = this.chMethod.bind(this);
  }
  chMethod = () => {
    console.log(this);
    this.setState({ message: "bye" });
  };
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.chMethod}>Click</button>
      </div>
    );
  }
}
export default EventBind;
