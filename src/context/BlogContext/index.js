import React, { createContext } from "react";

//local imports
import createDataContext from "../createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_todo":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "update_todo":
      return state.map((todo) => {
        return todo.id === action.payload.id ? action.payload : todo;
      });
    case "delete_todo":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const addTodo = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_todo", payload: { title, content } });
    callback();
  };
};

const deleteTodo = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_todo", payload: id });
  };
};
const updateTodo = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "update_todo", payload: { id, title, content } });
    callback();
  };
};
export const { Context, Provider } = createDataContext(
  reducer,
  { addTodo, deleteTodo, updateTodo },
  [{ title: "Test Post", content: "Test Content", id: 1 }]
);
