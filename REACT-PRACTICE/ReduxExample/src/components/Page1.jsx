import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { greencolor, redcolor, orangecolor, bluecolor } from "./PageSlice";

function Page1() {
  const color = useSelector((state) => state.user.color);
  const dispatch = useDispatch();

  return (
    <div>
      <h1> Page1 </h1>
      <button type="button" onClick={() => dispatch(greencolor())}>
        Green
      </button>
      <button type="button" onClick={() => dispatch(redcolor())}>
        red
      </button>
      <button type="button" onClick={() => dispatch(orangecolor())}>
        orange
      </button>
      <button type="button" onClick={() => dispatch(bluecolor())}>
        blue
      </button>
      <br />
      <br />
      <div
        style={{
          backgroundColor: color,
          width: "700px",
          height: "100px",
        }}
      >
        Content
      </div>
    </div>
  );
}

export default Page1;
