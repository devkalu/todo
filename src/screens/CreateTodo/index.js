import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { add } from "react-native-reanimated";

import Button from "../../components/Button";
import Input from "../../components/Input";
import { Context } from "../../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { addTodo } = useContext(Context);

  return (
    <View style={styles.container}>
      <Input name="Enter Title" val={title} onChangeVal={setTitle} />
      <Input name="Enter Content" val={content} onChangeVal={setContent} />
      <View style={[styles.verticalSpace, { alignItems: "center" }]}>
        <Button
          title="Create Todo"
          backgroundColor="blue"
          width={150}
          height={50}
          textColor="white"
          action={() => addTodo(title, content)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 50,
  },
  input: {
    borderBottomColor: "grey",
    borderBottomWidth: 2,
    height: 50,
    fontSize: 18,
  },
  verticalSpace: {
    marginTop: 50,
  },
});

export default CreateScreen;
