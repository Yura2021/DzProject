import React from "react";

class myClass extends React.Component {
  constructor() {
    super();
    this.www = {
      message: "Welcome2"
    };
    this.state = {
      message: "Welcome1"
    };
  }
  ChangeMessage() {
    this.setState({
      message: "Bye"
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <h1>{this.www.message}</h1>
        <button onClick = {()=>this.ChangeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default myClass;
