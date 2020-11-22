import React, { Component, useState } from "react";
import "../styles/App.css";

const App = (props) => {
  console.log(props);
  const [index, setIndex] = useState(0);
  const reset = () => {
    setIndex(0);
  };

  const prev = () => {
    setIndex(index - 1);
  };

  const next = () => {
    setIndex(index + 1);
  };

  return (
    <>
      <button
        disabled={index === 0}
        data-testid="button-restart"
        onClick={reset}
      >
        restart
      </button>
      <div className={{ display: "flex" }}>
        <button disabled={!index > 0} onClick={prev} data-testid="button-prev">
          Prev
        </button>
        <div>
          <h1 data-testid="title">{props(index).title}</h1>
          <p data-testid="text">{props(index).text}</p>
        </div>
        <button
          disabled={!index + 1 < props.length}
          data-testid="button-next"
          onClick={next}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default App;
