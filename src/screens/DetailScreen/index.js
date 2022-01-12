import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

import { Context } from "../../context/BlogContext";

const DetailScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const id = navigation.getParam("id");
  const todo = state.find((todo) => todo.id === id);

  return (
    <View style={styles.container}>
      <Text>{todo.title}</Text>
      <Text>{todo.content}</Text>
    </View>
  );
};

DetailScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={35} style={{ marginHorizontal: 20 }} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
});

export default DetailScreen;
