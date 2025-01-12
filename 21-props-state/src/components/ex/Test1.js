import { useState } from "react";
import Select1 from "./Select1";

export default function Test1() {
  const [data, setData] = useState({
    fruit: "apple",
    background: "white",
    color: "black",
    text: "text",
  });
  return (
    <div>
      <Select1 setData={setData} />
    </div>
  );
}
