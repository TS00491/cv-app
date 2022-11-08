import React from "react";

function Button({ isEditButtonClicked, setIsEditButtonClicked }) {
  //   function handleClick() {
  //     if (isEditButtonClicked) {
  //       setIsEditButtonClicked(false);
  //       console.log(isEditButtonClicked);
  //     } else {
  //       setIsEditButtonClicked(true);
  //       console.log(isEditButtonClicked);
  //     }
  //   }

  function editClick() {
    setIsEditButtonClicked(true);
    console.log(isEditButtonClicked);
  }
  function previewClick() {
    setIsEditButtonClicked(false);
    console.log(isEditButtonClicked);
  }
  return (
    <div className="editOrView">
      <button onClick={editClick} className="btn">
        Working Mode
      </button>
      <button onClick={previewClick} className="btn">
        Preview Mode
      </button>
    </div>
  );
}
export default Button;

//setState delay in updating, gotta figure that out later, but that's low priority. (https://stackoverflow.com/questions/71632997/how-to-get-around-react-setstate-delay)
