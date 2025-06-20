import React from "react";
import { useSelector } from "react-redux";
function Page3() {
  const color = useSelector((state) => state.user.color);
  return (
    <div>
      <h1>PAGE3</h1>
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

export default Page3;
