import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Button = ({
  title,
  backgroundColor,
  width,
  height,
  textColor,
  action,
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor,
          width,
          height,
          borderRadius: height / 6,
        },
        styles.container,
      ]}
      onPress={action}
    >
      <Text
        style={{ color: textColor, fontSize: height / 3, fontWeight: "700" }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Button;
