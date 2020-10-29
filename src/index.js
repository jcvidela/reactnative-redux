import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { connect } from 'react-redux';
import { ListItem } from './components';
import { StatusBar } from "expo-status-bar";

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

const App = ({ data }) => {
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

const mapStateToProps = (state) => {
  return { data: state.todos };
};

export default connect(mapStateToProps)(App);
