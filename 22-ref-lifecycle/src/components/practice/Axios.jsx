import axios from "axios";
import LifeCycle from "./LifeCycle";

export default function Axios() {
  (async function getTodos() {
    try {
      const result = await axios({
        url: "https://jsonplaceholder.typicode.com/todos",
        method: "get",
      });
      const todoList = result.data.slice(0, 10);
      return <LifeCycle todo={todoList} />;
    } catch {}
  })();
}
