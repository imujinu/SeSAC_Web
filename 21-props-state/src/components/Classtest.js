import { Component } from "react";

export default class ClassTest extends Component {
  state = {
    number: 0,
  };
  render() {
    let { number } = this.state;
    console.log(number);
    const addNum = () => {
      this.setState({ number: number + 2 });
    };
    const minusNum = () => {
      this.setState({ number: number - 1 });
    };
    return (
      <div>
        <div>{this.state.number}</div>
        <button onClick={addNum}>+2</button>
        <button onClick={minusNum}>-1</button>
      </div>
    );
  }
}
