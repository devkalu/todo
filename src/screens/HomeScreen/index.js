import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

//local import
import { Context } from "../../context/BlogContext";

const HomeScreen = ({ navigation }) => {
  const { state, addTodo, deleteTodo, getTodos } = useContext(Context);

  useEffect(() => {
    getTodos();
    const listener = navigation.addListener("didFocus", () => {
      getTodos();
    });
    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Detail", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                  <Feather name="trash" style={styles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate("Create")}
        style={{ marginHorizontal: 20 }}
      >
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    paddingVertical: 15,
  },
  container: {
    marginHorizontal: 20,
  },
  icon: {
    fontSize: 30,
  },
  title: {
    fontSize: 20,
    width: "65%",
  },
});

export default HomeScreen;
