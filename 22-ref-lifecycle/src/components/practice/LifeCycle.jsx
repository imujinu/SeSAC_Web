import { useEffect, useState } from "react";
import Axios from "./Axios";
import axios from "axios";

export default function LifeCycle({ todo }) {
  console.log(todo);
  let fakePosts = todo;
  const [state, setState] = useState("");

  async function getTodos() {
    try {
      const result = await axios({
        url: "https://jsonplaceholder.typicode.com/todos",
        method: "get",
      });
      const todo = result.data.slice(0, 10);
      useEffect(() => {
        setTimeout(() => {
          setState(todo);
        }, 2000);
      }, []);
    } catch {}
  }

  return (
    <div>
      {state.length == 0 ? (
        <h3>loading..</h3>
      ) : (
        state.map((el) => {
          return (
            <ul>
              <li>{el.id}</li>
              <li>{el.title}</li>
              <li>{el.body}</li>
            </ul>
          );
        })
      )}
    </div>
  );
}
