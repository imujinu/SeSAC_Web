import { useState } from "react";

export default function Visible() {
  const [hi, hiSet] = useState("안녕하세요");
  const [btn, btnSet] = useState("사라져라");
  const hidden = () => {
    hi === "안녕하세요" ? hiSet("") : hiSet("안녕하세요");
    btn === "사라져라" ? btnSet("보여라") : btnSet("사라져라");
  };
  return (
    <div style={{ border: "1px solid orange", display: "inline-block" }}>
      <button onClick={hidden}>{btn}</button>
      <div>{hi}</div>
    </div>
  );
}
