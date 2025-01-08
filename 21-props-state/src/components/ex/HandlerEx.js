import { Component } from "react";

export default class HandlerEx extends Component {
  state = {
    message: "Hello World!",
  };
  render() {
    const change = () => {
      this.state.message == "Hello World!"
        ? this.setState({ message: "Goodbye World!" })
        : this.setState({ message: "Hello World!" });
    };
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={change}>메시지변경</button>
      </div>
    );
  }
}
