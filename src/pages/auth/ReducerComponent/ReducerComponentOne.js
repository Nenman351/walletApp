import { useReducer } from "react";
import { PagingButton } from "../styles/authentication.styled";

const initialStateTwo = {
  firstCount: 0,
  secondCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "IncrementOne":
      return { ...state, firstCount: state.firstCount + action.value };
    case "IncrementTwo":
      return { ...state, secondCount: state.secondCount + action.value };
    case "DecrementOne":
      return { ...state, firstCount: state.firstCount - action.value };
    case "DecrementTwo":
      return { ...state, secondCount: state.secondCount - action.value };
    case "Reset":
      return initialStateTwo;
    default:
      return state;
  }
};

export function Components() {
  const [state, dispatch] = useReducer(reducer, initialStateTwo);

  return (
    <div className="login">
      <h1 style={{ fontSize: "20px", fontWeight: "700", color: "blue" }}>
        count1:{state.firstCount}
      </h1>
      <h1 style={{ fontSize: "20px", fontWeight: "700", color: "red" }}>
        count2:{state.secondCount}
      </h1>
      <PagingButton
        onClick={() => dispatch({ type: "IncrementOne", value: 1 })}
      >
        Increment1
      </PagingButton>
      <br />
      <PagingButton
        onClick={() => dispatch({ type: "IncrementTwo", value: 1 })}
      >
        Increment2
      </PagingButton>
      <br />
      <PagingButton
        onClick={() => dispatch({ type: "DecrementOne", value: 1 })}
      >
        Decrement1
      </PagingButton>
      <br />
      <PagingButton
        onClick={() => dispatch({ type: "DecrementTwo", value: 1 })}
      >
        Decrement2
      </PagingButton>
      <br />
      <PagingButton type="reset" onClick={() => dispatch({ type: "Reset" })}>
        Reset
      </PagingButton>
    </div>
  );
}
