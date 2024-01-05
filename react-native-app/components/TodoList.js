import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TodoContext } from "./TodoContext";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <View style={styles.listContainer}>
      {todos.map((todo) => (
        <Text style={styles.listText} key={todo.id}>
          {todo.title}
        </Text>
      ))}
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 20,
  },
  listText: {
    fontSize: 20,
  },
});
