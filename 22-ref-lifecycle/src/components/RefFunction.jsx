import { useRef, useState } from "react";

//1. DOM 요소를 선택하기 위한 ref
export function RefFunc1() {
  // 1. ref객체 만들기
  const inputRef = useRef();
  const handleFocus = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
  };
  const handleDisabled = () => {
    inputRef.current.disabled = true;
  };
  return (
    <div>
      {/* 2. 선택하고 싶은 태그에 ref 전달 */}
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>focus</button>
      <button onClick={handleDisabled}>disabled</button>
    </div>
  );
}
// 변수처럼 사용하는 ref
export function RefFunc2() {
  const Ref = useRef(1);
  const [state, setState] = useState(1);
  let variable = 1;

  const plusRef = () => {
    Ref.current += 1;
    console.log(Ref);
  };
  const plusState = () => {
    setState(state + 1);
    console.log(state);
  };
  const plusVariable = () => {
    variable += 1;
    console.log(variable);
  };
  return (
    <div>
      <h4>{Ref.current}</h4>
      <button onClick={plusRef}>Plus ref</button>
      <h4>{state}</h4>
      <button onClick={plusState}>Plus state</button>
      <h4>{variable}</h4>
      <button onClick={plusVariable}>Plus variable</button>
    </div>
  );
}
