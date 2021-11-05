import React, { useRef } from 'react';
import "./inputField.css";

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: props) => {

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="input" 
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
        }}
    >
      <input 
        ref={inputRef}
        type="input" 
        placeholder="Entrez une tache" 
        className="input_box" 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input_submit" type="submit" >
        Valider
      </button>
    </form>
  );
};

export default InputField;