import React, { useState } from "react";
import "./App.css";
export default function Homepage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const numberPress = (value) => {
    setInput(input + value);
  };

  const numOperator = (operator) => {
    setInput(input + operator);
  };

  const equalPress = () => {
    try {
      setInput(eval(input));
    } catch (error) {
      setInput("Error");
    }
  };

  const clearPress = () => {
    setInput("");
    setResult(0);
  };

  const btnPress = (value) => {
    switch (value) {
      case "=":
        equalPress();
        break;
      case "C":
        clearPress();
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        numOperator(value);
        break;
      default:
        numberPress(value);
        break;
    }
  };

  return (
    <div className="Calc">
      <input type="text" value={input} />
      <div className="btn">
        <button onClick={() => btnPress("7")}>7</button>
        <button onClick={() => btnPress("8")}>8</button>
        <button onClick={() => btnPress("9")}>9</button>
        <button onClick={() => btnPress("/")}>/</button>
        <button onClick={() => btnPress("4")}>4</button>
        <button onClick={() => btnPress("5")}>5</button>
        <button onClick={() => btnPress("6")}>6</button>
        <button onClick={() => btnPress("*")}>*</button>
        <button onClick={() => btnPress("1")}>1</button>
        <button onClick={() => btnPress("2")}>2</button>
        <button onClick={() => btnPress("3")}>3</button>
        <button onClick={() => btnPress("-")}>-</button>
        <button onClick={() => btnPress("0")}>0</button>
        <button className="equal" onClick={() => btnPress("=")}>
          =
        </button>
        <button className="clear" onClick={() => btnPress("C")}>
          C
        </button>
        <button className="plus" onClick={() => btnPress("+")}>
          +
        </button>
      </div>
    </div>
  );
}
