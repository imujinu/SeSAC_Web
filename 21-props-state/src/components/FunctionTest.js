import { useState } from "react";

export default function FunctionTest() {
  const [number, setNumber] = useState(0);
  const addNum = () => {
    setNumber(number + 1);
  };
  const minusNum = () => {
    setNumber(number - 2);
  };
  return (
    <div>
      <div>{number}</div>
      <button onClick={addNum}>+2</button>
      <button onClick={minusNum}>-1</button>
    </div>
  );
}
