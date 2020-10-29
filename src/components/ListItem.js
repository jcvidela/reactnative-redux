import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    height: 60,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  text: {
    fontSize: 18,
  },
});

export default ({ desc, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
     <Text style={styles.text}>{desc}</Text>
    </TouchableOpacity>
  );
};
