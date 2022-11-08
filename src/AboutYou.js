import React, { useState } from "react";

// import Name from "./Name";
import WorkExp from "./Work Experience Component/WorkExp";
export default function AboutYou({ name, setName }) {
  const [fNameClicked, setFNameClicked] = useState();
  const [lNameClicked, setLNameClicked] = useState();
  const [workExpClicked, setWorkExpClicked] = useState();

  const editFName = () => {
    fNameClicked ? setFNameClicked(false) : setFNameClicked(true);

    // setFNameClicked(true);
  };

  const editLName = () => {
    lNameClicked ? setLNameClicked(false) : setLNameClicked(true);

    // setFNameClicked(true);
  };

  const workExpValue = () => {
    workExpClicked ? setWorkExpClicked(false) : setWorkExpClicked(true);
  };

  return (
    <div className="about-you">
      {/* First Name */}
      <h1 onClick={editFName} className="fName">
        First Name
      </h1>
      {fNameClicked ? (
        <input
          placeholder="Your First Name"
          onChange={(e) =>
            setName({ ...name.lastName, firstName: e.target.value })
          }
        ></input>
      ) : null}

      {/* Last Name */}
      <h1 onClick={editLName} className="lName">
        Last Name
      </h1>
      {lNameClicked ? (
        <input
          placeholder="Your Last Name"
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        ></input>
      ) : null}

      <p className="current-role">Current Role</p>
      <h2 className="work-experience">Work Experience</h2>
      {/* Add an onClick, it opens up an input form with questions about the company, and then an update data button at the bottom*/}
      <button onClick={workExpValue} className="work-experience-button">
        + Work Experience
      </button>
      {workExpClicked ? <WorkExp /> : null}
    </div>
  );
}
