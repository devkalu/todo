import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";

import Form from "../../components/Form";
import { Context } from "../../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, updateTodo } = useContext(Context);
  const todo = state.find((todo) => todo.id === id);

  return (
    <Form
      buttonTitle="Submit"
      onSubmit={(title, content) =>
        updateTodo(id, title, content, () => navigation.pop())
      }
      titleVal={todo.title}
      contentVal={todo.content}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
