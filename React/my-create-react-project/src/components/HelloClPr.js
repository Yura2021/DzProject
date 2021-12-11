import React from "react";

class HelloClPr extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Welcome &ensp;
          {this.props.fName}
          &ensp; and &ensp;
          {this.props.lName}
        </h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default HelloClPr;
