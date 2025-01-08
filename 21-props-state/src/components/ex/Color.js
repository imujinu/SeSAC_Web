import { useState } from "react";

export default function Color(props) {
  const [color, setColor] = useState("검정색");
  const [font, setFont] = useState("black");
  const fontColor = { color: font };
  const red = (e) => {
    setColor("빨간색");
    setFont("red");
  };
  const blue = (e) => {
    setColor("파란색");
    setFont("blue");
  };
  return (
    <div>
      <div style={{ color: font }}>{color} 글씨</div>
      <button onClick={red}>
        <span>빨간색</span>
      </button>
      <button onClick={blue}>파란색</button>
    </div>
  );
}
