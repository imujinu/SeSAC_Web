import { useEffect, useRef, useState } from "react";

export default function Quiz() {
  const account = ["+", "-", "*"];
  const handleFocus = () => {
    ref.current.focus();
  };
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState(0);
  const ref = useRef("");
  useEffect(() => {
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(account[Math.floor(Math.random() * 3)]);
    setNum3(Math.floor(Math.random() * 10) + 1);
  }, []);
  const answer = () => {
    const answerRef = ref.current.value;
    switch (num2) {
      case "+":
        if (answerRef == num1 + num3) {
          alert("정답입니다.");
        } else {
          alert(`오답입니다. 정답은 : ${num1 + num3}`);
        }
        break;
      case "-":
        if (answerRef == num1 - num3) {
          alert("정답입니다.");
        } else {
          alert(`오답입니다. 정답은 : ${num1 - num3}`);
        }
        break;
      case "*":
        if (answerRef == num1 * num3) {
          alert("정답입니다");
        } else {
          alert(`오답입니다. 정답은 : ${num1 * num3}`);
        }
        break;
      default:
        break;
    }
    handleFocus();
    ref.current.value = "";
  };
  return (
    <div>
      <div>
        <span>{num1}</span>
        <span>{num2}</span>
        <span>{num3}</span>
      </div>
      <div>
        <input type="text" ref={ref} />
      </div>
      <div>
        <button onClick={answer}>정답제출</button>
      </div>
    </div>
  );
}
