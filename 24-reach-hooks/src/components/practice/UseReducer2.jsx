import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: state.length ? state[state.length - 1].id : 1,
          text: action.payload,
          completed: false,
        },
      ];
    case "remove":
      return state.filter((el) => el.text != action.payload);
    case "toggle":
      return state.map((el) =>
        el.text === action.payload ? { ...el, completed: !el.completed } : el
      );
    default:
      return action;
  }
};

const TodoApp = () => {
  const [todo, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

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
              style={{
                cursor: "pointer",
                color: el.completed ? "gray" : "black",
                textDecoration: el.completed ? "line-through" : "none",
              }}
              onClick={() => {
                dispatch({ type: "toggle", payload: el.text });
              }}
            >
              {el.text}
              <button
                onClick={() => {
                  dispatch({ type: "remove", payload: el.text });
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
