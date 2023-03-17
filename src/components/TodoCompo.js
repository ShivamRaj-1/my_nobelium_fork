import React, { useState } from "react";
import "./todoCompo.css";

export default function TodoCompo() {
  const [text, setText] = useState("");
  const [textList, setTextList] = useState([]);
  const [count, setCount] = useState(0);

  function handleonchange(event) {
    // console.log(text)
    setText(event.target.value);
  }

  function handleAdd() {
    if (text === "") {
      alert("Input field is empty");
    } else {
      const newtext = [...textList, { task: text, completed: false }];
      setTextList(newtext);
      setText("");
      setCount(count + 1);
    }
    console.log(textList);
  }

  function handleDelete(index) {
    // console.log(index);

    const newTextList = [...textList];

    if (newTextList[index].completed === false) {
      setCount(count - 1);
    }

    newTextList.splice(index, 1);
    setTextList(newTextList);
  }

  function handleComplete(index) {
    const newTextList = [...textList];

    if (newTextList[index].completed === false) {
      newTextList[index].completed = true;
      setTextList(newTextList);
      setCount(count - 1);
    }

    // console.log(textList);
  }


  return (
    <div className="container">
      <div className="main-box">
        <h1>Pending task ({count})</h1>

        {textList.map((elem, index) => {
          return (
            <div key={index} className="list-div">
              <div className="list-row">

                <button onClick={() => handleComplete(index)} className="symbol-btn done">&#10004;
                </button>

                {elem.completed === true ? <strike>{elem.task}</strike> : elem.task}

              </div>
              <div>
                <button onClick={() => handleDelete(index)} className="symbol-btn close"> &#10008;
                </button>
              </div>
            </div>
          );
        })}

        <div className="input-div">
          <input type="text" value={text} onChange={handleonchange} placeholder="Enter your todo task" />
          <button onClick={handleAdd} className="add">Add</button>
        </div>
      </div>
    </div>
  );
}
