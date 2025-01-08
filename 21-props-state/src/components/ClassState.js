import { Component } from "react";

export default class ClassState extends Component {
  //  render() 함수 위에서 state 선언
  state = {
    banana: "바나나",
  };
  render() {
    const { banana } = this.state;
    return (
      <div>
        <p>{banana}</p>
        <button
          onClick={() => {
            if (banana == "바나나") {
              this.setState({ banana: "banana" });
            } else {
              this.setState({ banana: "바나나" });
            }
          }}
        >
          영어로 변경!(class 형)
        </button>
      </div>
    );
  }
}
