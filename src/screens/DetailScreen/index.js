import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../../context/BlogContext";

const DetailScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const id = navigation.getParam("id");
  const todo = state.find((todo) => todo.id === id);

  return (
    <View style={styles.container}>
      <Text>{todo.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
});

export default DetailScreen;
