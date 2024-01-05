import React, { useState, useContext } from "react";
import { TextInput, Button, View, StyleSheet } from "react-native";
import { TodoContext } from "./TodoContext";

const NewTodo = () => {
  const [title, setTitle] = useState("");
  const { todos, setTodos } = useContext(TodoContext);

  const addTodo = () => {
    setTodos([...todos, { title, id: todos.length + 1 }]);
    setTitle("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputText}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter Todo"
      />
      <Button title="Add Todo" onPress={addTodo} />
    </View>
  );
};

export default NewTodo;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  inputText: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
  },
});
