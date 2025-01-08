import { useState } from "react";

export default function Fruit() {
  const [text, setText] = useState("Text");
  const [fruit, setFruit] = useState("/apple.jpg");
  const [backColor, setBack] = useState("black");
  const [fontColor, setFontColor] = useState("black");
  const fruitSelect = (e) => {
    setFruit(e.target.value);
  };
  const back = (e) => {
    setBack(e.target.value);
  };
  const text1 = (e) => {
    setText(e.target.value);
  };
  const font = (e) => {
    setFontColor(e.target.value);
  };
  return (
    <div>
      <div>
        과일 :
        <select onChange={fruitSelect}>
          <option value="/apple.jpg">사과</option>
          <option value="/peach.jpg">복숭아</option>
          <option value="/banana.jpg">바나나</option>
          <option value="/grape.jpg">포도</option>
        </select>
        배경색 :
        <select onChange={back}>
          <option value="black">검정</option>
          <option value="white">하양</option>
          <option value="red">빨강</option>
          <option value="orange">주황</option>
        </select>
        글자색 :
        <select onChange={font}>
          <option value="black">검정</option>
          <option value="white">하양</option>
          <option value="red">빨강</option>
          <option value="orange">주황</option>
        </select>
      </div>
      <div>
        내용 :<input type="text" onChange={text1}></input>
      </div>
      <div>
        <img style={{ width: "100px" }} src={fruit}></img>
      </div>
      <div
        style={{
          backgroundColor: backColor,
          color: fontColor,
        }}
      >
        {text}
      </div>
    </div>
  );
}
