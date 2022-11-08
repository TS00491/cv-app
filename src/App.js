import React, { useState } from "react";
import "./App.css";

import Homepage from "./Homepage";
import Button from "./Button";

function App() {
  const [isEditButtonClicked, setIsEditButtonClicked] = useState();
  // const [fNameClicked, setFNameClicked] = useState("");
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div className="App">
      <header className="header">
        <h1 className="theTitle">CV Builder APP!</h1>
        <Button
          isEditButtonClicked={isEditButtonClicked}
          setIsEditButtonClicked={setIsEditButtonClicked}
        />
      </header>
      <Homepage
        isEditButtonClicked={isEditButtonClicked}
        setIsEditButtonClicked={setIsEditButtonClicked}
        name={name}
        setName={setName}
      />
    </div>
  );
}

export default App;
