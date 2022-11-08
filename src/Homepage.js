import React from "react";
import AboutYou from "./AboutYou";
import Preview from "./Preview";

function Homepage({
  isEditButtonClicked,
  setIsEditButtonClicked,
  name,
  setName,
}) {
  return (
    <div className="homepage">
      {isEditButtonClicked ? (
        <AboutYou name={name} setName={setName} />
      ) : (
        <Preview name={name} />
      )}
      {/* <h1>Hello</h1> */}
    </div>
  );
}

export default Homepage;
