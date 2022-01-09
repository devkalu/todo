import React, { createContext } from "react";

//local imports
import createDataContext from "../createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_todo":
      return [...state, { title: `ToDo ${todo.length + 1}` }];
  }
};

const addTodo = (dispatch) => {
  return () => {
    dispatch({ type: "add_todo" });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addTodo },
  []
);
