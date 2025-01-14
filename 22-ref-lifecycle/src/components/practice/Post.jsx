import { useEffect, useState } from "react";
import Item from "./Item";
import axios from "axios";

export default function Post() {
  const [state, setState] = useState([]);
  const todo = async () => {
    try {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setState(result.data.slice(0, 10));
    } catch {}
  };

  useEffect(() => {
    todo();
  }, []);
  return (
    <>
      <h1>여기는 realPost</h1>
      {state.length == 0
        ? "loading..."
        : state.map((el) => {
            return (
              <Item key={el.id} id={el.id} title={el.title} body={el.body} />
            );
          })}
    </>
  );
}
