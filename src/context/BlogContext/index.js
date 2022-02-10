import React, { createContext } from "react";

//local imports
import createDataContext from "../createDataContext";
import jsonServer from "../../api/jsonServer";

const reducer = (state, action) => {
  switch (action.type) {
    case "get_todos":
      return action.payload;
    // case "add_todo":
    //   return [
    //     ...state,
    //     {
    //       id: Math.floor(Math.random() * 99999),
    //       title: action.payload.title,
    //       content: action.payload.content,
    //     },
    //   ];
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

const getTodos = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/todos");
    dispatch({ type: "get_todos", payload: response.data });
  };
};

const addTodo = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post("/todos", { title, content });
    //dispatch({ type: "add_todo", payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};

const deleteTodo = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/todos/${id}`);
    dispatch({ type: "delete_todo", payload: id });
  };
};
const updateTodo = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/todos/${id}`, { title, content });
    dispatch({ type: "update_todo", payload: { id, title, content } });

    if (callback) {
      callback();
    }
  };
};
export const { Context, Provider } = createDataContext(
  reducer,
  { addTodo, deleteTodo, updateTodo, getTodos },
  []
);
