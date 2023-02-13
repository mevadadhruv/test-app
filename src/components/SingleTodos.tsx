import React from "react";
import { todos } from "../model";
import "./style.css";

import { AiFillDelete, AiFillEdit, AiOutlineCheck } from "react-icons/ai";
import TodoList from "./TodoList";
type Props = {
  todo: todos;
  todos: todos[];
  setTodos: React.Dispatch<React.SetStateAction<todos[]>>;
};
const SingleTodos = ({ todo, todos, setTodos }: Props) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  return (
    <form className="todos__single">
      {todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <AiOutlineCheck />
        </span>
      </div>
    </form>
  );
};

export default SingleTodos;
