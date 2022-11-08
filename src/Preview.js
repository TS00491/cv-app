import React from "react";

export default function Preview({ name }) {
  return (
    <>
      <p>{name.firstName} </p>
      <p>{name.lastName}</p>
      {/* Look at how to keep old state whilst updating the new state at the same time as well */}
    </>
  );
}
