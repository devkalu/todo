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
      <Text style={styles.title}>{todo.title}</Text>
      <Text style={styles.content}>{todo.content}</Text>
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
  title: {
    fontSize: 25,
    fontWeight: "500",
    letterSpacing: 2,
    textDecorationLine: "underline",
    marginBottom: 10,
  },
  content: {
    fontSize: 18,
  },
});

export default DetailScreen;
