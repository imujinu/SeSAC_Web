import { useRef, useState } from "react";

export default function Color() {
  const ref = useRef("");
  const handleFocus = () => {
    ref.current.focus();
  };
  const [color, setColor] = useState("white");
  const changeColor = () => {
    setColor(ref.current.value);
    ref.current.value = "";
    handleFocus();
  };
  return (
    <div style={{ backgroundColor: color }}>
      <span>
        <input type="text" ref={ref} />
      </span>
      <span>
        <button onClick={changeColor}>색 적용</button>
      </span>
    </div>
  );
}
