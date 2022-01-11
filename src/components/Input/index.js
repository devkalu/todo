import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Input = ({ name, val, onChangeVal }) => {
  return (
    <View>
      <TextInput
        placeholder={name}
        value={val}
        style={[styles.input]}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onChangeVal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "grey",
    borderBottomWidth: 2,
    height: 50,
    fontSize: 18,
  },
});

export default Input;
