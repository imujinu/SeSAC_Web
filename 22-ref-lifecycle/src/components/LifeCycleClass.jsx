import { Component } from "react";

class MyComponent extends Component {
  // 마운트 되었을 때 동작
  componentDidMount() {
    console.log("mount 되었어요!! ❤️❤️");
  }
  //업데이트 되었을 때 동작
  componentDidUpdate() {
    console.log("update 되었어요!! 👍👍");
  }
  //언마운트 되기 직전
  componentWillUnmount() {
    console.log("unmount 되었어요!! 😎😎");
  }
  render() {
    return <p>MyComponent {this.props.number}</p>;
  }
}

class LifeCycleClass extends Component {
  state = {
    number: 0,
    visible: true,
  };
  changeNumberState = () => {
    this.setState({ number: this.state.number + 1 });
  };
  changeVisibleState = () => {
    this.setState({ visible: !this.state.visible });
  };
  render() {
    return (
      <>
        <button onClick={this.changeNumberState}>PLUS</button>
        <button onClick={this.changeVisibleState}>ON/OFF</button>
        {/* 
        -visible state 값에 따라서 MyComponent가 생성 및 제거 됨
        -생성 (mont), 제거(unmount)
        */}
        {this.state.visible && <MyComponent number={this.state.number} />}
      </>
    );
  }
}

export default LifeCycleClass;
