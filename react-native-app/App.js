import React from "react";
import { View, StyleSheet } from "react-native";
import { TodoProvider } from "./components/TodoContext";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

export default function App() {
  return (
    <TodoProvider>
      <View style={styles.appContainer}>
        <NewTodo />
        <TodoList />
      </View>
    </TodoProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 20,
  },
});
