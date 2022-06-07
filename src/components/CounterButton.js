import { React, useState } from "react";

export default function CounterButton() {
  const [clickAmount, setClickAmount] = useState(0);
  const handleClick = () => {
    setClickAmount(clickAmount + 1);
  };
  return (
    <button className="CounterButton" onClick={handleClick}>
      {`You click me ${clickAmount} amount of times`}
    </button>
  );
}
