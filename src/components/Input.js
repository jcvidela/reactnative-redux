import React from "react";
import { TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#eee",
    height: 40,
    padding: 8,
    alignSelf: "stretch",
  },
});

export default ({ value, handleChangeText, handleSubmit }) => {
  return (
   <TextInput
    style={styles.input} 
    value={value}
    onChangeText={handleChangeText}
    onSubmitEditing={handleSubmit}
   />
  );
};
