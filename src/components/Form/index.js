import React, { useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import Button from "../../components/Button";
import Input from "../../components/Input";

const Form = ({
  titlePlaceholder,
  contentPlaceholder,
  buttonTitle,
  onSubmit,
  titleVal,
  contentVal,
}) => {
  const [title, setTitle] = useState(titleVal);
  const [content, setContent] = useState(contentVal);

  return (
    <View style={styles.container}>
      <Input name={titlePlaceholder} val={title} onChangeVal={setTitle} />
      <Input name={contentPlaceholder} val={content} onChangeVal={setContent} />
      <View style={[styles.verticalSpace, { alignItems: "center" }]}>
        <Button
          title={buttonTitle}
          backgroundColor="blue"
          width={150}
          height={50}
          textColor="white"
          onSubmit={() => onSubmit(title, content)}
        />
      </View>
    </View>
  );
};

Form.defaultProps = {
  titlePlaceholder: "",
  contentPlaceholder: "",
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

export default Form;
