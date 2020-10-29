import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ListItem } from './components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  list: {
    alignSelf: "stretch"
  }
});

export default () => {

  const data = [
    { id: '1', desc: 'todo 1', completed: false },
    { id: '2', desc: 'todo 2', completed: false },
    { id: '3', desc: 'todo 3', completed: false },
  ]
  return (
    <View style={styles.container}>
      <FlatList 
        style={styles.list}
        data={data}
        renderItem={({ item }) => (
          <ListItem 
            onPress={() => {}} 
            desc={item.desc} 
          />
        )}
        keyExtractor={x => x.id}
      />
      <StatusBar style="auto" />
    </View>
  );
};
