import React, { useRef } from "react";

export default function UseReff() {
  const arr = [1, 2, 3, 4, 5];

  const reference = useRef(null);

  function handleClick() {
    reference.current.click();
  }

  return (
    <>
      <input type="file" ref={reference} hidden />
      <button onClick={handleClick}>Uplaod File</button>

      {arr.map((elem) => {
        return (
          <p>
            <span>{elem}</span>
            <span>hello</span>
          </p>
        );
      })}
    </>
  );
}
