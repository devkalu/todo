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
    case "delete_todo":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const addTodo = (dispatch) => {
  return (title, content) => {
    dispatch({ type: "add_todo", payload: { title, content } });
  };
};

const deleteTodo = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_todo", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addTodo, deleteTodo },
  []
);
