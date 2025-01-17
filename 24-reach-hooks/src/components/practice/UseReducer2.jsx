import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  // (새로운 Todo 추가 로직)
  // (Todo 완료 상태 토글 로직)
  // (Todo 삭제 로직)
  console.log(action);
  console.log(state);

  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((el) => el !== action.payload);
    case "toggle":
      return;
    default:
      return action;
  }
};

const toggleStyle = { color: "gray" };

const TodoApp = () => {
  const [todo, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  // 상태 관리

  // 추가 이벤트 핸들러

  return (
    <div>
      <h1>Todo App</h1>
      <input
        value={input}
        placeholder="Add a new todo"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "add", payload: input });
        }}
      >
        Add
      </button>
      {todo.map((el, i) => {
        return (
          <ul style={{ listStyleType: "none" }} key={i}>
            <li
              style={{ cursor: "pointer" }}
              onClick={() => {
                dispatch({ type: "toggle", payload: el });
              }}
            >
              {el}
              <button
                onClick={() => {
                  dispatch({ type: "remove", payload: el });
                }}
              >
                Delete
              </button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default TodoApp;
