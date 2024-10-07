import "./styles.css";
import React, { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Count />
    </div>
  );
}

function Count() {
  const [step, setStep] = useState(1);

  function MinusStep() {
    if (step > 1) setStep((step) => step - 1);
  }
  function PlusStep() {
    setStep((step) => step + 1);
  }

  const [count, setCount] = useState(0);
  function MinusCount() {
    setCount((count) => count - step);
  }
  function PlusCount() {
    setCount((count) => count + step);
  }
  const date = new Date(2023, 9, 7);
  const today = date.getDate();
  date.setDate(today + count);
  return (
    <>
      <div className="step">
        <button className="btn" onClick={MinusStep}>
          -
        </button>
        <p>&nbsp;Step: {step}&nbsp;</p>
        <button className="btn" onClick={PlusStep}>
          +
        </button>
      </div>

      <div className="count">
        <button className="btn" onClick={MinusCount}>
          -
        </button>
        <p>&nbsp;Count: {count}&nbsp;</p>
        <button className="btn" onClick={PlusCount}>
          +
        </button>
      </div>
      <p className="show">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was`}
        </span>
        {date.toDateString()}
      </p>
      <img src="7 october.jpg" />
    </>
  );
}
