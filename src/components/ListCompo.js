import React, { useState } from "react";

export default function ListCompo() {

  const [arr, setArr] = useState([]);
  const [todo, setTodo] = useState("");

  function handleClick() {
    setArr([...arr, todo]);
    setTodo("");
  }

  function capture(e) {
    setTodo(e.target.value);
  }

  return (
    <div className="listCompo">
      <h2>Challenge 1:</h2>

      <input value={todo} type="text" onChange={capture} />

      <button onClick={handleClick}>Add</button>

      {arr.map((item) => {
        return <p>{item}</p>;
      })}
      
    </div>
  );
}
