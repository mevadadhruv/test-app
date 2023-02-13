import React, { useState } from "react";

import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { todos } from "./model";
let name: string = "TaskY";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<todos[]>([]);
  const handleEvent = (e: React.FormEvent): void => {
    e.preventDefault();
    if (todos) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log("todos:- ", todos);

  return (
    <div className="App">
      <span className="heading">{name}</span>
      <InputField todo={todo} setTodo={setTodo} handleEvent={handleEvent} />

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
