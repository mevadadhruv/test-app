import React, { useRef } from "react";

import "./style.css";
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleEvent: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({ todo, setTodo, handleEvent }) => {
  const inputRef = useRef<HTMLFormElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleEvent(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="input"
        placeholder="Enter a Task"
        className="input__box"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className="input_submit" type="submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
