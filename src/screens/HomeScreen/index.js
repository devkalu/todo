import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

//local import
import BlogContext from "../../context/BlogContext";

const HomeScreen = () => {
  const { todo, addTodo } = useContext(BlogContext);
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Add Todos" onPress={addTodo} />
      <FlatList
        data={todo}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
