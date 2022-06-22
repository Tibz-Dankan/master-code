// ALL COMPONENTS THAT NEED TO CHANGE STATE INTERACT WITH reducer slice
// which contains reducers, actions and payloads
import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/counterReducer";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <div className="counter-wrapper">
        <h1>The Counter App In Redux</h1>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </Fragment>
  );
}
