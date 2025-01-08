import { useState } from "react";

export default function Bororo({ obj }) {
  console.log(obj);
  const [num, setNum] = useState(0);
  const member = () => {
    num == 2 ? setNum(0) : setNum(num + 1);
  };

  return (
    <div>
      <div>{obj[num].name}</div>
      <div>{obj[num].age}</div>
      <div>{obj[num].nickName}</div>
      <button onClick={member}>멤버 바꾸기</button>
    </div>
  );
}
