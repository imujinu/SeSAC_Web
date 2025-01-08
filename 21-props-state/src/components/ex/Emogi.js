import { useState } from "react";

export default function Emoji() {
  const [number, numberSet] = useState(0);
  const [emoji, emojiSet] = useState("😊");
  const add = () => {
    numberSet(number + 1);
    number > 6 ? emojiSet("😎") : emojiSet("😊");
  };
  const minus = () => {
    numberSet(number - 1);
    number > 8 ? emojiSet("😎") : emojiSet("😊");
  };
  return (
    <div>
      <div>
        <span>
          {number}
          {emoji}
        </span>
        <div>
          <button onClick={add}>1증가</button>
          <button onClick={minus}>1감소</button>
        </div>
      </div>
    </div>
  );
}
