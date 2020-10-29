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
  striked: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  }
});

export default ({ desc, completed, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
     {
       completed ?
       <Text style={[styles.text, styles.striked]}>{desc}</Text> :
       <Text style={styles.text}>{desc}</Text>
     }
    </TouchableOpacity>
  );
};
