import React from "react";

class MyCalc extends React.Component {
  constructor() {
    super();
    this.state = {
      sum: 0
    };
  }
  Sum() {
    let sum1 = this.funCalc(document.getElementById('a').value, document.getElementById('op').value,document.getElementById('b').value);
    alert(sum1);
    this.setState({
      sum: sum1
    });
  }

  funCalc(a, op, b) {
    let sum = 0;
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
        <button
          onClick={() => this.Sum()}
        >
          Sum
        </button>
      </div>
    );
  }
}

export default MyCalc;
