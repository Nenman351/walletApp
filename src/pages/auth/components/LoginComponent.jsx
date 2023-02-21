import React, { useState } from "react";
import { PagingButton } from "../styles/authentication.styled";

function LoginComponent() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount((count === 0));
  };

  return (
    <div className="login">
      <h1 style={{ fontSize: "20px", fontWeight: "700", color: "blue" }}>
        count:{count}
      </h1>
      <PagingButton onClick={handleIncrement}>Increment</PagingButton>
      <br />
      <PagingButton onClick={handleDecrement}>Decrement</PagingButton>
      <br />
      <PagingButton type="reset" onClick={handleReset}>
        Reset
      </PagingButton>
    </div>
  );
}

export default LoginComponent;
