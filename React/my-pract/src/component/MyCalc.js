import React from "react";

class MyCalc extends React.Component {
  constructor() {
    super();
    this.state = {
      sum: 0,
    };
  }
  Sum() {
    let sum1 = this.funCalc(
      document.getElementById("a").value,
      document.getElementById("op").value,
      document.getElementById("b").value
    );
    this.setState({
      sum: sum1,
    });
  }

  funCalc(a1, op, b1) {
    let a = parseInt(a1);
    let b = parseInt(b1);
    let sum;
    switch (op) {
      case "+":
        sum = a + b;
        break;
      case "-":
        sum = a - b;
        break;
      case "*":
        sum = a * b;
        break;
      case "/":
        sum = a / b;
        break;
      default:
        sum = "Error";
        break;
    }
    return sum;
  }

  render() {
    return (
      <div>
        <h1>{this.state.sum}</h1>
        <input type="number" id="a" />
        <input type="text" id="op" />
        <input type="number" id="b" />
        <button onClick={() => this.Sum()}>Sum</button>
      </div>
    );
  }
}

export default MyCalc;
