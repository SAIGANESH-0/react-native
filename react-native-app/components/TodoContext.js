import React, { createContext, useState } from "react";
import { StyleSheet } from "react-native";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

const styles = StyleSheet.create({
  provider: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
