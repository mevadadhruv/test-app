import React from "react";
import { todos } from "../model";
import SingleTodos from "./SingleTodos";

interface Props {
  todos: todos[];
  setTodos: React.Dispatch<React.SetStateAction<todos[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodos
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
