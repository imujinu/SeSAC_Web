import { useRef, useState } from "react";

export default function SetText() {
  const refVal = useRef(0); // 변수로 사용할 ref
  const refInput = useRef<HTMLInputElement>(null); // ref 객체를 이용해서 DOM 접근 시 null 초기값 전달 필수

  //const [text,setText] = useState<string>("");
  const [text, setText] = useState("");

  //refVal 변수를 변경하는 함수

  const changeRef = () => {
    refVal.current += 1;
    console.log("refVal : ", refVal.current);
  };

  const changeState = () => {
    if (refInput.current) {
      setText(refInput.current.value);
      console.log("text state 변경 완료");
    }
  };

  const checkString = () => {
    console.log("state String", text);
    console.log("input value ref", refInput.current?.value);
    // 물음표처리! 초기값이 null값이기 때문에 값이 존재하지 않을 수도 있다.
  };
  return (
    <div>
      <h2>useRef 사용해보기 & useState 사용해보기</h2>
      <input type="text" ref={refInput} onChange={checkString} />
      <br />
      <button onClick={changeState}>state 변경!</button>
      <button onClick={changeRef}>ref+1</button>

      <p>state:{text}</p>
      <p>refVal:{refVal.current}</p>
      <p>refInput의 value : {refInput.current?.value}</p>
      {/* 물음표 처리! */}
    </div>
  );
}
