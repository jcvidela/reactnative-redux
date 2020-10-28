import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const reducers = {
  todos: (state = [], action) => state,
};

const MyApp = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const store = createStore(
  combineReducers({
    ...reducers,
  })
);

export default () => {
  return (
    <Provider store={store}>
      <MyApp />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
