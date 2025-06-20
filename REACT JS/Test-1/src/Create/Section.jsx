import React from "react";

const Section = ({ title }) => {

  return (
    <div style={{ overflow: "auto", flex: 1, padding: "1rem" }}>
      <h1 className="mb-3">About {title}</h1>
      <p>Information for {title} goes here.</p>
    </div>
  );
};

export default Section;
