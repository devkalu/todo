import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Input = ({
  name,
  val,
  onChangeVal,
  multiline = false,
  numberOfLines = 1,
  height = 50,
}) => {
  return (
    <View style={[styles.container, { height: height }]}>
      <TextInput
        placeholder={name}
        value={val}
        style={[styles.input]}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onChangeVal}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    fontSize: 18,
  },
  container: {
    borderBottomColor: "grey",
    borderBottomWidth: 2,
  },
});

export default Input;
