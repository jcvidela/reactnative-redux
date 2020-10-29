import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { connect } from 'react-redux';
import { complete, submit } from './reducers/todos';
import { ListItem, Input } from './components';
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

const App = ({ data, complete, submit }) => {
  const [inputText, setInputText] = React.useState('');
  
  return (
    <View style={styles.container}>
      <Input
        value={inputText}
        handleChangeText={(val) => setInputText(val)} 
        handleSubmit={() => {
          submit(inputText);
          setInputText('');
        }} 
      />
      <FlatList 
        style={styles.list}
        data={data}
        renderItem={({ item }) => (
          <ListItem 
            handlePress={() => complete(item.id)}
            desc={item.desc}
            completed={item.completed}
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

const mapDispatchToProps = (dispatch) => ({
  complete: (id) => dispatch(complete(id)),
  submit: (val) => dispatch(submit(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
