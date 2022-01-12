import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";

import { Context } from "../../context/BlogContext";
import Form from "../../components/Form";

const CreateScreen = ({ navigation }) => {
  const { addTodo } = useContext(Context);

  navigation;

  return (
    <Form
      titlePlaceholder="Enter Title"
      contentPlaceholder="Enter Content"
      buttonTitle="Create Todo"
      onSubmit={(title, content) =>
        addTodo(title, content, () => navigation.navigate("Home"))
      }
      titleVal=""
      contentVal=""
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
